function mostrar() {
	//tomo el mes
	var mesDelAño = txtIdMes.value;

	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;
		case 'Enero':
		case 'Marzo':
		case 'Mayo':
		case 'Julio':
		case 'Agosto':
		case 'Octubre':
		case 'Diciembre':
			alert("Este mes tiene 31 dias");
			break;
		case 'Junio':
		case 'Abril':
		case 'Septiembre':
		case 'Noviembre':
			alert("Este mes tiene 30 días");
			break;
	}





}//FIN DE LA FUNCIÓN