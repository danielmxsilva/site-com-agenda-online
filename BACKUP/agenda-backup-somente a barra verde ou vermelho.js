$(document).ready(function() {
  // Lista de feriados nacionais fixos no Brasil (formato MM-DD)
  const feriadosNacionais = ["01-01", "04-21", "05-01", "09-07", "10-12", "11-02", "11-15", "12-25", "12-31"];

  // Função para formatar a data
  function formatarData(data) {
    const opcoes = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    return data.toLocaleDateString('pt-BR', opcoes);
  }

  // Função para verificar se é domingo ou feriado nacional
  function isDiaEspecial(data) {
    const diaSemana = data.getDay();
    const mesDia = `${String(data.getMonth() + 1).padStart(2, '0')}-${String(data.getDate()).padStart(2, '0')}`;
    return diaSemana === 0 || feriadosNacionais.includes(mesDia);
  }

  // Função para verificar disponibilidade
  function verificarDisponibilidade(data, callback) {
    const diaFormatado = data.toISOString().slice(0, 10); // Formato YYYY-MM-DD

    $.ajax({
      url: 'ajax/horarios.php', // Substitua pela sua URL
      type: 'GET',
      data: { data: diaFormatado },
      success: function(resposta) {
        // Chama o callback com a resposta do servidor
        callback(resposta.disponivel); // Acessando a propriedade 'disponivel'
         console.log(resposta);
      }
    });
  }

  // Criar a agenda
  function criarAgenda() {
    const hoje = new Date();
    const dias = [];

    // Calcular o domingo mais recente
    const diaDaSemana = hoje.getDay();
    const diasAteDomingo = diaDaSemana;

    // Preencher a agenda com 28 dias (4 semanas) a partir do último domingo
    for (let i = -diasAteDomingo; i < -diasAteDomingo + 28; i++) {
      const data = new Date(hoje);
      data.setDate(hoje.getDate() + i);
      dias.push(data);
    }

    // Criar blocos de 7 dias
    for (let i = 0; i < dias.length; i += 7) {
      const semanaContainer = $('<div class="semana-container"></div>');

      // Obter o mês e o ano do primeiro dia da semana
      const primeiroDiaDaSemana = dias[i];
      const mes = primeiroDiaDaSemana.toLocaleString('pt-BR', { month: 'long' });
      const ano = primeiroDiaDaSemana.getFullYear();

      const mesAnoParagrafo = $('<p class="mes-ano"></p>').text(`${mes} de ${ano}`);
      semanaContainer.append(mesAnoParagrafo);

      const bloco = $('<div class="bloco"></div>');
      for (let j = 0; j < 7 && (i + j) < dias.length; j++) {
        const dia = dias[i + j];
        const diaDiv = $('<div class="dia"></div>');

        const diaFormatado = String(dia.getDate()).padStart(2, '0');
        const nomeDiaDaSemana = dia.toLocaleDateString('pt-BR', { weekday: 'long' });

        // Adiciona a div vazia para classe de disponibilidade
        const disponibilidadeDiv = $('<div class="disponibilidade"></div>');

        diaDiv.html(`<span class="dia-semana">${nomeDiaDaSemana}</span> <span class="data">${diaFormatado}/${String(dia.getMonth() + 1).padStart(2, '0')}/${dia.getFullYear()}</span>`);
        diaDiv.append(disponibilidadeDiv); // Adiciona a div de disponibilidade à div do dia

        diaDiv.data('data', dia); // Armazenar a data para referência

        // Verifica se o dia é especial (domingo ou feriado)
        if (isDiaEspecial(dia)) {
          const valorEspecialDiv = $('<div class="valor-especial"></div>');
          diaDiv.append(valorEspecialDiv); // Adiciona a div de valor especial
        }

        // Se o dia for no passado, adiciona a classe 'desativado'
        if (dia < hoje) {
          diaDiv.addClass('desativado');
        } else {
          // Verificar disponibilidade no banco de dados apenas se não estiver desativado
          verificarDisponibilidade(dia, function(disponivel) {
            if (!diaDiv.hasClass('desativado')) { // Verifica se não está desativado
              if (disponivel) {
                disponibilidadeDiv.addClass('disponivel');
              } else {
                disponibilidadeDiv.addClass('indisponivel');
              }
            }
          });

          // Evento de clique para selecionar um dia futuro
          diaDiv.on('click', function() {
            $('.dia').removeClass('selected'); // Limpa a seleção
            $(this).addClass('selected'); // Seleciona o dia clicado
          });
        }

        bloco.append(diaDiv);
      }

      semanaContainer.append(bloco);
      $('#calendario').append(semanaContainer);
    }

    // Selecionar o dia atual
    $('.dia').each(function() {
      const dataDia = $(this).data('data');
      if (dataDia.toDateString() === hoje.toDateString()) {
        $(this).addClass('selected');
      }
    });
  }

  criarAgenda();
});
