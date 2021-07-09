function mostrar() {
	let aprobado = 'se viaja'
	let desaprobado = 'no se viaja'
	let estacionIngresada = document.getElementById('txtIdEstacion').value;
	let txtIdDestino = document.getElementById('txtIdDestino').value;
	switch (estacionIngresada) {
		case 'Invierno':
			switch (txtIdDestino) {
				case 'Bariloche':
					alert(aprobado);
					break;
				case 'Cataratas':
					alert(desaprobado);
					break;
				case 'Mar del plata':
					alert(desaprobado);
					break;
				case 'Cordoba':
					alert(desaprobado);
					break;
			}
			break;
		case 'Verano':
			switch (txtIdDestino) {
				case 'Bariloche':
					alert(desaprobado);
					break;
				case 'Cataratas':
					alert(aprobado);
					break;
				case 'Mar del plata':
					alert(aprobado);
					break;
				case 'Cordoba':
					alert(desaprobado);
					break;
			}
			break;
		case 'Otoño':
			switch (txtIdDestino) {
				case 'Bariloche':
					alert(aprobado);
					break;
				case 'Cataratas':
					alert(aprobado);
					break;
				case 'Mar del plata':
					alert(aprobado);
					break;
				case 'Cordoba':
					alert(aprobado);
					break;
			}
			break;
		case 'Primavera':
			switch (txtIdDestino) {
				case 'Bariloche':
					alert(desaprobado);
					break;
				case 'Cataratas':
					alert(aprobado);
					break;
				case 'Mar del plata':
					alert(aprobado);
					break;
				case 'Cordoba':
					alert(aprobado);
					break;
			}
			break;

	}

}//FIN DE LA FUNCIÓN
