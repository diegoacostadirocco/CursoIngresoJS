/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	var txtIdNumeroDividendo = parseInt(document.getElementById('txtIdNumeroDividendo').value);
	var txtIdNumeroDivisor = parseInt(document.getElementById('txtIdNumeroDivisor').value);
	var resto = txtIdNumeroDividendo - txtIdNumeroDivisor;
	alert(resto);
}
