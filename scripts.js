const form = document.querySelector(".formulario-fale-conosco")

function mostrarform(){
form.style.left = "50%"
form.style.transform = "translateX(-50%)"
}

function esconderform(){
    form.style.left = "-300px"
form.style.transform = "translateX(0)"
}