/*======menu======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/*======scroll section active ======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
  
    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove ('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      
      });
    
    };

  });



  /*======sticky navbar======*/
let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY > 100);



/*======menu function nav bar navbar when on click or scroll======*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*======swipper======*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  /*======dark mode ======*/
  
  let darkModeIcon = document.querySelector('#darkMode-icon');

  darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  };



  
  /*====== scroll reveal  ======*/


  ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'left' });


  

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw7e2QeIUiRLiULX_VrGe2m2H_e60rjNk8LdFxJHv5Uplm4xpc3cVVFDY5sWOE10O3H/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Succesfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })



    