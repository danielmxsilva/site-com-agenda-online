$(document).ready(function(){

    //(input,classPai,fileName,imgFoto)
    

    fotoValidacaoCadastro('.foto-cadastro'
        ,'.image-preview-cadastro'
        ,'.file-name-cadastro'
        ,'.preview-foto-cadastro');

	novoCadastro({
      formSelector: '.form-cadastro-cliente',
      mensagemSucesso: 'Cadastro concluido com sucesso!',
      endpoint: 'ajax/validacao-form.php',
      divPai: '.js-box-modal-load',
    });
/*
    atualizarCadastro({
        formSelector: '.js-form-editar-perfil',
        mensagemSucesso: 'Cadastro atualizado com sucesso!',
        endpoint: 'ajax/validacao-form.php',
        divPai: '.js-form-editar-perfil'
    });
*/

    //recuperarSenha();

	aplicarMascara('.mask-nome', 'nomeCompleto');
	aplicarMascara('.mask-email', 'email');
    aplicarMascara('.mask-email', 'email');
	aplicarMascara('.mask-bairro', 'nomeCompleto');
	aplicarMascara('.mask-rua', 'nomeCompleto');
	aplicarMascara('.mask-n-casa', 'numeroCasa');
    aplicarMascara('.mask-codigo-recuperar-senha', 'codigoRecuperacao');

    preencherCepEdit('#cep-perfil-edit');

	preencherCep('#cep-login-agenda');

    const cepInput = $("#cep-login-agenda");
    const cepInputEdit = $("#cep-perfil-edit");

    const cpfInput = $("#cpf-login-agenda");
    const cpfInputEdit = $("#cpf-perfil-edit");

    maskCep(cepInput);

    maskCep(cepInputEdit);

    maskCPF(cpfInput);

    maskCPF(cpfInputEdit);
  

    const $checkbox = $('#consentimento-checkbox');
    const $botaoSubmit = $('.acao-novo-cadastro');

    function atualizarBotao() {
        if ($checkbox.is(':checked')) {
            $botaoSubmit.prop('disabled', false);  // Habilita o botão
            $botaoSubmit.attr('name', 'acao-novo-cadastro'); // Adiciona o atributo name
            $botaoSubmit.attr('value', 'Confirmar e Proseguir'); // Adiciona o atributo value
        } else {
            $botaoSubmit.prop('disabled', true); // Desabilita o botão
            $botaoSubmit.removeAttr('name'); // Remove o atributo name
            $botaoSubmit.attr('value', 'Aceite a Politica de Privacidade'); // Remove o atributo value
        }
    }

    $checkbox.on('change', function () {
        atualizarBotao();
    });

    //atualizarBotao();
    
    

})

// Verifica o estado inicial do checkbox

function fotoValidacaoCadastro(input,classPai,fileName,imgFoto){

    console.log("chamei e entrei no meu fotoValidação!!!");

    // Clique no preview da imagem
    $(classPai).on('click', function () {
        $(input).click();
    });

    // Clique no texto "Nenhum arquivo selecionado"
    $(fileName).on('click', function () {
        $(input).click();
    });

    $(input).on('change', function (e) {
        const file = e.target.files[0]; // Obtém o arquivo selecionado

        if (file) {

            const validExtensions = ['jpg', 'jpeg', 'png']; // Extensões permitidas
            const fileExtension = file.name.split('.').pop().toLowerCase(); // Obtém a extensão do arquivo

            // Verifica se a extensão do arquivo é válida
            if (!validExtensions.includes(fileExtension)) {
                // Exibe erro e reseta o input
                exibirNotificacao('erro', "Apenas imagem .jpg, .jpeg ou .png são permitidos.");
                $(this).val(''); // Limpa o input file
                $(imgFoto).hide(); // Esconde o preview
                $(fileName).text('Nenhum arquivo selecionado'); // Reseta o texto
                return; // Sai da função
            }

            const reader = new FileReader();

            // Atualiza o preview
            reader.onload = function (e) {
                $(imgFoto).attr('src', e.target.result).show(); // Mostra o preview
            };

            reader.readAsDataURL(file); // Lê o arquivo como URL de dados

            // Atualiza o nome do arquivo no texto
            $(fileName).text(file.name);
        } else {
            $(imgFoto).hide(); // Esconde o preview se nenhum arquivo for selecionado
            $(fileName).text('Nenhum arquivo selecionado'); // Reseta o texto
        }
    });

}


