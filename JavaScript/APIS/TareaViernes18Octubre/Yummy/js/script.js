window.onload = inicio

const urlAPIPlatos = "getPlatos.php.json"

const listaPanaderias=["Jesus","Almagro","Julia","Andalusi","JoseAntonio","el trigal"]

const listaEnlaces=["panaderiajesus.com","panalmagro.es",
"panaderiasjulia.es","panaderialaandalusi.com","panaderiajoseantonio.com",
"eltrigal.com"
]

const listaCocineros = document.querySelectorAll(".chef-member")

const platos = document.querySelectorAll(".col-lg-4.menu-item")

// Indentificamos la barra de navegacion:
const barraNavegacion = document.querySelector("#navbar ul")

// Indentificamos los contenedores de estadisticas:
const contenedoresEstaditicas = document.querySelectorAll(".purecounter")

function inicio(){

    console.log(listaCocineros)

    fetch(urlAPIPlatos)
    .then((response) => response.json())
    .then((data) => cambiarPlatos(data))
    // .finally(() => console.log("Terminado."))
    // .catch((error) => alert(error))

    // Cambiamos los datos de la barra de navegacion
    cambiarDatosBarraNavegacion()

    // Cambiamos las estadisticas random:
    generarEstadisticasAleatorias()
}

function cambiarPlatos(datos){
    let index = 0;

    datos.forEach((dato,index) => {
        platos[index].children[0].firstElementChild.setAttribute("src",dato.imagen)
        platos[index].children[1].textContent=dato.nombre
        platos[index].children[2].textContent=dato.ingredientes
        platos[index].children[3].textContent=dato.precio
    })
}

function cambiarCocineros(datos){
    let index = 0;
    
    datos.forEach((dato,index) => {
            listaCocineros[index].children[0].firstElementChild.setAttribute("src",dato.imagen)
            listaCocineros[index].children[1].textContent=dato.nombre
            listaCocineros[index].children[2].textContent=dato.ingredientes
            listaCocineros[index].children[3].textContent=dato.precio
        })
}

function cambiarDatosBarraNavegacion(){
    const elementosLi = barraNavegacion.children
    let index = 0
    for (const li of elementosLi) {
        li.firstElementChild.setAttribute("href","http://"+listaEnlaces[index])
        li.firstElementChild.textContent = listaPanaderias[index]
        index ++
    }

}

function generarEstadisticasAleatorias(){
    for (const estadistica of contenedoresEstaditicas) {
        if(estadistica == contenedoresEstaditicas[0]){
            estadistica.setAttribute("data-purecounter-end",generarNumRandom(20))
        }else if(estadistica == contenedoresEstaditicas[1]){
            estadistica.setAttribute("data-purecounter-end",generarNumRandom(200))
        }else if(estadistica == contenedoresEstaditicas[2]){
            estadistica.setAttribute("data-purecounter-end",generarNumRandom(2000))
        }else if(estadistica == contenedoresEstaditicas[3]){
            estadistica.setAttribute("data-purecounter-end",generarNumRandom(2000))
        }
    }
}

function generarNumRandom(num){
    return (Math.floor(Math.random()*num))
}