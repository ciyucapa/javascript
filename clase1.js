//Medidas Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

//Medidas Triangulo
const perimetroTriangulo = (lado1, lado2, base ) => {
    return (lado1 + lado2 + base);
}

const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}

//Medidas Circulo
const diametroCirculo = (radio) => radio * 2;

const PI = Math.PI;

const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return (diametro * PI) ;
}

const areaCirculo = (radio) => (radio * radio) * PI;

//Funciones llamadas desde HTML
//Formulario Cuadrado
const calculatePerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = Number(input.value);

    const perimetro = perimetroCuadrado(value)

    document.querySelector("#cuadrado").insertAdjacentHTML("afterend", `<div>El perimetro es ${perimetro}</div>`)
};

const calculateAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    document.querySelector("#cuadrado").insertAdjacentHTML('afterend', `<div>El area es ${area}</div>`)
}

//Formulario Triangulo
const calculatePerimetroTriangulo = () => {
    const lado1 = document.getElementById("InputLado1");
    const ladoValue1 = Number(lado1.value);

    const lado2 = document.getElementById("InputLado2");
    const ladoValue2 = Number(lado2.value);

    const base = document.getElementById("InputBase");
    const baseValue = Number(base.value);

    const perimetro = perimetroTriangulo(ladoValue1, ladoValue2, baseValue);

    document.querySelector("#triangulo").insertAdjacentHTML('afterend', `<div>El perimetro es ${perimetro}</div>`)
}

const calculateAreaTriangulo = () => {
    const base = document.getElementById("InputBase");
    const baseValue = base.value;

    const altura = document.getElementById("InputAltura");
    const alturaValue = altura.value;

    const area = areaTriangulo(baseValue, alturaValue);
    document.querySelector("#triangulo").insertAdjacentHTML('afterend', `<div>El area es ${area}</div>`)

}

//Formulario Circulo

const calculatePerimetroCirculo = () => {
    const radio = document.getElementById("InputRadio");
    const radioValue = Number(radio.value);

    const perimetro = perimetroCirculo(radioValue);
    document.querySelector("#circulo").insertAdjacentHTML('afterend', `<div>El perimetro es ${perimetro}</div>`)
}

const calculateAreaCirculo = () => {
    const radio = document.getElementById("InputRadio");
    const radioValue = Number(radio.value);

    const area = areaCirculo(radioValue);
    document.querySelector("#circulo").insertAdjacentHTML('afterend', `<div>El area es ${area}</div>`)
}