function preencherCep(cep){

	 $(cep).on('input', function () {
        const cep = $(this).val().replace(/\D/g, '');

        if (cep.length === 8) {
            // Faz a chamada AJAX para buscar os dados do CEP
            $.ajax({
                url: 'ajax/consultaCep.php',
                method: 'POST',
                data: { cep: cep },
                dataType: 'json',
                beforeSend: function () {
                    // Limpa os campos antes da consulta
                    $('.js-box-modal-load').addClass('carregando');
                    $('#rua-casa-login-agenda, #bairro-login-agenda').val('');
                },
                success: function (response) {
                	$('.js-box-modal-load').removeClass('carregando');
                    if (response.erro) {
                        exibirNotificacao('erro', 'CEP não encontrado!');
                    } else {
                        $('#rua-casa-login-agenda').val(response.logradouro);
                        $('#bairro-login-agenda').val(response.bairro);
                        // Adiciona a cidade no select dinamicamente
                        $('#cidade-login-agenda')
                            .html(`<option value="${response.localidade}" selected>${response.localidade}</option>`)
                            .prop('disabled', false);
                        console.log("cidade do response" + response.localidade);
                    }
                },
                error: function () {
                    $('.js-box-modal-load').removeClass('carregando');
                    exibirNotificacao('erro', 'Erro ao consultar o CEP. Tente novamente.');
                }
            });
        } 
    });


     // Validação ao perder o foco (caso o usuário saia sem digitar os 8 números)
    $(cep).on('blur', function () {
        let cepValor = $(this).val().replace(/\D/g, '');
        if (cepValor.length < 8 && cepValor.length > 0) {
            exibirNotificacao('erro', 'Por favor, insira um CEP válido.');
        }
    });


}

function preencherCepEdit(cep){

    $(cep).on('input', function () {
        const cep = $(this).val().replace(/\D/g, '');

        if (cep.length === 8) {
            // Faz a chamada AJAX para buscar os dados do CEP
            $.ajax({
                url: 'ajax/consultaCep.php',
                method: 'POST',
                data: { cep: cep },
                dataType: 'json',
                beforeSend: function () {
                    // Limpa os campos antes da consulta
                    $('.js-box-modal-load').addClass('carregando');
                    $('#rua-casa-perfil-edit, #bairro-perfil-edit, #n-casa-perfil-edit').val('');
                },
                success: function (response) {
                    $('.js-box-modal-load').removeClass('carregando');
                    if (response.erro) {
                        exibirNotificacao('erro', 'CEP não encontrado!');
                    } else {
                        $('#rua-casa-perfil-edit').val(response.logradouro);
                        $('#bairro-perfil-edit').val(response.bairro);
                        // Adiciona a cidade no select dinamicamente
                        $('#cidade-perfil-edit')
                            .html(`<option value="${response.localidade}" selected>${response.localidade}</option>`)
                            .prop('disabled', false);
                        console.log("cidade do response" + response.localidade);
                    }
                },
                error: function () {
                    $('.js-box-modal-load').removeClass('carregando');
                    exibirNotificacao('erro', 'Erro ao consultar o CEP. Tente novamente.');
                }
            });
        } 
    });
/*
     $(cep).on('input', function () {
        const cep = $(this).val().replace(/\D/g, '');

        if (cep.length === 8) {
            // Faz a chamada AJAX para buscar os dados do CEP
            $.ajax({
                url: 'ajax/consultaCep.php',
                method: 'POST',
                data: { cep: cep },
                dataType: 'json',
                beforeSend: function () {
                    // Limpa os campos antes da consulta
                    toggleClass('.js-box-modal-load', 'carregando', true);
                    $('#rua-casa-perfil-edit, #bairro-perfil-edit, #n-casa-perfil-edit').val('');
                },
                success: function (response) {
                    toggleClass('.js-box-modal-load', 'carregando', false);
                    if (response.erro) {
                        exibirNotificacao('erro', 'CEP não encontrado!');
                    } else {
                        $('#rua-casa-perfil-edit').val(response.logradouro);
                        $('#bairro-perfil-edit').val(response.bairro);
                        // Adiciona a cidade no select dinamicamente
                        $('#cidade-perfil-edit')
                            .html(`<option value="${response.localidade}" selected>${response.localidade}</option>`)
                            .prop('disabled', false);
                        console.log("cidade do response" + response.localidade);
                    }
                },
                error: function () {
                    toggleClass('.js-box-modal-load', 'carregando', false);
                    exibirNotificacao('erro', 'Erro ao consultar o CEP. Tente novamente.');
                }
            });
        } else {
            exibirNotificacao('erro', 'Por favor, insira um CEP válido.');
        }
    });
*/
     // Validação ao perder o foco (caso o usuário saia sem digitar os 8 números)
    $(cep).on('blur', function () {
        let cepValor = $(this).val().replace(/\D/g, '');
        if (cepValor.length < 8 && cepValor.length > 0) {
            exibirNotificacao('erro', 'Por favor, insira um CEP válido.');
        }
    });

}

