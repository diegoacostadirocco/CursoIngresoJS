/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let importe = parseInt(document.getElementById('txtIdImporte').value);
	let descuento = parseInt((importe * 25) / 100);
	let final = importe - descuento;
	document.getElementById('txtIdResultado').value = final;
}
