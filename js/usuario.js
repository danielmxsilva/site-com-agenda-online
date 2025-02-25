
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

    //PREENCHENDO OS DADOS DO FORMULARIO EDITAR DADOS DO CLIENTE

    //Limpar os formulario antes de preencher com novos dados

    limparInputsFormulario('.js-form-editar-perfil');

	// Preencher os campos com os dados do cliente
	  $('#nome-perfil-edit').val(dados.nome);
	  $('#telefone-perfil-edit').val(dados.telefone);
      $('#cpf-perfil-edit').val(dados.cpf);
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
                $('#cidade-perfil-edit').val(endereco.cidade).trigger('change');
                $('.local-cidade').text(endereco.cidade);
                console.log("Cidade encontrada no dropdown:", endereco.cidade);
            } else {
                // Adiciona a cidade como nova opção e seleciona
                $('#cidade-perfil-edit')
                    .append(new Option(endereco.cidade, endereco.cidade))
                    .val(endereco.cidade)
                    .trigger('change'); // <-- Garante que o `<select>` reconheça a mudança
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

            setTimeout(function() {
                atualizarDadosUsuario();
            }, 2000);

}

function atualizarDadosUsuario(){

    const maskTelefonePerfilEdit = $('#telefone-perfil-edit');

    aplicarMascaraTelefone(maskTelefonePerfilEdit);

    //(input,classPai,fileName,imgFoto)

	fotoValidacaoEdit('.foto-edit-cadastro'
        ,'.image-preview-edit'
        ,'.file-name-edit'
        ,'.preview-foto-edit'
  );

	atualizarCadastro({
        formSelector: '.js-form-editar-perfil',
        mensagemSucesso: 'Cadastro atualizado com sucesso!',
        endpoint: 'ajax/validacao-form.php',
        divPai: '.js-form-editar-perfil'
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


   function atualizarCadastro(config) {

    const { formSelector, mensagemSucesso, endpoint, divPai } = config;

    $(formSelector).on("submit", function (event) {
        event.preventDefault();

        $(divPai).addClass('carregando');

        var nome_atualizacao = $('input[name="nome-perfil-edit"]').val();
        var telefone_atualizacao = $('input[name="telefone-perfil-edit"]').val();
        var cpf = $('input[name="cpf-perfil-edit"]').val();
        var email_atualizacao = $('input[name="email-perfil-edit"]').val();
        var cep_atualizacao = $('input[name="cep-perfil-edit"]').val();
        var cidade_atualizacao = $('select[name="cidade-perfil-edit"]').val();
        var bairro_atualizacao = $('input[name="bairro-perfil-edit"]').val();
        var rua_atualizacao = $('input[name="rua-casa-perfil-edit"]').val();
        var nmr_casa_atualizacao = $('input[name="n-casa-perfil-edit"]').val();
        /*var foto_perfil = $('input[name="foto-edit-cadastro"]');
        var arquivo = foto_perfil[0].files[0];*/

        console.log("Cidade no momento do envio:", cidade_atualizacao);

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
            { campo: telefone_atualizacao, mensagemErro: "Por favor, preencha o campo de telefone." },
            { campo: email_atualizacao, mensagemErro: "Por favor, preencha o campo de e-mail." },
            { campo: cpf, mensagemErro: "Por favor, preencha o campo de CPF." },
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
        formData.append('telefone_atualizacao', telefone_atualizacao);
        formData.append('email_atualizacao', email_atualizacao);
        formData.append('cpf', cpf);
        formData.append('cep_atualizacao', cep_atualizacao);
        formData.append('cidade_atualizacao', cidade_atualizacao);
        formData.append('bairro_atualizacao', bairro_atualizacao);
        formData.append('rua_atualizacao', rua_atualizacao);
        formData.append('nmr_casa_atualizacao', nmr_casa_atualizacao);

        var fotoInput = document.querySelector('input[name="foto-edit-cadastro"]');

        if (fotoInput && fotoInput.files.length > 0) {
            formData.append('foto_perfil_cliente', fotoInput.files[0]);
            console.log("Foto adicionada:", fotoInput.files[0]);
            console.log("Foto adicionada ao FormData:", formData.get('foto_edit_cadastro'));
        } else {
            console.log("Nenhuma nova foto foi adicionada. Mantendo a foto antiga.");
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
                    const dadosedit = response.dados;
                    const enderecoedit = response.endereco || null;
                    exibirNotificacao('sucesso', response.mensagem);
                    pegarDados(dadosedit, enderecoedit);
                    //trocarBox('.editar-perfil', '.perfil-atualizado', 400); // Exemplo de navegação
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


}