$(document).ready(function(){

  const TOKEN_KEY = 'auth_token'; // Chave constante para armazenar o token

  // Exemplo de uso para diferentes formulários
  validarEConsultarFormulario({
      formSelector: '.form-login-agenda',
      formSenha: '.form-login-senha-agenda',
      telefoneInputSelector: '[name="telefone-login-agenda"]',
      mensagemSucesso: 'Cadastro encontrado! entre com sua senha para prosseguir',
      mensagemErro: 'Cadastro NÃO encontrado! Preencha todos os campos obrigatórios para criar um cadastro',
      endpoint: 'ajax/validacao-form.php',
      divPai: '.login-agenda'
  });

  validarFormularioSenha({
     formSenha: '.form-login-senha-agenda',
     telefoneInputSelector: '[name="telefone-login-agenda"]',
     senhaInputSelector: '[name="senha-login-agenda"]',
     mensagemSucesso: 'Login efetuado com Sucesso!',
     mensagemErro: 'Senha Incorreta, por favor tente novamente ou recupere sua senha.',
     endpointSenha: 'ajax/validacao-form.php',
     divPai: '.login-agenda'
  });


})

function aplicarMascaraTelefone(seletor) {
    const maskTelefone = (value) => {
        value = value.replace(/\D/g, "");
        value = value.substring(0, 11);
        return value.replace(/^(\d{2})(\d)/g, "($1) $2").replace(/(\d{5})(\d{4})$/, "$1-$2");
    };

    $(seletor).on("input", function () {
        const maskedValue = maskTelefone($(this).val());
        $(this).val(maskedValue);
    });
}

