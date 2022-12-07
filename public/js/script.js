window.addEventListener("load",function(){
    let menu = document.querySelector(".menu")
    menu.addEventListener("click",function(){
        let linksHomeCelu = document.querySelector(".linksHomeCelu")
        linksHomeCelu.style.display = "flex"
        linksHomeCelu.style.flexDirection = "column"
        linksHomeCelu.style.position="relative"
        linksHomeCelu.style.left="48%"
    });

    /*let linkHomeCelu = document.querySelector(".linkHomeCelu")
    linkHomeCelu.addEventListener("mouseover",function(){
        linkHomeCelu.style.color="grey"
    });*/
})
