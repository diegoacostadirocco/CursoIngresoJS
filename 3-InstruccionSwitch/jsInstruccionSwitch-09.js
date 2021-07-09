function mostrar() {
	let base = 15000;
	let descuentoDel20 = parseInt(base - (base * 20 / 100))
	let descuentoDel10 = parseInt(base - (base * 10 / 100))
	let aumentoDel10 = parseInt(base + (base * 10 / 100))
	let aumentoDel20 = parseInt(base + (base * 10 / 100))

	let estacionIngresada = document.getElementById('txtIdEstacion').value;
	let txtIdDestino = document.getElementById('txtIdDestino').value;
	switch (estacionIngresada) {
		case 'Invierno':
			switch (txtIdDestino) {
				case 'Bariloche':
					alert(aumentoDel20);
					break;
				case 'Cataratas':
					alert(descuentoDel10);
					break;
				case 'Mar del plata':
					alert(descuentoDel20);
					break;
				case 'Cordoba':
					alert(descuentoDel10);
					break;
			}
			break;
		case 'Verano':
			switch (txtIdDestino) {
				case 'Bariloche':
					alert(descuentoDel20);
					break;
				case 'Cataratas':
					alert(aumentoDel10);
					break;
				case 'Mar del plata':
					alert(aumentoDel20);
					break;
				case 'Cordoba':
					alert(aumentoDel10);
					break;
			}
			break;
		case 'Otoño':
		case 'Primavera':
			switch (txtIdDestino) {
				case 'Bariloche':
					alert(aumentoDel10);
					break;
				case 'Cataratas':
					alert(aumentoDel10);
					break;
				case 'Mar del plata':
					alert(aumentoDel10);
					break;
				case 'Cordoba':
					alert(base);
					break;
			}
			break;

	}
}//FIN DE LA FUNCIÓN
