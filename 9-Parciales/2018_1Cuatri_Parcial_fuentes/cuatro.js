function mostrar() {
    let numeroUno = parseFloat(prompt(`ingrese el primer numero`));
    let numeroDos = parseFloat(prompt(`ingrese el segundo numero`));
    if (numeroUno === numeroDos) {
        alert(`${numeroUno}${numeroDos}`);
    } else if (numeroUno > numeroDos) {
        let resta = numeroUno - numeroDos;
        alert(resta);
    } else if (numeroUno + numeroDos > 10) {
        let suma = numeroUno + numeroDos;
        alert(`la suma es ${suma} y supera el 10`)
    } else {
        let suma = numeroUno + numeroDos;
        alert(suma)
    }
}
