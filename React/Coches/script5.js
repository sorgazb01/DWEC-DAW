
document.addEventListener('DOMContentLoaded',inicio);
listaColores= ['Red', 'Blue', 'Green', 'Black', 'White',
  'Silver', 'Yellow','Gray']
listaCoincidencias=[0,0,0,0,0,0,0,0]
const cajaPrincipal=document.querySelector(".container")
listaCoches5=[];
listaCoches5Final=[]
function inicio() {
  fetch('coches.json')  // Reemplaza con la URL correcta de tu fichero JSON
    .then(response => response.json())
    .then(data => mostrar5(data));
  
}
 function mostrar5(data)   
    {
      const cochesContainer = document.querySelector('.container');
      data.forEach(coche=>{
        listaCoches5.push(coche);
      });
   
    listaCoches5.forEach(coche=>{
       for (let i=0;i<listaColores.length;i++){
        if (listaColores[i]==coche.color){
          listaCoincidencias[i]=listaCoincidencias[i]+1;
        }
       }
       
    })
     let mayor=0;
     let color=-1;
     for (let i=0;i<listaCoincidencias.length;i++){
      if (listaCoincidencias[i]>mayor){
        mayor=listaCoincidencias[i];
        color=i;
      }
     }
     
     
          const spColor=document.createElement("small");
          spColor.textContent="COLOR:"+listaColores[color];
          const spAparaciones=document.createElement("small");
          spAparaciones.textContent="APARICIONES:"+mayor;
          
          cajaPrincipal.appendChild(spColor)
          cajaPrincipal.appendChild(spAparaciones)
         
          
      
       
  }
    

  