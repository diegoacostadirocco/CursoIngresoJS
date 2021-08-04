/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {

	const CLAVE_CORRECTA = 'utn750';
	let claveIngresada = prompt("ingrese el número clave");

	while (claveIngresada != CLAVE_CORRECTA) {
		//tbd
		alert('clave incorrecta')
		claveIngresada = prompt('Reingrese la clave')

	}
	alert('BIENVENIDO')

}//FIN DE LA FUNCIÓN
