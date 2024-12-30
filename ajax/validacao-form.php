<?php

	include('../config.php');

	file_put_contents('log.txt', "validacao-form.php chamado em " . date('Y-m-d H:i:s') . "\n", FILE_APPEND);

	// Define o cabeçalho para a resposta ser no formato JSON
	header('Content-Type: application/json');
	ob_clean(); // Limpa qualquer saída anterior

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	// Obtém os parâmetros enviados pelo AJAX
	$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
	$senha = filter_input(INPUT_POST, 'senha', FILTER_SANITIZE_STRING);

	$token = filter_input(INPUT_POST, 'token', FILTER_SANITIZE_STRING);

	$email_recuperar = filter_input(INPUT_POST, 'email_recuperar', FILTER_SANITIZE_STRING);

	$codigo_recuperacao = filter_input(INPUT_POST, 'codigo_recuperacao', FILTER_SANITIZE_STRING);

	error_log("Dados recebidos: " . print_r($_POST, true));


	// Obtém o endereço_id enviado via POST
	//$endereco_id = filter_input(INPUT_POST, 'endereco_id', FILTER_SANITIZE_NUMBER_INT);

	if ($telefone && !$senha) {

		$telefone = str_replace('+', '', $telefone);
		// Remover todos os caracteres não numéricos
		$telefone = preg_replace('/\D/', '', $telefone);

		if (!$telefone) {
		    echo json_encode(['cadastroEncontrado' => false, 'mensagem' => 'Número de telefone inválido.']);
		    exit;
		}

		// Define as configurações padrão
		$tabela = 'tb_clientes'; // Altere esta tabela conforme necessário
		$campoTelefone = 'telefone'; // Nome do campo na tabela
		$mensagemSucesso = 'Cadastro encontrado com sucesso.';
		$mensagemErro = 'Cadastro não encontrado para o número fornecido.';


		if (!empty($_POST['tabela'])) {
		    $tabela = preg_replace('/[^a-zA-Z0-9_]/', '', $_POST['tabela']); // Sanitiza o nome da tabela
		}
		if (!empty($_POST['campoTelefone'])) {
		    $campoTelefone = preg_replace('/[^a-zA-Z0-9_]/', '', $_POST['campoTelefone']); // Sanitiza o nome do campo
		}

		try {
		    $pdo = Mysql::conectar();

		    // Consulta genérica baseada na tabela e campo fornecidos
		    //$sql = "SELECT * FROM {$tabela} WHERE {$campoTelefone}";
		    $sql = "SELECT * FROM tb_clientes WHERE telefone = ?";
		    $stmt = $pdo->prepare($sql);

		    // Adiciona wildcards para o LIKE
	    	$stmt->execute([$telefone]);
		    $registro = $stmt->fetch(PDO::FETCH_ASSOC);

		    if ($registro) {

		        $resposta = [
	                'cadastroEncontrado' => true,
	                'mensagem' => 'Cadastro encontrado com sucesso.',
	                'dados' => $registro, // Dados do cliente
	                'endereco' => null   // Inicialmente nulo
	            ];

	            // Se o cliente tiver um endereco_id, consulta os dados do endereço
	            if (!empty($registro['endereco_id'])) {
	                $sqlEndereco = "SELECT * FROM tb_endereco WHERE id = ?";
	                $stmtEndereco = $pdo->prepare($sqlEndereco);
	                $stmtEndereco->execute([$registro['endereco_id']]);

	                $endereco = $stmtEndereco->fetch(PDO::FETCH_ASSOC);

	                if ($endereco) {
	                    $resposta['endereco'] = $endereco;
	                } else {
	                    $resposta['mensagem'] .= ' Endereço não encontrado.';
	                }
	            }

	            echo json_encode($resposta);

	            exit;
	            
		    } else {
		        echo json_encode([
		            'cadastroEncontrado' => false,
		            'mensagem' => $mensagemErro
		        ]);
		        exit;
		    }
		} catch (Exception $e) {
		    echo json_encode([
		        'cadastroEncontrado' => false,
		        'mensagem' => 'Erro ao consultar o banco de dados. Tente novamente mais tarde.'
		    ]);
		    exit;
		}

		

	} elseif ($telefone && $senha) { // NOVA LÓGICA PARA VALIDAÇÃO DE SENHA
	    $telefone = str_replace('+', '', $telefone);
	    $telefone = preg_replace('/\D/', '', $telefone);

	    if (!$telefone) {
	        echo json_encode(['loginValido' => false, 'mensagem' => 'Número de telefone inválido.']);
	        exit;
	    }

	    try {
	        $pdo = Mysql::conectar();
	        $sql = "SELECT * FROM tb_clientes WHERE telefone = ?";
	        $stmt = $pdo->prepare($sql);
	        $stmt->execute([$telefone]);
	        $registro = $stmt->fetch(PDO::FETCH_ASSOC);

	        if ($registro) {
	            if (password_verify($senha, $registro['senha_login'])) {
	            	$user_id = $registro['id'];
                	$ip_origem = $_SERVER['REMOTE_ADDR'];

	            	// Verifica se já existe um token válido para este usuário e IP
                	$sqlTokenExistente = "SELECT token, expira_em FROM tb_tokens WHERE user_id = ? AND ip_origem = ? AND expira_em > NOW()";
                	$stmtTokenExistente = $pdo->prepare($sqlTokenExistente);
                	$stmtTokenExistente->execute([$user_id, $ip_origem]);
                	$tokenExistente = $stmtTokenExistente->fetch(PDO::FETCH_ASSOC);

                    if ($tokenExistente) {
	                    // Token existente encontrado e VÁLIDO
	                    $token = $tokenExistente['token'];
	                    $expiracao = $tokenExistente['expira_em']; // Mantem a expiração atual, não altera.
	                    // Atualiza a data de expiração do token existente (opcional, dependendo da sua necessidade)
	                    $novaExpiracao = date('Y-m-d H:i:s', strtotime('+1 year'));
	                    $sqlUpdateExpiracao = "UPDATE tb_tokens SET expira_em = ? WHERE token = ?";
	                    $stmtUpdateExpiracao = $pdo->prepare($sqlUpdateExpiracao);
	                    $stmtUpdateExpiracao->execute([$novaExpiracao, $token]);
	                } else {
	                    // Nenhum token existente ou expirado, gera um novo
	                    $token = bin2hex(random_bytes(32));
	                    $tipo = 'login';
	                    $expiracao = date('Y-m-d H:i:s', strtotime('+1 year'));

	                    $sqlToken = "INSERT INTO tb_tokens (user_id, token, tipo, expira_em, ip_origem) VALUES (?, ?, ?, ?, ?)";
	                    $stmtToken = $pdo->prepare($sqlToken);
	                    $stmtToken->execute([$user_id, $token, $tipo, $expiracao, $ip_origem]);
	                }

                     // Remove a senha antes de enviar para o frontend por segurança
                    unset($registro['senha_login']);

	                echo json_encode([
	                    'loginValido' => true,
	                    'mensagem' => 'Login efetuado com sucesso.',
	                    'dados' => $registro,
	                    'token' => $token
	                ]);
	                exit;
	            } else {
	                echo json_encode([
	                    'loginValido' => false,
	                    'mensagem' => 'Senha inválida.'
	                ]);
	                exit;
	            }
	        } else {
	            echo json_encode([
	                'loginValido' => false,
	                'mensagem' => 'Número de telefone não encontrado.'
	            ]);
	            exit;
	        }
	    } catch (Exception $e) {
	        echo json_encode([
	            'loginValido' => false,
	            'mensagem' => 'Erro ao consultar o banco de dados. Tente novamente mais tarde.'
	        ]);
	        exit;
	    }
	} elseif ($token) {

		try {
	        $pdo = Mysql::conectar();

	        // Consulta o token no banco de dados, verificando se ainda é válido.
	        $sql = "SELECT c.* FROM tb_tokens t INNER JOIN tb_clientes c ON t.user_id = c.id WHERE t.token = ? AND t.expira_em > NOW()";
	        $stmt = $pdo->prepare($sql);
	        $stmt->execute([$token]);
	        $registro = $stmt->fetch(PDO::FETCH_ASSOC);

	        if ($registro) {
	            unset($registro['senha_login']); //Removendo a senha por segurança
	            echo json_encode(['tokenValido' => true, 'dados' => $registro]);
	            exit;
	        } else {
	            echo json_encode(['tokenValido' => false]);
	            exit;
	        }
	        
	    } catch (Exception $e) {
	        echo json_encode(['tokenValido' => false, 'erro' => $e->getMessage()]);
	        exit;
	    }

	} elseif ($email_recuperar){

	try{

		$pdo = Mysql::conectar();

        // Verifica se o email existe no banco de dados
        $sql = "SELECT * FROM tb_clientes WHERE email = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$email_recuperar]);
        $registro = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($registro) {

        	$sqlCodigo = "SELECT * FROM tb_codigos_recuperacao WHERE email = ?";
			$stmtCodigo = $pdo->prepare($sqlCodigo);
			$stmtCodigo->execute([$email_recuperar]);
			$registroCodigo = $stmtCodigo->fetch(PDO::FETCH_ASSOC);

			if ($registroCodigo) {
			    // Se já existir um código, verifique se ele ainda está válido
			    if (strtotime($registroCodigo['expira_em']) > time()) {
			        // Código ainda válido, não gera novo
			        echo json_encode([
			            'emailEncontrado' => false,
			            'mensagem' => 'Você já solicitou um código de recuperação recentemente. Tente novamente em 15 minutos.'
			        ]);
			        exit;
			    } else {

		            // Gera um código de recuperação e salva no banco
		            $codigo = rand(100000, 999999); // Código de 6 dígitos
		            $expiracao = date('Y-m-d H:i:s', strtotime('+15 minutes')); // Expira em 15 minutos

		            $sqlUpdate = "UPDATE tb_codigos_recuperacao SET codigo = ?, expira_em = ? WHERE email = ?";
		            $stmtUpdate = $pdo->prepare($sqlUpdate);
		        	$stmtUpdate->execute([$codigo, $expiracao, $email_recuperar]);

		        	// Enviar o código por e-mail
		            require_once 'enviar_email.php';
		            if (enviarCodigoRecuperacao($email_recuperar, $codigo)) {
		                echo json_encode([
		                	'emailEncontrado' => true, 
		                	'mensagem' => 'O código foi enviado ao seu e-mail.'
		                ]);
		                exit;
		            } else {
		                echo json_encode([
		                	'emailEncontrado' => false, 
		                	'mensagem' => 'Erro ao enviar o e-mail. Tente novamente.'
		                ]);
		                exit;
		            }
		        }

            
	        } else {
			    // Se não existir, insira um novo código
			    $codigo = rand(100000, 999999); // Gera um código de 6 dígitos
			    $expiracao = date('Y-m-d H:i:s', strtotime('+15 minutes')); // Expira em 15 minutos

			    $sqlInsert = "INSERT INTO tb_codigos_recuperacao (email, codigo, expira_em) VALUES (?, ?, ?)";
			    $stmtInsert = $pdo->prepare($sqlInsert);
			    $stmtInsert->execute([$email_recuperar, $codigo, $expiracao]);

			    // Enviar o código por e-mail
	            require_once 'enviar_email.php';
	            if (enviarCodigoRecuperacao($email_recuperar, $codigo)) {
	                echo json_encode([
	                	'emailEncontrado' => true, 
	                	'mensagem' => 'O código foi enviado ao seu e-mail.'
	                ]);
	                exit;
	            } else {
	                echo json_encode([
	                	'emailEncontrado' => false, 
	                	'mensagem' => 'Erro ao enviar o e-mail. Tente novamente.'
	                ]);
	                exit;
	            }

			} 

		}else {
            echo json_encode([
                'emailEncontrado' => false,
                'mensagem' => 'Email não encontrado no sistema.'
            ]);
            exit;
        }
     } catch (Exception $e) {
	    error_log("Erro no script validacao-form.php: " . $e->getMessage());
	    echo json_encode([
	        'emailEncontrado' => false,
	        'mensagem' => 'Erro interno no servidor. Por favor, tente novamente mais tarde.'
	    ]);
	    exit;
	} finally {
	    // Verifica e registra qualquer saída inesperada
	    $output = ob_get_clean();
	    if (!empty($output)) {
	        error_log("Saída inesperada em validacao-form.php: $output");
	    }
	    
	}

	exit;
		

	} elseif ($codigo_recuperacao) {

		//date_default_timezone_set('America/Sao_Paulo');

		$hora_atual = date('Y-m-d H:i:s');

		$pdo = Mysql::conectar();

        // Valida o código de recuperação
        $sql = "SELECT * FROM tb_codigos_recuperacao WHERE codigo = ? AND expira_em > ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$codigo_recuperacao, $hora_atual]);

        $registro = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($registro) {
            echo json_encode([
                'codigoValido' => true,
                'mensagem' => 'Código de recuperação válido.',
                'email' => $registro['email']
            ]);
            exit;
        } else {
            echo json_encode([
                'codigoValido' => false,
                'mensagem' => 'Código de recuperação inválido ou expirado.'
            ]);
            exit;
        }

    } elseif (isset($_POST['nova_senha']) && isset($_POST['email_nova_senha'])) {

    	$nova_senha = filter_input(INPUT_POST, 'nova_senha', FILTER_SANITIZE_STRING);
        // Atualiza a senha do usuário
        $email = filter_input(INPUT_POST, 'email_nova_senha', FILTER_SANITIZE_EMAIL);
        
        if (!$nova_senha || !$email) {
	        echo json_encode([
	            'error' => 'parametros inválidos.'
	        ]);
	        exit;
	    }

	    try{

	    	$pdo = Mysql::conectar();

	    

        	$hashSenha = password_hash($nova_senha, PASSWORD_DEFAULT);

        	$sql = "UPDATE tb_clientes SET senha_login = ? WHERE email = ?";
        	$stmt = $pdo->prepare($sql);
	        if ($stmt->execute([$hashSenha, $email])) {
	            // Remove os códigos de recuperação após a redefinição da senha
	            $sqlRemoveCodigos = "DELETE FROM tb_codigos_recuperacao WHERE email = ?";
	            $stmtRemove = $pdo->prepare($sqlRemoveCodigos);
	            $stmtRemove->execute([$email]);

	            echo json_encode([
	                'senhaAtualizada' => true,
	                'mensagem' => 'Senha atualizada com sucesso.'
	            ]);
	            exit;
	        } else {
	            echo json_encode([
	                'senhaAtualizada' => false,
	                'mensagem' => 'Erro ao atualizar a senha. Tente novamente.'
	            ]);
	            exit;
	        }

	     } catch (Exception $e) {
        	error_log("Erro na redefinição de senha: " . $e->getMessage());
	        echo json_encode([
	            'senhaAtualizada' => false,
	            'mensagem' => 'Erro no servidor. Por favor, tente novamente.'
	        ]);
	        exit;
	      }

    } elseif (isset($_POST['formulario']) && $_POST['formulario'] === 'cadastro_cliente'){


    	// Receber os dados do formulário
    	$telefone = filter_input(INPUT_POST, 'telefone_cadastro', FILTER_SANITIZE_STRING);

    	$telefone = str_replace('+', '', $telefone);
		// Remover todos os caracteres não numéricos
		$telefone = preg_replace('/\D/', '', $telefone);

        $senha = filter_input(INPUT_POST, 'senha_cadastro', FILTER_SANITIZE_STRING); // Sanitiza a senha
		$senhaConfirmar = filter_input(INPUT_POST, 'senha_cadastro_confirmar', FILTER_SANITIZE_STRING); // Sanitiza a confirmação da senha
		$nome = filter_input(INPUT_POST, 'nome_cadastro', FILTER_SANITIZE_STRING); // Sanitiza o nome
		$email = filter_input(INPUT_POST, 'email_cadastro', FILTER_VALIDATE_EMAIL); // Valida e-mail
		$cep = filter_input(INPUT_POST, 'cep_cadastro', FILTER_SANITIZE_STRING); // Sanitiza o CEP
		$cidade = filter_input(INPUT_POST, 'cidade_cadastro', FILTER_SANITIZE_STRING); // Sanitiza a cidade
		$bairro = filter_input(INPUT_POST, 'bairro_cadastro', FILTER_SANITIZE_STRING); // Sanitiza o bairro
		$rua = filter_input(INPUT_POST, 'rua_cadastro', FILTER_SANITIZE_STRING); // Sanitiza a rua
		$nmrCasa = filter_input(INPUT_POST, 'nmr_casa_cadastro', FILTER_VALIDATE_INT); // Valida número como inteiro

		// Verifica se o e-mail é válido
        if (!$email) {
            echo json_encode(['sucesso' => false, 'mensagem' => 'E-mail inválido.']);
            exit;
        }

        // Verificar se a senha e a confirmação são iguais
        if ($senha !== $senhaConfirmar) {
            echo json_encode(['sucesso' => false, 'mensagem' => 'As senhas não conferem.']);
            exit;
        }

        $nomeArquivo = ""; //Sem foto enviada padrão
        // Verifica a foto enviada
        if (!empty($_FILES['foto_cadastro']['name'])) {
            $foto = $_FILES['foto_cadastro'];

            // Validação do tipo de arquivo
            $extensoesPermitidas = ['jpg', 'jpeg', 'png'];
            $extensao = pathinfo($foto['name'], PATHINFO_EXTENSION);

            if (!in_array(strtolower($extensao), $extensoesPermitidas)) {
                echo json_encode(['success' => false, 'mensagem' => 'Formato de foto inválido. Apenas JPG, JPEG e PNG são aceitos.']);
                exit;
            }

            // Movendo o arquivo para a pasta desejada
            $nomeArquivo = uniqid('foto_', true) . '.' . $extensao;
            $caminhoDestino = BASE_DIR_PAINEL . '/uploads/' . $nomeArquivo;

	            if (!move_uploaded_file($foto['tmp_name'], $caminhoDestino)) {
	                echo json_encode(['success' => false, 'mensagem' => 'Erro ao salvar a foto. Tente novamente.']);
	                exit;
	            }
        } 


	    try {
		    // Conexão com o banco de dados
		    $pdo = Mysql::conectar();

		    // Verificar se o e-mail já existe no banco de dados
		    $stmtEmail = $pdo->prepare("SELECT COUNT(*) FROM tb_clientes WHERE email = ?");
		    $stmtEmail->execute([$email]);
		    $emailExiste = $stmtEmail->fetchColumn();

		    if ($emailExiste) {
		        echo json_encode([
		            'sucesso' => false,
		            'mensagem' => 'Já existe um cadastro com esse e-mail.'
		        ]);
		        exit;
		    }

		    // Verificar se o endereço já existe na tabela
			$stmtEnderecoCheck = $pdo->prepare("SELECT id FROM tb_endereco WHERE cep = ? AND cidade = ? AND bairro = ? AND rua = ? AND numero_casa = ?");
			$stmtEnderecoCheck->execute([$cep, $cidade, $bairro, $rua, $nmrCasa]);
			$enderecoExistente = $stmtEnderecoCheck->fetchColumn();

			if ($enderecoExistente) {
			    $enderecoId = $enderecoExistente; // Reutilizar o ID do endereço existente
			} else {
			    // Inserir dados na tabela tb_endereco
			    $sqlEndereco = "INSERT INTO tb_endereco (cep, cidade, bairro, rua, numero_casa) VALUES (?, ?, ?, ?, ?)";
			    $stmtEndereco = $pdo->prepare($sqlEndereco);
			    $stmtEndereco->execute([$cep, $cidade, $bairro, $rua, $nmrCasa]);

			    // Obter o id do último endereço inserido
			    $enderecoId = $pdo->lastInsertId();
			}

		    // Inserir dados na tabela tb_clientes
		    $senhaHash = password_hash($senha, PASSWORD_DEFAULT); // Armazenar a senha de forma segura
		    $sqlCliente = "INSERT INTO tb_clientes (endereco_id, nome, senha_login, email, foto_perfil_cliente, telefone, data_cadastro, atendido, add_cliente_site) 
		                   VALUES (?, ?, ?, ?, ?, ?, NOW(), '0', '1')";
		    $stmtCliente = $pdo->prepare($sqlCliente);
		    $stmtCliente->execute([
		    	$enderecoId,
		    	$nome, 
		    	$senhaHash, 
		    	$email,
		    	$nomeArquivo, // Sempre passamos uma string, mesmo que seja vazia
		    	$telefone
		    ]);

		    // Resposta de sucesso
		    echo json_encode([
		        'sucesso' => true,
		        'mensagem' => 'Cadastro realizado com sucesso!'

		    ]);
		    exit();

		} catch (PDOException $e) {
		    // Caso ocorra um erro na conexão ou nas consultas
		    // Excluir a foto caso tenha sido enviada
	        if ($nomeArquivo && file_exists(BASE_DIR_PAINEL . '/uploads/' . $nomeArquivo)) {
	            unlink(BASE_DIR_PAINEL . '/uploads/' . $nomeArquivo);
	        }
		    error_log("Erro no banco de dados: " . $e->getMessage());
		    echo json_encode([
		        'sucesso' => false,
		        'mensagem' => 'Erro ao conectar ou processar os dados no banco de dados.' . $e->getMessage()
		    ]);
		    exit;
		}
        // Processar os outros dados do formulário (salvar no banco de dados, etc.)

        // Debug fora das variáveis
		


        // Exemplo de retorno de sucesso
        echo json_encode(['success' => true, 'mensagem' => 'Cadastro realizado com sucesso!']);
        exit;

    } else {
	    echo json_encode(['error' => 'parametros inválidos.']);
	    exit;
	}

	

	

?>