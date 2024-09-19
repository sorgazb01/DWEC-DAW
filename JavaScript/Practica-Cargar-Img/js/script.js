const body = document.body
const botonCargar = document.createElement("button")
botonCargar.textContent = "Cargar imagen"
body.appendChild(botonCargar)

const listadoImagenes = []

for (let index = 0; index < 20; index++) {
    const imagenX = document.createElement("img")
    listadoImagenes.push(imagenX)
}

botonCargar.addEventListener("click",()=>{
    for (let index = 0; index < listadoImagenes.length; index++) {
        if(index % 2 == 0){
            genero = "women"
        }else{
            genero = "men"
        }
        numero = Math.trunc(Math.random()*34+1)
        listadoImagenes[index].setAttribute("src","https://randomuser.me/api/portraits/"+genero+"/"+numero+".jpg")
        body.append(listadoImagenes[index]) 
    }
})