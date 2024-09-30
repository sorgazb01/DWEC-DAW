const colores = ["blue", "red", "green", "orange"]
const nombreColores = ["Azul", "Rojo", "Verde", "Naranja"]

const body = document.body

const btnMover = document.querySelector("#mover")

const divContenedor = document.createElement("div")
divContenedor.className = "container"
body.appendChild(divContenedor)

const fieldSetGeneral = document.createElement("fieldset")
const legendFieldSetGeneral = document.createElement("legend")
legendFieldSetGeneral.textContent = "Todos"
fieldSetGeneral.className = "gallery"
fieldSetGeneral.appendChild(legendFieldSetGeneral)
divContenedor.appendChild(fieldSetGeneral)

const fieldSetAzules = document.createElement("fieldset")
const legendFieldSetAzules = document.createElement("legend")
legendFieldSetAzules.textContent = "Azul"
fieldSetAzules.className = "gallery"
fieldSetAzules.appendChild(legendFieldSetAzules)
divContenedor.appendChild(fieldSetAzules)

const fieldSetRojo = document.createElement("fieldset")
const legendFieldSetRojo = document.createElement("legend")
legendFieldSetRojo.textContent = "Rojo"
fieldSetRojo.className = "gallery"
fieldSetRojo.appendChild(legendFieldSetRojo)
divContenedor.appendChild(fieldSetRojo)

const fieldSetVerde = document.createElement("fieldset")
const legendFieldSetVerde = document.createElement("legend")
legendFieldSetVerde.textContent = "Verde"
fieldSetVerde.className = "gallery"
fieldSetVerde.appendChild(legendFieldSetVerde)
divContenedor.appendChild(fieldSetVerde)

const fieldSetNaranja = document.createElement("fieldset")
const legendFieldSetNaranja = document.createElement("legend")
legendFieldSetNaranja.textContent = "Naranja"
fieldSetNaranja.className = "gallery"
fieldSetNaranja.appendChild(legendFieldSetNaranja)
divContenedor.appendChild(fieldSetNaranja)

window.onload = rellenarCajaGeneral

btnMover.addEventListener("click", moverCajas)

function moverCajas(){
    if(!fieldSetGeneral.firstChild){

    }else{
        let cajas = fieldSetGeneral.querySelectorAll("div")
        console.log(cajas.length)
        for (const caja of cajas) {
            if(caja.textContent == "Azul"){
                fieldSetAzules.appendChild(caja)
            }else if (caja.textContent == "Rojo"){
                fieldSetRojo.appendChild(caja)
            }else if (caja.textContent == "Verde"){
                fieldSetVerde.appendChild(caja)
            }else if (caja.textContent == "Naranja"){
                fieldSetNaranja.appendChild(caja)
            }
        }
    }
}

function rellenarCajaGeneral(){
    for (let index = 0; index < 20; index++) {
        let divColor = document.createElement("div")
        let color = Math.floor(Math.random()*colores.length)
        divColor.style.backgroundColor = colores[color]
        divColor.textContent = nombreColores[color]
        divColor.className = "gallery"
        fieldSetGeneral.appendChild(divColor)
    }
}

