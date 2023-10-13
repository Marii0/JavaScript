function rango(inicio, final, paso=1 /*Valor predeterminado*/) { //Funcion que genera un arreglo
    let arreglo = [];
    numeroArreglo=inicio;
    for (let i = 0; i <= Math.abs(final-inicio); i++){
        arreglo[i] = numeroArreglo;
        //arreglo.push(inicio+paso);
        numeroArreglo+=paso;
    }
    return arreglo;
}

function suma(arreglo) { //Funcion que suma los argumentos del arreglo
    let contador= 0;
    for (let i = 0; i < arreglo.length; i++) {
        contador += arreglo[i];
    }
    return contador;
}

console.log(suma(rango(1, 10))); //Agregar 3 puntos en los argumentos de la funcion para saber que es un arreglo y que la funcion tome los argumentos por separado.
console.log(rango(5, 2, -1));
console.log(rango(1, 10));