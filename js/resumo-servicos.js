
function preencherResumoDataHorario(seletor) {
    // Recupera os dados do localStorage
    const dataEscolhida = localStorage.getItem("dataEscolhida");
    const horariosSelecionadosRaw = localStorage.getItem("horariosSelecionados");

    let horariosSelecionados = [];
    try {
        horariosSelecionados = JSON.parse(horariosSelecionadosRaw) || [];
    } catch (error) {
        console.error("Erro ao parsear horários selecionados:", error);
    }

    // Seleciona o elemento alvo
    const container = document.querySelector(seletor);

    if (!container) {
        console.error("Elemento não encontrado para o seletor:", seletor);
        return;
    }

    // Limpa o conteúdo atual
    container.innerHTML = "";

    // Verifica se os dados estão disponíveis
    if (!dataEscolhida || horariosSelecionados.length === 0) {
        container.innerHTML = "<p>Dados não disponíveis.</p>";
        return;
    }

    const dadosHTML = `
        <div class="resumo-data-horario selecao-single flex">
            <div class="txt-p" style="width: 46%;">
                <span class="p-single">${dataEscolhida}</span>
            </div>
            <div class="duracao" style="width: 50%;">
                <span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> ${horariosSelecionados.join(" - ")}</span>
            </div>
        </div>
    `;

    // Insere o HTML no container
    container.innerHTML = dadosHTML;
}

preencherServicosCliente('1');
preencherServicosCliente('2');

function preencherServicosCliente(clienteId) {
    // Recupera os serviços do localStorage
    const servicosSelecionados = JSON.parse(localStorage.getItem("servicosSelecionadosAgenda")) || {};

    // Filtra os serviços do cliente específico
    const servicosCliente = Object.values(servicosSelecionados).filter(
        (servico) => servico.clienteId === clienteId.toString()
    );

    if (servicosCliente.length === 0) {
        console.log(`Nenhum serviço encontrado para o Cliente ${clienteId}.`);
        return;
    }

    // Seleciona o container base para o cliente
    const seletorBase = `.wraper-resumo.box-servicos-select.resumo-servico-${clienteId}`;
    const container = $(seletorBase);

    if (!container.length) {
        console.error(`Estrutura HTML para Cliente ${clienteId} não encontrada.`);
        return;
    }

    // Limpa o conteúdo atual dos serviços (exceto cabeçalho e total)
    container.find(`.resumo-servico-cliente-${clienteId}`).remove();

    let duracaoTotal = 0;
    let precoTotal = 0;

    // Adiciona os serviços dinamicamente
    servicosCliente.forEach((servico) => {
        const { servicoNome, duracao, preco } = servico;

        // Calcula duração em minutos
        const [horas, minutos] = duracao.split(":").map(Number);
        duracaoTotal += horas * 60 + minutos;

        // Calcula preço total
        precoTotal += parseFloat(preco.replace(",", "."));

        // Gera o HTML do serviço
        const servicoHTML = `
            <div class="selecao-single flex resumo-servico-cliente-${clienteId}">
                <div class="txt-p">
                    <span class="p-single">${servicoNome}</span>
                </div>
                <div class="duracao">
                    <span class="color-p"><i class="fa-solid fa-clock" aria-hidden="true"></i> ${duracao}</span>
                </div>
                <div class="preco-lixeira">
                    <span class="preco-single">R$${preco}</span>
                    <i class="icone-lixeira fa-solid fa-trash-can"></i>
                </div>
            </div>
        `;

        // Adiciona ao container
        container.append(servicoHTML);
    });

    // Atualiza o total
    const horasTotais = Math.floor(duracaoTotal / 60);
    const minutosTotais = duracaoTotal % 60;

    container.find(`.total-resumo-servico-cliente-${clienteId} .duracao span`).html(
        `<i class="fa-solid fa-clock"></i> ${horasTotais}:${minutosTotais.toString().padStart(2, "0")}`
    );
    container.find(`.total-resumo-servico-cliente-${clienteId} .preco-total`).text(`R$ ${precoTotal.toFixed(2).replace(".", ",")}`);
}



/*

 * Função genérica para preencher o resumo de serviços
 * @param {Array} dados - Lista de serviços, cada item é um objeto contendo os dados do serviço
 * @param {String} seletor - Seletor da área onde os serviços serão preenchidos

function preencherResumoServicos(dados, seletor) {
    const container = $(seletor);
    container.empty(); // Limpa o conteúdo atual

    dados.forEach((item, index) => {
        const htmlServico = `
            <div class="wraper-resumo box-servicos-select">
                <div class="selecao-single-topo flex">
                    <div class="txt-p"><span class="color-p">Serviço ${index + 1}</span></div>
                    <div class="duracao"><span class="color-p">Duração</span></div>
                    <div class="preco-lixeira">
                        <span class="preco-single color-p">Valor</span>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                ${item.servicos
                    .map(
                        (servico) => `
                    <div class="selecao-single flex">
                        <div class="txt-p">
                            <span class="p-single">${servico.nome}</span>
                        </div>
                        <div class="duracao">
                            <span class="color-p"><i class="fa-solid fa-clock"></i> ${servico.duracao}</span>
                        </div>
                        <div class="preco-lixeira">
                            <span class="preco-single">${servico.valor}</span>
                            <i class="icone-lixeira fa-solid fa-trash-can"></i>
                        </div>
                    </div>`
                    )
                    .join("")}
                <div class="selecao-single-total flex">
                    <div class="txt-p"><span class="color-p">Total</span></div>
                    <div class="duracao">
                        <span class="color-p"><i class="fa-solid fa-clock"></i> ${item.totalDuracao}</span>
                    </div>
                    <div class="preco-lixeira">
                        <span class="preco-total color-p">${item.totalValor}</span>
                    </div>
                </div>
            </div>
        `;
        container.append(htmlServico);
    });
}*/