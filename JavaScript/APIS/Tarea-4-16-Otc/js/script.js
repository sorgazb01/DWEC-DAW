const urlAPI = "getTodoPersonal.json"

const contenedorDatos = document.querySelector(".row gx-4 gx-lg-5")



fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data))
    .finally(() => console.log("Terminado."))
    .catch((error) => alert(error))


function mostrarDatos(datos){
    limpiarCaja()
    datos.forEach(webc => {
        const columna = document.createElement("div")
        columna.className = "col-md-4 mb-5"
        contenedorDatos.appendChild(columna)

        const tarjeta = document.createElement("div")
        tarjeta.className = "card h-100"
        columna.appendChild(tarjeta)

        const imagenWEB = document.createElement("img")
        imagenWEB.setAttribute("src", webc.imagen)
        tarjeta.appendChild(imagenWEB)

        const cardBody = document.createElement("div")
        cardBody.className = "card-body"
        tarjeta.appendChild(cardBody)

        const titulo = document.createElement("h2")
        titulo.className = "card-title"
        titulo.textContent = webc.nombre

        const subtitulo = document.createElement("p")
        subtitulo.className = "card-text"
        subtitulo.textContent = webc.cargo

        cardBody.appendChild(titulo)
        cardBody.appendChild(subtitulo)

    }) 
}

function limpiarCaja(){
    while(contenedorDatos.firstChild){
        contenedorDatos.removeChild(contenedorDatos.firstChild)
    }
}