const servicesSection = document.getElementById('services');
const descricaoOrcamento = document.getElementById('descricao-orcamento');

class Article {
    constructor(title, imgSrc) {
        this.title = title,
        this.imgSrc = imgSrc;
    }

    articleCreator() {
        function removerAcentos(str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        const normalizeId = removerAcentos(this.title);
        console.log(normalizeId)
        const id = normalizeId.toLowerCase().split(' ');

        const article = document.createElement(`article`);
        
        const title = document.createElement(`h3`);
        title.innerText = this.title;
        
        const figure = document.createElement(`figure`);
        const img = document.createElement(`img`);
        img.src = this.imgSrc;
        img.classList.add(`article-img`)
        
        // const figCaption = document.createElement(`figcaption`);
        // figCaption.innerText = `Saiba Mais`;
        
        const articleBtn = document.createElement(`button`);
        articleBtn.id = `${id[0]}-btn`;
        articleBtn.classList.add(`service-article`);
        
        figure.appendChild(img);
        // figure.appendChild(figCaption);

        article.appendChild(title);
        article.appendChild(figure);

        articleBtn.classList.add('transicao');
        articleBtn.appendChild(article);

        console.log(articleBtn.id);

        return articleBtn;
    };
};

function categoriaLoad() {
    const articleResidencial = new Article(`Residencial`, `../data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const articleAutomotivo = new Article(`Automotivo`, `../data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const articleEquipamento = new Article(`Equipamentos`, `../data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const servicesSection = document.getElementById(`services`);
    
    const elementResidencial = articleResidencial.articleCreator();
    const elementAutomotivo = articleAutomotivo.articleCreator();
    const elementEquipamento = articleEquipamento.articleCreator();

    setTimeout(() => {
        elementResidencial.classList.remove('transicao');
        elementAutomotivo.classList.remove('transicao');
        elementEquipamento.classList.remove('transicao');
    }, 0);

    servicesSection.appendChild(elementResidencial);
    servicesSection.appendChild(elementAutomotivo);
    servicesSection.appendChild(elementEquipamento);

    const btnResidencial = document.getElementById(`residencial-btn`);
    const btnAutomotivo = document.getElementById(`automotivo-btn`);
    const btnEquipamentos= document.getElementById(`equipamentos-btn`);

    btnResidencial.addEventListener(`click`, () => {
        servicesSection.innerHTML = ` `;
        residencialLoad();
    });
    btnAutomotivo.addEventListener(`click`, () => {
        servicesSection.innerHTML = ` `;
        automotivoLoad();
    });
    btnEquipamentos.addEventListener(`click`, () => {
        servicesSection.innerHTML = ` `;
        produtoLoad();
    });

};

function serviceLoad() {
    const articleAbertura = new Article(`Aberturas`, `../data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const articleConserto = new Article(`Consertos`, `../data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const articleTrocaSegredo = new Article(`Troca de Segredo`, `../data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const articleCopias = new Article(`Cópias`, `../data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const servicesSection = document.getElementById('services');

    const elementAberturas = articleAbertura.articleCreator();
    const elementConsertos = articleConserto.articleCreator();
    const elementTrocas = articleTrocaSegredo.articleCreator();
    const elementCopias = articleCopias.articleCreator();

    setTimeout(() => {
        elementAberturas.classList.remove('transicao');
        elementConsertos.classList.remove('transicao');
        elementTrocas.classList.remove('transicao');
        elementCopias.classList.remove('transicao');
    }, 200);

    servicesSection.appendChild(elementAberturas);
    servicesSection.appendChild(elementConsertos);
    servicesSection.appendChild(elementTrocas);
    servicesSection.appendChild(elementCopias);

    const btnAbertura = document.getElementById(`aberturas-btn`);
    const btnConserto = document.getElementById(`consertos-btn`);
    const btnSegredo = document.getElementById(`troca-btn`);
    const btnCopia = document.getElementById(`copias-btn`);

    btnAbertura.addEventListener(`click`, () => {
        alert(`O botão está funcionando.`)
    });
    btnConserto.addEventListener(`click`, () => {
        alert(`O botão está funcionando.`)
    });
    btnSegredo.addEventListener(`click`, () => {
        alert(`O botão está funcionando.`)
    });
    btnCopia.addEventListener(`click`, () => {
        alert(`O botão está funcionando.`)
    });

};

function enderecoLoad() {
    const servicesSection = document.getElementById(`services`);
    
    const articleForm = document.createElement(`article`);
    articleForm.id = `artigo-endereco`;
    articleForm.classList.add(`transicao`);

    const articleTitle = document.createElement(`h3`);
    articleTitle.textContent = `Informe seu endereço:`;
    articleTitle.id = `titulo-endereco`

    const articleInput = document.createElement(`input`);
    articleInput.type = `text`;
    articleInput.name = `address`;
    articleInput.id = `input-endereco`;
    articleInput.placeholder = `Digite o endereço...`;

    const buttonSubmit = document.createElement(`button`);
    buttonSubmit.id = `submit-endereco`
    buttonSubmit.innerText = `Confirmar`

    setTimeout(() => {
        articleForm.classList.remove('transicao');
    }, 0);

    articleForm.appendChild(articleTitle);
    articleForm.appendChild(articleInput);
    articleForm.appendChild(document.createElement(`br`));
    articleForm.appendChild(buttonSubmit);
    
    servicesSection.innerHTML = ``;
    servicesSection.appendChild(articleForm);
}

function residencialLoad() {
    const cadeadi = new Article(`Comum`, `../data/assets/img/367460405_6590736087687768_8940837777860267499_n.jpg`);

    const chaveTetra = new Article(`Tetra`, `../data/assets/img/367460405_6590736087687768_8940837777860267499_n.jpg`);
    
    const chaveGorge = new Article(`Gorge`, `../data/assets/img/367460405_6590736087687768_8940837777860267499_n.jpg`);

    const chaveMultiPonto = new Article(`Multiponto`, `../data/assets/img/367460405_6590736087687768_8940837777860267499_n.jpg`);

    const servicesSection = document.getElementById('services');
    
    const elementComum = chaveComum.articleCreator();
    const elementTetra = chaveTetra.articleCreator();
    const elementGorge = chaveGorge.articleCreator();
    const elementMultiponto = chaveMultiPonto.articleCreator();

    setTimeout(() => {
        elementComum.classList.remove('transicao');
        elementTetra.classList.remove('transicao');
        elementGorge.classList.remove('transicao');
        elementMultiponto.classList.remove('transicao');
    }, 0);

    servicesSection.appendChild(elementComum);
    servicesSection.appendChild(elementTetra);
    servicesSection.appendChild(elementGorge);
    servicesSection.appendChild(elementMultiponto);

    const btnComum = document.getElementById(`comum-btn`);
    const btnTetra = document.getElementById(`tetra-btn`);
    const btnGorge = document.getElementById(`gorge-btn`);
    const btnMultiponto = document.getElementById(`multiponto-btn`);

    btnComum.addEventListener(`click`, () => {
        enderecoLoad();
    });
    btnTetra.addEventListener(`click`, () => {
        alert(`O botão está funcionando.`)
    });
    btnGorge.addEventListener(`click`, () => {
        alert(`O botão está funcionando.`)
    });
    btnMultiponto.addEventListener(`click`, () => {
        alert(`O botão está funcionando.`)
    });

};

function automotivoLoad() {
    serviceLoad();
};

function produtoLoad() {
    const articleCopiadora = new Article(`Copiadora`, `../data/assets/img/367460405_6590736087687768_8940837777860267499_n.jpg`);
    
    const servicesSection = document.getElementById('services');
    
    const elementCopiadora = articleCopiadora.articleCreator();
    
    setTimeout(() => {
        elementCopiadora.classList.remove('transicao');
    }, 0);
    
    servicesSection.appendChild(elementCopiadora);

    const btnAbertura = document.getElementById(`copiadora-btn`);

    btnAbertura.addEventListener(`click`, () => {
        alert(`O botão está funcionando.`)
    });
}


window.onload = categoriaLoad;