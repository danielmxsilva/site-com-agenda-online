<?php

	include('../config.php');

	// Define o cabeçalho para a resposta ser no formato JSON
	header('Content-Type: application/json');

	// Obtém os parâmetros enviados pelo AJAX
	$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
	$senha = filter_input(INPUT_POST, 'senha', FILTER_SANITIZE_STRING);

	$token = filter_input(INPUT_POST, 'token', FILTER_SANITIZE_STRING);

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
	            
		    } else {
		        echo json_encode([
		            'cadastroEncontrado' => false,
		            'mensagem' => $mensagemErro
		        ]);
		    }
		} catch (Exception $e) {
		    echo json_encode([
		        'cadastroEncontrado' => false,
		        'mensagem' => 'Erro ao consultar o banco de dados. Tente novamente mais tarde.'
		    ]);
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
	            } else {
	                echo json_encode([
	                    'loginValido' => false,
	                    'mensagem' => 'Senha inválida.'
	                ]);
	            }
	        } else {
	            echo json_encode([
	                'loginValido' => false,
	                'mensagem' => 'Número de telefone não encontrado.'
	            ]);
	        }
	    } catch (Exception $e) {
	        echo json_encode([
	            'loginValido' => false,
	            'mensagem' => 'Erro ao consultar o banco de dados. Tente novamente mais tarde.'
	        ]);
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
	        } else {
	            echo json_encode(['tokenValido' => false]);
	        }
	        
	    } catch (Exception $e) {
	        echo json_encode(['tokenValido' => false, 'erro' => $e->getMessage()]);
	    }

	} else {
	    echo json_encode(['error' => 'parametros inválidos.']);
	}

	

	

?>