async function verificarSeTemCredito(){

	try{

		// Primeiro, obtemos o cliente_id pelo token
        const clienteIdToken = await obterClienteIdPorToken();

        console.log("RECUPEREI O ID DO CLIENTE ", clienteIdToken);

        // Em seguida, usamos o cliente_id na requisição AJAX
        /*
        $.ajax({
            url: 'validacao-form.php', // Arquivo PHP que fará a validação no banco de dados
            type: 'POST',
            dataType: 'json', // O retorno esperado será em formato JSON
            data: {
                acao: 'recuperar_id_cliente', // Uma ação para identificar a funcionalidade no PHP
                cliente_id_token: clienteIdToken // Passa o cliente_id obtido
            },
            success: function(response) {
                if (response.tem_credito) {
                    // Caso tenha crédito, mostra o bloco
                    console.log('Tem credito!!!!!');
                } else {
                    // Caso não tenha crédito, esconde o bloco
                    console.log('SEM credito!!!!!');
                }
            },
            error: function(xhr, status, error) {
                console.error('Erro na requisição:', error);
            }
        });
*/
	} catch (erro){
		console.error('Erro ao obter o cliente ID:', erro);
	}


}