$(document).ready(function() {
  const feriadosNacionais = ["01-01", "04-21", "05-01", "09-07", "10-12", "11-02", "11-15", "12-25", "12-31"];

  function isDiaEspecial(data) {
    const diaSemana = data.getDay();
    const mesDia = `${String(data.getMonth() + 1).padStart(2, '0')}-${String(data.getDate()).padStart(2, '0')}`;
    return diaSemana === 0 || feriadosNacionais.includes(mesDia);
  }

  function verificarDisponibilidade(data, callback) {
    const diaFormatado = data.toISOString().slice(0, 10);

    $.ajax({
      url: 'ajax/horarios.php',
      type: 'GET',
      data: { data: diaFormatado },
      success: function(resposta) {
        callback(resposta.horarios); // Retorna os horários disponíveis
      }
    });
  }

  function atualizarBarraDisponibilidade(diaDiv, horariosDisponiveis) {
    const totalHorarios = 13; // Total de horários possíveis no dia
    const qtdDisponiveis = horariosDisponiveis.length;
    const porcentagem = (qtdDisponiveis / totalHorarios) * 100;
    const disponibilidadeDiv = diaDiv.find('.disponibilidade');

    // Ajuste da largura e cor conforme a disponibilidade
    disponibilidadeDiv.css('width', `${porcentagem}%`);

    if (porcentagem === 0) {
      diaDiv.addClass('desativado');
      disponibilidadeDiv.hide();
    } else if (porcentagem <= 30) {
      disponibilidadeDiv.css('background-color', '#FF677D'); // Vermelho para poucos horários
    } else if (porcentagem <= 70) {
      disponibilidadeDiv.css('background-color', '#FFD700'); // Amarelo para metade dos horários
    } else {
      disponibilidadeDiv.css('background-color', '#3FCB4D'); // Verde para muitos horários
    }
  }

  function atualizarHorariosDisponiveis(diaSelecionado) {
    verificarDisponibilidade(diaSelecionado, function(horariosDisponiveis) {
      // Limpar os horários atuais das divs de manhã, tarde e noite
      $('.horario-manha, .horario-tarde, .horario-noite').empty();

      // Dividir horários por período (manhã, tarde, noite)
      const horariosManha = horariosDisponiveis.filter(h => h >= '07:00' && h < '12:00');
      const horariosTarde = horariosDisponiveis.filter(h => h >= '13:00' && h < '18:00');
      const horariosNoite = horariosDisponiveis.filter(h => h >= '18:00');

      // Adicionar horários disponíveis na div correspondente
      horariosManha.forEach(horario => $('.horario-manha').append(`<div class="horarios"><span>${horario}</span></div>`));
      horariosTarde.forEach(horario => $('.horario-tarde').append(`<div class="horarios"><span>${horario}</span></div>`));
      horariosNoite.forEach(horario => $('.horario-noite').append(`<div class="horarios"><span>${horario}</span></div>`));
    });
  }

  function criarAgenda() {
    const hoje = new Date();
    const dias = [];
    const diaDaSemana = hoje.getDay();

    for (let i = -diaDaSemana; i < -diaDaSemana + 28; i++) {
      const data = new Date(hoje);
      data.setDate(hoje.getDate() + i);
      dias.push(data);
    }

    for (let i = 0; i < dias.length; i += 7) {
      const semanaContainer = $('<div class="semana-container"></div>');
      const primeiroDiaDaSemana = dias[i];
      const mes = primeiroDiaDaSemana.toLocaleString('pt-BR', { month: 'long' });
      const ano = primeiroDiaDaSemana.getFullYear();

      semanaContainer.append(`<p class="mes-ano">${mes} de ${ano}</p>`);

      const bloco = $('<div class="bloco"></div>');
      for (let j = 0; j < 7 && (i + j) < dias.length; j++) {
        const dia = dias[i + j];
        const diaDiv = $('<div class="dia"></div>').data('data', dia);
        const diaFormatado = String(dia.getDate()).padStart(2, '0');
        const nomeDiaDaSemana = dia.toLocaleDateString('pt-BR', { weekday: 'long' });

        diaDiv.html(`<span class="dia-semana">${nomeDiaDaSemana}</span> <span class="data">${diaFormatado}/${String(dia.getMonth() + 1).padStart(2, '0')}/${dia.getFullYear()}</span>`);
        diaDiv.append('<div class="disponibilidade"></div>');

        if (isDiaEspecial(dia)) {
          diaDiv.append('<div class="valor-especial"></div>');
        }

        if (dia < hoje) {
          diaDiv.addClass('desativado');
        } else {
          verificarDisponibilidade(dia, function(horariosDisponiveis) {
            if (!diaDiv.hasClass('desativado')) {
              atualizarBarraDisponibilidade(diaDiv, horariosDisponiveis);
            }
          });
        }

        diaDiv.on('click', function() {
          $('.dia').removeClass('selected');
          $(this).addClass('selected');
          atualizarHorariosDisponiveis($(this).data('data'));
        });

        bloco.append(diaDiv);
      }

      semanaContainer.append(bloco);
      $('#calendario').append(semanaContainer);
    }
  }

  criarAgenda();
});
