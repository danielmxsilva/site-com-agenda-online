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

function salvarCupomLocalStorage(cupom) {

    try {
        // Recupera os cupons salvos no localStorage, garantindo que sejam dados atualizados
        // Obtém os cupons do localStorage, garantindo que seja um array válido
        let cuponsSalvos = localStorage.getItem('cupons');

        // Trata casos em que o localStorage está vazio, indefinido ou corrompido
        if (!cuponsSalvos || cuponsSalvos === 'undefined' || cuponsSalvos === null) {
            cuponsSalvos = [];
        } else {
            try {
                cuponsSalvos = JSON.parse(cuponsSalvos);
            } catch (error) {
                console.error('Erro ao analisar localStorage:', error);
                cuponsSalvos = [];
                localStorage.removeItem('cupons');  // Remove os dados corrompidos
            }
        }

        
        // Verifica se os dados recuperados são um array válido
        if (!Array.isArray(cuponsSalvos)) {
            cuponsSalvos = [];
        }

        // Garante que a estrutura do cupom esteja correta
        if (!cupom || !cupom.codigo) {
            console.error('Cupom inválido fornecido:', cupom);
            exibirNotificacao('erro', 'Cupom inválido.');
            return;
        }

        // Verifica se o cupom já existe no localStorage
        const existeNoStorage = cuponsSalvos.some(item => item.codigo === cupom.codigo);
        
        if (!existeNoStorage) {
            cuponsSalvos.push(cupom);
            localStorage.setItem('cupons', JSON.stringify(cuponsSalvos));
            console.log('Cupom salvo com sucesso:', cuponsSalvos);
            atualizarCuponsNaTela();
            exibirNotificacao('sucesso', 'Cupom adicionado com sucesso!');
        } else {
            exibirNotificacao('erro', `O cupom ${cupom.codigo} já foi adicionado.`);
        }

    } catch (error) {
        console.error('Erro ao salvar cupom no localStorage:', error);
        localStorage.removeItem('cupons');  
        exibirNotificacao('erro', 'Erro ao adicionar o cupom.');
    }

}

function consultarCupom(){

	//cupom de segunda e terça = semanaleve
    //cupom de primeiro agendamento = boasvindas
    const diaSemana = localStorage.getItem('diaSemana');

    const tokenCliente = getCookie('token') || localStorage.getItem('token') || null;

    if (tokenCliente) {
        console.log('Token encontrado:', tokenCliente);
    } else {
        console.log('Token não encontrado.');
    }

    if (tokenCliente) {
        console.log('Token validado com sucesso.');

        // Adiciona evento ao enviar o formulário de cupom
        $('.form-cupom').off('submit').on('submit', function(e) {
            e.preventDefault();

            let cupomCodigo = $('input[name="cupom-input"]').val().trim();

            if (cupomCodigo === '') {
                exibirNotificacao('erro', 'Por favor, insira um cupom válido.');
                return;
            }

            $.ajax({
                url: 'ajax/validacao-form.php',  // Novo nome do arquivo PHP
                method: 'POST',
                dataType: 'json',
                data: { 
                    token_cliente: tokenCliente, 
                    cupom_codigo: cupomCodigo,
                    dia_semana: diaSemana
                },
                beforeSend: function(){
                    console.log("Consultando cupom...");
                },
                success: function(response) {

                    console.log("Resposta recebida:", response);

                    try {
                        // Verifica se a resposta já é um objeto
                        /*
                        if (typeof response === 'object') {
                            let response = response; // A resposta já é um objeto, não precisa converter
                        } else {
                            let response = JSON.parse(response); // Converte apenas se for string
                        }*/

                        if (response.sucesso) {
                            exibirNotificacao('sucesso', 'Cupom Adicionado!');
                            limparInputsFormulario('.form-cupom');
                            let cupomValidado = {
                                codigo: response.dados['cupom'],
                                desconto: response.dados['desconto'],
                                tipo: response.dados['tipo']
                            };
                            salvarCupomLocalStorage(cupomValidado);
                            atualizarCuponsNaTela(); 
                            console.log("Cupom encontrado:", response.dados);
                        } else {
                            exibirNotificacao('erro', response.mensagem);
                            limparInputsFormulario('.form-cupom');
                        }

                    } catch (e) {
                        console.error("Erro ao processar resposta:", e);
                        exibirNotificacao('erro', 'Erro ao consultar o cupom. Tente novamente.');
                    }
                },
                error: function() {
                    exibirNotificacao('erro', 'Erro ao consultar o cupom. Tente novamente.');
                }
            });

        });

        } else {
            console.log('Token não encontrado no localStorage.');
            trocarBox('.js-modal-agenda-servicos', '.login-agenda');
        }
    

}

function atualizarCuponsNaTela() {
    let cuponsSalvos = JSON.parse(localStorage.getItem('cupons')) || [];

    // Seleciona a div pai que conterá os cupons
    let cupomContainer = $('.cupom_selecionados');
    
    // Limpa a div antes de adicionar os cupons novamente
    cupomContainer.html('');

    cuponsSalvos.forEach(cupom => {

      if (!$(`.p-single:contains(${cupom.codigo})`).length) {
        let cupomHTML = `
            <div class="resumo-cupom-js resumo-cupom-css">  
                <div class="selecao-single flex">
                    <div class="overlay-delete"></div>
                    <div class="txt-p">
                        <span class="p-single">${cupom.codigo}</span>
                    </div>
                    <div class="duracao">
                        <span class="color-p">Desconto:</span>
                    </div>
                    <div class="preco-lixeira">
                        <span class="preco-single">R$${cupom.desconto}</span>
                        <i class="icone-lixeira fa-solid fa-trash-can" aria-hidden="true" onclick="removerCupom('${cupom.codigo}')"></i>
                    </div>
                </div>
            </div>
        `;

        cupomContainer.append(cupomHTML);
      }

    });
}


// Função para aplicar o cupom de desconto
function salvarCupom(nomeCupom, desconto, tipo) {
    console.log('Aplicando Cupom');
    // Aqui você pode implementar a lógica para envio do cupom para o backend
}