function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, "");

    // CPF deve ter 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais (ex.: 00000000000)
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Cálculo do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = (resto < 2) ? 0 : 11 - resto;
    if (digito1 !== parseInt(cpf.charAt(9))) return false;

    // Cálculo do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digito2 = (resto < 2) ? 0 : 11 - resto;
    if (digito2 !== parseInt(cpf.charAt(10))) return false;

    return true;
}

function novoCadastro(config) {

    const { formSelector, mensagemSucesso, endpoint, divPai} = config;

    $(formSelector).on("submit", function (event) {

        event.preventDefault();

        // Recupera o valor do telefone antes de enviar o formulário
        const telefoneCadastroValor = localStorage.getItem('telefone_cadastro') || '';
        console.log('Telefone recuperado do localStorage:', telefoneCadastroValor);

        // Valida se o telefone foi preenchido corretamente
        if (!telefoneCadastroValor) {
            exibirNotificacao('erro', 'Número de telefone ausente ou ocorreu um erro. Por favor, atualize o site e tente novamente.');
            console.log('Telefone recuperado do localStorage:', telefoneCadastroValor);
            return;
        }

        //$(divPai).addClass('carregando');
        toggleClass(divPai, 'carregando', true);

    	var senha_cadastro = $('input[name="senha-cadastro-agenda"]').val();
        var senha_cadastro_confirmar = $('input[name="senha-cadastro-agenda-confirmacao"]').val();
        var nome_cadastro = $('input[name="nome-login-agenda"]').val();
        var cpf_cadastro = $('input[name="cpf-login-agenda"]').val();
        var email_cadastro = $('input[name="email-login-agenda"]').val();
        var cep_cadastro = $('input[name="cep-login-agenda"]').val();
        var cidade_cadastro = $('select[name="cidade-login-agenda"]').val();
        var bairro_cadastro = $('input[name="bairro-login-agenda"]').val();
        var rua_cadastro = $('input[name="rua-casa-login-agenda"]').val();
        var nmr_casa_cadastro = $('input[name="n-casa-login-agenda"]').val();

        var foto_perfil = $('input[name="foto-cadastro"]');
        var arquivo = foto_perfil[0].files[0];

        

        const cidade = $('#cidade-login-agenda').val(); // Obtém o valor selecionado
        const cidadesPermitidas = ["Itupeva", "Jundiaí"];

        console.log("Valor selecionado de cidade:", cidade);
        console.log("Cidades permitidas:", cidadesPermitidas);

        // Lista de inputs para validar (você pode adicionar mais aqui)
	    const inputsObrigatorios = [
		    { campo: senha_cadastro, mensagemErro: "Por favor, preencha o campo de senha." },
		    { campo: senha_cadastro_confirmar, mensagemErro: "Por favor, preencha o campo de confirmação de senha." },
		    { campo: nome_cadastro, mensagemErro: "Por favor, preencha o campo de nome completo." },
		    { campo: email_cadastro, mensagemErro: "Por favor, preencha o campo de e-mail." },
		    { campo: cidade_cadastro, mensagemErro: "Por favor, selecione uma cidade." },
		    { campo: bairro_cadastro, mensagemErro: "Por favor, preencha o campo de bairro." },
		    { campo: rua_cadastro, mensagemErro: "Por favor, preencha o campo de rua." },
            { campo: cpf_cadastro, mensagemErro: "Por favor, preencha o campo CPF." },
		    { campo: nmr_casa_cadastro, mensagemErro: "Por favor, preencha o campo de número da casa." },
		];

        if (cidade === "cidade" || cidade === null || cidade === " "){
            exibirNotificacao('erro', "Por favor, selecione uma cidade."); // Mensagem de erro caso a opção padrão seja selecionada
            toggleClass(divPai, 'carregando', false);
            return; // Impede o envio do formulário
        } else if (!cidadesPermitidas.includes(cidade)) {
            exibirNotificacao('erro', "Atualmente só atendemos em Itupeva e Jundiai!."); // Mostra o aviso
            toggleClass(divPai, 'carregando', false);
            return; // Impede o envio do formulário
        } else {
		    console.log("Cidade válida: " + cidade); // Exibe uma mensagem de sucesso no console
		}

		/*

		PAREI FAZENDO A VALIDAÇÃO DA RECUPERAÇÃO DO SELECT BOX PARA PREENCHER AUTOMATICAMENTE


		*/

	    // Valida todos os inputs obrigatórios
	    const validacaoCampos = validarCampos(inputsObrigatorios);
	    if (!validacaoCampos) {
	        toggleClass(divPai, 'carregando', false); // Remove a classe se a validação falhar
	        return;
	    }
        
        // 1. Validar se as senhas coincidem (PRIMEIRA ETAPA)
        if (senha_cadastro !== senha_cadastro_confirmar)  {
            exibirNotificacao('erro', "As senhas não coincidem.");
            toggleClass(divPai, 'carregando', false);
            return; // Para a validação se as senhas não coincidem
        }

        const errosSenha = validarSenha(senha_cadastro, senha_cadastro_confirmar);
        if (errosSenha.length > 0) {
            exibirNotificacao('erro', errosSenha.join("<br>"));
            toggleClass(divPai, 'carregando', false);
            return;
        }

        // 2. Validar sequências (SEGUNDA ETAPA - SÓ EXECUTA SE PASSOU NA ETAPA 1)
        if (contemSequencia(senha_cadastro)) {
            exibirNotificacao('erro', "A senha não pode conter sequências!");
            toggleClass(divPai, 'carregando', false);
            return; // Para a validação se encontrar sequências
        }

        // 3. Validar senhas óbvias (TERCEIRA ETAPA - SÓ EXECUTA SE PASSOU NAS ETAPAS ANTERIORES)
        if (senhaEhObvia(senha_cadastro)) {
            exibirNotificacao('erro', "A senha é muito óbvia!");
            toggleClass(divPai, 'carregando', false);
            return; // Para a validação se a senha for óbvia
        }

        // Verifica se o valor da cidade é válido
        if (!cidade_cadastro || cidade_cadastro === "cidade") {
            exibirNotificacao('erro', 'Por favor, selecione uma cidade.');
            return; // Impede o envio do formulário
        }

        if(!validarCPF(cpf_cadastro)) {
            exibirNotificacao('erro', 'CPF inválido!.');
            toggleClass(divPai, 'carregando', false);
            return;
        }

        const formData = new FormData($(formSelector)[0]);

        formData.append('telefone_cadastro', telefoneCadastroValor);
        formData.append('senha_cadastro', senha_cadastro);
        formData.append('senha_cadastro_confirmar', senha_cadastro_confirmar);
        formData.append('nome_cadastro', nome_cadastro);
        formData.append('cpf_cadastro', cpf_cadastro);
        formData.append('email_cadastro', email_cadastro);
        formData.append('cep_cadastro', cep_cadastro);
        formData.append('cidade_cadastro', cidade_cadastro);
        formData.append('bairro_cadastro', bairro_cadastro);
        formData.append('rua_cadastro', rua_cadastro);
        formData.append('nmr_casa_cadastro', nmr_casa_cadastro);


        if (arquivo) {
            // Caso tenha uma foto
            formData.append('foto_cadastro', arquivo); // Adiciona o arquivo ao FormData
            console.log("Foto adicionada:", arquivo);
        } else {
            // Caso não tenha uma foto
            formData.append('foto_cadastro', null); // Adiciona um valor nulo para indicar ausência de foto
            console.log("Nenhuma foto foi adicionada.");
        }

        // Adiciona um identificador para o backend saber que tipo de formulário está enviando
        formData.append('formulario', 'cadastro_cliente');

        // Imprime os valores do formData no console
    
        // Envia o POST via AJAX
        
        $.ajax({
            url: 'ajax/validacao-form.php',
            method: 'POST',
            data: formData,
            contentType: false, // Necessário para enviar arquivos
            processData: false, // Necessário para enviar arquivos
            dataType: 'json',
            success: function (response) {
                if (response.sucesso) {
                    const dados = response.dados;
                    const endereco = response.endereco || null;
                    const token = response.token;
                    setCookie('token', token, 365);
                    //localStorage.setItem('token', token);
                    pegarDados(dados, endereco);
                    
                    exibirNotificacao('sucesso', response.mensagem);
                    trocarBox('.login-agenda', '.js-box-pagamento-agenda', 400); // Exemplo de navegação
                    consultarCupom();
                    limparInputsFormulario(formSelector);
                    limparInputsFormulario('.form-login-agenda');
                } else {
                    exibirNotificacao('erro', response.mensagem);
                }
                //$(divPai).removeClass('carregando');
            },
            error: function () {
                exibirNotificacao('erro', 'Erro ao enviar o formulário. Tente novamente.');
                $(divPai).removeClass('carregando');
            },
            complete: function () {
                $(divPai).removeClass('carregando'); // Remove a classe carregando ao finalizar
            }
        });

        

    })

}
/*
function atualizarCadastro(config) {

    const { formSelector, mensagemSucesso, endpoint, divPai } = config;

    $(formSelector).on("submit", function (event) {
        event.preventDefault();

        $(divPai).addClass('carregando');

        var nome_atualizacao = $('input[name="nome-login-agenda"]').val();
        var email_atualizacao = $('input[name="email-login-agenda"]').val();
        var cep_atualizacao = $('input[name="cep-login-agenda"]').val();
        var cidade_atualizacao = $('select[name="cidade-login-agenda"]').val();
        var bairro_atualizacao = $('input[name="bairro-login-agenda"]').val();
        var rua_atualizacao = $('input[name="rua-casa-login-agenda"]').val();
        var nmr_casa_atualizacao = $('input[name="n-casa-login-agenda"]').val();
        var foto_perfil = $('input[name="foto-cadastro"]');
        var arquivo = foto_perfil[0].files[0];

        // Validação da cidade
        const cidadesPermitidas = ["Itupeva", "Jundiaí"];
        if (!cidade_atualizacao || cidade_atualizacao === "cidade") {
            exibirNotificacao('erro', "Por favor, selecione uma cidade.");
            $(divPai).removeClass('carregando');
            return;
        } else if (!cidadesPermitidas.includes(cidade_atualizacao)) {
            exibirNotificacao('erro', "Atualmente só atendemos em Itupeva e Jundiaí.");
            $(divPai).removeClass('carregando');
            return;
        }

        // Lista de campos obrigatórios
        const inputsObrigatorios = [
            { campo: nome_atualizacao, mensagemErro: "Por favor, preencha o campo de nome completo." },
            { campo: email_atualizacao, mensagemErro: "Por favor, preencha o campo de e-mail." },
            { campo: cidade_atualizacao, mensagemErro: "Por favor, selecione uma cidade." },
            { campo: bairro_atualizacao, mensagemErro: "Por favor, preencha o campo de bairro." },
            { campo: rua_atualizacao, mensagemErro: "Por favor, preencha o campo de rua." },
            { campo: nmr_casa_atualizacao, mensagemErro: "Por favor, preencha o campo de número da casa." },
        ];

        // Valida todos os campos obrigatórios
        const validacaoCampos = validarCampos(inputsObrigatorios);
        if (!validacaoCampos) {
            $(divPai).removeClass('carregando');
            return;
        }

        const formData = new FormData($(formSelector)[0]);

        formData.append('nome_atualizacao', nome_atualizacao);
        formData.append('email_atualizacao', email_atualizacao);
        formData.append('cep_atualizacao', cep_atualizacao);
        formData.append('cidade_atualizacao', cidade_atualizacao);
        formData.append('bairro_atualizacao', bairro_atualizacao);
        formData.append('rua_atualizacao', rua_atualizacao);
        formData.append('nmr_casa_atualizacao', nmr_casa_atualizacao);

        if (arquivo) {
            formData.append('foto_cadastro', arquivo);
            console.log("Foto adicionada:", arquivo);
        } else {
            formData.append('foto_cadastro', null);
            console.log("Nenhuma foto foi adicionada.");
        }

        formData.append('formulario', 'atualizacao_cliente');

        // Envia o formulário via AJAX
        $.ajax({
            url: endpoint,
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function (response) {
                if (response.sucesso) {
                    exibirNotificacao('sucesso', response.mensagem);
                    trocarBox('.editar-perfil', '.perfil-atualizado', 400); // Exemplo de navegação
                } else {
                    exibirNotificacao('erro', response.mensagem);
                }
            },
            error: function () {
                exibirNotificacao('erro', 'Erro ao enviar o formulário. Tente novamente.');
            },
            complete: function () {
                $(divPai).removeClass('carregando');
            }
        });
    });


}
*/
function validarCampos(inputs) {
    let todosValidos = true;

    inputs.forEach(input => {
        if (!input.campo || input.campo.trim() === "") {
            exibirNotificacao('erro', input.mensagemErro);
            todosValidos = false;
        }
    });

    return todosValidos;
}

