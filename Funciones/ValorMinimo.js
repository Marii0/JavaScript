function minimo(numeroA, numeroB) {
    if (numeroA<numeroB) {
      return numeroA;  
    }
    else if (numeroA>numeroB) {
        return numeroB;
    }
    else{
        return "Los numeros son iguales.";
    }
}

console.log(minimo(0, 10));
console.log(minimo(0, -10));
console.log(minimo(10, 10));

/*console.log(Math.min(0, 10));
console.log(Math.min(0, -10));*/