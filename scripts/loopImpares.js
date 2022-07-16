'use strict'
const LoopImpares = (numero, palabra) => {
    let mensaje = palabra;
    //loop for
    for (let i = 0; i <= 100; i++) {
        let num = i;
        
        let suma = num + numero;
        let condicional = suma % 2;
        if (!(condicional == 0)) {
            console.log(num, "resultado= ", condicional," El número es impar ", mensaje );
        }else {
            console.log(num);
        }
        
    }
    return numero;
}
LoopImpares(5, "Hola mundo");

