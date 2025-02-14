
    document.addEventListener('DOMContentLoaded',inicio);
    const cajaPrincipal=document.querySelector(".container")
     listaCoches1=[];
    function inicio() {
      fetch('coches.json')  
        .then(response => response.json())
        .then(data => mostrar1(data));
      
    }
     function mostrar1(data)   
        {
          const cochesContainer = document.querySelector('.container');

          // Filtrar coches según los criterios: verdes, Volkswagen, consumo < 5, precio > 25000
         data.forEach(coche=>{
          if(
            coche.color === 'Green' &&
            coche.marca === 'Volkswagen' &&
            coche.consumo<  7 &&
            coche.precio > 25000
          )
          listaCoches1.push(coche);
        });
          alert ("N Coincidencias: "+listaCoches1.length)
          if (listaCoches1.length > 0) {
            listaCoches1.forEach(element=>{
              const spColor=document.createElement("small");
              spColor.textContent="COLOR:"+element.color;
              const spMarca=document.createElement("small");
              spMarca.textContent="  MARCA: "+element.marca;
              const spConsumo=document.createElement("small");
              spConsumo.textContent="  CONSUMO: "+element.consumo;
              const spPrecio=document.createElement("small");
              spPrecio.textContent="  PRECIO:"+element.precio;
              const salto=document.createElement("br");
              cajaPrincipal.appendChild(spColor)
              cajaPrincipal.appendChild(spMarca)
              cajaPrincipal.appendChild(spConsumo)
              cajaPrincipal.appendChild(spPrecio)
              cajaPrincipal.appendChild(salto);
              
            })
           
      }
        
    }