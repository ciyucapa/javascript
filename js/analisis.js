const salariosColombia = colombia.map(i => i.salario).sort(function(a, b){return a - b})
console.log(salariosColombia)
