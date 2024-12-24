$(document).ready(function(){

	novoCadastro({
      formSelector: '.form-informacoes-cliente',
      mensagemSucesso: 'Cadastro concluido com sucesso!',
      endpoint: 'ajax/validacao-form.php',
      divPai: '.login-agenda'
  });

	aplicarMascara('[name="email-cliente"]', 'email');
	aplicarMascara('[name="cep-login-agenda"]', 'cep');
	aplicarMascara('[name="bairro-login-agenda"]', 'nomeCompleto');
	aplicarMascara('[name="rua-casa-login-agenda"]', 'nomeCompleto');
	aplicarMascara('[name="n-casa-login-agenda"]', 'numeroCasa');

})

function novoCadastro(config) {

    const { formSelector, mensagemSucesso, endpoint, divPai } = config;

    $(formSelector).on("submit", function (event) {

        event.preventDefault();
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

    })

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

function aplicarMascara(seletor, tipoMascara) {
    let maskFunction;

    switch (tipoMascara) {
        case 'email':
            maskFunction = (value) => value.replace(/[^a-zA-Z0-9@._-]/g, "");
            break;
        case 'cep':
            maskFunction = (value) => {
                value = value.replace(/\D/g, "");
                value = value.substring(0, 8);
                return value.replace(/^(\d{5})(\d)/, "$1-$2");
            };
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
        default:
            console.error('Tipo de máscara inválido:', tipoMascara);
            return; // Sai da função se o tipo for inválido
    }

    $(seletor).on("input", function () {
        const cursorPos = this.selectionStart; // Mantem o cursor na posição correta
        const maskedValue = maskFunction($(this).val());
        $(this).val(maskedValue);
        this.setSelectionRange(cursorPos, cursorPos);
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