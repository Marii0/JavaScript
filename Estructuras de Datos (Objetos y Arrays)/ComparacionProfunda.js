function igualdadProfunda(objeto1, objeto2) {
    if (objeto1==objeto2) { //son objetos iguales
        return true;
    }
    else if(objeto1 == null || typeof objeto1 != "object" || objeto2 == null || typeof objeto2 != "object"){ //revision de si son objetos
        return false;
    }
    if (objeto1.length != objeto1.length) { //longitud de los objetos
     return false;   
    }

    let llaves1 = Object.keys(objeto1), llaves2 = Object.keys(objeto2); //objetener propiedades

    for (let llave of llaves1) { //revision de las propiedades
        if (!llaves2.includes(llave) || !igualdadProfunda(objeto1[llave], objeto2[llave])){
            return false;
        }
    }
    return true;
}

let objeto = {aqui: {hay: "un"}, objeto: 2};
console.log(igualdadProfunda(objeto, objeto));
// → true
console.log(igualdadProfunda(objeto, {aqui: 1, object: 2}));
// → false
console.log(igualdadProfunda(objeto, {aqui: {hay: "un"}, objeto: 2}));
// → true