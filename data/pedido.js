const servicesSection = document.getElementById(`services`);

const descricaoOrcamento = document.getElementById(`descricao-orcamento`);

const cancelarRetornar = document.getElementById(`cancelar-retornar`);
const ordemServico = [null, null, null, null, null, null, null,  null, null, null];
// const ordemServico = ['categoria', 'objeto', 'veículo', 'equipamento', 'tipochave', 'servico','perdidaoucopia', 'quantidadeservico', 'balcaodomicilio', 'endereço'];

let previousArticle

let retornar
let cancelar

const tituloOrcamento = document.createElement(`h3`);
descricaoOrcamento.appendChild(tituloOrcamento);

function voltarSecao() {
    servicesSection.style.flexDirection = '';
    servicesSection.style.boxSizing = '';
    servicesSection.style.overflow = 'auto';

    servicesSection.innerHTML = ``;
    switch (previousArticle) {
        case 'residencialSection':
            categoriaLoad();
            break;
        
        case 'automotivoSection':
            categoriaLoad();
            break;

        case 'chavesSection':
            residencialLoad();
            break;

        case 'servicoSection':
            if (ordemServico[0] === 'residencial') {
                chavesLoad();
            };

            if (ordemServico[0] === 'automotivo') {
                automotivoLoad();
            }

            break;

        case 'tipoChaveSection':
            servicoLoad();
            break;
        
        case 'quantidadeServicoLoad':
            servicoLoad();
            break;

        case 'local':
            quantidadeServicoLoad();
            break;
        
        case 'endereco':
            localLoad();
            break;

        case 'resumo':
            if (ordemServico[8] === 'oficina') {
                localLoad();
            };

            if (ordemServico[8] === 'domicílio') {
                enderecoLoad();
            };
            
            break;
    };
};

function retornarBtn() {
    servicesSection.style.flexDirection = '';
    servicesSection.style.boxSizing = '';
    servicesSection.style.overflow = 'auto';

    const btnRetornar = document.getElementById(`btn-retornar`);
    retornar = btnRetornar.addEventListener('click', voltarSecao);
};

function limparOrcamento() {
    console.clear();
    ordemServico[0] = null;
    ordemServico[1] = null;
    ordemServico[2] = null;
    ordemServico[3] = null;
    ordemServico[4] = null;
    ordemServico[5] = null;
    ordemServico[6] = null;
    ordemServico[7] = null;
    ordemServico[8] = null;
    servicesSection.innerHTML = ``;
    categoriaLoad();
};

function cancelarBtn() {
    const btnCancelar = document.getElementById(`btn-cancelar`);
    cancelar = btnCancelar.addEventListener('click', limparOrcamento);
};

function menuOrcamento() {
    const btnRetornar = document.createElement(`button`);
    btnRetornar.innerText = `Retornar`
    btnRetornar.id = `btn-retornar`;

    const btnCancelar = document.createElement(`button`);
    btnCancelar.innerText = `Finalizar`;
    btnCancelar.id = `btn-cancelar`;

    cancelarRetornar.innerHTML = '';
    cancelarRetornar.appendChild(btnRetornar);
    cancelarRetornar.appendChild(btnCancelar);

    retornarBtn()
    cancelarBtn();

};

class Artigo {
    constructor(nome, img, logo) {
        this.nome = nome,
        this.img = img,
        this.logo = logo;
    };

    makeImgArticle() {
        const nome = this.nome;
        const title = nome.normalize(`NFD`).replace(` `, `-`);

        const img = this.img;

        const logo = this.logo;
        
        const articleBtn = document.createElement(`button`);
        articleBtn.classList.add(`artigo-btn`);
        articleBtn.id = `${title}-btn`;

        const article = document.createElement(`article`);
        article.classList.add(`artigo-orcamento`);

        const articleTitle = document.createElement(`h3`);
        articleTitle.innerText = `${nome}`;
        articleTitle.classList.add(`artigo-title`);
        
        article.appendChild(articleTitle);

        const articleFigure = document.createElement(`figure`);
        articleFigure.classList.add(`artigo-figure`);
        
        if (img != null) {
            const articleImg = document.createElement(`img`);
            articleImg.src = `${img}`;
            articleImg.classList.add(`artigo-img`);
    
            articleFigure.appendChild(articleImg);            
        } else if (logo != null){
            const articleLogo = document.createElement(`img`);
            articleLogo.src = `${logo}`;
            articleLogo.classList.add('artigo-logo');

            articleFigure.appendChild(articleLogo);
        };

        
        article.appendChild(articleFigure);

        articleBtn.appendChild(article);

        return articleBtn;
    };

