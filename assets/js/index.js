var d = document;
var w = window;

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


d.addEventListener("scroll", (e) => {
  var header = d.querySelector("header");
  var navbar = d.querySelector(".nav-bkg");
  if(w.scrollY >= (header.offsetTop + header.offsetHeight) - 150){
    navbar.classList.add("nav-sticky")
  } else {
    navbar.classList.remove("nav-sticky")
  }
})

d.addEventListener("click", (e) => {
  if(e.target.matches(".navbar-toggler") || e.target.matches(".navbar-toggler-icon")){
    var nav = d.querySelector("#navbarNav");
    if(nav.classList.contains("responsive-nav")){
      nav.classList.add("collapse");
      nav.classList.remove("responsive-nav");
      d.querySelector("#close-nav").classList.add("d-none");
    } else {
      nav.classList.remove("collapse");
      nav.classList.add("responsive-nav");
      d.querySelector("#close-nav").classList.remove("d-none");
    }
  }

  if(e.target.matches("#close-nav")){
    var nav = d.querySelector("#navbarNav");
    if(nav.classList.contains("responsive-nav")){
      nav.classList.add("collapse");
      nav.classList.remove("responsive-nav");
      d.querySelector("#close-nav").classList.add("d-none");
    } else {
      nav.classList.remove("collapse");
      nav.classList.add("responsive-nav");
      d.querySelector("#close-nav").classList.remove("d-none");
    }
  }

})