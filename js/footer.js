export default function footer(){
    var footer = document.createElement("footer");
    document.body.appendChild(footer);

    /*CRIANDO VARIÁVEL PARA AS SEÇÕES DO FOOTER E ADICIONANDO NO FOOTER*/
    var sections = [];
    for(let i =0 ; i < 2; i ++){
        sections[i] = document.createElement("section");
        footer.appendChild(sections[i]);
    }
    //DANDO ATRIBUTO DE CLASSE E CRIANDO O CONTAINER PARA PRIMEIRA SEÇÂO DO FOOTER(PLATAFORMAS)
    sections[0].setAttribute("class","plataformas");
    var containerFooter = document.createElement("div");
    containerFooter.setAttribute("class","container flex");
    sections[0].appendChild(containerFooter);

    //CRIANDO ATRIBUTO DIV COM A CLASSE TITULO_PLATAFORMAS PARA COLOCAR O TITULO E UM PARÁGRAFO DA DIVISÃO DENTRO DO CONTAINER
    var titlePlatforms = document.createElement("div");
    titlePlatforms.setAttribute("class","titulo_plataformas w50");
    containerFooter.appendChild(titlePlatforms);

    //CRIANDO H2, PARAGRAFO E ADICIONANDO NO TITLEPLATFORMS
    var h2platforms = document.createElement("h2");
    var pPlatforms = document.createElement("p")
    pPlatforms.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore itaque facilis veniam veritatis.`
    h2platforms.innerHTML = `Jogue em qualquer plataforma`;
    titlePlatforms.appendChild(h2platforms);
    titlePlatforms.appendChild(pPlatforms);

    //CRIANDO E ADICIONANDO OS ICONES DAS PLATAFORMAS / CREATING AND ADD ICONS OF THE PLATAFORMS
    var icons = [];
    for(let i = 0; i <5 ; i++){
        icons[i] = document.createElement("i");
        titlePlatforms.appendChild(icons[i])
    }
    icons[0].setAttribute("class","fab fa-google-play");
    icons[1].setAttribute("class","fab fa-app-store-ios")
    icons[2].setAttribute("class","fab fa-playstation")
    icons[3].setAttribute("class","fab fa-xbox")
    icons[4].setAttribute("class","fab fa-steam")

    //CRIANDO IMAGEM PARA SEÇÃO PLATAFORMAS / CREATING IMAGE FOR SECTION (PLATAFORMS)
    var imgPlatforms = document.createElement("div");
    imgPlatforms.setAttribute("class","imgPlatform w50");
    containerFooter.appendChild(imgPlatforms);

    //CRIANDO SEGUNDA SEÇÃO DO FOOTER (SOCIAL) / CREATING SECOND SECTION OF THE FOOTER (SOCIAL)
    sections[1].setAttribute("class","social flex");

    //CRIANDO AS DIVS PARA SEÇÃO SOCIAL / CREATING THE DIVS FOR SECTION SOCIAL
    var divSocial = []
    for(let i =0; i<2; i++){
        divSocial[i] = document.createElement("div");
        sections[1].appendChild(divSocial[i]);
    }
    divSocial[0].setAttribute("class","w33");
    var imgSocial = document.createElement("div");
    //CRIANDO IMAGEM PARA SEÇÂO SOCIAL(FOOTER)
    imgSocial.setAttribute("class","imgSocial");
    divSocial[0].appendChild(imgSocial);

    //ADICIONANDO LINKS E ICONES DA DIV REDES_SOCIAIS
    divSocial[1].setAttribute("class","redes_sociais w33")
    var linksFooter = [];
    for(let i = 0; i < 3; i++){
        linksFooter[i]= document.createElement("a");
        linksFooter[i].setAttribute("target","_blank");
        divSocial[1].appendChild(linksFooter[i]);
    }
    linksFooter[0].setAttribute("href","https://www.instagram.com/rrod.silva/");
    linksFooter[1].setAttribute("href","https://www.linkedin.com/in/romulo-rodrigues-4164301a7/");
    linksFooter[2].setAttribute("href","https://github.com/rromulo");

    //CRIANDO OS ICONES E DANDO ATRIBUTOS
    var iconFooter = [];
    for(let i = 0; i<linksFooter.length; i++){
        iconFooter[i] = document.createElement("i");
    }
    iconFooter[0].setAttribute("class","fa fa-instagram");
    iconFooter[1].setAttribute("class","fa fa-linkedin");
    iconFooter[2].setAttribute("class","fa fa-github");
    linksFooter[0].appendChild(iconFooter[0]);
    linksFooter[1].appendChild(iconFooter[1]);
    linksFooter[2].appendChild(iconFooter[2]);

    //ACRESCENTANDO PARAGRAFO PARA O FOOTER
    var pSocial = document.createElement("p");
    pSocial.setAttribute("class","w33")
    pSocial.innerHTML=`Desenvolvido por Romulo Silva`;
    sections[1].appendChild(pSocial);



    //APLICANDO MEDIA QUERYS DINAMICAMENTE
    const mediumBp = matchMedia('(max-width: 768px)');
    const changeSize = mql =>{
        if(mql.matches){
            containerFooter.style.flexDirection="column"
            titlePlatforms.style.width="100%";
            titlePlatforms.style.textAlign="center";
            pPlatforms.style.textAlign="center";
            pPlatforms.style.maxWidth="none";
            titlePlatforms.style.marginBottom="20px";
            imgPlatforms.style.width="100%";

            sections[1].style.flexDirection="column"
            sections[1].style.margin="0 auto";
            divSocial[0].style.width='100%';
            divSocial[0].style.marginBottom="15px"
            divSocial[1].style.width="100%";
            divSocial[1].style.marginBottom="15px"
            pSocial.style.width="100%";
        }else{
            containerFooter.style.flexDirection="row";
            titlePlatforms.style.width="50%";
            titlePlatforms.style.textAlign="left";
            pPlatforms.style.textAlign="left";
            imgPlatforms.style.width="300px";

            sections[1].style.flexDirection="row"
            sections[1].style.margin="0 auto";
            divSocial[0].style.width='33.3%';
            divSocial[0].style.marginBottom="0px"
            divSocial[1].style.width="33.3%";
            divSocial[1].style.marginBottom="0px"
            pSocial.style.width="33.3%";
        } 
    }
    mediumBp.addListener(changeSize);
    changeSize(mediumBp)
}
