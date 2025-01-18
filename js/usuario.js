
//essa função está sendo chamada no identificacao.js, linha 333
function pegarDados(dados, endereco){

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
	  $('#email-perfil-edit').val(dados.email);

	  if (dados.foto_perfil_cliente) {
		    let fotoPerfil = dados.foto_perfil_cliente;
		    let fotoContainer = `
		         <img id="preview-foto-edit" src="${includePathPainel}uploads/${fotoPerfil}" alt="Foto do Perfil">
		    `;
		    $('.image-preview').html(fotoContainer).show(); // Insere o HTML e mostra o container
		    $('.icone-perfil').hide(); // Oculta o ícone padrão
		} else {
		    $('.image-preview').html('<img id="preview-foto-edit" style="display:none;" src="" alt="Foto do Perfil"><i class="fa-solid fa-user" style="font-size: 30px;text-align: center;padding-top: 10px; color: #9d9c9c;"></i>').show(); // Mostra o ícone padrão
		}

	  // Preencher campos de endereço
	  
	       console.log("Endereço recebido:", endereco);

		    // Atualizar o campo do CEP
		    $('#cep-perfil-edit').val(endereco.cep);
		    console.log("CEP atualizado:", endereco.cep);

		    // Selecionar a cidade no dropdown
		    if ($('#cidade-perfil-edit option[value="' + endereco.cidade + '"]').length > 0) {
		        $('#cidade-perfil-edit').val(endereco.cidade);
		        console.log("Cidade encontrada no dropdown:", endereco.cidade);
		    } else {
		        // Adicionar a cidade como nova opção, caso não exista
		        $('#cidade-perfil-edit').append(new Option(endereco.cidade, endereco.cidade)).val(endereco.cidade);
		        console.log("Cidade não encontrada. Adicionada nova cidade:", endereco.cidade);
		    }

		    // Atualizar o campo do bairro
		    $('#bairro-perfil-edit').val(endereco.bairro);
		    console.log("Bairro atualizado:", endereco.bairro);

		    // Atualizar o campo da rua
		    $('#rua-casa-perfil-edit').val(endereco.rua);
		    console.log("Rua atualizada:", endereco.rua);

		    // Atualizar o número da casa
		    $('#n-casa-perfil-edit').val(endereco.numero_casa);
		    console.log("Número da casa atualizado:", endereco.numero_casa);
		


}