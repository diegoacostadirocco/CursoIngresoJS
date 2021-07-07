/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let a = parseInt(document.getElementById('txtIdImporte').value);
	let b = parseInt((a * 25) / 100);
	let suma = a - b;
	document.getElementById('txtIdResultado').value = suma;
}
