window.addEventListener("load",function(){

    /*evento boton menu celu */
    let menu = document.querySelector(".menu")
    menu.addEventListener("click",function(){
        let linksHomeCelu = document.querySelector(".linksHomeCelu")
        if(linksHomeCelu.style.display == "none"){
            linksHomeCelu.style.display = "flex"
            linksHomeCelu.style.flexDirection = "column"
            linksHomeCelu.style.position="relative"
            linksHomeCelu.style.left="48%"
        }
        else{
            linksHomeCelu.style.display = "none"
        }
    });
    /* evento cambio de color en links */
    /*let linkHome = document.querySelector(".linkHome")
    linkHome.addEventListener("mouseover",function(){
        linkHome.style.color="grey"
    });
    linkHome.addEventListener("mouseout",function(){
        linkHome.style.color="#fff"
    });*/

    /* evento cambio de color en links */
    /* no andan siempre, solo si la clase la tiene 1 solo elemento?
    y aunque use selectorAll si está en varios? */
    let linkVideo = document.querySelector(".linkVideo")
    linkVideo.addEventListener("mouseover",function(){
        linkVideo.style.color="grey"
    });
    linkVideo.addEventListener("mouseout",function(){
        linkVideo.style.color="#000"
    });
})
