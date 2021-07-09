function mostrar() {
	var destinoIngresado = document.getElementById('txtIdDestino').value;
	switch (destinoIngresado) {
		case 'Bariloche':
		case 'Ushuaia':
			alert('FRIO');
			break;

		case 'Cataratas':
		case 'Mar del plata':
			alert('CALOR');
			break;

	}

}//FIN DE LA FUNCIÓN