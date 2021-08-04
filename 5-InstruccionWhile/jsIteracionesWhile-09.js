/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	let maxFlag = false;
	let minFlag = false;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	// banderaDelPrimero="es el primero";
	respuesta = 'si';

	// while(respuesta=="si")
	// {

	// }
	// txtIdMaximo.value=numeroMaximo;
	// txtIdMinimmo.value=numeroMinimo;
	while (respuesta === 'si') {
		numeroIngresado = parseInt(prompt('ingrese Numero'))
		numeroMaximo = numeroIngresado
		numeroMinimo = numeroIngresado
		if (numeroIngresado > numeroMaximo) {
			maxFlag = true
			numeroMaximo = numeroIngresado;

		} else if (numeroIngresado < numeroMinimo) {
			minFlag = true
			numeroMinimo = numeroIngresado
		}


		respuesta = prompt("desea continuar? si/no");
	}

	document.getElementById('txtIdMaximo').value = numeroMaximo
	document.getElementById('txtIdMinimo').value = numeroMinimo


}//FIN DE LA FUNCIÓN