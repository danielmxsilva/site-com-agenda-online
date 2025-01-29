$(document).ready(function() {

    localStorage.clear();

    $('.box-servicos-select').each(function () {
        atualizarCarrinhoSelect(this);
    });

    //carregarLocalStorage();
    atualizarResumoSelecao();

    clickDia();
    
    fecharBoxModal();
    clickQuantidadeServico();
   
    //scrollParaPeriodo();
    clickMeusAgendamentos();
    ClickbtnAvancarAgendamento();
    clickBtnDepoimento();
    slideSelect();

   
    selectServicoAgenda();

    inicializarEventosInfoBox();

    //selectPeriodo();

    //deleteItemIcone();

    $('.btn-voltar-do-resumo').click(function(e){
        e.stopPropagation();
        trocarBox('.wraper-pagamento', '.wraper-modal');
    })

    $('.btn-edit-endereco').click(function(e){
        e.stopPropagation();
        $('.box-editar-dados').slideToggle();
    })
    
});

function clickDia() {
    $('.dia').click(function(e) {
        if (!$(this).hasClass('desativado')) {

            const diaSemana = this.querySelector('.dia-semana').textContent;

            const data = this.querySelector('.data').textContent;

            // Salva a data no localStorage
            localStorage.setItem('diaSemana', diaSemana);
            localStorage.setItem('dataEscolhida', data);
             atualizarCuponsNaTela();

            if ($(this).find('.valor-especial').length > 0) {
                console.log("Este dia possui tarifa especial.");
                
                $('.resumo-sim-tarifa-especial').css('display','block');

                // Obtém o preço da tarifa especial
                const precoElement = $('.resumo-sim-tarifa-especial .preco-single');
                let precoTarifaEspecial = precoElement.text().trim(); // Obtém o texto do preço
                
                if (precoTarifaEspecial) {
                    // Remove o "R$" e converte a vírgula em ponto
                    precoTarifaEspecial = parseFloat(precoTarifaEspecial.replace('R$', '').replace(',', '.'));
                } else {
                    console.error('Preço da tarifa especial não encontrado!');
                    precoTarifaEspecial = 0; // Define um valor padrão em caso de erro
                }

                //localStorage.setItem('tarifaEspecial', 'preco:' precoTarifaEspecial);

                localStorage.setItem('tarifaAdicional', JSON.stringify({
                    nome: 'Tarifa Adicional',
                    preco: precoTarifaEspecial,
                }));

                // Adiciona evento de clique no ícone de informação
                //inicializarEventosInfoBox();

                //atualizarTotal(); // Atualiza o total após a adição
            }

            e.stopPropagation();
            scrollPos = $(window).scrollTop(); // Salva a posição do scroll
            $('html, body').css({
                overflow: 'hidden',
                position: 'fixed',
                top: -scrollPos + 'px', // Define a posição fixa
                width: '100%'
            });
            $('.box-modal').fadeIn();

            //selectPeriodo();

        }

    });

}

function inicializarEventosInfoBox() {
    $(".fa-circle-question").each(function () {
        $(this).off("click").on("click", function (e) {
            e.stopPropagation();

            const infoBox = $(this).siblings(".info-box");
            $(".info-box").not(infoBox).hide();
            infoBox.toggle();
        });
    });

    $("body").off("click touchstart").on("click touchstart", function () {
        $(".info-box").hide();
    });

    $(".info-box").each(function () {
        $(this).off("click touchstart").on("click touchstart", function (e) {
            e.stopPropagation();
        });
    });
    
}

// Evento global para fechar info-box ao clicar fora

// Objeto global para armazenar os serviços selecionados
//const servicosSelecionadosAgenda = {};

const ServicosSelecionados = ServicosSelecionadosManager();

