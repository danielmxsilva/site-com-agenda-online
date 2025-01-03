$(document).ready(function(){

	//setInterval(carregarHistorico, 60000);

})

function carregarHistorico(id) {
    $.ajax({
        url: 'ajax/usuarioCliente.php', // Altere para o caminho do seu arquivo PHP
        method: 'POST',
        data: { 
        	consulta_historico: true,
        	cliente_id: id
        },
        dataType: 'json',
        success: function (response) {
            if (response.sucesso) {
                // Limpa a lista antes de adicionar os novos itens
                $('.lista-historico').empty();

                // Itera pelos dados recebidos e monta os itens
                response.dados.forEach(function (item) {
                    const statusClass = item.status.toLowerCase(); // Define a classe de status dinamicamente
                    const historicoHtml = `
                        <div class="item-historico">
                            <div class="data-servico">${item.data}</div>
                            <div class="detalhes-servico">
                                <p><strong>Serviço:</strong> ${item.nome_servico}</p>
                                <p class="style-${statusClass}"><strong>Status:</strong> ${item.status}</p>
                            </div>
                        </div>
                    `;
                    $('.lista-historico').append(historicoHtml);
                });
            } else {
                alert('Erro ao carregar o histórico: ' + response.mensagem);
            }
        },
        error: function (xhr, status, error) {
            console.error('Erro na requisição AJAX:', error);
        }
    });
}