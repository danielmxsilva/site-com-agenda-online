$(document).ready(function() {

    carregarLocalStorage();
    atualizarResumoSelecao();

    clickDia();
    
    fecharBoxModal();
    clickQuantidadeServico();
    selectPeriodo();
    scrollParaPeriodo();
    clickMeusAgendamentos();
    ClickbtnAvancarAgendamento();
    clickBtnDepoimento();
    slideSelect();

   
    selectServicoAgenda();

    //deleteItemIcone();
    
});

function clickDia() {
    $('.dia').click(function(e) {
        if (!$(this).hasClass('desativado')) {

            if ($(this).find('.valor-especial').length > 0) {
                console.log("Este dia possui tarifa especial.");
                
                // Adiciona o HTML da tarifa especial na .wraper-resumo antes de .selecao-single-total
                const tarifaEspecial = `
                    <div class="selecao-single flex box-tarifa-especial">
                        <div class="txt-p">
                            <span class="p-single">Tarifa Especial</span>
                        </div>
                        <div class="duracao">
                            <span class="color-p"></span>
                        </div>
                        <div class="preco-lixeira">
                            <span class="preco-single">R$14,99</span>
                        </div>
                    </div>
                `;
                $('.wraper-resumo .selecao-single-total').before(tarifaEspecial);

                atualizarTotal(); // Atualiza o total após a adição
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
        }

    });
}

// Objeto global para armazenar os serviços selecionados
const servicosSelecionadosAgenda = {};

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

        // Adiciona ou remove o serviço do objeto global
        if (checked) {
            servicosSelecionadosAgenda[checkboxId] = servicoInfo;
        } else {
            delete servicosSelecionadosAgenda[checkboxId];
        }

        // Atualiza o localStorage com o estado atual
        localStorage.setItem('servicosSelecionadosAgenda', JSON.stringify(servicosSelecionadosAgenda));

        console.log('Serviços Selecionados agenda:', servicosSelecionadosAgenda); // Exibe o estado atual
        atualizarResumoSelecao(checked, checkboxId); // Atualiza o resumo
    });
}

