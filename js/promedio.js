let list = []
//Calcula la lista que recibe de los inputs
const calculateList = () => {
    const salario = document.getElementById("InputSalarios");
    const salarioValue = Number(salario.value)

    if(salarioValue >= 1){
        list.push(salarioValue);

        list.sort(function(a, b){return a - b});

        listaHtml = list.map(lista => lista)
    
        document.getElementById("InputSalarios").value = "";

        const resultList = document.getElementById("ResultL")
        resultList.innerText = "Salarios agregados son: " +  listaHtml
    }

    return list
}

//Calcula la media
const calculateMediaAritmetica = (list) => {
    if(list.length > 0) {
        const sumaLista = list.reduce(function(a, b){return a + b});
        const promedioList  = sumaLista / list.length;
        return promedioList
    }
}

//Calcula la Promedio
const calculatePromedio = () => {
    const dateList = calculateList();

    if(dateList.length > 0) {
        const promedio = calculateMediaAritmetica(dateList);

        const resultPromedio = document.getElementById("ResultPromedio")
        resultPromedio.innerText = "El promedio de los salario entre los trabajadores es de $" + promedio 

    return promedio
    }
    
    return []
}

//verifica si el numero es par o no
const isPar = (numero) => {
    if(numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

//Calcula la mediana
const calculateMediana = () => {
    const dateList = calculateList();
    
    let mitadLista = parseInt(dateList.length /2);

    let mediana;

    if(isPar(dateList.length)) {
        const elemento1 = dateList[mitadLista - 1]
        const elemento2 = dateList[mitadLista]
        
        const promedioElemento1y2 = calculateMediaAritmetica([elemento1, elemento2])
        mediana = promedioElemento1y2

        const resultM = document.getElementById("ResultMediana")
        resultM.innerText = "La mediana es $" + mediana
    } else {
        mediana = dateList[mitadLista]

        const resultM = document.getElementById("ResultMediana")
        resultM.innerText = "La mediana es $" + mediana
    }

};

//Calcula la Moda
const calculateModa = () => {
    const dateList = calculateList();
    const listaCount = {};

    dateList.map(elemento => {
        if(listaCount[elemento]){
            listaCount[elemento]+=1
        } else {
            listaCount[elemento]=1;
        }
    });

    const listaArray = Object.entries(listaCount).sort(function(a, b){return a[1] - b[1]});

    const moda = listaArray[listaArray.length - 1];
    
    const resultModa = document.getElementById("ResultModa")
    resultModa.innerText = "La moda es $ " + moda[0] + "porque se repite " + moda[1] + "veces"
}