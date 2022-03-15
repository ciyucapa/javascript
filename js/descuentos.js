const precioFinal = (precio, porcentaje) => {
    if(precio && porcentaje){
        const precioConDescuento = (precio * porcentaje) / 100;
        const resultado = precio - precioConDescuento
    return resultado
    }
    return 0
};

const coupons = [
    {descuento1: "JuanDC_es_Batman", porcentaje: 15},
    {descuento1: "pero_no_le_digas_a_nadie", porcentaje: 20},
    {descuento1: "es_un_secreto", porcentaje: 25}
]

const elegirCupon = (couponsValue, resultado) => {
    if(couponsValue && resultado) {
        return coupons.filter(index => index.descuento1 === couponsValue).map(index => {
            const calculo = (index.porcentaje * resultado) / 100
            const final = resultado - calculo
            return final
        })
    }

    return 0
}

const porcentajeCupon = (couponsValue) => {
  if(couponsValue) {
    return coupons.filter( coupon => coupon.descuento1 === couponsValue).map(cou => cou.porcentaje)
  }
}

const calculatePrecio = () => {
    const price = document.getElementById("InputPrecio");
    const priceValue = price.value

    const discount = document.getElementById("InputPorcentaje");
    const valueDiscount = discount.value

    const coupons = document.getElementById("coupons");
    const couponsValue = coupons.value

    const resultado = precioFinal(priceValue, valueDiscount);
    
    const precioConCupon = elegirCupon(couponsValue, resultado);
    const valuePorcentaje = porcentajeCupon(couponsValue);
    
    const resultP = document.getElementById("ResultP")
    resultP.innerText = "Tu precio con descuento seria de $" + precioConCupon + " tu cupon tenia un " + valuePorcentaje + "% de descuento"
};