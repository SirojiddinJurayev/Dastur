$(document).ready(function(){
    $('.carousel-cards').slick({
        dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
  // const burgerBtn = document.querySelector(".header__mob-btn");
  // const mobileMenu = document.querySelector("#mob__menu");
  // const closeBtn = document.querySelector(".header__mob-close-btn");
  
  // burgerBtn.addEventListener("click", () => {
  //   mobileMenu.classList.toggle("active");
  //   burgerBtn.classList.toggle("falsy");
  //   closeBtn.classList.toggle("show__close-btn");
  // });
  function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')
    
    navs.forEach(nav => nav.classList.toggle('navbar-toggleshow'));
  }
  
  document.querySelector('.navbar-link-toggle')
    .addEventListener('click', classToggle);