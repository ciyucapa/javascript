// permite solo traer y tener ordenado los salarios

const salariosColombia = colombia.map(i => i.salario).sort(function(a, b){return a - b})

// Utils
const isPar = (numero) => {
    return (numero % 2 === 0);
};

const calculateMediaAritmetica = (list) => {
    if(list.length > 0) {
        const sumaLista = list.reduce(function(a, b){return a + b});
        const promedioList  = sumaLista / list.length;
        return promedioList
    }
}

// Calculo mediana

const medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2);

    if(isPar(lista.length)){
        const elemento1 = lista[mitad - 1];
        const elemento2 = lista[mitad];

        const promedio = calculateMediaAritmetica([elemento1, elemento2]);
        return promedio

    } else {
        const salarioMitad = lista[mitad]
        return salarioMitad
    }
};

console.log("medianaSalarios", medianaSalarios(salariosColombia))

// Top 10% salarios mediana

const medianaTopCol10 = () => {
    const spliceStar = (salariosColombia.length * 90) / 100;
    const spliceCount = salariosColombia.length - spliceStar;

    const salarioColTop10 = salariosColombia.splice(spliceStar, spliceCount)

    const medianaTopCol = calculateMediaAritmetica(salarioColTop10)
    return medianaTopCol
}

console.log("medianaTopCol10", medianaTopCol10())

