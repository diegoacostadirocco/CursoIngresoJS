/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	while (!(numeroIngresado <= 10 && numeroIngresado >= 0)) {
		alert('numero incorrecto')
		numeroIngresado = prompt('reingrese numero del 1 al 10')


	}
	document.getElementById('txtIdNumero').value = numeroIngresado;

}//FIN DE LA FUNCIÓN 	