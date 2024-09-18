window.addEventListener("load",iniciar)

function iniciar(){
    const divGalery = document.querySelector(".gallery")
    for (let index = 0; index < 10; index++) {
            console.log(index)
            const imagenX = document.createElement("img")
            let numero = Math.trunc(Math.random()*19+1)
            imagenX.setAttribute("src","img/"+numero+".JPG")
            divGalery.appendChild(imagenX)
    }
}