
document.addEventListener('DOMContentLoaded',inicio);
const cajaPrincipal=document.querySelector(".container")
listaCoches2=[];
listaCoches2Final=[]
function inicio() {
  fetch('coches.json')  // Reemplaza con la URL correcta de tu fichero JSON
    .then(response => response.json())
    .then(data => mostrar2(data));
  
}
function mediaPrecio(listaCoches2){
    let sumaP=0;
    listaCoches2.forEach(element => {
      sumaP+=Number(element.precio)
    })
    return sumaP/listaCoches2.length;
}

function mediaKms(listaCoches2){
      let sumaK=0;
    listaCoches2.forEach(element => {
      sumaK+=Number(element.kms)
    })
    return sumaK/listaCoches2.length;
}

 function mostrar2(data)   
    {
      const cochesContainer = document.querySelector('.container');
      data.forEach(coche=>{
        listaCoches2.push(coche);
      });
    let precioMedio=mediaPrecio(listaCoches2);
    let kmsMedio=mediaKms(listaCoches2);
    listaCoches2.forEach(coche=>{
      
        if (Number(coche.precio)>Number(precioMedio) &&
         Number(coche.kms)>Number(kmsMedio)){
            listaCoches2Final.push(coche);
        }
    })
      alert ("N Coincidencias: "+listaCoches2Final.length)
      if (listaCoches2Final.length > 0) {
        listaCoches2Final.forEach(element=>{
          const spColor=document.createElement("small");
          spColor.textContent="COLOR:"+element.color;
          const spMarca=document.createElement("small");
          spMarca.textContent="  MARCA: "+element.marca;
          const spModelo=document.createElement("small");
          spModelo.textContent="  MODELO: "+element.modelo;
          const spConsumo=document.createElement("small");
          spConsumo.textContent="  CONSUMO: "+element.consumo;
          const spPrecio=document.createElement("small");
          spPrecio.textContent="  PRECIO:"+element.precio;
          const spKms=document.createElement("small");
          spKms.textContent="  KMS:"+element.kms;
          const salto=document.createElement("br");
          cajaPrincipal.appendChild(spColor)
          cajaPrincipal.appendChild(spMarca)
          cajaPrincipal.appendChild(spModelo)
          cajaPrincipal.appendChild(spConsumo)
          cajaPrincipal.appendChild(spPrecio)
          cajaPrincipal.appendChild(spKms)
          cajaPrincipal.appendChild(salto);
          
        })
       
  }
    
}
