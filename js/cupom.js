function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

function maskCupom(){
    console.log("chamei a função maskCupom");
    $('input[name="cupom-input"]').on('input', function() {
        let valor = $(this).val();

        // Permite apenas letras minúsculas e remove espaços, números e caracteres especiais
        valor = valor.toUpperCase().replace(/[^A-Z]/g, '');

        if (valor.length > 15) {
            valor = valor.substring(0, 15);
        }

        // Atualiza o campo com o valor filtrado
        $(this).val(valor);
    });
}

function cupomValidar(){

	//cupom de segunda e terça = semanaleve
	//cupom de primeiro agendamento = boasvindas
	const diaSemana = localStorage.getItem('diaSemana');
	const idClienteToken = localStorage.getItem('token');

	const token = getCookie('token') || localStorage.getItem('token') || null;

	if (token) {
	    console.log('Token encontrado:', token);
	} else {
	    console.log('Token não encontrado.');
	}
    

    if (token) {
        console.log('entrei no if token form');
        // Token encontrado no cookie, realiza a consulta no backend

      $('.form-cupom').on('submit', function(e){
			e.preventDefault();

			let cupom_codigo = $('input[name="cupom_input"]');

	        if (cupom_codigo === '') {
	        	exibirNotificacao('erro', 'Por favor, insira um cupom válido.');
	            return;
	        }


       $.ajax({
            url: 'ajax/validacao-form.php', // Crie este arquivo PHP
            method: 'POST',
            data: { 
                token_cliente: token_cliente, 
                cupom_codigo: cupom_codigo 
            },
            beforeSend: function(){
                //
            },
            success: function(response) {
            	
             try {

                	response = JSON.parse(response);
       
	                if (response.tokenValido) {
	                    const clienteId = response.dados.id; 

	                   	// Chama a função para aplicar o cupom de desconto usando o ID
                        aplicarCupom(clienteId);

	                } else {
	                	exibirNotificacao('erro', 'Token inválido. Redirecionando para login');
                        clearCookies();
                        trocarBox('.js-modal-agenda-servicos', '.login-agenda');
	                }

                } catch (e) {
                    console.error('Erro ao processar resposta:', e);
                    exibirNotificacao('erro', 'Erro ao validar o token. Tente novamente.');
                }
            },
            error: function() {
                exibirNotificacao('erro', 'Erro ao validar o token. Tente novamente.');
            }
        });

      });

	} else {
        console.log('Token não encontrado no localStorage.');
        trocarBox('.js-modal-agenda-servicos', '.login-agenda');
    }

}

// Função para aplicar o cupom de desconto
function aplicarCupom(clienteId) {
    console.log(`Aplicando cupom para o cliente com ID: ${clienteId}`);
    // Aqui você pode implementar a lógica para envio do cupom para o backend
}