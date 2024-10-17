window.addEventListener("load", inicio);

const urlAPI = "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php";

const contenedorPadre = document.querySelectorAll(".col-md-4");

function inicio() {
  limpiarCaja();

  fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data));
  // .finally(() => console.log("Terminado."))
  // .catch((error) => alert(error))

  function mostrarDatos(datos) {
      datos.forEach((dato) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "card";
        contenedorPadre[0].appendChild(tarjeta);

        const imagenWEB = document.createElement("img");
        imagenWEB.setAttribute("src", dato.imagen);
        tarjeta.appendChild(imagenWEB);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        tarjeta.appendChild(cardBody);

        const titulo = document.createElement("h2");
        titulo.className = "card-title";
        titulo.textContent = dato.nombre;

        const subtitulo = document.createElement("p");
        subtitulo.className = "card-text";
        subtitulo.textContent = dato.cargo;

        cardBody.appendChild(titulo);
        cardBody.appendChild(subtitulo);
      });
  }
}

function limpiarCaja() {
  contenedorPadre.forEach((bloque) => {
    while (bloque.hasChildNodes()) {
      bloque.removeChild(bloque.firstChild);
    }
  });
}