    makeTextArticle() {
        const nome = this.nome;
        const title = nome.normalize(`NFD`).replace(` `, `-`);
        
        const articleBtn = document.createElement(`button`);
        articleBtn.classList.add(`artigo-btn`);
        articleBtn.id = `${title}-btn`;
        
        const article = document.createElement(`article`);
        article.classList.add(`artigo-orcamento-texto`);
        
        const articleTitle = document.createElement(`h3`);
        articleTitle.innerText = `${nome}`;
        articleTitle.classList.add(`artigo-title`);
        
        article.appendChild(articleTitle);
        articleBtn.appendChild(article);
        
        return articleBtn;
    };
    
    makeTextFormArticle() {
        const nome = this.nome;
        const title = nome.normalize(`NFD`).replace(` `, `-`);

        const article = document.createElement(`article`);
        article.classList.add(`formulario-artigo`);
        
        const articleTitle = document.createElement(`h3`);
        articleTitle.innerText = `Informe seu veículo`
        articleTitle.classList.add(`artigo-title`);

        const articleForm = document.createElement(`form`);
        articleForm.classList.add('form')
        const articleFormLabel = document.createElement(`label`);
        articleFormLabel.innerText = `Marca, modelo e ano:`;
        articleFormLabel.htmlFor = `veiculo`;

        const articleFormInput = document.createElement(`input`);
        articleFormInput.type = `text`;
        articleFormInput.name = `veiculo`;
        articleFormInput.id = `veiculo`;
        articleFormInput.setAttribute('placeholder', 'Ex: Volkswagen Gol, 2012')
        
        const btnSubmit = document.createElement('button');
        btnSubmit.id = `${title}-btn`
        console.log(btnSubmit.id);
        btnSubmit.innerText = `Confirmar`
        

        articleForm.appendChild(articleFormLabel);
        articleForm.appendChild(articleFormInput);
        articleForm.appendChild(btnSubmit)
        article.appendChild(articleTitle);
        article.appendChild(articleForm);

        return article;
    };

    makeQtdFormArticle(servico) {
        const nome = this.nome;
        const title = nome.normalize(`NFD`).replace(/\s/g, `-`);

        const article = document.createElement(`article`);
        article.classList.add(`formulario-artigo`);
        
        const articleTitle = document.createElement(`h3`);
        articleTitle.innerText = `Quantidade do Serviço`;
        articleTitle.classList.add(`artigo-title`);

        const articleForm = document.createElement(`form`);
        articleForm.classList.add('quantidade-form')

        const articleFormLabel = document.createElement(`label`);
        articleFormLabel.innerText = `Informe a quantidade do serviço de ${servico}:`;
        articleFormLabel.htmlFor = `quantidade`;

        const articleFormInput = document.createElement(`input`);
        articleFormInput.type = `number`;
        articleFormInput.name = `quantidade`;
        articleFormInput.id = `quantidade`;
        articleFormInput.value = 1;
        articleFormInput.setAttribute('min', '1');
        
        const btnSubmit = document.createElement('button');
        btnSubmit.id = `${title}-btn`;
        console.log(btnSubmit);
        btnSubmit.innerText = `Confirmar`;
        

        articleForm.appendChild(articleFormLabel);
        articleForm.appendChild(articleFormInput);
        articleForm.appendChild(btnSubmit);

        article.appendChild(articleTitle);
        article.appendChild(articleForm);

        return article;
    };
};