function trocarBox(boxAtual, boxNova, duracao = 400) {
    // Esconde a box atual com transição suave
    $(boxAtual).fadeOut(duracao, function () {
        // Após a animação de saída, exibe a nova box
        $(boxNova).fadeIn(duracao);
    });
}
/*
ESTOU CHAMANDO ESSA FUNÇÃO NA BOX-MODEL
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
*/
function maskCep(inputElement) {
    inputElement.on("input", function () {
        const input = this;
        let value = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos
        const cursorPosition = input.selectionStart; // Posição do cursor antes de aplicar a máscara
        const oldValueLength = input.value.length;

        // Limita ao tamanho do CEP
        value = value.substring(0, 8);

        // Aplica a máscara XXXXX-XXX
        const maskedValue = value.replace(/^(\d{5})(\d)/, "$1-$2");
        input.value = maskedValue;

        // Calcula nova posição do cursor
        const newCursorPosition = cursorPosition + (input.value.length - oldValueLength);

        // Reposiciona o cursor no lugar correto
        input.setSelectionRange(newCursorPosition, newCursorPosition);
    });
}

function maskCPF(inputElement) {
    inputElement.on("input", function () {
        const input = this;
        let value = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos
        const cursorPosition = input.selectionStart; // Posição do cursor antes de aplicar a máscara
        const oldValueLength = input.value.length;

        // Limita o CPF para 11 dígitos
        value = value.substring(0, 11);

        // Aplica a máscara no formato 000.000.000-00 de forma sequencial
        value = value.replace(/^(\d{3})(\d)/, "$1.$2");            // Insere o primeiro ponto
        value = value.replace(/^(\d{3}\.\d{3})(\d)/, "$1.$2");       // Insere o segundo ponto
        value = value.replace(/^(\d{3}\.\d{3}\.\d{3})(\d)/, "$1-$2");  // Insere o hífen

        input.value = value;

        // Calcula a nova posição do cursor e reposiciona
        const newCursorPosition = cursorPosition + (input.value.length - oldValueLength);
        input.setSelectionRange(newCursorPosition, newCursorPosition);
    });
}

