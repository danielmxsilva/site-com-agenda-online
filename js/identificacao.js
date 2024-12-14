$(document).ready(function(){

  // Exemplo de uso para diferentes formulários
  validarEConsultarFormulario({
      formSelector: '.form-telefone-login',
      telefoneInputSelector: '[name="telefone-login-agenda"]',
      mensagemSucesso: 'Cadastro encontrado! Seus dados foram preenchidos abaixo. Você pode editá-los ou confirmar e prosseguir',
      mensagemErro: 'Cadastro NÃO encontrado! Preencha todos os campos obrigatórios para criar um cadastro',
      endpoint: 'ajax/validacao-form.php',
      divPai: '.login-agenda'
  });

  // Você pode adicionar outro formulário facilmente
  validarEConsultarFormulario({
      formSelector: '.form-outro-telefone',
      telefoneInputSelector: '[name="telefone-outro"]',
      mensagemSucesso: 'Cadastro válido encontrado!',
      mensagemErro: 'Nenhum cadastro correspondente foi encontrado.',
      endpoint: 'ajax/validacao-outro.php'
  });

})

function validarEConsultarFormulario(config) {



    const { formSelector, telefoneInputSelector, mensagemSucesso, mensagemErro, endpoint, divPai } = config;

    const mask = (value) => {
        value = value.replace(/\D/g, ""); // Remove tudo que não é número
        value = value.substring(0, 11); // Limita a 11 números
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona parênteses no DDD
        value = value.replace(/(\d{5})(\d{4})$/, "$1-$2"); // Adiciona o traço
        return value;
    };

    $(telefoneInputSelector).on("input", function () {
        const maskedValue = mask($(this).val());
        $(this).val(maskedValue);
    });

    // Reexibe o botão de submit ao interagir com o campo de telefone
    $(telefoneInputSelector).on("input", function () {
       $(`${formSelector}`).find('input[type="submit"]').fadeIn();
    });

    $(formSelector).on("submit", function (event) {
        event.preventDefault();

        const phoneRegex = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;
        let phoneInput = $(telefoneInputSelector).val();

        // Remove o '+' do número de telefone, se houver
        phoneInput = phoneInput.replace('+', '');

        // Indicar o carregamento ajustando a opacidade da div pai
        $(divPai).css('opacity', '0.5'); // Define opacidade para indicar carregamento
        $(divPai).addClass('carregando'); // Classe para desativar interações, se necessário

        // Simular o tempo para a consulta (ex.: 2 segundos)
        setTimeout(() => {
          // Restaurar a opacidade após o carregamento
          $(divPai).css('opacity', '1');
          $(divPai).removeClass('carregando');

              if (phoneRegex.test(phoneInput)) {
                    // Lógica para consulta ao banco via AJAX
                // Faz a requisição AJAX para consultar no banco
                $.ajax({
                    url: endpoint, // Endpoint do PHP para validar os dados
                    method: 'POST',
                    data: { telefone: phoneInput },
                    success: function (response) {
                        // Oculta o botão de submit
                        $(`${formSelector}`).find('input[type="submit"]').fadeOut();
                        // Verifica a resposta do PHP
                        if (response.cadastroEncontrado) {
                                                      
                            $(".js-error-modal-agenda-servicos").stop(true, true).fadeOut(0);

                             // Exibe mensagem de sucesso
                            $(".js-sucess-modal-agenda-servicos").stop(true, true).fadeIn().delay(5000).fadeOut();
              
                            $('.js-sucess-modal-agenda-servicos .txt-p').text(mensagemSucesso);
                            formInformacoes(response.dados);
                        } else {
                             
                            // Esconde mensagem de sucesso (se estiver visível)
                            $(".js-sucess-modal-agenda-servicos").stop(true, true).fadeOut(0);

                            // Exibe mensagem de erro
                            $(".js-error-modal-agenda-servicos").stop(true, true).fadeIn().delay(5000).fadeOut();

                            $('.js-error-modal-agenda-servicos .txt-p').text(mensagemErro);
                            formInformacoes();
                        }
                    },
                    error: function () {
                          // Esconde mensagem de sucesso (se estiver visível)
                        $(".js-sucess-modal-agenda-servicos").stop(true, true).fadeOut(0);

                        // Exibe mensagem de erro genérica
                        $(".js-error-modal-agenda-servicos").stop(true, true).fadeIn().delay(5000).fadeOut();
                        
                        $('.js-error-modal-agenda-servicos .txt-p').text('Erro ao consultar o banco de dados. Tente novamente mais tarde.');
                        formInformacoesHide();
                    },  
                    
                });
              } else {
                    // Esconde mensagem de sucesso (se estiver visível)
                  $(".js-sucess-modal-agenda-servicos").stop(true, true).fadeOut(0);

                  // Exibe mensagem de erro genérica
                  $(".js-error-modal-agenda-servicos").stop(true, true).fadeIn().delay(5000).fadeOut();
                  
                  $('.js-error-modal-agenda-servicos .txt-p').text('O número fornecido é inválido. Por favor, revise e tente novamente.');
                  formInformacoesHide();
              }
        }, 1000); 
        
    });

        
}

function formInformacoes(dados){

    if (dados){

        console.log("tenho dados!");

        $('.form-login-agenda').css({
          position: 'static',
          transform: 'translate(0,0)',
          left: '0',
          top: '0',
          marginBottom: '20px'
        });

        $('.form-informacoes-cliente').slideDown(300);

        $('#nome-login-agenda').val(dados.nome);

    } else {

        console.log("não tenho nada!");

        $('.form-login-agenda').css({
          position: 'static',
          transform: 'translate(0,0)',
          left: '0',
          top: '0',
          marginBottom: '20px'
        });

        $('.form-informacoes-cliente').slideDown(300);

        $('.form-informacoes-cliente input[type=text]').val('');
    }
    
}

function formInformacoesHide(){


        $('.form-login-agenda').css({
            position: 'relative',
            left: '50%',
            top: '42%',
            transform: 'translate(-50%, -50%)'
        });
        $('.form-informacoes-cliente').hide();

        $('.form-informacoes-cliente input[type=text]').val('');

}



/*
function validaTelefoneConsulta(){
  $('.form-login-consulta').on('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário para fins de teste

    console.log("click form");
  });
}

function validaTelefoneDepoimento(){
  $('.form-login-depoimento').on('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário para fins de teste

    console.log("click form depoimento");
  });
}*/