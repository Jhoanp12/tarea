'use strict'
let numero=prompt("Ingrese un número:");
function LoopPares(numero) {
  for(let i=0; i<=100;i++){ 
    let num=i;
    
    let suma = num+ parseInt(numero);
    if((suma % 2==0)){
      console.log( num, "El número ", suma, " es par");
    }else{
      console.log(num);
    }
  }
  return numero;
}
LoopPares(numero);