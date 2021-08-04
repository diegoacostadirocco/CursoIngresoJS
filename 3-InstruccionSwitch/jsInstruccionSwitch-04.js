function mostrar() {
	//tomo el mes
	var mesDelAño = txtIdMes.value;

	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;
		case 'Junio':
		case 'Abril':
		case 'Septiembre':
		case 'Noviembre':
			alert("Este mes tiene 30 días");
			break;
		default:
			alert("Este mes tiene 31 dias");
			break;
	}





}//FIN DE LA FUNCIÓN