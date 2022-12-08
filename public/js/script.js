window.addEventListener("load",function(){
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

    /*let linkHomeCelu = document.querySelector(".linkHomeCelu")
    linkHomeCelu.addEventListener("mouseover",function(){
        linkHomeCelu.style.color="grey"
    });*/
})
