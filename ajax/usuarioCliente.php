<?php

	include('../config.php');

	header('Content-Type: application/json');

	if(isset($_POST['consulta_historico'])){
		//const idCliente = dados.id; = recuperar do localStorage
		try{
			// Recuperando o idCliente passado via AJAX
	        $clienteId = isset($_POST['cliente_id']) ? $_POST['cliente_id'] : null;
	        
	        // Verificando se o idCliente foi passado
	        if (!$clienteId) {
	            echo json_encode([
	                'sucesso' => false,
	                'mensagem' => 'ID do cliente não informado.'
	            ]);
	            exit();
	        }

			// Conectar ao banco de dados
	        $pdo = Mysql::conectar();

	        // Consulta ao banco de dados
	        $sql = "SELECT 
					    a.data,
					    a.status,
					    s.nome_servico
					FROM tb_agendamento AS a
					JOIN tb_cliente_servico AS cs ON a.cliente_servico = cs.id
					JOIN tb_servico AS s ON cs.servico_id = s.id
					WHERE cs.cliente_id = ?
					ORDER BY a.data DESC, a.horario DESC";

	        $stmt = $pdo->prepare($sql);
	        $stmt->execute([$clienteId]);

	        $historico = $stmt->fetchAll(PDO::FETCH_ASSOC);

	        // Retorna os dados em formato JSON
	        ob_clean();

	        echo json_encode([
	            'sucesso' => true,
	            'dados' => $historico
	        ]);

	        exit();
	    } catch (PDOException $e) {
	    	ob_clean();
		    echo json_encode([
		        'sucesso' => false,
		        'mensagem' => 'Erro no servidor: ' . $e->getMessage()
		    ]);

		    exit();
		}


	}
	


?>

