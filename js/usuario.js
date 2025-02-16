
//essa função está sendo chamada no identificacao.js, linha 333
function pegarDados(dados, endereco){

	//cupomValidar();

	console.log("Dados recebidos em pegarDados:", dados);
   console.log("Endereço recebido em pegarDados:", endereco);

   if (!endereco) {
     console.error("Endereço está indefinido. Verifique o backend ou o AJAX.");
     return; // Interrompe a execução para evitar erros
   }

	 const perfilBox = document.querySelector('.add-perfil-js');
	 const nomeResumo = document.querySelector('.nome-cliente-resumo');

	 //const perfilEdit = document.querySelector('.image-edit');

	 if (!perfilBox) {
        console.error('Contêiner ".add-perfil-js" não encontrado.');
        return;
     }

     if (!nomeResumo) {
        console.error('Contêiner ".nome-cliente-resumo" não encontrado.');
        return;
     }

     // Pega o nome do cliente e verifica se foi fornecido
     const nomeCliente = dados.nome || 'Nome Indisponível';

     const idCliente = dados.id;

      // Verifica se há uma foto disponível
     const fotoPerfil = dados.foto_perfil_cliente

     // Atualiza o HTML com os dados recebidos
     perfilBox.innerHTML = `
	    <div class="foto-perfil">
	        ${
	            fotoPerfil
	            ? `<img src="${includePathPainel}uploads/${fotoPerfil}" alt="Foto do Perfil">`
	            : `<i class="fa-solid fa-user"></i>`
	        }
	    </div>
	    <div class="nome-cliente">
	        <span>${dados.nome}</span>
	    </div>
	`;

	nomeResumo.innerHTML = `
		${dados.nome}
	`;

	carregarHistorico(idCliente);

	// Preencher os campos com os dados do cliente
	  $('#nome-perfil-edit').val(dados.nome);
	  $('#telefone-perfil-edit').val(dados.telefone);
	  $('#email-perfil-edit').val(dados.email);

	  if (dados.foto_perfil_cliente) {
		    let fotoPerfil = dados.foto_perfil_cliente;
		    let fotoContainer = `
		         <img id="preview-foto-edit" class="preview-foto-edit"  src="${includePathPainel}uploads/${fotoPerfil}" alt="Foto do Perfil">
		    `;
		    $('.file-name-edit').text(fotoPerfil);
		    $('.image-preview-edit').html(fotoContainer).show(); // Insere o HTML e mostra o container
		    $('.icone-perfil').hide(); // Oculta o ícone padrão
		} else {
		    $('.image-preview-edit').html('<img id="preview-foto-edit" class="preview-foto-edit" style="display:none;" src="" alt="Foto do Perfil"><i class="fa-solid fa-user" style="font-size: 30px;text-align: center;padding-top: 10px; color: #9d9c9c;"></i>').show(); // Mostra o ícone padrão
		}

	  // Preencher campos de endereço
	  
	       console.log("Endereço recebido:", endereco);

		    // Atualizar o campo do CEP
		    $('#cep-perfil-edit').val(endereco.cep);
		    console.log("CEP atualizado:", endereco.cep);

		    // Selecionar a cidade no dropdown
		    if ($('#cidade-perfil-edit option[value="' + endereco.cidade + '"]').length > 0) {
		        $('#cidade-perfil-edit').val(endereco.cidade);
		        $('.local-cidade').text(endereco.cidade);
		        console.log("Cidade encontrada no dropdown:", endereco.cidade);
		    } else {
		        // Adicionar a cidade como nova opção, caso não exista
		        $('#cidade-perfil-edit').append(new Option(endereco.cidade, endereco.cidade)).val(endereco.cidade);
		        console.log("Cidade não encontrada. Adicionada nova cidade:", endereco.cidade);
		    }

		    // Atualizar o campo do bairro
		    $('#bairro-perfil-edit').val(endereco.bairro);
		    $('.local-bairro').text(endereco.bairro);
		    console.log("Bairro atualizado:", endereco.bairro);

		    // Atualizar o campo da rua
		    $('#rua-casa-perfil-edit').val(endereco.rua);
		    $('.local-rua').text(endereco.rua);
		    console.log("Rua atualizada:", endereco.rua);

		    // Atualizar o número da casa
		    $('#n-casa-perfil-edit').val(endereco.numero_casa);
		    $('.local-numero').text(endereco.numero_casa);
		    console.log("Número da casa atualizado:", endereco.numero_casa);

		    // Atualiza o id do cliente para edição do formulario

		    $('#id-perfil-edit').val(dados.id);

}