function categoriaLoad() {
    ordemServico.fill(null);

    tituloOrcamento.innerText = `Para solicitar um orçamento, por favor, escolha uma das categorias de serviço abaixo:`;
    cancelarRetornar.innerHTML = ``;
    
    const residencial = new Artigo(`Residencial`, null, './data/assets/img/house.png')
    const elementResidencial = residencial.makeImgArticle();

    const automotivo = new Artigo(`Automotivo`, null, './data/assets/img/car.png');
    const elementAutomotivo = automotivo.makeImgArticle();

    // const equipamentos = new Artigo(`Equipamentos`, null, './data/assets/img/equip.png');
    // const elementEquipamentos = equipamentos.makeImgArticle();

    servicesSection.innerHTML = ``;
    servicesSection.appendChild(elementResidencial);
    servicesSection.appendChild(elementAutomotivo);
    // servicesSection.appendChild(elementEquipamentos);

    elementResidencial.addEventListener('click', residencialLoad);
    elementAutomotivo.addEventListener('click', automotivoLoad);

    elementResidencial.onclick = () => ordemServico[0] = 'residencial';
    elementAutomotivo.onclick = () => ordemServico[0] = 'automotivo';

    console.log(ordemServico);
};

function residencialLoad() {
    previousArticle = 'residencialSection';
        tituloOrcamento.innerText = `Por favor, escolha qual fechamento se encaixa no seu tipo de serviço:`;
    menuOrcamento();
    const porta = new Artigo(`Porta`, `./data/assets/img/porta.png`);
    const elementPorta = porta.makeImgArticle();

    const cadeado = new Artigo(`Cadeado`, `./data/assets/img/cadeado.png`);
    const elementCadeado = cadeado.makeImgArticle();
    
    const cofre = new Artigo(`Cofre`, `./data/assets/img/cofres-residenciais-camuflados-schier-moveis-min.png`);
    const elementCofre = cofre.makeImgArticle();
    
    const gaveta = new Artigo(`Gaveta`, `./data/assets/img/fechaduragaveta.png`);
    const elementGaveta = gaveta.makeImgArticle();

    
    servicesSection.innerHTML = ``;
    servicesSection.appendChild(elementPorta);
    servicesSection.appendChild(elementCadeado);
    servicesSection.appendChild(elementCofre);
    servicesSection.appendChild(elementGaveta);

    elementPorta.addEventListener('click', chavesLoad);
    elementCadeado.addEventListener('click', chavesLoad);
    elementCofre.addEventListener('click', chavesLoad);
    elementGaveta.addEventListener('click', chavesLoad);
    
    elementPorta.onclick = () => ordemServico[1] = 'porta';
    elementCadeado.onclick = () => ordemServico[1] = 'cadeado';
    elementCofre.onclick = () => ordemServico[1] = 'cofre';
    elementGaveta.onclick = () => ordemServico[1] = 'gaveta';

    console.log(ordemServico);

};

function chavesLoad() {
    previousArticle = 'chavesSection'
    tituloOrcamento.innerText = `Por favor, indique com qual tipo a chave deste serviço se parece:`;
    
    const chaveComum = new Artigo('Comum', './data/assets/img/chaveyale.png');
    const elementChaveComum = chaveComum.makeImgArticle();
    
    const chaveTetra = new Artigo('Tetra', './data/assets/img/chaverTetra.png');
    const elementChaveTetra = chaveTetra.makeImgArticle();
    
    const chaveGorge = new Artigo('Gorge', './data/assets/img/chavegorge.png');
    const elementChaveGorge = chaveGorge.makeImgArticle();
    
    const chaveMultiPonto = new Artigo('Multiponto', './data/assets/img/multiponto.png');
    const elementChaveMultiponto = chaveMultiPonto.makeImgArticle();
    
    servicesSection.innerHTML = '';
    servicesSection.appendChild(elementChaveComum);
    servicesSection.appendChild(elementChaveTetra);
    servicesSection.appendChild(elementChaveGorge);
    servicesSection.appendChild(elementChaveMultiponto);
    
    elementChaveComum.addEventListener('click', servicoLoad);
    elementChaveTetra.addEventListener('click', servicoLoad);
    elementChaveGorge.addEventListener('click', servicoLoad);
    elementChaveMultiponto.addEventListener('click', servicoLoad);
    
    elementChaveComum.onclick = () => ordemServico[4] = 'comum';
    elementChaveTetra.onclick = () => ordemServico[4] = 'tetra';
    elementChaveGorge.onclick = () => ordemServico[4] = 'gorge';
    elementChaveMultiponto.onclick = () => ordemServico[4] = 'multiponto';
    
    console.log(ordemServico);
};