function aplicarMascara(seletor, tipoMascara) {

	// Máscara para nome completo (letras, espaços e acentos)
    const maskNomeCompleto = (value) => {
        return value
            .replace(/[^a-zA-Z\u00C0-\u00FF\s]/g, "") // Permite apenas letras, espaços e acentos
            .replace(/\s{2,}/g, " "); // Substitui múltiplos espaços por um único espaço
    };

    let maskFunction;

    switch (tipoMascara) {
        case 'email':
            maskFunction = (value) => value.replace(/[^a-zA-Z0-9@._-]/g, "");
            break;
        case 'nomeCompleto': // Usando a função maskNomeCompleto que já existe no seu código
            maskFunction = (value) => maskNomeCompleto(value);
            break;
        case 'numeroCasa':
            maskFunction = (value) => {
                value = value.replace(/\D/g, "");
                return value.substring(0, 5);
            };
            break;
        case 'codigoRecuperacao':
            maskFunction = (value) => {
                value = value.replace(/\D/g, "");
                return value.substring(0, 6);
            };
            break;
        default:
            console.error('Tipo de máscara inválido:', tipoMascara);
            return; // Sai da função se o tipo for inválido
    }

    $(seletor).on("input", function () {
    	const isSupportedElement = this.tagName === "INPUT" || this.tagName === "TEXTAREA";
        const cursorPos = this.selectionStart; // Mantem o cursor na posição correta
        const maskedValue = maskFunction($(this).val());
        $(this).val(maskedValue);

	    if (isSupportedElement && cursorPos !== null) {
	        this.setSelectionRange(cursorPos, cursorPos);
	    }
    });
}

function validarSenha(senha, confirmarSenha) {
    const erros = [];

    if (!senha) {
        erros.push("A senha é obrigatória.");
    } else if (senha.length < 6) {
        erros.push("A senha deve ter pelo menos 6 dígitos.");
    } else if (senha !== confirmarSenha) {
        erros.push("As senhas não coincidem.");
    } else if (contemSequencia(senha)) {
        erros.push("A senha não pode conter sequências numéricas (ex: 123456, 654321).");
    } else if (senhaEhObvia(senha)) {
        erros.push("A senha é muito óbvia (ex: 123456, 000000, 111111).");
    }

    return erros;
}

function contemSequencia(senha) {
    if (typeof senha !== "string") {
        senha = String(senha); // Converte para string
    }

    const sequencias = ["012345", "123456", "234567", "345678", "456789", "987654", "876543", "765432", "654321", "543210"];
    for (const sequencia of sequencias) {
        if (senha.includes(sequencia)) {
            return true;
        }
    }
    return false;
}

function senhaEhObvia(senha) {
    const regexRepetidos = /(\d)\1{5}/;
    return regexRepetidos.test(senha);
}