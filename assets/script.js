const menuOpenButon = document.querySelector("#menu-open-button");
const menuCloseButon = document.querySelector("#menu-close-button");

menuOpenButon.addEventListener("click",()=>{
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
})

//Close mobile menu
menuCloseButon.addEventListener("click",()=> menuOpenButon.click())

