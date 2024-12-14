<?php

	include('../config.php');

	// Define o cabeçalho para a resposta ser no formato JSON
	header('Content-Type: application/json');

	// Obtém os parâmetros enviados pelo AJAX
	$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);

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
	        echo json_encode([
	            'cadastroEncontrado' => true,
	            'mensagem' => $mensagemSucesso,
	            'dados' => $registro // Retorna dados opcionais
	        ]);
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

?>