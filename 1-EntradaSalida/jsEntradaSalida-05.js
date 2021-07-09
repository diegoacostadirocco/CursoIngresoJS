/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
	let age;
	let name;
	age = parseInt(document.getElementById('personAge').value);
	name = document.getElementById('personName').value;
	alert(`usted es ${name}, y su edad es ${age}`);
}