function atualizarDadosUsuario(){

	fotoValidacaoEdit('.foto-edit-cadastro'
        ,'.image-preview-edit'
        ,'.file-name-edit'
        ,'.preview-foto-edit'
  );

	editCadastro({
      formSelector: '.js-form-editar-perfil',
      mensagemSucesso: 'Atualização de Cadastro Realizado!',
      endpoint: 'ajax/validacao-form.php',
      divPai: '.box-editar-dados',
  });


	function fotoValidacaoEdit(input,classPai,fileName,imgFoto){

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

	function editCadastro(config) {

    const { formSelector, mensagemSucesso, endpoint, divPai} = config;

    $(formSelector).on("submit", function (event) {

        event.preventDefault();

        $(divPai).addClass('carregando');

      
      	var id_perfil_edit = $('input[name="id-perfil-edit"]').val();
        var nome_cadastro = $('input[name="nome-perfil-edit"]').val();
        var email_cadastro = $('input[name="email-perfil-edit"]').val();
        var cep_cadastro = $('input[name="cep-perfil-edit"]').val();
        var cidade_cadastro = $('select[name="cidade-perfil-edit"]').val();
        var bairro_cadastro = $('input[name="bairro-perfil-edit"]').val();
        var rua_cadastro = $('input[name="rua-casa-perfil-edit"]').val();
        var nmr_casa_cadastro = $('input[name="n-casa-perfil-edit"]').val();

        var foto_perfil = $('input[name="foto-edit-cadastro"]');
        var arquivo = foto_perfil[0].files[0];

        

        const cidade = $('#cidade-login-agenda').val(); // Obtém o valor selecionado
        const cidadesPermitidas = ["Itupeva", "Jundiaí"];

        console.log("Valor selecionado de cidade:", cidade);
        console.log("Cidades permitidas:", cidadesPermitidas);

        // Lista de inputs para validar (você pode adicionar mais aqui)
        const inputsObrigatorios = [
            { campo: nome_cadastro, mensagemErro: "Por favor, preencha o campo de nome completo." },
            { campo: email_cadastro, mensagemErro: "Por favor, preencha o campo de e-mail." },
            { campo: cidade_cadastro, mensagemErro: "Por favor, selecione uma cidade." },
            { campo: bairro_cadastro, mensagemErro: "Por favor, preencha o campo de bairro." },
            { campo: rua_cadastro, mensagemErro: "Por favor, preencha o campo de rua." },
            { campo: nmr_casa_cadastro, mensagemErro: "Por favor, preencha o campo de número da casa." },
        ];

        if (cidade === "cidade" || cidade === null || cidade === " "){
            exibirNotificacao('erro', "Por favor, selecione uma cidade."); // Mensagem de erro caso a opção padrão seja selecionada
            $(divPai).removeClass('carregando');
            return; // Impede o envio do formulário
        } else if (!cidadesPermitidas.includes(cidade)) {
            exibirNotificacao('erro', "Atualmente só atendemos em Itupeva e Jundiai!."); // Mostra o aviso
            $(divPai).removeClass('carregando');
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
            $(divPai).removeClass('carregando'); // Remove a classe se a validação falhar
            return;
        }
        

        // Verifica se o valor da cidade é válido
        if (!cidade_cadastro || cidade_cadastro === "cidade") {
            exibirNotificacao('erro', 'Por favor, selecione uma cidade.');
            return; // Impede o envio do formulário
        }

        const formData = new FormData($(formSelector)[0]);

        formData.append('telefone_cadastro', telefoneCadastroValor);
        formData.append('nome_cadastro', nome_cadastro);
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

}