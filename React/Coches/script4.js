document.addEventListener('DOMContentLoaded',inicio);
const cajaPrincipal=document.querySelector(".container")
listaCoches4=[];
listaCoches4Final=[]
function inicio() {
  fetch('coches.json')  // Reemplaza con la URL correcta de tu fichero JSON
    .then(response => response.json())
    .then(data => mostrar4(data));
  
}


 function mostrar4(data)   
    {
      const cochesContainer = document.querySelector('.container');
      data.forEach(coche=>{
        listaCoches4.push(coche);
      });
     let menosPrecio=listaCoches4[0].precio;
     let menosCoche=listaCoches4[0];
    listaCoches4.forEach(coche=>{
      
        if (Number(coche.precio)<Number(menosPrecio)){
            menosPrecio=coche.precio;
            menosCoche=coche;
        }
    })
    listaCoches4Final.push(menosCoche);
      alert ("N Coincidencias: "+listaCoches4Final.length)
      if (listaCoches4Final.length > 0) {
        listaCoches4Final.forEach(element=>{
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
  