// Função para atualizar o resumo de serviços
function atualizarResumoSelecao(checked, checkboxId) {
    $(".agenda-resumo-cliente-1").each(function () {
        $(this).find(".selecao-single:not(.selecao-single-total)").filter(function () {
            return $(this).find(".p-single").text().trim() !== "Tarifa Especial";
        }).remove();
    });

    $(".agenda-resumo-cliente-2").each(function () {
        $(this).find(".selecao-single:not(.selecao-single-total)").filter(function () {
            return $(this).find(".p-single").text().trim() !== "Tarifa Especial";
        }).remove();
    });

    $(".agenda-resumo-cliente-3").each(function () {
        $(this).find(".selecao-single:not(.selecao-single-total)").filter(function () {
            return $(this).find(".p-single").text().trim() !== "Tarifa Especial";
        }).remove();
    });

    $(".agenda-resumo-cliente-4").each(function () {
        $(this).find(".selecao-single:not(.selecao-single-total)").filter(function () {
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
        const novoServicoHTML = adicionarServico(true, servicoNome, duracao, preco, id);

        // Adiciona o HTML ao contêiner
        if (novoServicoHTML) {
            $container.append(novoServicoHTML);
        }
    }

    // Atualiza o total de serviços selecionados
    atualizarTotal();

    // Reorganiza o resumo (coloca Tarifa Especial antes do total)
    organizarResumoSelecao();
}

// Função para adicionar serviço
function adicionarServico(checked, nomeServico, duracaoServico, precoServico, checkboxId) {

    // Extrair o ID do serviço sem espaços e em minúsculas
      const serviceId = checkboxId.split(' ')[0].toLowerCase();

      // Buscar elemento servico-single pelo ID
      //const $servicoSingle = $(`.servico-single[id="${serviceId}"]`);
      const $servicoSingle = $(`.servico-single input[type="checkbox"][id="${serviceId}"]`).closest('.servico-single');

      console.log('meu servioSingle ', `.servico-single[id="${serviceId}"]`);

        // Verificar se o elemento foi encontrado
        if ($servicoSingle.length === 0) {
          console.error('Elemento servico-single não encontrado para o checkboxId:', serviceId);
          // ...
        }else{
            console.error('ENCONTREI O SERVICO SINGLE!!!!!');
            console.log('Servico Single', $servicoSingle);
        }
      // Verificar se o elemento foi encontrado


    if (checked) {

        // Adiciona o serviço à lista
        const novaSelecao = `
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

        // Adiciona o novo serviço no DOM
        // Insere 'novaSelecao' antes da última 'selecao-single-total'
        //$('.wraper-resumo .selecao-single-total').last().before(novaSelecao);
       // Reposiciona a div box-tarifa-especial, se ela existir
/*if ($('.wraper-resumo .box-tarifa-especial').length > 0) {
    const tarifaEspecial = $('.wraper-resumo .box-tarifa-especial'); // Seleciona a div existente
   // Verifica se a div já está antes de .selecao-single-total
    if (!tarifaEspecial.next('.selecao-single-total').length) {
        $('.wraper-resumo .selecao-single-total').before(tarifaEspecial); // Move para antes da selecao-single-total
    }
}*/
        // Primeiro, reposiciona a box-tarifa-especial caso ela exista/*

        /*
        if ($('.wraper-resumo .box-tarifa-especial').length > 0) {
            const tarifaEspecial = $('.wraper-resumo .box-tarifa-especial'); // Seleciona a div existente

            // Verifica se a box-tarifa-especial já está posicionada corretamente
            if (!tarifaEspecial.prev('.selecao-single-total').length) {
                // Move a box-tarifa-especial antes de .selecao-single-total
                $('.wraper-resumo .selecao-single-total').before(tarifaEspecial);
            }
        }

        // Em seguida, adiciona novaSelecao antes da última selecao-single-total
        if ($('.wraper-resumo .selecao-single-total').length > 0) {
            $('.wraper-resumo .selecao-single-total').last().before(novaSelecao);
        } else {
            // Caso .selecao-single-total não exista (cenário improvável), adiciona ao final do .wraper-resumo
            $('.wraper-resumo').append(novaSelecao);
        }*/

// Adiciona o novo serviço à lista
$('.wraper-resumo .selecao-single-total').last().before(novaSelecao);
        // Atualiza o total de serviços selecionados
        atualizarTotal();

        // Delegação de evento para ícones de lixeira
        $('.wraper-resumo').on('click', '.icone-lixeira', function() {
              const $removedService = $(this).closest('.selecao-single');
              $removedService.addClass('deletando');
              const removedServiceId = $removedService.data('id');
              const overlay = $removedService.find('.overlay-delete'); // Seleciona a barra vermelha

              // Anima a barra vermelha para preencher o elemento
                overlay.css({
                    width: '100%',     // Define a largura como 100% do elemento
                    right: '0',        // Garante que o preenchimento parta do lado direito
                    border: '2px solid rgba(198, 155, 155, 0.8)',
                    borderRadius: '10px',
                });
              
              delete servicosSelecionadosAgenda[removedServiceId];
              localStorage.setItem('servicosSelecionadosAgenda', JSON.stringify(servicosSelecionadosAgenda));
             
              // Remove the item from the resumo in the DOM
              // Aguarda a duração da animação antes de remover o elemento
                setTimeout(() => {
                    $removedService.fadeOut(300, function () {
                        //$(this).remove(); // Remove do DOM após o fadeOut
                        $removedService.remove();
                        atualizarTotal();
                    });
                }, 500); // 500ms é o tempo da animação da barra
              

               // Encontrar o elemento correspondente na lista principal
              const $correspondingService = $(`.servico-single input[type="checkbox"][id="${removedServiceId}"]`).closest('.servico-single');

              // Verificar se o elemento foi encontrado
              if ($servicoSingle.length === 0) {
                console.error('Elemento servico-single não encontrado para o checkboxId:', serviceId);
                console.error('serviceId após tratamento:', serviceId);
                // Verificar se o elemento existe no DOM
                const elementExists = document.getElementById(serviceId);
                console.log('Elemento existe no DOM:', elementExists);
                //return;
              }else{
                console.log('meu servioSingle ', `.servico-single[id="${serviceId}"]`);
              }

              console.log('minha const correspondingService', $correspondingService);
              
              // Find the corresponding `servico-single` element
              /*
              const $servicoSingle = $('.servico-single').filter(function() {
                return $(this).find('.checkbox-servico').attr('id') === checkboxId;
              });*/

              // Atualizar estilos e estado do checkbox apenas para o item correspondente
              $correspondingService.removeClass('selected');
              $correspondingService.find('.checkbox-servico').prop('checked', false);
              $correspondingService.find('.select-icon').hide();

              // Deselect the service, remove the 'selected' class, and hide the icon
              // Encontrar o elemento pai com a classe 'selected'
              //const $selectedElement = $servicoSingle.closest('.selected');

              // Remover a classe 'selected' e desmarcar o checkbox
             // $selectedElement.removeClass('selected');
             // $selectedElement.find('.checkbox-servico').prop('checked', false);
             // $selectedElement.find('.select-icon').hide();
              /*
              $servicoSingle.removeClass('selected');
              $servicoSingle.find('.select-icon').hide();
              $servicoSingle.find('.checkbox-servico').prop('checked', false);*/

              //console.log(checkboxId);
              // Update the total
              atualizarTotal();
        });

        return novaSelecao;

    } else {
        // Remove o serviço da lista
        $('.wraper-resumo .selecao-single').filter(function() {
            return $(this).find('.p-single').text() === nomeServico;
        }).remove(); // Remove o serviço correspondente
        atualizarTotal(); // Atualiza o total após remoção
        return null;
    }
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
    console.log("entrei no atualizarTotal")
    let total1 = 0;
    let totalDuracao1 = 0;
    let total2 = 0;
    let totalDuracao2 = 0;
    let total3 = 0;
    let totalDuracao3 = 0;
    let total4 = 0;
    let totalDuracao4 = 0;

   // console.error($(".wraper-resumo .agenda-resumo-cliente-1 .selecao-single").length);


    $(".agenda-resumo-cliente-1 .selecao-single").each(function () {
        const precoTexto = $(this).find(".preco-single").text().replace("R$", "").replace(",", ".");
        const preco = parseFloat(precoTexto);
        if (!isNaN(preco)) {
            total1 += preco;
        }

        const duracaoTexto = $(this).find(".duracao span").text().trim();
        const duracaoMinutos = converterDuracaoParaMinutos(duracaoTexto);
        totalDuracao1 += duracaoMinutos;
    });

    $(".agenda-resumo-cliente-2 .selecao-single").each(function () {
        const precoTexto = $(this).find(".preco-single").text().replace("R$", "").replace(",", ".");
        const preco = parseFloat(precoTexto);
        if (!isNaN(preco)) {
            total2 += preco;
        }

        const duracaoTexto = $(this).find(".duracao span").text().trim();
        const duracaoMinutos = converterDuracaoParaMinutos(duracaoTexto);
        totalDuracao2 += duracaoMinutos;
    });

    $(".agenda-resumo-cliente-3 .selecao-single").each(function () {
        const precoTexto = $(this).find(".preco-single").text().replace("R$", "").replace(",", ".");
        const preco = parseFloat(precoTexto);
        if (!isNaN(preco)) {
            total3 += preco;
        }

        const duracaoTexto = $(this).find(".duracao span").text().trim();
        const duracaoMinutos = converterDuracaoParaMinutos(duracaoTexto);
        totalDuracao3 += duracaoMinutos;
    });

    $(".agenda-resumo-cliente-4 .selecao-single").each(function () {
        const precoTexto = $(this).find(".preco-single").text().replace("R$", "").replace(",", ".");
        const preco = parseFloat(precoTexto);
        if (!isNaN(preco)) {
            total4 += preco;
        }

        const duracaoTexto = $(this).find(".duracao span").text().trim();
        const duracaoMinutos = converterDuracaoParaMinutos(duracaoTexto);
        totalDuracao4 += duracaoMinutos;
    });

    const totalContainer1 = $(".agenda-resumo-cliente-1 .selecao-single-total");
    totalContainer1.html(`
        <div class="txt-p"><span class="color-p">Total</span></div>
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock"></i> ${converterMinutosParaHoras(totalDuracao1)}</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$${total1.toFixed(2).replace(".", ",")}</span>
        </div>
    `);

    const totalContainer2 = $(".agenda-resumo-cliente-2 .selecao-single-total");
    totalContainer2.html(`
        <div class="txt-p"><span class="color-p">Total</span></div>
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock"></i> ${converterMinutosParaHoras(totalDuracao2)}</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$${total2.toFixed(2).replace(".", ",")}</span>
        </div>
    `);

    const totalContainer3 = $(".agenda-resumo-cliente-3 .selecao-single-total");
    totalContainer3.html(`
        <div class="txt-p"><span class="color-p">Total</span></div>
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock"></i> ${converterMinutosParaHoras(totalDuracao3)}</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$${total3.toFixed(2).replace(".", ",")}</span>
        </div>
    `);

    const totalContainer4 = $(".agenda-resumo-cliente-4 .selecao-single-total");
    totalContainer4.html(`
        <div class="txt-p"><span class="color-p">Total</span></div>
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock"></i> ${converterMinutosParaHoras(totalDuracao4)}</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$${total4.toFixed(2).replace(".", ",")}</span>
        </div>
    `);

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
    Object.keys(servicosSelecionadosAgenda).forEach(key => delete servicosSelecionadosAgenda[key]);
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
    $('.wraper-resumo .selecao-single').remove();
    $('.selecao-single-total').html(`
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
    $('.js-box-resumo-consulta-agendamentos').hide();
    $('.modal-depoimento').hide();
    console.log("Modais extras escondidos");

    // Mostrar o modal inicial de serviços
    $('.modal-agenda-servicos').show();
    $('.js-modal-agenda-servicos').show();
    $('.agendamentos-js-login').show();
    console.log("Modal inicial exibido");

    // Ajustar estilos dos formulários
    $('.form-login-agenda, .form-login-consulta, .form-login-depoimento').css({
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
    $('.js-error-modal-agenda-servicos').fadeOut();

    $('.js-tempo-servico .tempo-estimado').html('0:00');

    } catch (error){
        console.error("Erro na função closeModal:", error);
    }


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
     $('#horario-consultar div').click(function() {
        console.log("click consultar horario");
        // Remove a classe select-periodo de todas as divs e adiciona apenas à clicada
        $('.horarios-periodo div').removeClass('select-periodo');
        $(this).addClass('select-periodo');

        // Obtém o período selecionado
        const periodo = $(this).text().trim().toLowerCase(); // "manhã", "tarde" ou "noite"

        // Verifica se o período é "noite" para exibir ou ocultar a div .msg-tarifa
        if (periodo === 'noite') {
            $('.msg-tarifa').fadeIn(300); // Mostra a div com efeito de fade
        } else {
            $('.msg-tarifa').fadeOut(300); // Oculta a div com efeito de fade
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
        const marginHorarios = 10; // A margem que você tem nas divs de horário
        const paddingHorariosSingle = parseInt(horarioSingle.css('padding-left')) + parseInt(horarioSingle.css('padding-right')); // Padding total do horairo-single

         // Exibe os cálculos para depuração
        console.log('Offset:', offset);
        console.log('Largura do horarioSingle:', horarioSingle.width());
        console.log('ScrollLeft Atual:', horarioSingle.scrollLeft());

        // Cálculo para centralizar a div no meio
        const scrollPosition = offset - (horarioSingle.width() / 2) + (horarioDiv.outerWidth() / 2) + marginHorarios / 2 - paddingHorariosSingle;

        console.log('Posição de rolagem calculada:', scrollPosition);

        // Rola suavemente até a posição desejada
        horarioSingle.animate({
            scrollLeft: scrollPosition
        }, 500); // 500ms para a animação
       });
}

function scrollParaPeriodo(){
    // Ao clicar em um dos períodos (manhã, tarde, noite)
   $('#horario-agendamento div').click(function() {
        console.log("click agendamento horario");
        // Remove a classe select-periodo de todas as divs e adiciona apenas à clicada
        $('.horarios-periodo div').removeClass('select-periodo');
        $(this).addClass('select-periodo');

        // Obtém o período selecionado
        const periodo = $(this).text().trim().toLowerCase(); // "manhã", "tarde" ou "noite"

        // Verifica se o período é "noite" para exibir ou ocultar a div .msg-tarifa
        if (periodo === 'noite') {
            $('.msg-tarifa').fadeIn(300); // Mostra a div com efeito de fade
        } else {
            $('.msg-tarifa').fadeOut(300); // Oculta a div com efeito de fade
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
        const marginHorarios = 10; // A margem que você tem nas divs de horário
        const paddingHorariosSingle = parseInt(horarioSingle.css('padding-left')) + parseInt(horarioSingle.css('padding-right')); // Padding total do horairo-single

         // Exibe os cálculos para depuração
        console.log('Offset:', offset);
        console.log('Largura do horarioSingle:', horarioSingle.width());
        console.log('ScrollLeft Atual:', horarioSingle.scrollLeft());

        // Cálculo para centralizar a div no meio
        const scrollPosition = offset - (horarioSingle.width() / 2) + (horarioDiv.outerWidth() / 2) + marginHorarios / 2 - paddingHorariosSingle;

        console.log('Posição de rolagem calculada:', scrollPosition);

        // Rola suavemente até a posição desejada
        horarioSingle.animate({
            scrollLeft: scrollPosition
        }, 500); // 500ms para a animação
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
        return "Você precisa selecionar um tempo para o serviço.";
    }

    // Calcular o tempo total dos serviços selecionados
    const minutosTotaisServicos = calcularTotalMinutosServicos();
    
     // Verifica se o tempo total dos serviços é maior que o tempo disponível
    if (minutosTotaisServicos > minutosTotaisSelecionados) {
        return "O tempo necessário para os serviços selecionados excede os horarios escolhidos. Por favor, revise sua seleção e escolha um tempo maior ou ajuste os serviços";
    }

    // Verifica se algum serviço tem mais tempo selecionado do que o necessário
    
    let limiteDiferenca = 0.30; // 30% a mais

    // Para tempos menores que 60 minutos, aplica uma diferença maior (exemplo: 50%)
    if (minutosTotaisServicos < 60) {
        limiteDiferenca = 0.50; // Permite 50% a mais
    }

    const limiteMaximo = minutosTotaisServicos * (1 + limiteDiferenca);

    console.log("Limite máximo calculado:", limiteMaximo);

    if (minutosTotaisSelecionados > limiteMaximo) {
         return `O tempo selecionado (${minutosTotaisSelecionados} minutos) é muito maior do que o necessário (${limiteMaximo} minutos).`;
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

        $('.js-modal-agenda-servicos').css('opacity','0.3');

        calcularTotalMinutosServicos()

        // Adiciona atraso para validação (1 segundo)
        setTimeout(() => {
            const mensagemErro = validarTempoAgendamento(); // Recebe a mensagem de erro ou `null`
            // Valida o tempo de agendamento
            if (mensagemErro) {
                // Define o texto dinâmico
                $('.js-error-modal-agenda-servicos .txt-p').text(mensagemErro);

                // Exibe a div de erro
                $('.js-error-modal-agenda-servicos').fadeIn();
                
                // Restaura a opacidade
                $('.js-modal-agenda-servicos').css('opacity', '1');

                // Oculta a mensagem de erro após 5 segundos
                setTimeout(() => {
                    $('.js-error-modal-agenda-servicos').fadeOut();
                }, 5000); // 5 segundos

            } else {
                // Se a validação passar, execute outras ações, como:
                $('.js-modal-agenda-servicos').css('display', 'none');
                $('.login-agenda').fadeIn();

                // Garante que a mensagem de erro seja escondida, caso ainda esteja visível
                $('.js-error-modal-agenda-servicos').fadeOut();
            }
        }, 800); // 0,8 segundo de atraso
        
    })

    $('.btn-concluir').click(function(){
        $('.modal-servicos-agendados').css('display','none');
        $('.js-box-resumo-consulta-agendamentos').fadeIn();

    })

    $('.acao-novo-cadastro').click(function(){
        $('.login-agenda').css('display','none');
        $('.js-box-pagamento-agenda').fadeIn();
    })

    $('.js-btn-editar-servico-consultar .btn-chamada a').on('click', function(event) {
        event.preventDefault(); // Impede a ação padrão do link
        console.log("click btn editar do box consultar");
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