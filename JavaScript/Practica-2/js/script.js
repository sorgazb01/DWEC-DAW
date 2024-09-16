window.onload = inicio

function inicio(){

    const boton1 = document.getElementById("btn1")
    const boton2 = document.getElementById("btn2")
    // const boton3 = document.getElementById("btn3")
    const boton4 = document.getElementById("btn4")

    boton1.addEventListener("click",funcionBtn1)
    boton2.addEventListener("click",funcionBtn2)
    // boton3.addEventListener("click",funcionBtn1)
    boton4.addEventListener("click",funcionBtn4)

}

function funcionBtn1(){
    const lista = document.body.querySelector("ul").children
    
    for(let elemento of lista){
        elemento.textContent=Math.trunc(Math.random() * 1000 + 1)
    }
}

function funcionBtn2(){
    const lista = document.body.querySelector("ul").children
    
    for(let elemento of lista){
        let numero = Math.trunc(Math.random() * 1000 + 1)
        if(numero > 500){
            elemento.style.color="blue";
        }else{
            elemento.style.color="green";
        }
        elemento.textContent=numero
    }
}

function funcionBtn4(){
    const lista = document.body.querySelector("ul").children
    
    for(let elemento of lista){
        elemento.textContent=Math.trunc(Math.random() * 10 + 1)
    }



}