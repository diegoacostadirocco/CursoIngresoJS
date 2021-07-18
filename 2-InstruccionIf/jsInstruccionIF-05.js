function mostrar() {
	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if ((edad <= 12 || edad >= 18)) {
		alert(`No eres adolescente`);
	}
	// 	else {
	// 	return;
	// }

}//FIN DE LA FUNCIÓN