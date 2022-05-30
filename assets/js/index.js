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