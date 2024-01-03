const servicesSection = document.getElementById
('services');
const btnResidencial = document.getElementById('btn-aside-residencial');
const btnAutomotivo = document.getElementById('btn-aside-automotivo');
const btnProduto = document.getElementById('btn-aside-produtos');

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
        
        const figCaption = document.createElement(`figcaption`);
        figCaption.innerText = `Saiba Mais`;
        
        const articleBtn = document.createElement(`button`);
        articleBtn.id = `${id[0]}-btn`;
        articleBtn.classList.add(`service-article`);
        
        figure.appendChild(img);
        figure.appendChild(figCaption);

        article.appendChild(title);
        article.appendChild(figure);

        articleBtn.classList.add('transicao');
        articleBtn.appendChild(article);

        console.log(articleBtn.id);

        return articleBtn;
    }
}

function residencialLoad() {
    const articleAbertura = new Article(`Aberturas`, `./data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const articleConserto = new Article(`Consertos`, `./data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const articleTrocaSegredo = new Article(`Troca de Segredo`, `./data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const articleCopias = new Article(`Cópias`, `./data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg`);

    const servicesSection = document.getElementById('services');
    const btnResidencial = document.getElementById('btn-aside-residencial');

    btnAutomotivo.style.backgroundColor = ``;
    btnAutomotivo.style.color = ``;

    btnProduto.style.backgroundColor = ``;
    btnProduto.style.color = ``;

    btnResidencial.style.backgroundColor = `var(--orange-color)`;
    btnResidencial.style.color = `var(--white-color)`;

    const elementAberturas = articleAbertura.articleCreator();
    const elementConsertos = articleConserto.articleCreator();
    const elementTrocas = articleTrocaSegredo.articleCreator();
    const elementCopias = articleCopias.articleCreator();
    

    setTimeout(() => {
        elementAberturas.classList.remove('transicao');
        elementConsertos.classList.remove('transicao');
        elementTrocas.classList.remove('transicao');
        elementCopias.classList.remove('transicao');
    }, 0);

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

function automotivoLoad() {
    const articleAbertura = new Article(`Aberturas`, `./data/assets/img/35492568_1678028285648976_9217154968614600704_n.jpg`);
    
    const articleConserto = new Article(`Consertos`, `./data/assets/img/35492568_1678028285648976_9217154968614600704_n.jpg`);
    
    const articleTrocaSegredo = new Article(`Troca de Segredo`, `./data/assets/img/35492568_1678028285648976_9217154968614600704_n.jpg`);
    
    const articleCopias = new Article(`Cópias`, `./data/assets/img/35492568_1678028285648976_9217154968614600704_n.jpg`);
    
    const servicesSection = document.getElementById('services');
    const btnAutomotivo = document.getElementById('btn-aside-automotivo');
    
    btnResidencial.style.backgroundColor = ``;
    btnResidencial.style.color = ``;
    
    btnProduto.style.backgroundColor = ``;
    btnProduto.style.color = ``;
    
    btnAutomotivo.style.backgroundColor = `var(--orange-color)`;
    btnAutomotivo.style.color = `var(--white-color)`;
    
    const elementAberturas = articleAbertura.articleCreator();
    const elementConsertos = articleConserto.articleCreator();
    const elementTrocas = articleTrocaSegredo.articleCreator();
    const elementCopias = articleCopias.articleCreator();
    
    
    setTimeout(() => {
        elementAberturas.classList.remove('transicao');
        elementConsertos.classList.remove('transicao');
        elementTrocas.classList.remove('transicao');
        elementCopias.classList.remove('transicao');
    }, 0);
    
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

function produtoLoad() {
    const articleCopiadora = new Article(`Copiadora`, `./data/assets/img/367460405_6590736087687768_8940837777860267499_n.jpg`);
    
    const servicesSection = document.getElementById('services');
    const btnProduto = document.getElementById('btn-aside-produtos');
    
    btnResidencial.style.backgroundColor = ``;
    btnResidencial.style.color = ``;
    
    btnAutomotivo.style.backgroundColor = ``;
    btnAutomotivo.style.color = ``;
    
    
    btnProduto.style.backgroundColor = `var(--orange-color)`;
    btnProduto.style.color = `var(--white-color)`;
    
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


btnResidencial.addEventListener('click', () => {
    window.URL = window.URL+'#servico'
    servicesSection.innerHTML = ` `;
    residencialLoad();
});

btnAutomotivo.addEventListener('click', () => {
    window.URL = window.URL+'#servico'
    servicesSection.innerHTML = ` `;
    automotivoLoad();
});

btnProduto.addEventListener('click', () => {
    window.URL = window.URL+'#servico'
    servicesSection.innerHTML = ` `;
    produtoLoad();
});

window.onload = residencialLoad;