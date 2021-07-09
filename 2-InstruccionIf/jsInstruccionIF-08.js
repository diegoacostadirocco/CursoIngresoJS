function mostrar() {
	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil = document.getElementById('estadoCivil').value;
	if (edad >= 18 && estadoCivil === "Soltero") {
		alert(`Es soltero y no es menor`);
	} else {
		return;
	}

}//FIN DE LA FUNCIÓN