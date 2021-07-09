function mostrar() {
	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil = document.getElementById('estadoCivil').value;
	if (edad <= 18 && estadoCivil !== "Soltero") {
		alert(`Es muy pequeño para NO ser soltero`);
	} else {
		alert(`Hace lo que gustes`);
	}

}//FIN DE LA FUNCIÓN