//Formula capacidad de endeudamiento
// Capacidad de Endeudamiento = (Ingresos Totales mes – Gastos Fijos mes) x 0,35.
// Nivel de endeudamiento = (Pasivos Totales / Activos Totales) x 100.

const calculateCapacidadEndeudamiento = () => {
    const salario = document.getElementById("salario");
    const valueSalario = salario.value;

    const gastos = document.getElementById("gastos");
    const valueGastos = gastos.value;

    const capacidadEndeudamiento = parseInt((valueSalario - valueGastos) * 0.35)

    const resultPromedio = document.getElementById("ResultadoC")
    resultPromedio.innerText = "Tu capacidad de endeudamiento es de $" + capacidadEndeudamiento  + " este monto puedes usarlo para endeudarte"
};

const calculateNivelEndeudamiento = () => {
    const salario = document.getElementById("salario");
    const valueSalario = salario.value;

    const gastos = document.getElementById("gastos");
    const valueGastos = gastos.value;

    const nivel = parseInt((valueGastos / valueSalario) * 100)

    const resultPromedio = document.getElementById("ResultadoN")
    resultPromedio.innerText = "Tu nivel de endeudamiento es de: " + nivel  + "%"
};