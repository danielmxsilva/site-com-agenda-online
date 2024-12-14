$(document).ready(function() {

  const feriadosNacionais = ["01-01", "04-21", "05-01", "09-07", "10-12", "11-02", "11-15", "11-20", "12-25", "12-31"];

  function isDiaEspecial(data) {
    const diaSemana = data.getDay();
    const mesDia = `${String(data.getMonth() + 1).padStart(2, '0')}-${String(data.getDate()).padStart(2, '0')}`;
    return diaSemana === 0 || feriadosNacionais.includes(mesDia);
  }

  function formatarDataLocal(data) {
      const ano = data.getFullYear();
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const dia = String(data.getDate()).padStart(2, '0');
      return `${ano}-${mes}-${dia}`;
  }

  function verificarDisponibilidade(data, callback) {
   const diaFormatado = formatarDataLocal(data); // Formata para o horário local

    $.ajax({
      url: 'ajax/horarios.php',
      type: 'GET',
      data: { data: diaFormatado },
      success: function(resposta) {
        console.log("Resposta do servidor:", resposta);
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
    // Recupera a duração total do localStorage
    const totalDuracao = parseInt(localStorage.getItem('totalDuracao')) || 0; 
    console.log("Dia selecionado:", diaSelecionado);
    console.log("Duração total do serviço (minutos):", totalDuracao);

    verificarDisponibilidade(diaSelecionado, function(horariosDisponiveis) {
        // Limpar os horários atuais das divs de manhã, tarde e noite
        $('.horario-manha, .horario-tarde, .horario-noite').empty();

        // Debug: Verifique os horários recebidos
        console.log("Horários disponíveis recebidos:", horariosDisponiveis);

        // Obter o dia atual e a hora atual
        const hoje = new Date();
        const diaAtual = hoje.toISOString().split('T')[0]; // Formato: YYYY-MM-DD
        const horaAtual = hoje.getHours();
        const minutoAtual = hoje.getMinutes();

        // Converter diaSelecionado para o mesmo formato de diaAtual (YYYY-MM-DD)
        const diaSelecionadoFormatado = diaSelecionado.toISOString().split('T')[0];

        // Filtrar horários que podem ser agendados e, se for hoje, que sejam futuros
        const horariosFiltrados = horariosDisponiveis.filter(horario => {
            const [hora, minuto] = horario.split(':').map(Number);

            // Validar se o horário pode ser agendado
            const validoParaAgendar = podeAgendarHorario(horario, totalDuracao);

            // Se o dia selecionado for hoje, validar se o horário é no futuro
            if (diaSelecionadoFormatado === diaAtual) {
                const horarioEmMinutos = hora * 60 + minuto;
                const agoraEmMinutos = horaAtual * 60 + minutoAtual;
                return horarioEmMinutos > agoraEmMinutos && validoParaAgendar;
            }

            // Se não for hoje, todos os horários disponíveis são válidos
            return validoParaAgendar;
        });

        // Debug: Verifique os horários filtrados
        /*
        console.log("dia Selecionado: ", diaSelecionado);
        console.log("dia Atual: ", diaAtual);
        console.log("horariosDisponiveis: ", horariosDisponiveis);
        console.log("horaAtual: ", horaAtual);
        console.log("minutoAtual: ", minutoAtual);*/
        console.log("Horários filtrados: ", horariosFiltrados);


        // Dividir horários por período (manhã, tarde, noite)
        horariosFiltrados.forEach(horario => {
            const [hora, minuto] = horario.split(':').map(Number);
            if (hora < 12) {
                $('.horario-manha').append(`<div class="horarios"><span>${horario}</span></div>`);
            } else if (hora < 18) {
                $('.horario-tarde').append(`<div class="horarios"><span>${horario}</span></div>`);
            } else {
                $('.horario-noite').append(`<div class="horarios"><span>${horario}</span></div>`);
            }
        });

        $('.horarios').on('click', function() {
            // Alterna a classe `horario-select` ao horário clicado
            $(this).toggleClass('horario-select');

            // Pega todos os horários selecionados
            atualizarHorariosSelecionados();

             // Verifica se o horário está dentro da seção de horário-noite
              if ($(this).closest('.horario-noite').length) {
                  if ($(this).hasClass('horario-select')) {
                      console.log('click horario noite');
                      // Exibe a div .msg-tarifa com efeito de fade
                      $('.msg-tarifa').fadeIn(300);
                  } else {
                      console.log('desclick horario noite');
                      // Verifica se ainda há outros horários selecionados na seção de horário-noite
                      const horariosSelecionados = $(this).closest('.horario-noite').find('.horarios.horario-select');
                      if (horariosSelecionados.length === 0) {
                          // Oculta a div .msg-tarifa com efeito de fade se não houver mais horários selecionados
                          $('.msg-tarifa').fadeOut(300);
                      }
                  }
              }
        });
    });
}

function atualizarHorariosSelecionados() {
    // Cria um array para armazenar os horários selecionados
    const horariosSelecionados = [];

    // Itera sobre cada div com a classe `horario-select`
    $('.horarios.horario-select').each(function() {
        const horario = $(this).text().trim(); // Pega o texto (horário) dentro da div
        horariosSelecionados.push(horario); // Adiciona o horário ao array
    });

    // Salva o array atualizado no localStorage
    localStorage.setItem('horariosSelecionados', JSON.stringify(horariosSelecionados));

     // Verifica se há pelo menos um horário selecionado
    if (horariosSelecionados.length > 0) {
        // Função para converter horário no formato "HH:MM" para minutos
      // Função para calcular os minutos baseados na quantidade de horários selecionados
        const minutosTotaisSelecionado = horariosSelecionados.length * 60;

        // Salva o total de minutos no localStorage
        localStorage.setItem('minutosTotaisSelecionado', minutosTotaisSelecionado);

        // Log para verificar o total de minutos calculado
        console.log("Total de minutos:", minutosTotaisSelecionado);
      /*
        function converterParaMinutos(horario) {
            let [horas, minutos] = horario.split(":").map(Number);
            return (horas * 60) + minutos;
        }

        // Se houver apenas um horário selecionado, considera 60 minutos
        if (horariosSelecionados.length === 1) {
            localStorage.setItem('minutosTotaisSelecionado', 60);
            console.log("Apenas um bloco selecionado. Total de minutos: 60");
        } else{

        // Ordena os horários para obter o menor e o maior selecionados
        horariosSelecionados.sort();

        // Converte o menor e o maior horário para minutos
        let inicioEmMinutos = converterParaMinutos(horariosSelecionados[0]);
        let fimEmMinutos = converterParaMinutos(horariosSelecionados[horariosSelecionados.length - 1]);

        // Calcula a diferença total em minutos entre o primeiro e o último horário
        let minutosTotaisSelecionado = fimEmMinutos - inicioEmMinutos;

        // Salva o total de minutos no localStorage
        localStorage.setItem('minutosTotaisSelecionado', minutosTotaisSelecionado);

        // Log para verificar o total de minutos calculado
        console.log("Total de minutos:", minutosTotaisSelecionado);*/
      }else {
        // Caso nenhum horário esteja selecionado, salva 0 minutos no localStorage
        localStorage.setItem('minutosTotaisSelecionado', 0);
        console.log("Nenhum horário selecionado.");
    }

    
    console.log("Horários selecionados:", horariosSelecionados);
}

// Remove o horário do localStorage se desmarcado
$('.horarios').on('click', function() {
    const horario = $(this).text().trim(); // Pega o horário

    if (!$(this).hasClass('horario-select')) {
        // Atualiza o array removendo o horário desmarcado
        let horariosSelecionados = JSON.parse(localStorage.getItem('horariosSelecionados')) || [];
        horariosSelecionados = horariosSelecionados.filter(h => h !== horario);
        localStorage.setItem('horariosSelecionados', JSON.stringify(horariosSelecionados));
        
        // Log para verificar remoção
        console.log("Horário removido:", horario);
        console.log("Horários selecionados atualizados:", horariosSelecionados);
    }
});

// Função exemplo para verificar se o horário pode ser agendado
function podeAgendarHorario(horario, duracao) {
    // Aqui você implementaria a lógica para verificar se o horário cabe
    // Por exemplo, verificar se a duração total cabe no horário seguinte:
    const [hora, minuto] = horario.split(':').map(Number);
    const inicio = hora * 60 + minuto; // Converte para minutos desde a meia-noite
    const fim = inicio + duracao; // Adiciona a duração

    // Lógica para verificar se o horário seguinte está disponível
    return (fim <= 24 * 60); // Certifique-se de que o horário não passa de 24 horas
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
        let nomeDiaDaSemana = dia.toLocaleDateString('pt-BR', { weekday: 'long' });

        // Remove o sufixo "-feira" de dias como "segunda-feira", "terça-feira", etc.
        nomeDiaDaSemana = nomeDiaDaSemana.replace('-feira', '');

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

  window.addEventListener('storage', function(event) {
      if (event.key === 'totalDuracao') {
          const diaSelecionado = obterDiaSelecionado(); // Função que obtém o dia selecionado
          atualizarHorariosDisponiveis(diaSelecionado); // Atualiza os horários quando totalDuracao mudar
      }
  });

});

