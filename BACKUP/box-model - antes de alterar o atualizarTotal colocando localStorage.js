$(document).ready(function() {
    clickDia();
    fecharBoxModal();
    atualizarTotal();
    checkBox();
    slideServico();
    horarioSlide();
});

let total = 0; // Variável para armazenar o total

let scrollPos = 0; // Variável para guardar a posição do scroll

function clickDia() {
    $('.dia').click(function(e) {
        if (!$(this).hasClass('desativado')) {

            if ($(this).find('.valor-especial').length > 0) {
                console.log("Este dia possui tarifa especial.");
                
                // Adiciona o HTML da tarifa especial na .wraper-resumo antes de .selecao-single-total
                const tarifaEspecial = `
                    <div class="selecao-single flex">
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

function fecharBoxModal() {
    $('.box-modal').on('click', function(e) {
        if ($(e.target).is('.box-modal')) {
            closeModal();
        }
    });

    $('.close-btn').on('click', function(e) {
        closeModal();
        e.stopPropagation();
    });
}

function closeModal() {
    $('.box-modal').fadeOut();
    $('html, body').css({
        overflow: '',
        position: '',
        top: ''
    });
    $(window).scrollTop(scrollPos); // Retorna a posição original do scroll

    $('.wraper-resumo .selecao-single').remove();

    total = 0;
    // Atualiza o HTML com a estrutura solicitada
    const totalContainer = $('.selecao-single-total');
    totalContainer.html(`
        <div class="txt-p"><span class="color-p">Total</span></div> 
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock"></i> 0:00</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$0,00</span>
        </div>
    `);
    $('.checkbox-servico').prop('checked', false).closest('.servico-single').removeClass('selected');

}


function checkBox() {
    $('.servico-single').click(function() {
        const checkbox = $(this).find('.checkbox-servico');
        const duracaoServico = $(this).find('input[name="duracao"]').val(); // Pega a duração do serviço
        const isManicure = checkbox.attr('id') === 'manicure';
        const isManicureCorte = checkbox.attr('id') === 'manicure-corte' || checkbox.attr('id') === 'manicure-esmaltacao';
        const isPedicure = checkbox.attr('id') === 'pedicure';
        const isPedicureCorte = checkbox.attr('id') === 'pedicure-corte' || checkbox.attr('id') === 'pedicure-esmaltacao';
        const isLimpeza = checkbox.attr('id').startsWith('limpeza');
        const isLimpezaSimples = checkbox.attr('id') === 'limpeza-simples';
        const isAlongamento = checkbox.attr('id').startsWith('along');
        const isAlongamentoSimples = checkbox.attr('id') === 'along-simples';

        // Alterna o estado da checkbox e adiciona/remove a classe 'selected'
        const checked = !checkbox.prop('checked');
        checkbox.prop('checked', checked);
        $(this).toggleClass('selected', checked);

        // Lógica de seleção única entre serviços gerais e específicos
        // [Restante do seu código já existente]

        // Adiciona ou remove o serviço na seleção
        const nomeServico = $(this).find('.p-single').contents().get(0).nodeValue.trim(); // Pega o texto antes da span
        const precoServico = $(this).find('.preco-txt').text(); // Pega o preço

        console.log(`Nome do Serviço: ${nomeServico}`);
        console.log(`Preço do Serviço: ${precoServico}`);
        console.log(`Duração do Serviço: ${duracaoServico}`); // Debug para duração

        if (checked) {
            // Adiciona o serviço à lista
            const novaSelecao = `
                <div class="selecao-single flex">
                    <div class="txt-p">
                        <span class="p-single">${nomeServico}</span>
                    </div>
                    <div class="duracao">
                        <span class="color-p"><i class="fa-solid fa-clock"></i> ${duracaoServico}</span>
                    </div>
                    <div class="preco-lixeira">
                        <span class="preco-single">${precoServico}</span>
                        <i class="icone-lixeira fa-solid fa-trash-can"></i>
                    </div>
                </div>
            `;
            $('.wraper-resumo .selecao-single-total').last().before(novaSelecao);

            atualizarTotal(); // Chama a função para atualizar o total
            $('.icone-lixeira').click(function() {
                console.log("Lixeira clicada"); // Verifica se o clique é detectado
                $(this).closest('.selecao-single').remove(); // Remove a div pai
                atualizarTotal(); // Atualiza o total após a remoção
            });
        } else {
            // Remove o serviço da lista
            $('.wraper-resumo .selecao-single').filter(function() {
                return $(this).find('.txt-p .p-single').text() === nomeServico;
            }).remove(); // Remove o serviço correspondente
            atualizarTotal(); // Chama a função para atualizar o total
        }


        // Lógica de seleção única entre serviços gerais e específicos
        if (isManicureCorte && checked) {
            // Desmarca o serviço geral de manicure se um serviço específico de manicure estiver selecionado
            $('#manicure').prop('checked', false).closest('.servico-single').removeClass('selected');
        } else if (isManicure && checked) {
            // Se o serviço geral de manicure for selecionado, desmarca os específicos
            $('.checkbox-servico').filter('[id^="manicure-"]').not(checkbox).prop('checked', false).closest('.servico-single').removeClass('selected');
        }

        if (isPedicureCorte && checked) {
            // Desmarca o serviço geral de pedicure se um serviço específico de pedicure estiver selecionado
            $('#pedicure').prop('checked', false).closest('.servico-single').removeClass('selected');
        } else if (isPedicure && checked) {
            // Se o serviço geral de pedicure for selecionado, desmarca os específicos
            $('.checkbox-servico').filter('[id^="pedicure-"]').not(checkbox).prop('checked', false).closest('.servico-single').removeClass('selected');
        }

        // Lógica para permitir apenas um serviço de limpeza
        if (isLimpeza && checked) {
            $('.checkbox-servico').filter('[id^="limpeza"]').not(checkbox).prop('checked', false).closest('.servico-single').removeClass('selected');
        }

        // Lógica para permitir apenas um serviço de alongamento
        if (isAlongamento && checked) {
            $('.checkbox-servico').filter('[id^="along"]').not(checkbox).prop('checked', false).closest('.servico-single').removeClass('selected');
        }

        // Lógica para mostrar ou esconder a box-de-servicos
        const boxServicosSelect = $(this).closest('.box-servicos-select');
        const boxDeServicos = boxServicosSelect.find('.box-de-servicos');

        if (boxServicosSelect.find('.servico-single.selected').length > 0) {
            boxDeServicos.slideDown(); // Exibe a box-de-serviços
            boxDeServicos.css('display', 'flex'); // Garante que a box-de-serviços tenha o display flex
        } else {
            boxDeServicos.slideUp(); // Oculta a box-de-serviços
        }
    });
}

function atualizarTotal() {
    total = 0; // Reseta o total a cada atualização
    let totalDuracao = 0; // Variável para armazenar a duração total
    // Percorre cada serviço selecionado para calcular o total
    $('.wraper-resumo .selecao-single').each(function() {
        const precoTexto = $(this).find('.preco-single').text().replace('R$', '').replace(',', '.'); // Remove o símbolo de R$ e troca vírgula por ponto
        const preco = parseFloat(precoTexto); // Converte para número
        if (!isNaN(preco)) {
            total += preco; // Adiciona ao total
        }

         // Calcula a duração total
        const duracaoTexto = $(this).find('.duracao span').text().trim(); // Pega a duração
        const duracaoMinutos = converterDuracaoParaMinutos(duracaoTexto); // Converte para minutos
        totalDuracao += duracaoMinutos; // Soma a duração total
    });

    // Salva totalDuracao no localStorage
    localStorage.setItem('totalDuracao', totalDuracao);
    
    // Atualiza o HTML com a estrutura solicitada
    const totalContainer = $('.selecao-single-total');
    totalContainer.html(`
        <div class="txt-p"><span class="color-p">Total</span></div> 
        <div class="duracao">
            <span class="color-p"><i class="fa-solid fa-clock"></i> ${converterMinutosParaHoras(totalDuracao)}</span>
        </div>
        <div class="preco-lixeira">
            <span class="preco-total color-p">R$${total.toFixed(2).replace('.', ',')}</span>
        </div>
    `);

}

function slideServico() {
    $('.txt-servicos').click(function() {
        const boxDeServicos = $(this).closest('.box-servicos-select').find('.box-de-servicos'); // Seleciona o box-de-serviços atual
        boxDeServicos.slideToggle().css('display', function() {
            return $(this).is(':visible') ? 'flex' : 'none'; // Mantém o display: flex quando visível
        });
    });
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

function horarioSlide(){
    // Função para rolar até o horário correspondente ao clicar na div de período
     $('.horarios-periodo div').click(function() {
        // Remove a classe select-periodo de todas as divs e adiciona apenas à clicada
        $('.horarios-periodo div').removeClass('select-periodo');
        $(this).addClass('select-periodo');

        // Obtém o período selecionado
        const periodo = $(this).text().trim().toLowerCase(); // "manhã", "tarde" ou "noite"

        // Corrige a primeira letra da classe para corresponder ao HTML
        const horarioDiv = $('.horario-' + periodo.slice(0, 1) + periodo.slice(1)); // Ex: "horario-manha"
        const horarioSingle = $('.horario-single');

        // Verifica se a div de horário correspondente foi encontrada
        if (horarioDiv.length === 0) {
            console.error('Div de horário não encontrada para o período:', periodo);
            return; // Sai da função se não encontrar a div
        }

        // Verifica a posição do horário correspondente e calcula a rolagem
        const offset = horarioDiv.position().left + horarioSingle.scrollLeft();
        const marginHorarios = 10; // A margem que você tem nas divs de horário
        const paddingHorariosSingle = parseInt(horarioSingle.css('padding-left')) + parseInt(horarioSingle.css('padding-right')); // Padding total do horairo-single

        // Cálculo para centralizar a div no meio
        const scrollPosition = offset - (horarioSingle.width() / 2) + (horarioDiv.outerWidth() / 2) + marginHorarios / 2 - paddingHorariosSingle;

        // Rola suavemente até a posição desejada
        horarioSingle.animate({
            scrollLeft: scrollPosition
        }, 500); // 500ms para a animação
       });
}