
let container = document.querySelector(".menu-btn");

Nav = document.querySelector(".menu");

// navlink = document.querySelector('.menunav-link');

container.addEventListener("click", function(e){
container.classList.toggle("menu-btn-active");
Nav.classList.toggle('menu-active');

// document.querySelectorAll('.menunav-link').forEach(function(ball){

//   ball.classList.toggle('menunav-link-active');

// });

});