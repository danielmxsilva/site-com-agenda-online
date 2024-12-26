<?php

	include('../config.php');

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
            // Gera um código de recuperação e salva no banco
            $codigo = rand(100000, 999999); // Código de 6 dígitos
            $expiracao = date('Y-m-d H:i:s', strtotime('+15 minutes')); // Expira em 15 minutos

            $sqlCodigo = "INSERT INTO tb_codigos_recuperacao (email, codigo, expira_em) VALUES (?, ?, ?)
                          ON DUPLICATE KEY UPDATE codigo = VALUES(codigo), expira_em = VALUES(expira_em)";
            $stmtCodigo = $pdo->prepare($sqlCodigo);
            $stmtCodigo->execute([$email_recuperar, $codigo, $expiracao]);

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
        } else {
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

		$pdo = Mysql::conectar();

        // Valida o código de recuperação
        $sql = "SELECT * FROM tb_codigos_recuperacao WHERE codigo = ? AND expira_em > NOW()";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$codigo_recuperacao]);
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

    } elseif ($nova_senha) {

    	$pdo = Mysql::conectar();

        // Atualiza a senha do usuário
        $email = filter_input(INPUT_POST, 'email_nova_senha', FILTER_SANITIZE_EMAIL);
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

    } else {
	    echo json_encode(['error' => 'parametros inválidos.']);
	    exit;
	}

	

	

?>