function automotivoLoad() {
    previousArticle = 'automotivoSection';

    tituloOrcamento.innerText = `Por favor, informe corretamente os dados do seu veículo.`;

    menuOrcamento();

    const anoModelo = new Artigo(`veiculo`);
    const elementAnoModelo = anoModelo.makeTextFormArticle();
    
    servicesSection.innerHTML = ``;
    servicesSection.appendChild(elementAnoModelo);

    const veiculoBtn = document.getElementById('veiculo-btn');

    veiculoBtn.addEventListener("click", (event)=> {
        event.preventDefault();

        const marcaVeiculo = String(document.getElementById('veiculo').value);

        if (!marcaVeiculo) {
            return alert('Por favor, insira os dados do seu veículo.');
        } else {
            ordemServico[2] = marcaVeiculo;
            servicoLoad();
        };
    });
};

function servicoLoad() {
    previousArticle = 'servicoSection'
    tituloOrcamento.innerText = `Qual o tipo de serviço a ser prestado?`;
    const servicoAbertura = new Artigo('Abertura');
    const elementServicoAbertura = servicoAbertura.makeTextArticle();
    
    const servicoNovaChave = new Artigo('Nova Chave');
    const elementServicoNovaChave = servicoNovaChave.makeTextArticle();
    
    const servicoConserto = new Artigo('Conserto');
    const elementServicoConserto = servicoConserto.makeTextArticle();
    
    const servicoTrocaSegredo = new Artigo('Troca de Segredo');
    const elementServicoTrocaSegredo = servicoTrocaSegredo.makeTextArticle();
    
    servicesSection.innerHTML = '';
    servicesSection.appendChild(elementServicoAbertura);
    servicesSection.appendChild(elementServicoNovaChave);
    servicesSection.appendChild(elementServicoConserto);
    servicesSection.appendChild(elementServicoTrocaSegredo);
    
    elementServicoAbertura.onclick = () => ordemServico[5] = 'abertura';
    elementServicoNovaChave.onclick = () => ordemServico[5] = 'nova chave';
    elementServicoConserto.onclick = () => ordemServico[5] = 'conserto';
    elementServicoTrocaSegredo.onclick = () => ordemServico[5] = 'troca de segredo';

    elementServicoAbertura.addEventListener('click', quantidadeServicoLoad);
    elementServicoNovaChave.addEventListener('click', tipoChaveLoad);
    elementServicoConserto.addEventListener('click', quantidadeServicoLoad);
    elementServicoTrocaSegredo.addEventListener('click', quantidadeServicoLoad);
    
    console.log(ordemServico);
};

function tipoChaveLoad() {
    previousArticle = 'tipoChaveSection';
    tituloOrcamento.innerText = `Qual a sua situação? Todas as chaves foram perdidas, ou é nessária apenas a cópia de uma original?`;
    
    const chavePerdida = new Artigo('Chaves Perdidas');
    const elementChavePerdida = chavePerdida.makeTextArticle();
    
    const copiaChave = new Artigo('Cópia de Chave');
    const elementCopiaChave = copiaChave.makeTextArticle();
    
    servicesSection.innerHTML = '';
    servicesSection.appendChild(elementChavePerdida);
    servicesSection.appendChild(elementCopiaChave);
    
    elementChavePerdida.addEventListener('click', quantidadeServicoLoad);
    elementCopiaChave.addEventListener('click', quantidadeServicoLoad);
    
    elementChavePerdida.onclick = () => ordemServico[6] = 'perdi todas as chaves';
    elementCopiaChave.onclick = () => ordemServico[6] = 'copia de chave'
    
    console.log(ordemServico);
};

function submeterValor(valor) {
    tituloOrcamento.innerText = 'Por favor, informe o local onde o serviço será realizado.'
    ordemServico[7] = valor;
    
    localLoad();
};

function quantidadeServicoLoad() {
    previousArticle = 'quantidadeServicoLoad';
    tituloOrcamento.innerText = `Por favor, informe o total de unidades do seu serviço... (Ex: 2 aberturas, 5 chaves)`;
    
    const quantidadeServico = new Artigo('quantidade de serviço');
    const elementQtdServico = quantidadeServico.makeQtdFormArticle(ordemServico[5]);
    
    servicesSection.innerHTML = '';
    
    servicesSection.appendChild(elementQtdServico);
    
    const inputValue = document.getElementById('quantidade');
    
    const btnSubmit = document.getElementById('quantidade-de-serviço-btn');
    
    btnSubmit.addEventListener('click', (event)=> {
        event.preventDefault();
        submeterValor(inputValue.value);
    });
};

