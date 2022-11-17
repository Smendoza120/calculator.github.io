//Screen
let screenMin = document.getElementById('screen-min');
let screenMax = document.getElementById('screen-max');

//Special buttons
const botones = document.querySelectorAll('.calculator__number');
const reset = document.querySelector('.calculator__number-reset')
const deleted = document.getElementById('del');
const equal = document.getElementById('equal');

console.log(botones)

//Variables para las operaciones
let operacionA = 0;
let operacionB = 0;
let operacion = '';

let punto = 0; 

reset.addEventListener('click', ()=>{
    operacionA = screenMax.textContent.length
    
})

equal.addEventListener('click', ()=>{
    operacionB = screenMax.textContent;
    resolver();
})

botones[11].addEventListener('click', ()=>{
    //point
    screenMax.textContent = '.'
})

//Buton reset
reset.addEventListener('click', ()=>{
    resetear()
})

//Numbers butons
botones[0].addEventListener('click', ()=>{
    numeros(7)
})
botones[1].addEventListener('click', ()=>{
    numeros(8)
})
botones[2].addEventListener('click', ()=>{
    numeros(9)
})
botones[3].addEventListener('click', ()=>{
    numeros(4)
})
botones[4].addEventListener('click', ()=>{
    numeros(5)
})
botones[5].addEventListener('click', ()=>{
    numeros(6)
})
botones[7].addEventListener('click', ()=>{
    numeros(1)
})
botones[8].addEventListener('click', ()=>{
    numeros(2)
})
botones[9].addEventListener('click', ()=>{
    numeros(3)
})
botones[12].addEventListener('click', ()=>{
    numeros(0)
})

//Simbols buttons
botones[6].addEventListener('click', ()=>{
    //plus
    operacionA = screenMax.textContent; //guardo el dato del screen maximo
    screenMin.textContent = screenMax.textContent; //cambio el screem minimo con los datos del screen maximo
    operacion = '+'; //le defino una operacion
    limpiar(); //Limpio el campo del screen maximo
})
botones[10].addEventListener('click', ()=>{
    //minus
    operacionA = screenMax.textContent;
    screenMin.textContent = screenMax.textContent;
    operacion = '-';
    limpiar();
})
botones[13].addEventListener('click', ()=>{
    //slash
    operacionA = screenMax.textContent;
    screenMin.textContent = screenMax.textContent;
    operacion = '/';
    limpiar();
})
botones[14].addEventListener('click', ()=>{
    //times
    operacionA = screenMax.textContent;
    screenMin.textContent = screenMax.textContent;
    operacion = '*';
    limpiar();
})

//Simbolos
reset.addEventListener('click', ()=>{
    screenMax.textContent = '';
})

//Funciones
function numeros(numero){
    screenMax.textContent += numero;
}
function resetear(){
    screenMin.textContent = '';
    screenMax.textContent = '';
    operacionA = 0;
    operacionB = 0;
    operacion = '';
}
function limpiar(){
    screenMax.textContent = '';
}
function resolver(){
    let respuesta = 0; //Creamos una variable que contiene el resultado
    switch (operacion){
        case '+':
            respuesta = parseFloat(operacionA) + parseFloat(operacionB);
            break;
        case '-':
            respuesta = parseFloat(operacionA) - parseFloat(operacionB);
            break;
        case '*':
            respuesta = parseFloat(operacionA) * parseFloat(operacionB);
            break;
        case '/':
            respuesta = parseFloat(operacionA) / parseFloat(operacionB);
            break;
    }
    resetear();
    screenMax.textContent = respuesta;
}

//Hace falta
/*
    -Terminar el boto DEL
    -Hacer que el boton se imprima una sola vez
    -Hacer que el boton 0 no se repita si esta a la izquierda
    -Cambiar colores
    -Hacer que sume mas veces
*/