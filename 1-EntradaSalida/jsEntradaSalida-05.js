/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {

	let personAge = document.getElementById('personAge').value;
	let personName = document.getElementById('personName').value;
	alert(`usted es ${personName}, y su edad es ${personAge}`);
}
