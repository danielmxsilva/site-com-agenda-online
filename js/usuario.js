
//essa função está sendo chamada no identificacao.js, linha 333
function pegarDados(dados, endereco){

	 const perfilBox = document.querySelector('.add-perfil-js');

	 if (!perfilBox) {
        console.error('Contêiner ".add-perfil-js" não encontrado.');
        return;
     }

     // Pega o nome do cliente e verifica se foi fornecido
     const nomeCliente = dados.nome || 'Nome Indisponível';

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

}