function arrayALista(arreglo) { //pasar un array a una lista
    let lista = null; //lista se inicia en null para cuando no tenga valores se coloque un null automaticamente
    for (let i = arreglo.length - 1; i >= 0; i--){
        lista = {
            valor: arreglo[i],
            resto: lista
        };
    }
    return lista;
}

function listaAArray(lista) { //pasar de a una lista a un array
    let arreglo2 = [];
    for (let i = lista; i; i = i.resto) { //se utiliza i.resto para pasar a traves de la propiedades resto y  cuando se topa con null se sale del for
        arreglo2.push(i.valor);
    }
    return arreglo2;
}

function preceder(valor,lista) { //listas que comparten estructura
    lista = {valor, resto: lista};
    return lista;
}

function posicion(lista, i) { //acceder a posicion de la lista
    if (!lista) {
        return undefined;
    }
    else if (i==0) {
        return lista.valor;
    }
    else{
        return posicion(lista.resto, i-1);
    }
}

console.log(arrayALista([10, 20]));
// → {valor: 10, resto: {valor: 20, resto: null}}
console.log(listaAArray(arrayALista([10, 20, 30])));
// → [10, 20, 30]
console.log(preceder(10, preceder(20, null)));
// → {valor: 10, resto: {valor: 20, resto: null}}
console.log(posicion(arrayALista([10, 20, 30]), 1));
// → 20