function validarEConsultarFormulario(config) {

    const { formSelector, formSenha, telefoneInputSelector, mensagemSucesso, mensagemErro, endpoint, divPai } = config;

    aplicarMascaraTelefone(telefoneInputSelector);

    // Reexibe o botão de submit ao interagir com o campo de telefone
    $(telefoneInputSelector).on("input", function () {
       $(`${formSelector}`).find('input[type="submit"]').fadeIn();
       $(`${formSenha}`).slideUp();
       formInformacoesHide('.form-informacoes-cliente', '.form-login-js', true)
    });


    $(formSelector).on("submit", function (event) {
        event.preventDefault();

        const phoneRegex = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;
        let phoneInput = $(telefoneInputSelector).val();

        // Remove o '+' do número de telefone, se houver
        phoneInput = phoneInput.replace('+', '');

        // Indicar o carregamento ajustando a opacidade da div pai
        //$(divPai).css('opacity', '0.5'); // Define opacidade para indicar carregamento
        //$(divPai).addClass('carregando'); // Classe para desativar interações, se necessário

        // Simular o tempo para a consulta (ex.: 2 segundos)
        //setTimeout(() => {
          // Restaurar a opacidade após o carregamento
          //$(divPai).css('opacity', '1');
          //$(divPai).removeClass('carregando');

              if (phoneRegex.test(phoneInput)) {
                    // Lógica para consulta ao banco via AJAX
                // Faz a requisição AJAX para consultar no banco
                $.ajax({
                    url: endpoint, // Endpoint do PHP para validar os dados
                    method: 'POST',
                    data: { telefone: phoneInput },
                    beforeSend: function () {
                        // Adiciona a classe 'carregando' antes de iniciar a requisição
                        $(divPai).addClass('carregando');
                    },
                    success: function (response) {
                        // Oculta o botão de submit
                        $(`${formSelector}`).find('input[type="submit"]').fadeOut();
                        // Verifica a resposta do PHP
                        if (response.cadastroEncontrado) {
                            //CADASTRO ENCONTRADO           
                            //exibirNotificacao('sucesso', 'Cadastro encontrado com sucesso!');  
                            //exibirNotificacao('erro', 'Erro ao consultar o banco de dados. Tente novamente mais tarde.');      
                            $(".js-error-modal-agenda-servicos").stop(true, true).fadeOut(0);

                             // Exibe mensagem de sucesso
                            $(".js-sucess-modal-agenda-servicos").stop(true, true).fadeIn().delay(5000).fadeOut();
                            
                            $(".form-login-senha-agenda").slideDown();

                            $('.js-sucess-modal-agenda-servicos .txt-p').text(mensagemSucesso);

                            //formInformacoesHide();
                            formInformacoes(response.dados, response.endereco);
                        } else {
                            //CADASTRO NÃO ENCONTRADO
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
                        //formInformacoesHide();
                    },  

                    complete: function () {
                        // Remove a classe 'carregando' após o término da requisição (sucesso ou erro)
                        $(divPai).removeClass('carregando');
                    }
                    
                });
              } else {
                    // Esconde mensagem de sucesso (se estiver visível)
                  $(".js-sucess-modal-agenda-servicos").stop(true, true).fadeOut(0);

                  // Exibe mensagem de erro genérica
                  $(".js-error-modal-agenda-servicos").stop(true, true).fadeIn().delay(5000).fadeOut();
                  
                  $('.js-error-modal-agenda-servicos .txt-p').text('O número fornecido é inválido. Por favor, revise e tente novamente.');
                  //formInformacoesHide();
              }
        //}, 1000); 
        
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
    $(seletor).stop(true, true).fadeIn().delay(5000).fadeOut();
}

function formInformacoes(dados, endereco){

    if (dados){

        console.log("tenho dados!");

        /*
        $('.form-login-agenda').css({
          position: 'static',
          transform: 'translate(0,0)',
          left: '0',
          top: '0',
          marginBottom: '20px'
        });*/

        //$('.form-informacoes-cliente').slideDown(300);
        /*
        $('#nome-login-agenda').val(dados.nome);
        $('#email-login-agenda').val(dados.email);


        // Exemplo para preencher o endereço com base no 'endereco_id' (se necessário)
        if (endereco) {
              
            $('#cep-login-agenda').val(endereco.cep);
            //$('#cidade-login-agenda').val(endereco.cidade);
            if ($('#cidade-login-agenda option[value="' + endereco.cidade + '"]').length > 0) {
                // Se a cidade já existe como uma opção, selecione-a
                $('#cidade-login-agenda').val(endereco.cidade);
            } else {
                // Caso contrário, adicione a cidade como uma nova opção e selecione-a
                $('#cidade-login-agenda').append(new Option(endereco.cidade, endereco.cidade)).val(endereco.cidade);
            }
            $('#bairro-login-agenda').val(endereco.bairro);
            $('#rua-casa-login-agenda').val(endereco.rua);
            $('#n-casa-login-agenda').val(endereco.numero_casa);

        }
*/


    } else {

        console.log("não tenho nada!");

        formInformacoesHide( null, '.form-login-js', false);

        //$('.form-login-senha-agenda').slideDown(300);
        inputOpt(null,$('.form-login-senha-agenda'), null, null);

        inputOpt(null, null, $('.form-informacoes-cliente'), null);

        var senha_cadastro = $('input[name="senha-cadastro-agenda"]');
        var senha_cadastro_confirmar = $('input[name="senha-cadastro-agenda-confirmacao"]');

        if (!senha_cadastro || !senha_cadastro_confirmar) {
            exibirNotificacao('erro', "Por favor, preencha ambos os campos de senha.");
            return; // Para a validação se algum campo estiver vazio
        }
        
        // 1. Validar se as senhas coincidem (PRIMEIRA ETAPA)
        if (senha_cadastro !== senha_cadastro_confirmar) {
            exibirNotificacao('erro', "As senhas não coincidem.");
            return; // Para a validação se as senhas não coincidem
        }

        const errosSenha = validarSenha(senha_cadastro, senha_cadastro_confirmar);
        if (errosSenha.length > 0) {
            exibirNotificacao('erro', errosSenha.join("<br>"));
            return;
        }

        // 2. Validar sequências (SEGUNDA ETAPA - SÓ EXECUTA SE PASSOU NA ETAPA 1)
        if (contemSequencia(senha_cadastro)) {
            exibirNotificacao('erro', "A senha não pode conter sequências!");
            return; // Para a validação se encontrar sequências
        }

        // 3. Validar senhas óbvias (TERCEIRA ETAPA - SÓ EXECUTA SE PASSOU NAS ETAPAS ANTERIORES)
        if (senhaEhObvia(senha_cadastro)) {
            exibirNotificacao('erro', "A senha é muito óbvia!");
            return; // Para a validação se a senha for óbvia
        }
    }
    
}


// Exemplo de uso inputHide($('.form-login-senha-agenda'), null, $('.btn-submit-open'), $('.btn-submit-none'));

function inputOpt(inputOpen, inputNone, submitOpen, submitNone){
    // Se inputOpen for passado, mostra o elemento com efeito de deslizamento
    if(inputOpen){
      $(inputOpen).slideDown(300);
    }
    
    // Se inputNone for passado, esconde o elemento com efeito de deslizamento
    if(inputNone){
      $(inputNone).slideUp(300);
    }
    
    // Se submitOpen for passado, mostra o botão de envio com efeito de deslizamento
    if(submitOpen){
      $(submitOpen).slideDown(300);
    }
    
    // Se submitNone for passado, esconde o botão de envio com efeito de deslizamento
    if(submitNone){
      $(submitNone).slideUp(300);
    }
}

function formInformacoesHide(divParaEsconder, divParaReposicionar, reposicionar) {

    /*

    Esconder .form-informacoes-cliente e centralizar .form-login-js:
    formInformacoesHide('.form-informacoes-cliente', '.form-login-js', true);

    Esconder .outra-div e voltar .form-principal ao posicionamento padrão:
    formInformacoesHide('.outra-div', '.form-principal', false);
    
    formInformacoesHide( null, '.form-login-js', false);

    */

    $(divParaEsconder).hide();
    $(divParaEsconder + ' input[type=text]').val('');
    $(divParaEsconder + ' input[type=email]').val('');
    $(divParaEsconder + ' input[type=password]').val('');

    if (reposicionar) {
        // Aplica estilos para posicionamento centralizado
        $(divParaReposicionar).css({
            position: 'relative',
            left: '50%',
            top: '42%',
            transform: 'translate(-50%, -50%)'
        });
    } else {
        // Aplica estilos para voltar ao posicionamento padrão (static)
        $(divParaReposicionar).css({
            position: 'static',
            transform: 'translate(0,0)',
            left: '0',
            top: '0',
            marginBottom: '20px'
        });
    }
}

function validarFormularioSenha(config) {
    const { formSenha, telefoneInputSelector, senhaInputSelector, mensagemSucesso, mensagemErro, endpointSenha, divPai } = config;

    $(formSenha).on("submit", function (event) {
        event.preventDefault();

        // Recuperar o telefone validado do formulário anterior
        const telefoneValidado = $(telefoneInputSelector).val();
        const senha = $(senhaInputSelector).val();

        if (!telefoneValidado) {
            alert("Por favor, valide o telefone antes de prosseguir.");
            return;
        }

        if (!senha) {
            alert("Por favor, insira a senha.");
            return;
        }


        // Validação da senha no backend
        $.ajax({
            url: endpointSenha,
            method: 'POST',
            data: { telefone: telefoneValidado, senha },
            beforeSend: function () {

                //$(divPai).css('opacity', '0.5'); // Define opacidade para indicar carregamento
                $(divPai).addClass('carregando'); // Classe para desativar interações, se necessário
            
            },
            success: function (response) {
                //$(divPai).removeClass('carregando');
                if (response.loginValido) {
                    //alert('Login efetuado com sucesso!');
                    const nomeCliente = response.dados.nome || 'Cliente';

                    const token = response.token; // Recebe o token do backend
                    const dadosCliente = {
                        nome: nomeCliente,
                        token: token
                    };

                    // Define a mensagem de sucesso
                    const notificacaoSucesso = `Login efetuado! Bem-vindo(a), ${nomeCliente}!`;

                    if (token) {
                        // Verifica se o checkbox "Lembrar Login" está selecionado
                        const lembrarLogin = $('input[name="lembrar_login"]').is(':checked');
                        if (lembrarLogin) {
                            // Salvar nos cookies por 1 ano
                            console.log("ENTREI NO SALVAR lembrarLogin");
                            for (const key in dadosCliente) {
                                 setCookie(key, dadosCliente[key], 365); // Salva cada propriedade no cookie
                            }
                        } else {
                            // Salva no localStorage
                            console.log("ENTREI NO SALVAR LOCALSTORAGE");
                            for (const key in dadosCliente) {
                                localStorage.setItem(key, dadosCliente[key]);
                            }
                        }
                        console.log("ENTREI NO IF TOKEN");
                        trocarBox(".login-agenda", ".js-box-pagamento-agenda");
                        exibirNotificacao('sucesso', notificacaoSucesso);
                    } else {
                        exibirNotificacao('erro', 'Erro ao salvar o token. Tente novamente.');
                    }

                    trocarBox(".login-agenda", ".js-box-pagamento-agenda");

                    exibirNotificacao('sucesso', notificacaoSucesso);


                    // Redirecionar ou executar ação adicional
                } else {
                    //alert("Senha invalida!");
                    $(divPai).removeClass('carregando'); 
                    exibirNotificacao('erro', 'Senha incorreta!');
                }
            },
            error: function () {
                //$(divPai).removeClass('carregando');
                $(".js-sucess-modal-agenda-servicos").stop(true, true).fadeOut(0);

                // Exibe mensagem de erro genérica
                $(".js-error-modal-agenda-servicos").stop(true, true).fadeIn().delay(5000).fadeOut();

                $('.js-error-modal-agenda-servicos .txt-p').text('Ah ocorreu algum erro :( por favor tente em outro dispositivo, ou volte mais tarde.');
            }
        });
    });
}

function trocarBox(boxAtual, boxNova, duracao = 400) {
    // Esconde a box atual com transição suave
    $(boxAtual).fadeOut(duracao, function () {
        // Após a animação de saída, exibe a nova box
        $(boxNova).fadeIn(duracao);
    });
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
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

function clearCookies() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=; max-age=0; path=/;`;
    }
}