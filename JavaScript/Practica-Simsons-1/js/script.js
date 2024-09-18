window.addEventListener("load",iniciar)

const listadoImagenes = []

function iniciar(){
    const divGalery = document.querySelector(".gallery")
    for (let index = 0; index < 10; index++) {
            const imagenX = document.createElement("img")
            let numero = Math.trunc(Math.random()*19+1)
            imagenX.setAttribute("src","img/"+numero+".JPG")
            divGalery.appendChild(imagenX)
            listadoImagenes.push(imagenX)
    }

    setInterval(() => {
        for (let index = 0; index < listadoImagenes.length; index++) {
            let numero = Math.trunc(Math.random()*19+1)
            listadoImagenes[index].setAttribute("src","img/"+numero+".JPG")
        }
    }, 1000);
}