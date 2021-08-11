/* TOGGLE MENU ON CLICK: HAMBURGUER AND X */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll ("nav .toggle")  

 for(const element of toggle){
     element.addEventListener('click', function(){
         nav.classList.toggle('show')
     })
 }
 
 /* WHEN CLICL ON MENU ITEM, HIDDE THE MENU*/

 const links = document.querySelectorAll('nav ul li a')

 for(const link of links){
     link.addEventListener('click', function(){
         nav.classList.remove('show')
     })
 }

 /* CHANGE THE PAGE HEADER WHEN SCROLL*/

 const header = document.querySelector("#header")
 const navHeight = header.offsetHeight

 window.addEventListener('scroll', function(){
     if(window.scrollY >= navHeight ){
         header.classList.add('scroll')

     }else{
         header.classList.remove('scroll')
     }
 })

 /* TESTIMONIALS SWIPER*/

 const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el:'.swiper-pagination',
        mousewheel: true,
        keybord: true,
        breakpoints:{
            767:{
                slidesPerView: 2,
                setWrapperSize: true
            }
        }
    }
  });

  /* Mostrar elementos de acordo com o scroll da pagina*/
  const scrollReveal=ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
  })

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, testimonials .testimonials,
    contact .text, #contact .links,
    footer .brand, footer .social
    `,{interval: 100})

/* Back to top button*/
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function(){
    if(window.scrollY>=560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
})
