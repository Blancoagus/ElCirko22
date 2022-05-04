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
    $(".svg-loader").removeClass("d-none")

    var emailData = {
        "from_name": d.getElementById("from_name").value,
        "from_email": d.getElementById("from_email").value,
        "from_phone": d.getElementById("from_phone").value,
        "from_subject": d.getElementById("from_subject").value,
        "from_message": d.getElementById("from_message").value,
    }

    emailjs.send('service_qepv318', 'template_8rf0x7q', emailData)
    .then((res)=>{
      $(".modal.show").modal("hide");
      $("#modalMessage").find(".modal-header").addClass("bg-success text-white")
      $("#modalMessage").find(".modal-title").text("Envio exitoso")
      $("#modalMessage").find(".modal-body").text("El correo se envio de manera exitosa, te responderemos a la brevedad.")
      $("#modalMessage").modal("show")
      $(".svg-loader").addClass("d-none")
    })
    .catch((err) =>{
      $(".modal.show").modal("hide");
      $("#modalMessage").find(".modal-header").addClass("bg-danger")
      $("#modalMessage").find(".modal-title").text("Error")
      $("#modalMessage").find(".modal-body").text("El correo no se pudo enviar, espere unos minutos y vuelva a intentar. Si el problema persiste, ponganse en contacto directamente a: info@elcirko.com.ar")
      $("#modalMessage").modal("show")
    })


  })

  // grecaptcha.ready(function(){
  //   grecaptcha.render("recaptchaContainer", {
  //     sitekey: "6LdNqsAfAAAAAML5KULqX6s1VCfSY_UP-9Any_-6"
  //   });
  // });

})