function localLoad() {
    previousArticle = 'local';

    const domicilio = new Artigo ('Domiciliar');
    const domicilioElement = domicilio.makeTextArticle();
    
    const balcao = new Artigo('Oficina');
    const balcaoElement = balcao.makeTextArticle();
    
    servicesSection.innerHTML = '';
    servicesSection.appendChild(domicilioElement);
    servicesSection.appendChild(balcaoElement);
    
    balcaoElement.onclick = () => {ordemServico[8] = 'oficina'};
    domicilioElement.onclick = () => {ordemServico[8] = 'domicílio'};
    
    balcaoElement.addEventListener('click', ()=> {
        let orcamentoContent = resumoLoad();
        confirmLoad();

        console.log(orcamentoContent);
    });

    domicilioElement.addEventListener('click', ()=> {
        
        servicesSection.innerHTML = '';
        enderecoLoad();
        
    });

    balcaoElement.addEventListener('click', () => {

        let orcamentoContent = resumoLoad();
        confirmLoad(orcamentoContent);
    });
};

function enderecoLoad() {
    previousArticle = 'endereco';

    tituloOrcamento.innerText = 'Por favor, insira o endereço do atendimento, contendo nome da rua e número do imóvel para referência.'

    const article = document.createElement('artcile');
    article.id = 'artigo-endereco';
    
    const h3 = document.createElement('h3');
    h3.textContent = "Endereço";
    h3.classList.add('artigo-title');
    article.appendChild(h3);

    const form = document.createElement('form');
    form.id = 'form-endereco';

    const label = document.createElement('label');
    label.innerText = 'Endereço do serviço:';
    label.htmlFor = 'endereco';

    const input = document.createElement('input');
    input.placeholder = 'Endereço...';
    input.type = 'text';
    input.name = 'endereco';
    input.id = 'endereco';
    label.appendChild(input);
    
    form.appendChild(label);

    const btnEndereco = document.createElement('button');
    btnEndereco.id = 'btn-endereco';
    btnEndereco.type = 'submit';
    btnEndereco.innerText = 'Confirmar';

    form.appendChild(btnEndereco);
    
    article.appendChild(form);
    
    servicesSection.appendChild(article);

    btnEndereco.addEventListener('click', (event)=> {
        event.preventDefault();

        ordemServico[9] = input.value;

        if(!ordemServico[9]){
            alert("Preencha o endereço!");
        }else {
        servicesSection.innerHTML = '';
        let orcamentoContent = resumoLoad();
        confirmLoad(orcamentoContent);
        };
    });
};

