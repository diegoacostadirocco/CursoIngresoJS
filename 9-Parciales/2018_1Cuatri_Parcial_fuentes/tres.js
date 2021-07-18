function mostrar() {
    let precio = parseFloat(prompt(`ingrese precio`)).toFixed(2);
    let descuento = parseFloat(prompt(`ingrese porcentaje de descuento`)).toFixed(2);
    let precioFinal = precio - ((precio * descuento) / 100);
    document.getElementById('elPrecioFinal').value = precioFinal;
}
