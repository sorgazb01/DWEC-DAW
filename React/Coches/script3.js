document.addEventListener('DOMContentLoaded',inicio);
const cajaPrincipal=document.querySelector(".container")
listaCoches3=[];
listaCoches3Final=[]
function inicio() {
  fetch('coches.json')  // Reemplaza con la URL correcta de tu fichero JSON
    .then(response => response.json())
    .then(data => mostrar3(data));
  
}


 function mostrar3(data)   
    {
      const cochesContainer = document.querySelector('.container');
      data.forEach(coche=>{
        listaCoches3.push(coche);
      });
     let maxKms=-1;
     let maxcoche=listaCoches3[0];
    listaCoches3.forEach(coche=>{
      
        if (Number(coche.kms)>Number(maxKms)){
            maxKms=coche.kms;
            maxcoche=coche;
        }
    })
    listaCoches3Final.push(maxcoche);
      alert ("N Coincidencias: "+listaCoches3Final.length)
      if (listaCoches3Final.length > 0) {
        listaCoches3Final.forEach(element=>{
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
  
