async function verificarSeTemCredito(){

	try{

		// Primeiro, obtemos o cliente_id pelo token
        const clienteIdToken = await obterClienteIdPorToken();
        const resumoTotal = localStorage.getItem('resumoTotal');

        console.log("RECUPEREI O ID DO CLIENTE ", clienteIdToken);


        // Em seguida, usamos o cliente_id na requisição AJAX
        
        $.ajax({
            url: 'ajax/validacao-form.php', // Arquivo PHP que fará a validação no banco de dados
            type: 'POST',
            dataType: 'json', // O retorno esperado será em formato JSON
            data: {
                acao: 'se_tem_credito', // Uma ação para identificar a funcionalidade no PHP
                cliente_id: clienteIdToken // Passa o cliente_id obtido
            },
            success: function(response) {

                console.log('Resposta do PHP:', response);

                if (response.tem_credito) {

                    // Caso tenha crédito, salva no localStorage
                    localStorage.setItem('creditoDisponivel', response.valor_credito);
                    const valorCredito = parseFloat(localStorage.getItem('creditoDisponivel')) || 0;

                    // Calcula o total descontado
                    const totalDescontado = Math.max(resumoTotal - valorCrehomedito, 0);

                    // Calcula o saldo restante do crédito (caso tenha sobrado após o desconto)
                    const saldoRestanteCredito = parseFloat((Math.max(valorCredito - resumoTotal, 0)).toFixed(2));

                    // Salva o saldo restante no localStorage para atualização futura no BD
                    localStorage.setItem('saldoRestanteCredito', saldoRestanteCredito);

                    // Atualiza a interface com os valores calculados
                    atualizarCreditoDisponivel(valorCredito, resumoTotal, totalDescontado);
                    
                    console.log('Tem crédito disponível: R$', response.valor_credito);
                    console.log('Saldo restante do crédito:', saldoRestanteCredito);

                    // Atualiza o total geral
                    atualizarTotal();

                } else {
                    // Caso não tenha crédito, esconde o bloco
                    $('.js-box-credito').fadeOut();
                    console.log('SEM credito!!!!!');
                }
            },
            error: function(xhr, status, error) {
                console.error('Erro na requisição:', error);
                console.error('Resposta do servidor:', xhr.responseText);
            }
        });

	} catch (erro){
		console.error('Erro ao obter o cliente ID:', erro);
	}

}

function atualizarCreditoDisponivel(valorCredito, resumoTotal, totalDescontado) {
    let boxCredito = $('.js-box-credito');

    valorCredito = parseFloat(valorCredito) || 0;
    resumoTotal = parseFloat(resumoTotal) || 0;
    totalDescontado = parseFloat(totalDescontado) || 0;

    // Função para formatar como moeda brasileira
    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    if (valorCredito > 0) {
        // Se houver crédito disponível, exibe a box e atualiza os valores
        boxCredito.fadeIn();
        $('.js-box-credito .selecao-single .credito-disponivel').text(`R$ ${formatarMoeda(valorCredito)}`);
        $('.js-box-credito .selecao-single .serv-atual').text(`R$ ${formatarMoeda(resumoTotal)}`);
        $('.js-box-credito .selecao-single .total-desconto').text(`R$ ${formatarMoeda(totalDescontado)}`);
    } else {
        // Se não houver crédito, esconde a box
        boxCredito.fadeOut();
    }
}