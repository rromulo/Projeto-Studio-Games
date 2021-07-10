export default function main(){
    var main = document.createElement("main");

    var containerTop = document.createElement("div");
    containerTop.setAttribute("class","container flex");

    var links= [];
    var topo = document.createElement("section");
    topo.setAttribute("class","topo");
    topo.appendChild(containerTop);

    main.appendChild(topo);

    var textTop = document.createElement("div");
    textTop.setAttribute("class","textoTopo");

    var imgTop = document.createElement("div");
    imgTop.setAttribute("class","imgTopo");

    containerTop.appendChild(textTop);
    containerTop.appendChild(imgTop);

    var h1Topo = document.createElement("h1");
    h1Topo.textContent= "Desafie seus amigos nesse multiplayer repleto de aventuras";

    for(let i = 0; i < 2;i++){
        links[i] = document.createElement("a");
        links[i].setAttribute("href","#");
    }

    links[0].textContent="Apple Store";
    links[1].textContent="Play Store";
    textTop.appendChild(h1Topo);
    textTop.appendChild(links[0]);
    textTop.appendChild(links[1]);

    document.body.appendChild(main);
    //APLICANDO MEDIA QUERYS NA SEÇÃO TOPO
    const mediumBpTop = matchMedia('(max-width: 768px)');
    const changeSizeTop = (mqlTop)=>{
        if(mqlTop.matches){
            containerTop.removeChild(imgTop);
            textTop.style.width="100%"
            textTop.style.textAlign="center"
            h1Topo.style.margin="0 auto"
        }else{
            containerTop.appendChild(imgTop);
            textTop.style.width="50%"
            textTop.style.textAlign="left"
            h1Topo.style.margin="30px auto 0px auto"
        }
    }
    mediumBpTop.addListener(changeSizeTop);
    changeSizeTop(mediumBpTop);

    /*_________________SESSAO DEPOIMENTOS___________________*/
    var depoimentos = document.createElement("section");
    depoimentos.setAttribute("class","depoimentos");
    main.appendChild(depoimentos);
    var containerDep = document.createElement("div");
    containerDep.setAttribute("class","container");
    depoimentos.appendChild(containerDep);
    var wraperDepoimentos = document.createElement("div");
    wraperDepoimentos.setAttribute("Class","wraperDepoimentos flex");
    containerDep.appendChild(wraperDepoimentos);
    var depoimentoSingle=[];
    var textoDepoimento = [];
    var h3Dep = [];


    for(let i = 0; i < 2; i++){
        depoimentoSingle[i] = document.createElement("div");
        depoimentoSingle[i].setAttribute("Class","depoimentoSingle w50");
    }
    for(let i=0;i<depoimentoSingle.length;i++){
        wraperDepoimentos.appendChild(depoimentoSingle[i]);
    }

    for(let i = 0; i<depoimentoSingle.length; i++){
        textoDepoimento[i] = document.createElement("q");
        h3Dep[i] = document.createElement("h3");
        depoimentoSingle[i].appendChild(textoDepoimento[i]);
        depoimentoSingle[i].appendChild(h3Dep[i]);
    }
    textoDepoimento[0].textContent="Esse jogo é estremamente divertido, joguei com 3 amigos e passamos horas e horas jogando sem parar";
    h3Dep[0].textContent="Romilda";
    textoDepoimento[1].textContent="Esse jogo é estremamente divertido, joguei com 3 amigos e passamos horas e horas jogando sem parar";
    h3Dep[1].textContent="Romulo";
    /*___________________FIM SEÇÃO DEPOIMENTOS________________*/

    /*__________________________SEÇÃO SOBRE____________________*/
    //CRIAÇÃO DA DESSÃO SOBRE / CREATION OF SECTION ABOUT
    var about = document.createElement("section");
    about.setAttribute("class","sobre");
    main.appendChild(about);
    //CRIAÇÃO DO TITULO DA SESSÃO/ CREATION OF THE TITLE OF THE SECTION
    var h3about=document.createElement("h3");
    h3about.textContent="Sobre o jogo";
    /*CRIAÇÃO DO CONTAINER DA SESSAO E INTRODUZINDO O TITULO DENTRO DO CONTAINER / 
    CREATION OF THE CONTAINER OF THE SECTION AND PUTING TITLE ON THE CONTAINER*/
    var containerAbout=document.createElement("div");
    containerAbout.setAttribute("Class","container title__about")
    containerAbout.appendChild(h3about);
    about.appendChild(containerAbout);

    /*CRIAÇÃO DO CONTAINER PARA O CONTEÚDO DA SESSAO SOBRE / 
    CREATION OF THE CONTAINER OF THE CONTENT OF THE SECTION ABOUT*/
    containerAbout = document.createElement("div");
    containerAbout.setAttribute("class","container flex");
    about.appendChild(containerAbout);

    //CRIAÇÃO DAS VARIÁVEIS PARA INSERIR O CONTEÚDO NA SEÇÃO SOBRE / CREATION THE VARIABLES FOR INSERT THE CONTENT IN THE SECTION ABOUT
    var aboutSingle = [];
    var titleSingle = [];
    var aboutContent =[];

    /*CRIANDO ELEMENTOS DENTRO DAS VARIÁVEIS DA SEÇÃO SOBRE, DANDO ATRIBUTOS DE CLASSE E INSERINDO CADA ELEMENTO DENTRO DE UMA DIV /
    CREATING ELEMENTS ON THE VARIABLES OF THE SECTION ABOUT, GIVING ATTRIBUTES OF CLASS AND INSERTING EACH ELEMENT ON THE DIV*/
    for(let i = 0; i< 3;i++){
        aboutSingle[i] = document.createElement("div");
        aboutSingle[i].setAttribute("class","about_single w33");
    }

    for(let i = 0; i < aboutSingle.length; i++){
        containerAbout.appendChild(aboutSingle[i]);
    }

    for(let i = 0; i<aboutSingle.length; i++){
        titleSingle[i] = document.createElement("div");
        titleSingle[i].setAttribute("class","title_single flex");
    }


    for(let i = 0; i<aboutSingle.length; i++){
        aboutContent[i] = document.createElement("div");
        aboutContent[i].setAttribute("class","about_content");
    }

    for (let i = 0; i<aboutSingle.length; i++){
        aboutSingle[i].appendChild(titleSingle[i]);
        aboutSingle[i].appendChild(aboutContent[i]);
    }
    var h3titleSingle = []

    for(let i = 0; i<titleSingle.length; i++){
        h3titleSingle[i] = document.createElement("h3");
        h3titleSingle[i].textContent="Multiplayer";
        titleSingle[i].appendChild(h3titleSingle[i])
    }

    var contentP = [];

    for(let i = 0; i<aboutContent.length; i++){
        contentP[i] = document.createElement("p")
        aboutContent[i].appendChild(contentP[i])
    }
    contentP[0].textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, assumenda rem possimus sint, in ullam debitis corrupti dicta aut aspernatur dolorem quod quisquam. Veniam iure ipsum culpa sunt dolorem officiis!.";
    contentP[1].textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, assumenda rem possimus sint, in ullam debitis corrupti dicta aut aspernatur dolorem quod quisquam. Veniam iure ipsum culpa sunt dolorem officiis!.";
    contentP[2].textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, assumenda rem possimus sint, in ullam debitis corrupti dicta aut aspernatur dolorem quod quisquam. Veniam iure ipsum culpa sunt dolorem officiis!.";
}
