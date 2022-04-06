export default function header(){
    //CRIAÇÃO DO HEADER DA PAGINA
    var header = document.createElement("header");
    var nav = document.createElement("nav");
    var ul = document.createElement("ul");
    var container=document.createElement("div");


    var logo = document.createElement("div");
    logo.setAttribute("class","logo");
    container.appendChild(logo);

    var logoHeader = document.createElement("div");
    logoHeader.setAttribute("class","logoHeader");
    logo.appendChild(logoHeader)
    var aLogo = document.createElement("a")
    aLogo.setAttribute("href","#")
    aLogo.innerText = `LOGOMARCA`
    logoHeader.appendChild(aLogo)

    //pre-Cria elementos LI para a UL
    var li = [];
    for(var i = 0; i < 3;i++){
        li[i]=document.createElement("li")
    }
    //pre-Cria elementos de link para cara LI
    var link = []
    for(var i = 0; i<li.length;i++){
        link[i]=document.createElement("a");
    }
    //criando textos para os links
    link[0].textContent="Sobre";
    link[0].setAttribute("href","#sobre")
    link[1].textContent="Depoimentos";
    link[1].setAttribute("href","#depoimentos")
    link[2].textContent="BAIXAR AGORA";
    link[2].setAttribute("class","destaque")
    link[2].setAttribute("href","#")
    //___________________________INSERINDO OS ELEMENTOS
    //ADICIONANDO LINK PARA CADA LI e inserindo elementos LI dentro da ul
    for(var i = 0; i<link.length;i++){
        li[i].appendChild(link[i])
        ul.appendChild(li[i]);
    }
    header.appendChild(container);
    container.appendChild(nav);
    nav.appendChild(ul);
 
    //________________________FIM INSERINDO OS ELEMENTOS
    //utilizando do createAttribute() e setAttributeNode()
    var classe= document.createAttribute("class");
    classe.value = "flex";
    ul.setAttributeNode(classe);
    container.setAttribute("class","container flex");
    
    //Adicionando elemento de Hover do CSS, dinamicamente
    for(let i in link){
        link[i].addEventListener("mouseenter",()=>{
            link[i].style.color="#99BD15";
        })
        link[i].addEventListener("mouseout",()=>{
            link[i].style.color="black";
        })
    }
    link[2].addEventListener("mouseenter", ()=>{
        link[2].style.color="white";
    })
    link[2].addEventListener("moueout",()=>{
        link[2].style.color="black";
    })
    document.body.appendChild(header);
}