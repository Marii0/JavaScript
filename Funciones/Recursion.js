function esPar(numero) {
    if (numero==0) {
      return "true";  
    }
    else if (numero==1) {
        return "false";
    }
    else{
        return esPar(numero-2);
    }
}

console.log(esPar(0));
console.log(esPar(1));
console.log(esPar(10));
console.log(esPar(9));
console.log(esPar(-1)); //Maximum call stack size exceeded.

/*Cuando se le dé un número negativo, la función volverá a 
repetirse una y otra vez, pasándose a si misma un número cada 
vez más negativo, quedando así más y más lejos de devolver un 
resultado. Eventualmente quedandose sin espacio en la pila y 
abortando el programa.

*/
