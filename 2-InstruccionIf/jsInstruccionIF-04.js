function mostrar() {
	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if (edad <= 17 && edad >= 13) {
		alert("Eres adolescente")
	} else {
		alert(`No eres adolescente`);
	}

}//FIN DE LA FUNCIÓN