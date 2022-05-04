var d = document;

d.addEventListener("DOMContentLoaded", () =>{

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

  emailjs.init('iBJdBwplesiLjnWBx')
  var contactForm = d.getElementById("contactForm")
  contactForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_ong0sjb', 'template_8rf0x7q', contactForm)
  })

  grecaptcha.ready(function(){
    grecaptcha.render("recaptchaContainer", {
      sitekey: "6LdNqsAfAAAAAML5KULqX6s1VCfSY_UP-9Any_-6"
    });
  });

})