function ServicosSelecionadosManager() {
    const STORAGE_KEY = 'servicosSelecionadosAgenda';

    // Recupera todos os serviços selecionados do localStorage
    function get() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    }

    // Adiciona um serviço ao localStorage
    function add(id, info) {
        const data = get();
        data[id] = info;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    // Remove um serviço do localStorage
    function remove(id) {
        const data = get();
        delete data[id];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    // Verifica se um serviço está selecionado
    function exists(id) {
        const data = get();
        return data.hasOwnProperty(id);
    }

    // Limpa todos os serviços selecionados do localStorage
    function clear() {
        localStorage.removeItem(STORAGE_KEY);
    }

    // Retorna a contagem de serviços selecionados
    function count() {
        return Object.keys(get()).length;
    }

    function getByClienteId(clienteId) {
        const data = get();
        return Object.values(data).filter(servico => servico.clienteId === clienteId);
    }

    // Retorna todas as funções como um objeto
    return {
        get,
        add,
        remove,
        exists,
        clear,
        count,
        getByClienteId,
    };

    /*

// Exemplo de uso:
const ServicosSelecionados = ServicosSelecionadosManager();

// Adicionar um serviço
ServicosSelecionados.add('agenda-manicure-1', {
    selecao: 'agenda',
    clienteId: 1,
    servicoNome: 'Manicure',
    preco: '25.00',
    duracao: '30min',
});

ServicosSelecionados.add(checkboxId, servicoInfo);

// Verificar se um serviço existe
console.log(ServicosSelecionados.exists('agenda-manicure-1')); // true

// Obter todos os serviços
console.log(ServicosSelecionados.get());

// Contar serviços
console.log(ServicosSelecionados.count()); // 1

// Remover um serviço
ServicosSelecionados.remove('agenda-manicure-1');

// Limpar todos os serviços
ServicosSelecionados.clear();


    */
}

// Função de seleção de serviço
function selectServicoAgenda() {
    $(".js-modal-agenda-servicos .servico-single").on("click", function () {
        const checkbox = $(this).find('.checkbox-servico');  // Pega o checkbox dentro do servico-single
    
        // Alterna o estado da checkbox e adiciona/remove a classe 'selected'
        const checked = !checkbox.prop('checked');
        checkbox.prop('checked', checked);
        $(this).toggleClass('selected', checked);

        // Exibe ou oculta o ícone com base na presença da classe 'selected'
        $(this).find('.select-icon').toggle(checked);

        // Verifica se o checkbox está presente
        if (!checkbox.length) return;  // Se não há checkbox, sai da função
        
        const checkboxId = checkbox.attr('id');  // Recupera o ID do checkbox
        
        // Verifique se o ID existe antes de continuar
        if (!checkboxId) {
            console.error("ID do checkbox não encontrado!");
            return;  // Retorna para evitar o erro
        }

        // agenda-manicure-pedicure-1 , agenda-manicure-1 , agenda-manicure-corte-1 , agenda-manicure-esmaltacao-1 , agenda-pedicure-1..

        // Recupera o nome do serviço (antes do span) e o preço do serviço
        //const servicoNome = $(this).find('.p-single').text().trim(); // Nome do serviço
        const servicoNome = $(this).find('.p-single').contents().filter(function() {
            return this.nodeType === Node.TEXT_NODE; // Filtra apenas os nós de texto
        }).text().trim(); // Pega apenas o texto principal e remove os espaços
        const preco = $(this).find('.preco-txt').text().replace('R$', '').trim(); // Preço sem o símbolo "R$"
        const duracao = $(this).find("input[name='duracao']").val(); // Recupera a duração do serviço

        // Função para extrair as partes do ID
        const getServicoInfo = (id) => {
            const parts = id.split("-");  // Separa por hífen
            const selecao = parts[0];  // "agenda"
            const clienteId = parts[parts.length - 1];  // ID do cliente, o último número
            return { selecao, clienteId, servicoNome, preco, duracao };
        };

        // Aplica a função para o ID do checkbox
        const servicoInfo = getServicoInfo(checkboxId);

        const boxAtual = $(this).closest('.box-servicos-select');

        // Adiciona ou remove o serviço do objeto global

        if (checked) {
            // Adicionar serviço ao localStorage e resumo correspondente
            ServicosSelecionados.add(checkboxId, servicoInfo);
            const serviceId = checkboxId;
            const novaSelecao = adicionarServico({ serviceId, nomeServico: servicoNome, precoServico: preco, duracaoServico: duracao });

            if (novaSelecao) {
                // Identificar o cliente pelo clienteId no localStorage
                const clienteResumo = $(`.resumo-single-js-${servicoInfo.clienteId}`);

                if (clienteResumo.length > 0) {
                    clienteResumo.append(novaSelecao);
                } else {
                    console.error("Resumo para clienteId não encontrado:", servicoInfo.clienteId);
                }
            }

        } else {
            ServicosSelecionados.remove(checkboxId);
            // Remover o serviço do localStorage e do resumo correspondente
            const clienteResumo = $(`.resumo-single-js-${servicoInfo.clienteId}`);
            clienteResumo.find(`[data-id="${checkboxId}"]`).remove();
        }

        ServicosSelecionados.getByClienteId = function (clienteId) {
            return Object.values(this.get()).filter(servico => servico.clienteId === clienteId);
        };

        // Exibir ou esconder o resumo do cliente com efeito fade
        atualizarResumoCliente(servicoInfo);

        atualizarCarrinhoSelect(boxAtual);

        atualizarTotal();

        //ServicosSelecionados.add(checkboxId, servicoInfo);
        /*
        
        if (checked) {
            //servicosSelecionadosAgenda[checkboxId] = servicoInfo;
            //gerenciarSelecoes(checkboxId, servicosSelecionadosAgenda);
            ServicosSelecionados.add(checkboxId, servicoInfo);
            //gerenciarSelecoes(checkboxId, maxUnitarios = 2)
            //console.log(checkboxId);
        } else {
            ServicosSelecionados.remove(checkboxId);
            //delete servicosSelecionadosAgenda[checkboxId];
        }
*/
        // Atualiza o localStorage com o estado atual
        //localStorage.setItem('servicosSelecionadosAgenda', JSON.stringify(servicosSelecionadosAgenda));

        // Atualiza o contador na box atual
    
        //console.log('Serviços Selecionados agenda:', servicosSelecionadosAgenda); // Exibe o estado atual
        //atualizarResumoSelecao(checked, checkboxId); // Atualiza o resumo
        //reposicionarTarifaEspecial();
    });
}

function atualizarResumoCliente(servicoInfo = null, esconderSomente = false) {

    // Verifica se servicoInfo foi fornecido e, se não, usa o localStorage diretamente
    const clienteContainer = servicoInfo ? $(`.agenda-resumo-cliente-${servicoInfo.clienteId}`) : null;
    const clienteId = servicoInfo ? servicoInfo.clienteId : null;
    
    const clienteServicos = clienteId ? ServicosSelecionados.getByClienteId(clienteId) : null;

    if (esconderSomente) {
        // Se o parâmetro esconderSomente for true, esconde o clienteContainer
        if (clienteContainer && clienteContainer.is(":visible")) {
            clienteContainer.fadeOut(); // Esconde o resumo do cliente
        }
        return; // Retorna imediatamente, já que não há mais ações necessárias
    } else {
        if (clienteServicos && clienteServicos.length > 0) {
            // Se houver serviços, exibe o resumo do cliente
            if (clienteContainer && !clienteContainer.is(":visible")) {
                clienteContainer.fadeIn(); // Exibe o resumo do cliente
            }
        } else {
            // Caso contrário, esconde o resumo do cliente
            if (clienteContainer && clienteContainer.is(":visible")) {
                clienteContainer.fadeOut(); // Esconde o resumo do cliente
            }
        }
    }


    if (ServicosSelecionados.count() === 0) {
        if (clienteContainer && clienteContainer.is(":visible")) {
            clienteContainer.fadeOut(); // Esconde o resumo do cliente
        }
    }


}

function gerenciarSelecoes(checkboxId, maxUnitarios = 2) {

    //const ServicosSelecionados = ServicosSelecionadosManager(); // Inicializa o gerenciador
    const servicosSelecionados = ServicosSelecionados.get(); // Recupera os serviços do localStorage

    const partes = checkboxId.split("-");
    const categoria = partes[1]; // Exemplo: "manicure", "pedicure", etc.
    const tipo = partes[2]; // Exemplo: "corte", "esmaltacao", etc.
    const idAtual = partes[partes.length - 1]; // Último valor do ID
    const isCompleto = tipo === "1"; // Checa se é um serviço completo
    const isUnitarioCompleto = tipo.includes("spa") || tipo.includes("plastica");

    // Filtrar serviços que pertencem ao mesmo ID
    const servicosMesmoId = Object.keys(servicosSelecionados).filter(id => id.endsWith(`-${idAtual}`));

    // Sempre desmarcar o serviço completo ao selecionar serviços unitários
    /*
    if (!isCompleto) {
        const completoId = servicosMesmoId.find(id => id.includes(categoria) && id.includes("1"));
        if (completoId) {
            ServicosSelecionados.remove(completoId); // Remove do localStorage
            $(`#${completoId}`).prop('checked', false).closest('.servico-single').removeClass('selected'); // Atualiza visualmente
        }
    }
*/
    if (isCompleto) {
        // Desmarcar todos os serviços da mesma categoria
        servicosMesmoId.forEach(id => {
            if (id.includes(categoria) && id !== checkboxId) {
                ServicosSelecionados.remove(id); // Remove do localStorage
                $(`#${id}`).prop('checked', false).closest('.servico-single').removeClass('selected'); // Atualiza visualmente
            }
        });
    } else {
        // Se for um serviço unitário, apenas adiciona ao localStorage sem afetar o completo
        console.log(`Selecionado serviço unitário: ${checkboxId}`);
    }
    /*else if (!isCompleto && !isUnitarioCompleto) {
        // Permitir até dois serviços unitários
        const unitariosSelecionados = servicosMesmoId.filter(id => id.includes(categoria) && !id.includes("1") && id !== checkboxId);
        if (unitariosSelecionados.length >= maxUnitarios) {
            // Desmarcar o mais antigo se já houver dois selecionados
            const maisAntigo = unitariosSelecionados[0];
            ServicosSelecionados.remove(maisAntigo); // Remove do localStorage
            $(`#${maisAntigo}`).prop('checked', false).closest('.servico-single').removeClass('selected'); // Atualiza visualmente
        }
    }

    if (isUnitarioCompleto) {
        // Apenas registra a seleção, caso especial
        console.log(`Selecionado serviço unitário + completo: ${checkboxId}`);
    }
*/
    // Adicionar o serviço atual ao localStorage
    const servicoInfo = {
        categoria,
        tipo,
        idAtual,
        checkboxId,
    };

    ServicosSelecionados.add(checkboxId, servicoInfo); // Adiciona ao localStorage

    console.log('Serviços selecionados atualizados:', ServicosSelecionados.get());
}


// Função para atualizar a quantidade de serviços selecionados em uma box específica
function atualizarCarrinhoSelect(boxElement) {
    // Recuperar os serviços selecionados do localStorage
    const servicosSelecionados = localStorage.getItem('servicosSelecionadosAgenda');

    if (servicosSelecionados) {
        // Parse dos dados para um objeto
        const servicosObj = JSON.parse(servicosSelecionados);

        // Identificar os checkboxes dentro da box atual
        const servicosNaBox = $(boxElement).find('.checkbox-servico').map(function () {
            return $(this).attr('id'); // Pega os IDs dos checkboxes
        }).get();

        // Filtrar os serviços selecionados que pertencem à box atual
        const servicosFiltrados = Object.keys(servicosObj).filter(servicoId => {
            return servicosNaBox.includes(servicoId);
        });

        // Atualizar o contador no elemento correspondente
        const quantidade = servicosFiltrados.length;
        $(boxElement).find('.wraper-carrinho-select span').text(quantidade);
    } else {
        // Se não houver serviços selecionados, exibir 0
        $(boxElement).find('.wraper-carrinho-select span').text(0);
    }
}

// Função para atualizar o resumo de serviços
function atualizarResumoSelecao(checked, checkboxId) {

/*
    // Itera pelos IDs dos clientes
    ["1", "2", "3", "4"].forEach(clienteId => {
        const $container = $(`.agenda-resumo-cliente-${clienteId}`);
        if (!$container.length) return;

        // Remove apenas os serviços que não são "Tarifa Especial" nem "Total"
        $container.find(".selecao-single:not(.selecao-single-total, .box-tarifa-especial)").filter(function () {
            return $(this).find(".p-single").text().trim() !== "Tarifa Especial";
        }).remove();
    });

    // Itera pelos serviços no localStorage
    for (const [id, servico] of Object.entries(servicosSelecionadosAgenda)) {
        const { clienteId, servicoNome, preco, duracao } = servico;

        // Seleciona o contêiner do cliente correspondente
        const $container = $(`.agenda-resumo-cliente-${clienteId}`);
        if (!$container.length) {
            console.error(`Contêiner do cliente ${clienteId} não encontrado.`);
            console.log($container);
            continue;
        }

        // Verifica se o serviço já foi adicionado
        const existingService = $container.find(`[data-id="agenda-servico-${servicoNome}"]`);
        if (existingService.length) {
            console.log(`Serviço ${servicoNome} já adicionado, não adicionando novamente.`);
            continue;  // Se o serviço já existe, não adiciona novamente
        }

        // Cria a estrutura HTML do serviço
        //const novoServicoHTML = adicionarServico(true, servicoNome, duracao, preco, id);

        // Adiciona o HTML ao contêiner
        /*
        if (novoServicoHTML) {
            $container.append(novoServicoHTML);
        }*/
    //}

    // Atualiza o total de serviços selecionados
    //atualizarTotal();

    // Reorganiza o resumo (coloca Tarifa Especial antes do total)
    //organizarResumoSelecao();

    //reposicionarTarifaEspecial();
    
}

// Função para sincronizar as instâncias do serviço excluído
function sincronizarExclusaoServico(serviceId) {
    // Remove todas as instâncias do serviço em outras boxes
    $(`.selecao-single[data-id="${serviceId}"]`).fadeOut(300, function () {
        $(this).remove();
    });
}

// Função para adicionar serviço
function adicionarServico({ serviceId, nomeServico, precoServico, duracaoServico }) {

    $('.wraper-resumo').on('click', '.icone-lixeira', function() {
          console.log('click lixeira!');
          const $removedService = $(this).closest('.selecao-single');
          $removedService.addClass('deletando');

          const removedServiceId = $removedService.data('id');

          // Extraímos o `clienteId` do ID do serviço (último número)
          const clienteId = removedServiceId.split('-').pop(); // Extrai "1" de "agenda-manicure-pedicure-1"

          const overlay = $removedService.find('.overlay-delete'); // Seleciona a barra vermelha
          overlay.css({
             width: '100%',     // Define a largura como 100% do elemento
             right: '0',        // Garante que o preenchimento parta do lado direito
             border: '2px solid rgba(198, 155, 155, 0.8)',
             borderRadius: '10px',
          });
          
           // Remover o serviço do objeto global e do localStorage
           

            // Remove o elemento DOM após a animação
            setTimeout(() => {
                $removedService.fadeOut(300, function () {
                    $removedService.remove();
                    atualizarTotal();

                    atualizarResumoCliente({ clienteId });

                    // Sincroniza exclusão em outras boxes
                    sincronizarExclusaoServico(removedServiceId);
                });
            }, 500);


           // Encontrar o elemento correspondente na lista principal
          const $correspondingService = $(`.servico-single input[type="checkbox"][id="${removedServiceId}"]`).closest('.servico-single');

          // Atualizar estilos e estado do checkbox apenas para o item correspondente
          $correspondingService.removeClass('selected');
          $correspondingService.find('.checkbox-servico').prop('checked', false);
          $correspondingService.find('.select-icon').hide();

          ServicosSelecionados.remove(removedServiceId);

          const $correspondingSelectBox = $(`.servico-single input[type="checkbox"][id="${removedServiceId}"]`).closest('.box-servicos-select');

          atualizarCarrinhoSelect($correspondingSelectBox);


      })

    if (!serviceId || !nomeServico || !precoServico || !duracaoServico) {
        console.error("Parâmetros inválidos para adicionarServico");
        return null;
    }

    return `
        <div class="selecao-single flex" data-id="${serviceId}">
            <div class="overlay-delete"></div> <!-- Barra vermelha -->
            <div class="txt-p">
                <span class="p-single">${nomeServico}</span>
            </div>
            <div class="duracao">
                <span class="color-p"><i class="fa-solid fa-clock"></i> ${duracaoServico}</span>
            </div>
            <div class="preco-lixeira">
                <span class="preco-single">R$${precoServico}</span>
                <i class="icone-lixeira fa-solid fa-trash-can"></i>
            </div>
        </div>
    `;

}



function reposicionarTarifaEspecial() {
    $('.wraper-resumo').each(function() {
        const tarifaEspecial = $(this).find('.box-tarifa-especial');
        const totalBox = $(this).find('.selecao-single-total');

        if (tarifaEspecial.length && totalBox.length) {
            tarifaEspecial.insertBefore(totalBox); // Move a box-tarifa-especial para antes da selecao-single-total
        }
    });
}

// Atualiza os serviços com base em uma interação (selecionar/desmarcar)
function manipularServico(checkboxId, servicoInfo, adicionar) {
    if (adicionar) {
        servicosSelecionadosAgenda[checkboxId] = servicoInfo;
    } else {
        delete servicosSelecionadosAgenda[checkboxId];
        // Remove o elemento do resumo
        $(`.selecao-single [data-id="${checkboxId}"]`).closest('.selecao-single').remove();
    }

    // Sincroniza o localStorage
    sincronizarLocalStorage();
    atualizarResumoSelecao();
}

function deleteItemIcone(){
    console.log("Serviços atuais:", servicosSelecionadosAgenda);
    // Remoção via ícone de lixeira
    $(document).on('click', '.icone-lixeira', function () {
        console.log("click na lixeira detectado");
        const checkboxId = $(this).data('id'); // Pega o ID do serviço
        if (!checkboxId) {
            console.error("ID do serviço não encontrado para exclusão!");
            return;
        }

        // Verifica se o serviço existe no objeto global
        if (!servicosSelecionadosAgenda[checkboxId]) {
            console.error(`Serviço com ID ${checkboxId} não encontrado no objeto global.`);
            return;
        }

        // Remove do objeto global
        delete servicosSelecionadosAgenda[checkboxId];

        // Sincroniza com o localStorage
        sincronizarLocalStorage();

        // Remove o elemento do resumo
        $(this).closest('.selecao-single').remove();

        // Atualiza os totais e reorganiza o resumo
        atualizarResumoSelecao();

        console.log("Serviço removido:", checkboxId);
    });

}
// Função para sincronizar os dados com o LocalStorage
function sincronizarLocalStorage() {
    console.log("Sincronizando com o localStorage...");
    localStorage.setItem('servicosSelecionadosAgenda', JSON.stringify(servicosSelecionadosAgenda));
}


// Função para atualizar o total e a duração
function atualizarTotal() {
    console.log("entrei no atualizarTotal");

    // Recupera os serviços selecionados do localStorage
    const servicosSelecionados = ServicosSelecionados.get();

    // Recupera todas as tarifas do localStorage
    const tarifaAdicional = JSON.parse(localStorage.getItem('tarifaAdicional') || '{}');
    const tarifaNoturna = JSON.parse(localStorage.getItem('tarifaNoturna') || '{}');
    const cupons = JSON.parse(localStorage.getItem('cupons') || '[]');

    // Inicializa os totais para cada cliente
    let totais = {
        1: { total: 0, duracaoTotal: 0 },
        2: { total: 0, duracaoTotal: 0 },
        3: { total: 0, duracaoTotal: 0 },
        4: { total: 0, duracaoTotal: 0 },
    };

    // Itera pelos serviços selecionados
    Object.values(servicosSelecionados).forEach(servico => {
        const clienteId = parseInt(servico.clienteId, 10);

        // Verifica se o cliente existe nos totais
        if (totais[clienteId]) {
            // Calcula o preço
            const preco = parseFloat(servico.preco.replace(",", "."));
            if (!isNaN(preco)) {
                totais[clienteId].total += preco;
            }

            // Calcula a duração em minutos
            const duracaoMinutos = converterDuracaoParaMinutos(servico.duracao);
            totais[clienteId].duracaoTotal += duracaoMinutos;
        }
    });

    // Adiciona as tarifas apenas para os clientes que possuem serviços
    Object.keys(totais).forEach(clienteId => {
        if (totais[clienteId].total > 0) { // Verifica se há serviços para o cliente
            if (tarifaAdicional && tarifaAdicional.preco) {
                totais[clienteId].total += parseFloat(tarifaAdicional.preco);
            }
            if (tarifaNoturna && tarifaNoturna.preco) {
                totais[clienteId].total += parseFloat(tarifaNoturna.preco);
            }
        }
    });
    
    // Atualiza o HTML para cada cliente
    for (const clienteId in totais) {
        const totalContainer = $(`.agenda-resumo-cliente-${clienteId} .selecao-single-total`);
        const { total, duracaoTotal } = totais[clienteId];

        if (totalContainer.length) {
            totalContainer.html(`
                <div class="txt-p"><span class="color-p">Total</span></div>
                <div class="duracao">
                    <span class="color-p"><i class="fa-solid fa-clock"></i> ${converterMinutosParaHoras(duracaoTotal)}</span>
                </div>
                <div class="preco-lixeira">
                    <span class="preco-total color-p">R$${total.toFixed(2).replace(".", ",")}</span>
                </div>
            `);
        }
    }

    // Adiciona o resumo total geral
    let resumoTotal = 0;
    Object.values(totais).forEach(cliente => {
        resumoTotal += cliente.total;
    });

     // Aplica cupons ao resumoTotal
    if (Array.isArray(cupons) && cupons.length > 0) {
        cupons.forEach(cupom => {
            if (cupom.tipo === 'percentual') {
                resumoTotal -= (resumoTotal * parseFloat(cupom.desconto) / 100);
            } else if (cupom.tipo === 'fixo') {
                resumoTotal -= parseFloat(cupom.desconto);
            }
        });
    }

     // Salva o resumoTotal no localStorage
    localStorage.setItem('resumoTotal', resumoTotal.toFixed(2));

    // Recupera o resumoTotal salvo no localStorage
    const resumoTotalSalvo = parseFloat(localStorage.getItem('resumoTotal')) || 0;

    // Atualiza o HTML do resumo geral
    const totalResumoCompleto = $(".total-resumo-completo");
    if (totalResumoCompleto.length) {
        totalResumoCompleto.html(`
            <div class="txt-p"><span class="color-p">Total</span></div>
            <div class="preco-lixeira">
                <span class="preco-total color-p">R$${resumoTotalSalvo.toFixed(2).replace(".", ",")}</span>
            </div>
        `);
    }

    // Atualiza o tempo estimado total, se aplicável
    atualizarTempoEstimado();
}


// Função para carregar os dados do LocalStorage
function carregarLocalStorage() {
    const dadosSalvos = localStorage.getItem('servicosSelecionadosAgenda');
    if (dadosSalvos) {
        try {
            const parsedData = JSON.parse(dadosSalvos);
            Object.assign(servicosSelecionadosAgenda, parsedData);
            console.log("Dados carregados do localStorage:", parsedData);
            atualizarResumoSelecao();
        } catch (e) {
            console.error("Erro ao carregar dados do localStorage:", e);
        }
    } else {
        console.log("Nenhum dado salvo no localStorage.");
    }
}


function fecharBoxModal() {
    $('.box-modal').on('click', function(e) {
        if ($(e.target).is('.box-modal')) {
            closeModal();
        }
    });

    $('.modal-agendamento').on('click', function(e) {
        if ($(e.target).is('.modal-agendamento')) {
            closeModal();
        }
    });

    $('.modal-depoimento').on('click', function(e) {
        if ($(e.target).is('.modal-depoimento')) {
            closeModal();
        }
    });

    $('.close-btn').on('click', function(e) {
        closeModal();
        e.stopPropagation();
    });
}

function closeModal() {
    try{
     console.log("Início da função closeModal");

    // Fechar o modal e restaurar a posição do scroll
    $('.box-modal').fadeOut();
    $('.modal-agendamento').fadeOut();
    console.log("Modais fechados");

    $('html, body').css({
        overflow: '',
        position: '',
        top: ''
    });
    $(window).scrollTop(scrollPos);
    console.log("Scroll restaurado");

    // Limpar o estado global dos serviços selecionados
    console.log("Antes de resetar servicosSelecionadosAgenda");
    //Object.keys(servicosSelecionadosAgenda).forEach(key => delete servicosSelecionadosAgenda[key]);
    console.log("Após Serviços selecionados resetados");

    // Limpar todos os dados relacionados no localStorage
    try {
        localStorage.removeItem('servicosSelecionadosAgenda');
        console.log("LocalStorage: servicosSelecionadosAgenda removido");
    } catch (error) {
        console.error("Erro ao remover servicosSelecionadosAgenda:", error);
    }

    try {
        localStorage.removeItem('totalDuracao');
        console.log("LocalStorage: totalDuracao removido");
    } catch (error) {
        console.error("Erro ao remover totalDuracao:", error);
    }

    try {
        localStorage.removeItem('horariosSelecionados');
        console.log("LocalStorage: horariosSelecionados removido");
    } catch (error) {
        console.error("Erro ao remover horariosSelecionados:", error);
    }

    try {
        localStorage.removeItem('minutosTotaisSelecionado');
        console.log("LocalStorage: minutosTotaisSelecionado removido");
    } catch (error){
        console.error("Erro ao remover minutosTotaisSelecionado: ", error);
    }

    // Limpar seleções visuais e classes no DOM
    $('.checkbox-servico').prop('checked', false).closest('.servico-single').removeClass('selected');
    console.log("Quantidade de checkboxes encontrados:", $('.checkbox-servico').length);


    // Resetar o resumo visual e os valores de total
    $('.wraper-resumo .selecao-single').each(function() {
        if (!$(this).hasClass('box-tarifa-especial')) {
            $(this).remove();
        }
    });
    $('.selecao-single-total:not(.css-form-cupon)').html(`
        <div class="txt-p"><span class="color-p">Total</span></div> 
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock"></i> 0:00</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$0,00</span>
        </div>
    `);
    console.log("Resumo visual resetado");

    // Resetar opções de quantidade de clientes
    $('.single-quantidade').removeClass('qnt-clientes-select');
    $('.primeiro-bloco').addClass('qnt-clientes-select');
    $('.dois-cliente, .tres-cliente, .quatro-cliente').hide();
    console.log("Opções de quantidade resetadas");

    // Ocultar modais extras
    $('.modal-servicos-agendados').hide();
    $('.wraper-login').hide();
    $('.js-box-pagamento-agenda').hide();
    $('.resumo-sim-tarifa-especial').css('display','none');
    $('.js-box-resumo-consulta-agendamentos').hide();
    $('.modal-depoimento').hide();
    console.log("Modais extras escondidos");

    // Mostrar o modal inicial de serviços
    $('.modal-agenda-servicos').show();
    $('.js-modal-agenda-servicos').show();
    $('.agendamentos-js-login').show();
    console.log("Modal inicial exibido");

    // Ajustar estilos dos formulários
    $('.form-login-consulta, .form-login-depoimento').css({
        position: 'relative',
        left: '50%',
        top: '42%',
        transform: 'translate(-50%, -50%)'
    });
    $('.form-informacoes-cliente').hide();
    console.log("Estilos dos formulários ajustados");

    try {
        resetarPeriodo();
        console.log("resetarPeriodo executado com sucesso");
    } catch (error) {
        console.error("Erro ao executar resetarPeriodo:", error);
    }

    try {
        atualizarResumoSelecao();
        console.log("atualizarResumoSelecao executado com sucesso");
    } catch (error) {
        console.error("Erro ao executar atualizarResumoSelecao:", error);
    }

    console.log("Modal função closeModal fechado e encerrado");

    $('.select-icon').fadeOut();

    $('.js-modal-agenda-servicos').css('opacity','1');
    // Esconde mensagem de sucesso (se estiver visível)
    $(".js-sucess-modal-agenda-servicos").stop(true, true).fadeOut(0);
    // Esconde mensagem de error (se estiver visível)
    $(".js-error-modal-agenda-servicos").stop(true, true).fadeOut(0);

    $('.js-tempo-servico .tempo-estimado').html('0:00');

    $('input[type=text]').val('');
    $('input[type=number]').val('');
    $('input[type=password]').val('');
    $('input[type=email]').val('');
    $('input[type=file]').val('');
    $('input[type=submit]').fadeIn();

    $('#preview-foto').hide(); // Esconde o preview
    $('#file-name').text('Nenhum arquivo selecionado'); // Reseta o texto

    } catch (error){
        console.error("Erro na função closeModal:", error);
    }

    $('.form-login-js').css({
      position: 'relative',
      transform: 'translate(-50%,-50%)',
      left: '50%',
      top: '42%',
    });

    $('.form-login-agenda').css({
        position: ' ',
        left: ' ',
        top: ' ',
        transform: ' '
    });

    $('.login-agenda').removeClass('carregando'); 

    $('.form-informacoes-cliente').hide();

    $('.form-informacoes-cliente input[type=text]').val('');

    $('.form-login-senha-agenda input[type=text]').val('');

    $(".form-login-senha-agenda").slideUp();

    $(".login-agenda").removeClass('carregando');

    $('#cidade-login-agenda').html(`
        <option value="cidade" selected disabled>Cidade:</option>
        <option value="Itupeva">Itupeva</option>
        <option value="Jundiaí">Jundiaí</option>
    `).prop('disabled', false);

    $('.form-recuperar-senha-js').css('display','none');
    $('.form-recuperar-senha-email-js').css('display','none');
    $('.form-recuperar-senha-nova-senha-js').css('display','none');
    $('.form-recuperar-senha-codigo-js').css('display','none');
    $('.form-login-js').css('display','block');

    $('.wraper-carrinho-select span').text(0);

    $('.wraper-resumo:not(.js-box-resumo-completo):not(.js-print-endereco):not(.js-box-cupons)').css('display', 'none');

    $('.resumo-sim-tarifa-noturna').css('display','none');

    $('.cupom_selecionados').css('display','none');

    limparCupons();
    localStorage.clear();
}

function limparCupons() {
    localStorage.removeItem('cupons'); // Remover apenas os cupons, não todo localStorage
    $('.cupom_selecionados').html(''); // Limpa a interface
    //consultarCupom(); 
    console.log("LocalStorage e interface foram limpos!");
}

//localStorage.clear(); // Cuidado! Remove todos os itens do localStorage.
function organizarResumoSelecao() {

    // Seleciona o container principal
    $(".wraper-resumo").each(function () {
        const $container = $(this);

        // Seleciona o elemento "Tarifa Especial"
        const $tarifaEspecial = $container.find(".box-tarifa-especial");

        // Seleciona o elemento "Total"
        const $total = $container.find(".selecao-single-total");

        // Move "Tarifa Especial" para logo antes do "Total"
        if ($tarifaEspecial.length && $total.length) {
            $tarifaEspecial.detach().insertBefore($total);
        }

        reposicionarTarifaEspecial();
        // Garante que "Total" permaneça como o último elemento no container
        $total.detach().appendTo($container);
    });
    /*
    const $container1 = $(".wraper-resumo.agenda-resumo-cliente-1");
    const $container2 = $(".wraper-resumo.agenda-resumo-cliente-2");
    //const $tarifaEspecial1 = $container1.find(".selecao-single .p-single:contains('Tarifa Especial')").closest(".selecao-single");
    
    // Seleciona Tarifa Especial
    const $tarifaEspecial1 = $container1.find(".selecao-single").filter(function () {
        return $(this).find(".p-single").text().trim() === "Tarifa Especial";
    });

    const $selecaoTotal1 = $container1.find(".pos-total-cliente-1");
    //const $tarifaEspecial2 = $container2.find(".selecao-single .p-single:contains('Tarifa Especial')").closest(".selecao-single");
    
    const $tarifaEspecial2 = $container2.find(".selecao-single").filter(function () {
        return $(this).find(".p-single").text().trim() === "Tarifa Especial";
    });

    const $selecaoTotal2 = $container2.find(".pos-total-cliente-2");

    // Move "Tarifa Especial" para antes de "Total", se houver
    if ($tarifaEspecial1.length) {
        $tarifaEspecial1.detach().insertBefore($selecaoTotal1);
    }
    if ($tarifaEspecial2.length) {
        $tarifaEspecial2.detach().insertBefore($selecaoTotal2);
    }

    console.log($tarifaEspecial1, $tarifaEspecial2);
    console.log($selecaoTotal1, $selecaoTotal2);

    console.log("Tarifa Especial Cliente 1:", $tarifaEspecial1.length);
    console.log("Total Cliente 1:", $selecaoTotal1.length);
    console.log("Tarifa Especial Cliente 2:", $tarifaEspecial2.length);
    console.log("Total Cliente 2:", $selecaoTotal2.length);

    // Garante que "Total" seja sempre o último
    $selecaoTotal1.detach().appendTo($container1);
    $selecaoTotal2.detach().appendTo($container2);*/
} 

// Função para converter a duração de horas para minutos
function converterDuracaoParaMinutos(duracaoTexto) {
    const partes = duracaoTexto.split(':'); // Divide em horas e minutos
    const horas = parseInt(partes[0]) || 0; // Pega as horas
    const minutos = parseInt(partes[1]) || 0; // Pega os minutos
    return (horas * 60) + minutos; // Converte tudo para minutos
}

// Função para converter minutos de volta para horas:minutos
function converterMinutosParaHoras(minutos) {
    const horas = Math.floor(minutos / 60); // Calcula as horas
    const restoMinutos = minutos % 60; // Pega os minutos restantes
    return `${horas}:${restoMinutos < 10 ? '0' : ''}${restoMinutos}`; // Formata para "HH:MM"
}


function slideSelect(){
    $('.txt-servicos').click(function() {
        const boxDeServicos = $(this).closest('.box-servicos-select').find('.box-de-servicos'); // Seleciona o box-de-servicos atual

        // Fecha todas as outras box-de-servicos que estão abertas
        $('.box-de-servicos').not(boxDeServicos).slideUp().css('display', 'none');

        // Alterna a visibilidade do box-de-servicos atual
        boxDeServicos.slideToggle().css('display', function () {
            return $(this).is(':visible') ? 'flex' : 'none'; // Mantém o display: flex quando visível
        });
    });
}

function resetarPeriodo() {
    // Remove a classe 'select-periodo' de todos os períodos
    $('.horarios-periodo div').removeClass('select-periodo');

    // Ocultar a mensagem de tarifa, se estiver visível
    $('.msg-tarifa').fadeOut(300);

    // Resetar a rolagem para a posição inicial
    const horarioSingle = $('.horario-single');
    horarioSingle.scrollLeft(0); // Volta o scroll para o início

    // Log para depuração
    console.log('Períodos resetados e rolagem ajustada');
}

function clickQuantidadeServico(){
    // Variável para armazenar a quantidade de clientes selecionada
    let quantidadeClientes = 1; // valor padrão

    // Captura a quantidade de clientes selecionada e armazena
    $('.single-quantidade').click(function() {
        // Recupera o valor do input hidden dentro do .single-quantidade
        quantidadeClientes = parseInt($(this).find('input[type="hidden"]').val().replace('qnt_cliente_', ''));

        // Remove a classe 'qnt-clientes-select' de todas as opções
        $('.single-quantidade').removeClass('qnt-clientes-select');

        // Adiciona a classe 'qnt-clientes-select' até o valor selecionado
        for (let i = 1; i <= quantidadeClientes; i++) {
            $(`input[value="qnt_cliente_${i}"]`).closest('.single-quantidade').addClass('qnt-clientes-select');
        }

        // Agora, vamos mostrar as divs de acordo com a quantidade de clientes
        // Esconde todas as divs
        $('.dois-cliente, .tres-cliente, .quatro-cliente').hide();

        // Exibe as divs com base na quantidade de clientes
        if (quantidadeClientes >= 2) {
            $('.dois-cliente').show();
        }
        if (quantidadeClientes >= 3) {
            $('.tres-cliente').show();
        }
        if (quantidadeClientes >= 4) {
            $('.quatro-cliente').show();
        }
    });
    
}

function selectPeriodo(){
    // Função para rolar até o horário correspondente ao clicar na div de período


         $('#horario-agendamento div').click(function() {
            console.log("click consultar horario");
            // Remove a classe select-periodo de todas as divs e adiciona apenas à clicada
            $('.horarios-periodo div').removeClass('select-periodo');
            $(this).addClass('select-periodo');

            // Obtém o período selecionado
            const periodo = $(this).text().trim().toLowerCase(); // "manhã", "tarde" ou "noite"

            // Verifica se o período é "noite" para exibir ou ocultar a div .msg-tarifa
            if (periodo === 'noite') {
                //$('.msg-tarifa').fadeIn(300); // Mostra a div com efeito de fade
            } else {
                //$('.msg-tarifa').fadeOut(300); // Oculta a div com efeito de fade
            }

            // Corrige a primeira letra da classe para corresponder ao HTML
            const horarioDiv = $('.horario-' + periodo.slice(0, 1) + periodo.slice(1)); // Ex: "horario-manha"
            const horarioSingle = $('.horario-single');

            // Verifica se a div de horário correspondente foi encontrada
            if (horarioDiv.length === 0) {
                console.error('Div de horário não encontrada para o período:', periodo);
                return; // Sai da função se não encontrar a div
            }

            // Exibe as informações de posição
            console.log('Posição da div selecionada:', horarioDiv.position());

            // Verifica a posição do horário correspondente e calcula a rolagem
            const offset = horarioDiv.position().left + horarioSingle.scrollLeft();
            const scrollPosition =
            offset -
            (horarioSingle.width() / 2) +
            (horarioDiv.outerWidth() / 2);

            console.log('Posição de rolagem calculada:', scrollPosition);

            // Rola suavemente até a posição desejada
            horarioSingle.animate(
                {
                    scrollLeft: scrollPosition,
                },
                200 // 500ms para a animação
            );


        });

     

}


function clickMeusAgendamentos(){
    $('.meus-agendamentos .btn-chamada a').click(function(){
        $('.modal-agendamento').fadeIn();
        console.log("click btn a");
        scrollPos = $(window).scrollTop(); // Salva a posição do scroll
        $('html, body').css({
            overflow: 'hidden',
            position: 'fixed',
            top: -scrollPos + 'px', // Define a posição fixa
            width: '100%'
        });
    });

    $('input[name=acao-validar-telefone-consulta]').click(function(){
        $('.agendamentos-js-login').fadeOut();
        $('.js-box-resumo-consulta-agendamentos').fadeIn();
    });

    $('.acao-editar-cadastro-consulta').click(function(){
        // Exibe o form-informacoes-cliente com efeito de slide
        $('.form-login-consulta').css({
          position: 'static',
          transform: 'translate(0,0)',
          left: '0',
          top: '0',
          marginBottom: '20px'
        });

        $('.form-editar-cadastro').slideDown(300);
    });

    $('.js-btn-editar-servico-consultar .btn-chamada a').on('click', function(event) {
        event.preventDefault(); // Impede a ação padrão do link
        $('.modal-servicos-agendados').fadeIn();
        $('.js-box-resumo-consulta-agendamentos').css('display','none');
    });

    $('.js-btn-editar-servico-agenda .btn-chamada a').on('click', function(event) {
        event.preventDefault(); // Impede a ação padrão do link
        $('.js-box-pagamento-agenda').css('display','none');
        $('.modal-agenda-servicos').fadeIn();
    });
}

// Função para converter "hh:mm" para minutos
function converterParaMinutos(duracao) {
    let [horas, minutos] = duracao.split(":").map(Number);
    return (horas * 60) + minutos;
}

function calcularTotalMinutosServicos() {
    let totalMinutos = 0;

    // Acessa os serviços selecionados armazenados no localStorage
    const servicosSelecionados = JSON.parse(localStorage.getItem('servicosSelecionadosAgenda'));
    
    // Itera sobre os serviços selecionados
    for (let key in servicosSelecionados) {
        const servico = servicosSelecionados[key];
        const duracao = servico.duracao; // Duração no formato "hh:mm"
        const minutos = converterParaMinutos(duracao); // Converte para minutos
        totalMinutos += minutos;
    }

    console.log("Total de minutos de todos os serviços selecionados:", totalMinutos);

    return totalMinutos;
    
}

// Função para validar se o tempo é suficiente e não excessivo
function validarTempoAgendamento() {
    // Obter o tempo total disponível selecionado pelo cliente
    const minutosTotaisSelecionados = parseInt(localStorage.getItem('minutosTotaisSelecionado'));

    // Caso não exista o tempo selecionado, consideramos que o cliente não selecionou o tempo
    if (!minutosTotaisSelecionados || minutosTotaisSelecionados <= 0) {
        return "Você precisa selecionar um horario para o serviço.";
    }

    // Calcular o tempo total dos serviços selecionados
    const minutosTotaisServicos = calcularTotalMinutosServicos();
    
     // Verifica se o tempo total dos serviços é maior que o tempo disponível
    if (minutosTotaisServicos > minutosTotaisSelecionados) {
        return "O tempo necessário para o atendimento é maior do que os horarios selecionado. Ajuste o tempo ou remova alguns serviços para continuar";
    }

    // Verifica se algum serviço tem mais tempo selecionado do que o necessário
    
    let limiteDiferenca = 0.35; // 30% a mais
    const margemFixa = 15; // Adiciona 15 minutos como margem fixa

    // Para tempos menores que 60 minutos, aplica uma diferença maior (exemplo: 50%)
    if (minutosTotaisServicos < 60) {
        limiteDiferenca = 0.50; // Permite 50% a mais
    }

    const limiteMaximo = minutosTotaisServicos * (1 + limiteDiferenca) + margemFixa;

    console.log("Limite máximo calculado:", limiteMaximo);

    if (minutosTotaisSelecionados > limiteMaximo) {
         return `O tempo selecionado (${minutosTotaisSelecionados} minutos) é muito maior do que o necessário para os serviços escolhidos (${limiteMaximo} minutos), Verifique se você selecionou os serviços corretamente. Caso nenhum serviço tenha sido escolhido, qualquer duração será considerada inválida.`;
    }

    console.log("Validação bem-sucedida. Tempo suficiente e adequado.");
    return null; // Se passar em todas as validações
}

function atualizarTempoEstimado() {
    // Recupera os serviços selecionados do localStorage
    const servicosSelecionadosDuracao = JSON.parse(localStorage.getItem('servicosSelecionadosAgenda'));

    // Verifica se há dados no localStorage
    if (!servicosSelecionadosDuracao) {
        console.log("Nenhum serviço selecionado encontrado no localStorage.");
        return; // Sai da função se não houver dados
    }

    let totalHoras = 0; // Total de horas
    let totalMinutos = 0; // Total de minutos

    // Itera pelos serviços selecionados
    for (let key in servicosSelecionadosDuracao) {
        const duracao = servicosSelecionadosDuracao[key].duracao; // Valor no formato hh:mm

        if (duracao) {
            const [horas, minutos] = duracao.split(':').map(Number); // Separa horas e minutos
            totalHoras += horas;
            totalMinutos += minutos;
        }
    }

    // Ajusta os minutos para converter em horas, se necessário
    totalHoras += Math.floor(totalMinutos / 60);
    totalMinutos = totalMinutos % 60;

    // Formata o tempo total no formato hh:mm
    const tempoTotalFormatado = `${totalHoras}:${totalMinutos.toString().padStart(2, '0')}`;

    // Atualiza dinamicamente o HTML
    const tempoEstimadoSpan = document.querySelector('.js-tempo-servico .tempo-estimado');
    if (tempoEstimadoSpan) {
        tempoEstimadoSpan.textContent = tempoTotalFormatado;
    } else {
        console.error("Elemento '.tempo-estimado' não encontrado no HTML.");
    }

    console.log("Tempo total estimado:", tempoTotalFormatado);
}

function limparInputsFormulario(formulario) {
    $(formulario).find('input[type="text"]').val('');
}

function ClickbtnAvancarAgendamento(){
    /*
    <div class="sucess js-sucess-modal-agenda-servicos">
        <p class="txt-p">Texto exemplo</p>
    </div><!--error-->

    <div class="error js-error-modal-agenda-servicos">
        <p class="txt-p">Texto exemplo</p>
    </div><!--error-->
    */

    $('.btn-avancar').click(function(){

        maskCupom();
        consultarCupom();
        verificarSeTemCredito();

        $('.js-modal-agenda-servicos').css('opacity','0.3');

        const existeDados = localStorage.getItem('servicosSelecionadosAgenda');

        if (!existeDados || existeDados === "{}"){
            exibirNotificacao('erro', 'Você precisa selecionar algum serviço para prosseguir!');
            $('.js-modal-agenda-servicos').css('opacity','1');
            return;
        }

        calcularTotalMinutosServicos()

        // Adiciona atraso para validação (1 segundo)
      
            const mensagemErro = validarTempoAgendamento(); // Recebe a mensagem de erro ou `null`
            // Valida o tempo de agendamento
            if (mensagemErro) {
                // Define o texto dinâmico
                exibirNotificacao('erro', mensagemErro)
                
                // Restaura a opacidade
                $('.js-modal-agenda-servicos').css('opacity', '1');

                // Oculta a mensagem de erro após 5 segundos
            

            } else {

                $('.js-modal-agenda-servicos').css('opacity', '1');
                // Validação passou, verifica o token no cookie

                const token = getCookie('token'); // Assumindo que o token está no cookie 'token'
                

                if (token) {
                    // Token encontrado no cookie, realiza a consulta no backend
                    $.ajax({
                        url: 'ajax/validacao-form.php', // Crie este arquivo PHP
                        method: 'POST',
                        data: { token: token },
                        beforeSend: function(){
                            $('.js-modal-agenda-servicos').addClass('carregando');
                        },
                        success: function(response) {
                        
                            $('.js-modal-agenda-servicos').removeClass('carregando');
                            if (response.tokenValido) {
                                // Token válido, recupera os dados do usuário e troca a box
                                // Aqui você deve usar response.dados para preencher as informações na próxima box
                                // Exemplo:
                                // $('#nome-usuario').text(response.dados.nome);
                                // $('#email-usuario').text(response.dados.email);
                                pegarDados(response.dados, response.endereco);
                                trocarBox('.js-modal-agenda-servicos', '.js-box-pagamento-agenda');
                                preencherServicosDinamicos();
                                preencherResumoDataHorario('.resumo-data-horario'); // Substitua '.sua-proxima-box' pelo seletor correto
                                atualizarTotal();
                            } else {
                                // Token inválido, remove o cookie e prossegue para o login normal
                                clearCookies(); // Limpa os cookies
                                trocarBox('.js-modal-agenda-servicos', '.login-agenda');
                                preencherServicosDinamicos();
                                preencherResumoDataHorario('.resumo-data-horario');
                                atualizarTotal();
                            }
                        },
                        error: function() {
                            exibirNotificacao('erro', 'Erro ao validar o token. Tente novamente.');
                            trocarBox('.js-modal-agenda-servicos', '.login-agenda');
                            preencherServicosDinamicos();
                            preencherResumoDataHorario('.resumo-data-horario');
                            atualizarTotal();
                        }
                    });


                } else {
                    // Nenhum token no cookie, prossegue para o login normal
                    trocarBox('.js-modal-agenda-servicos', '.login-agenda');
                    preencherServicosDinamicos();
                    preencherResumoDataHorario('.resumo-data-horario');
                    atualizarTotal();
                }

                // Garante que a mensagem de erro seja escondida, caso ainda esteja visível
                $('.js-error-modal-agenda-servicos').fadeOut();
            }
        // 0,8 segundo de atraso
        
    })


    $('.js-btn-editar-servico-consultar .btn-chamada a').on('click', function(event) {
        event.preventDefault(); // Impede a ação padrão do link
        console.log("click btn editar do box consultar");
    });
    
}

function preencherServicosDinamicos() {
    // Recupera os serviços do localStorage
    const servicosSelecionados = JSON.parse(localStorage.getItem("servicosSelecionadosAgenda")) || {};

    // Obtém os IDs únicos dos clientes
    const clientesIds = [...new Set(Object.values(servicosSelecionados).map(servico => servico.clienteId))];

    // Itera sobre os IDs e chama a função para preencher os serviços
    clientesIds.forEach(clienteId => {
        //preencherServicosCliente(clienteId);
    });
}

function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function trocarBox(boxAtual, boxNova, duracao = 400) {
    // Esconde a box atual com transição suave
    $(boxAtual).fadeOut(duracao, function () {
        // Após a animação de saída, exibe a nova box
        $(boxNova).fadeIn(duracao);
    });
}


function exibirNotificacao(tipo, mensagem) {
    // Define o seletor com base no tipo de notificação ('sucesso' ou 'erro')
    const seletor = tipo === 'sucesso' 
        ? '.js-sucess-modal-agenda-servicos' 
        : '.js-error-modal-agenda-servicos';

    // Garante que ambas as notificações sejam ocultadas antes de exibir a nova
    $(".js-sucess-modal-agenda-servicos, .js-error-modal-agenda-servicos").stop(true, true).fadeOut(0);

    // Atualiza o texto da notificação
    $(`${seletor} .txt-p`).text(mensagem);

    // Exibe a notificação com efeito fadeIn e define um tempo para sumir
    $(seletor).stop(true, true).fadeIn().delay(6000).fadeOut();
}

function obterClienteIdPorToken() {
    return new Promise((resolve, reject) => {
        // Recupera o token do localStorage
        let token = getCookie('token');

        if (!token) {
            reject('Token não encontrado no localStorage.');
            return;
        }

        // Faz a requisição AJAX ao PHP
        $.ajax({
            url: 'validacao-form.php', // URL do seu arquivo PHP
            type: 'POST',
            dataType: 'json', // Resposta esperada em JSON
            data: {
                recuperar_id_cliente: true, // Parâmetro que ativa a lógica no PHP
                cliente_id_token: token // Envia o token para validação
            },
            success: function(response) {
                if (response.tokenValido) {
                    // Retorna o cliente_id via resolve
                    resolve(response.cliente_id);
                } else {
                    // Retorna erro via reject
                    reject('Token inválido ou expirado.');
                }
            },
            error: function(xhr, status, error) {
                reject('Erro na requisição AJAX: ' + error);
            }
        });
    });
}

function clickBtnDepoimento(){
    $('.btn-depoimento a').click(function(){
        $('.modal-depoimento').fadeIn();
        scrollPos = $(window).scrollTop(); // Salva a posição do scroll
        $('html, body').css({
            overflow: 'hidden',
            position: 'fixed',
            top: -scrollPos + 'px', // Define a posição fixa
            width: '100%'
        });
        $('.depoimentos-js-login').fadeIn();
    })
    $('input[name=acao-validar-telefone-depoimento]').click(function(){
        console.log("click acao-depoimento");
    });

    $('input[name=acao-validar-telefone-depoimento]').click(function(){
        // Exibe o form-informacoes-cliente com efeito de slide
        $('.form-login-depoimento').css({
          position: 'static',
          transform: 'translate(0,0)',
          left: '0',
          top: '0',
          marginBottom: '20px'
        });

        $('.form-preencher-depoimento').slideDown(300);
    });

}