/*function revertirArray(arreglo) {
    let arreglo2 = [];
    for (let i = arreglo.length-1; i >= 0; i--) {
        arreglo2.push(arreglo[i]);
    }
    return arreglo2;
}*/

function revertirArray(arreglo) {
    let arreglo2 = [];
    for (let i = 0; i < arreglo.length; i++) {
        arreglo2.unshift(arreglo[i]); //unshift coloca los valores al principio
    }
    return arreglo2;
  }

function revertirArrayEnSuLugar(valorArray) {
    for (let i = 0; i < Math.floor(valorArray.length/2); i++) {
        let inicio= valorArray[i];
        valorArray[i] = valorArray[(valorArray.length-1)-i];
        valorArray[valorArray.length-1-i] = inicio;
    }
    return valorArray;
}

console.log(revertirArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let valorArray = [1, 2, 3, 4, 5];
revertirArrayEnSuLugar(valorArray);
console.log(valorArray);
// → [5, 4, 3, 2, 1]*/