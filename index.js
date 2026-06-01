// template_uk9mk5m   Template ID
// service_sly81km    Service ID
// 084wJD2VQpANrjed5  Public API key

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            "service_sly81km",
            "template_uk9mk5m",
           event.target,
            "084wJD2VQpANrjed5"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
           loading.classList.remove("modal__overlay--visible");
           alert(
            "the email service is temporarily unavailable. Please contact me directly on elisandrosams@gmail.com."
           ); 
     })
}