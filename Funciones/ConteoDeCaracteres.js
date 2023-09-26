function contarFs(cadena) {
    let contador=0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i]=="F") {
            contador++;
        }
        else if(cadena[i]=="f"){
            contador++;
        }
        else{
            continue;
        }
    }
    return contador;
}

function contarCaracteres(cadena, caracter) {
    let contador=0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i]==caracter) {
            contador++;
        }
        else{
            continue;
        }
    }
    return contador;
}

console.log(contarFs("FFC"));
console.log(contarCaracteres("kakkerlak", "k"));