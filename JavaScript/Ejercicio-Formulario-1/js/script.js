let accion = document.getElementById("validar")

accion.onsubmit = inicio 

function inicio(){
    let avanzar = true

    // Primer cuadro de texto: entre 3 y 5 dígitos
    let expediente = document.getElementById("idExpediente")
    let smExpediente = document.getElementById("smExpediente")
    let contExpediente = expediente.value
    if(contExpediente.length > 5 || contExpediente.length < 3){
        avanzar = false
        smExpediente.textContent = "* tiene que tener entre 3 y 5 caracteres numéricos"
    }else if(isNaN(contExpediente)){
        avanzar = false
        smExpediente.textContent = "** tiene que ser un valor numérico"
    }else{
        smExpediente.textContent = ""
    }

    // Segundo cuadro de texto: Nombre de al menos 3 letras y solo letras
    let nombre = document.getElementById("idNombre").value
    let smNombre = document.getElementById("smNombre")
    if(nombre.length < 3){
        avanzar = false
        smNombre.textContent = "* tiene que tener más de 3 caracteres"
    // IndexOf averigua si hay al menos un número dentro del nombre
    }else if(nombre.indexOf("0123456789")){
        avanzar = false
        smNombre.textContent = "** tiene valores numéricos"
    }else{
        smNombre.textContent = ""
    }

    return avanzar
}