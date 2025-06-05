const menuOpenButon = document.querySelector("#menu-open-button");
const menuCloseButon = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link")

menuOpenButon.addEventListener("click",()=>{
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
})

//Close mobile menu
menuCloseButon.addEventListener("click",()=> menuOpenButon.click())

navLinks.forEach(link =>{

link.addEventListener("click",()=> menuOpenButon.click())

})



const swiper = new Swiper('.slide-wrapper', {

  loop: true,
  spaceBetween:25,
  grabCursor:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
    

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsive breakpoint

  breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
  }


});
