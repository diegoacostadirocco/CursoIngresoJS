/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value)
    let precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value)
    let precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value)
    let sum = precioUno + precioDos + precioTres;
    alert(sum);
}
function Promedio() {

    let precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value)
    let precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value)
    let precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value)
    let promedio = (precioUno + precioDos + precioTres) / 3;
    alert(promedio);
}
function PrecioFinal() {
    let precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value)
    let precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value)
    let precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value)
    let iva = 21;
    let sum = precioUno + precioDos + precioTres;
    let precioFinal = sum + (sum * iva / 100);
    alert(precioFinal);
}