function resumoLoad() {
    servicesSection.style.flexDirection = 'column';

    previousArticle = 'resumo';

    tituloOrcamento.innerText = 'Confira o resumo de informações e siga as instruções.'

    let orcamentoContent = `Olá,%20preciso%20de%20orçamento%20para%20o%20seguinte%20serviço%0A%0A`;

    const artigo = document.createElement('article');
    artigo.id = 'resumo-artigo';

    const title = document.createElement('h3');
    title.id = 'resumo-titulo';
    title.innerText = 'Resumo do Orçamento';

    artigo.appendChild(title);
    
    const ulLista = document.createElement('ul');
    ulLista.classList.add('lista-resumo');

    
    const liCategoria = document.createElement('li');
    liCategoria.innerHTML = `<strong>Categoria:</strong><span>${ordemServico[0]}</span>`;
    ulLista.appendChild(liCategoria);
    orcamentoContent += `Categoria%20${ordemServico[0]}%0A`;
    
    if (ordemServico[0] == 'residencial') {
        const liObjeto = document.createElement('li');
        liObjeto.innerHTML = `<strong>Fechadura:</strong><span>${ordemServico[1]}</span>`;
        ulLista.appendChild(liObjeto);
        orcamentoContent += `Fechadura%20de%20${ordemServico[1]}%0A`;

        const liChave = document.createElement('li');
        liChave.innerHTML = `<strong>Chave:</strong><span>${ordemServico[4]}</span>`;
        ulLista.appendChild(liChave);
        orcamentoContent += `Chave%20tipo%20${ordemServico[4]}%0A`;
    };
    
    if (ordemServico[0] == 'automotivo') {
        const liCarro = document.createElement('li');
        liCarro.innerHTML =`<strong>Veículo:</strong><span>${ordemServico[2]}</span>`;
        ulLista.appendChild(liCarro);
        orcamentoContent += `Veículo%20${ordemServico[2]}%0A`;
    };
    
    if (ordemServico[0] == 'equipamento') {
        const liEquipamento = document.createElement('li');
        liEquipamento.innerHTML =`<strong>Equipamento:</strong><span>${ordemServico[3]}</span>`;
        ulLista.appendChild(liEquipamento);
        orcamentoContent += `Equipamento%20${ordemServico[3]}%0A`;
    };
    
    const liServico = document.createElement('li');
    liServico.innerHTML = `<strong>Serviço:</strong><span>${ordemServico[5]}</span>`;
    ulLista.appendChild(liServico);
    orcamentoContent += `Serviço%20${ordemServico[5]}%0A`;
    
    if (ordemServico[5] == 'nova chave') {
        const liPerdidaCopia = document.createElement('li');
        liPerdidaCopia.innerHTML =`<strong>Situação:</strong><span>${ordemServico[6]}</span>`;
        ulLista.appendChild(liPerdidaCopia);
        orcamentoContent += `Tipo%20${ordemServico[6]}%0A`;
    };
    
    const liQuantidade = document.createElement('li');
    liQuantidade.innerHTML =`<strong>Quantidade:</strong><span>${ordemServico[7]}</span>`;
    ulLista.appendChild(liQuantidade);
    orcamentoContent += `Quantidade%20${ordemServico[7]}%0A`;

    const liLocal = document.createElement('li');
    liLocal.innerHTML = `<strong>Local:</strong><span>${ordemServico[8]}</span>`;
    ulLista.appendChild(liLocal);
    orcamentoContent += `Local%20${ordemServico[8]}%0A`;

    if (ordemServico[8] === 'domicílio') {
        const liEndereco = document.createElement('li');
        liEndereco.innerHTML = `<strong>Endereço:</strong><span>${ordemServico[9]}</span>`;
        ulLista.appendChild(liEndereco);
        orcamentoContent += `Endereço%20${ordemServico[9]}`;
    }
    
    artigo.appendChild(ulLista);

    servicesSection.innerHTML = '';
    servicesSection.appendChild(artigo);

    console.log(orcamentoContent);
    return orcamentoContent;
};

function confirmLoad(content) {
    let contentMsg = content;

    contentMsg = contentMsg.replaceAll(' ', '%20');

    const article = document.createElement('article');
    article.classList.add('artigo-confirmar');

    const paragraph = document.createElement('p');
    paragraph.textContent = `Confira o resumo do orçamento. Se tudo estiver correto, escolha uma das opções:`;

    const btnConfirm = document.createElement('a');
    btnConfirm.href = 'https://wa.me/5553999826091?text='+contentMsg;
    btnConfirm.target = '_blank'
    btnConfirm.textContent = "Solicitar Orçamento";
    btnConfirm.id = 'btn-confirmar';
    contentMsg = contentMsg.replaceAll('%20', '%2B');
    console.log(contentMsg)
    
    const figure = document.createElement('figure');
    const qrCode = document.createElement('img');

    qrCode.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/5553999826091?text='+contentMsg;
    qrCode.id = 'qr-img';

    const figCaption = document.createElement('figcaption');
    figCaption.textContent = 'Ou escaneie o qrCode para solicitar seu orçamento diretamente em seu smartphone.'

    figure.appendChild(qrCode);
    figure.appendChild(figCaption);
    article.appendChild(paragraph);
    article.appendChild(btnConfirm);
    article.appendChild(figure);
    servicesSection.appendChild(article);

    btnConfirm.addEventListener('click', () => {
        servicesSection.innerHTML = ''
        servicesSection.style.flexDirection = '';
        servicesSection.style.boxSizing = '';
        servicesSection.style.overflow = 'auto';
        
        categoriaLoad();
    })
};

window.onload = categoriaLoad;