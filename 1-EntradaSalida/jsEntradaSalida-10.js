/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	var a = parseInt(document.getElementById('txtIdImporte').value);
	var b = parseInt((a * 25) / 100);
	var suma = a - b;
	document.getElementById('txtIdResultado').value = suma;
}
