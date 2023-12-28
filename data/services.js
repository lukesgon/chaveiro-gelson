class Article {
    constructor(title, imgSrc) {
        this.title = title,
        this.imgSrc = imgSrc;
    };

    articleCreator() {
        const article = document.createElement(`article`);
        
        const title = document.createElement(`h2`);
        title.innerText = this.title;

        const figure = document.createElement(`figure`);
        
        const img = document.createElement(`img`);
        img.src = this.imgSrc;

        const figCaption = document.createElement(`figcaption`);
        figCaption.innerText = `Saiba Mais`;
        
        const articleBtn = document.createElement(`button`);
        articleBtn.id = `${this.title}-btn`;

        figure.appendChild(img);
        figure.appendChild(figCaption);

        article.appendChild(title);
        article.appendChild(figure);
        
        articleBtn.appendChild(article);

        return articleBtn;
    };
};

const articleAbertura = new Article(`Aberturas`, `./data/assets/img/35526963_1678028438982294_8817581031352696832_n.jpg` )

const servicesSection = document.getElementById('services');

const btnResidencial = document.getElementById('btn-aside-residencial');

btnResidencial.addEventListener('click', () => {
    servicesSection.innerHTML = ``;
    
    const elementAberturas = articleAbertura.articleCreator();
    
    servicesSection.appendChild(elementAberturas);
})