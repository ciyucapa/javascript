console.group("Cuadrado");

const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

console.group("Triangulo");
const perimetroTriangulo = (lado1, lado2, base ) => {
    return lado1 + lado2 + base;
}

const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}
console.groupEnd();

console.group("Circulo");
const diametroCirculo = (radio) => radio * 2;

const PI = Math.PI;

const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return  diametro * PI ;
}

const areaCirculo = (radio) => (radio * 2) * PI;

console.groupEnd();