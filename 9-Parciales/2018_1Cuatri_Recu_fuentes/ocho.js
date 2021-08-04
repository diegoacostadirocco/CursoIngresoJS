// Bienvenidos.
// Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
// a) La cantidad de números pares.
// b) La cantidad de números impares.
// c) La cantidad de ceros. --------------------
// d) El promedio de todos los números positivos ingresados.
// e) La suma de todos los números negativos.
// f) El número y la letra del máximo y el mínimo. -------------

// Testeo con los siguientes datos
// ( d , -150(mal) , -50(bien))
// ( z , 0)
// ( g , 20)
// ( a , 150(mal) , 0(bien))
// ( b , 3)
// ( k , 7)


function mostrar() {
    let numerosPares = 0;
    let numerosImpares = 0;
    let numeroIngresado;
    let cantCeros = 0;
    let promedioPositivo = 0;
    let sumaNegativo = 0;
    let letraIngresada;
    let numeroMin = 0;
    let numeroMax = 0;
    let letraMin;
    let letraMax;
    // usar flag para guardar min y max


    do {
        letraIngresada = prompt('ingrese una letra')
        numeroIngresado = parseInt(prompt('ingrese un numero entre -100 y 100'))

    } while (numeroIngresado < -100 || numeroIngresado > 100) {

        numeroIngresado = prompt('ingrese un numero entre -100 y 100')
    }

    if (numeroIngresado < numeroMin) {
        numeroMin = numeroIngresado;
        letraMin = letraIngresada;
    } else if (numeroIngresado > numeroMax) {
        numeroMax = numeroIngresado;
        letraMax = letraIngresada;
    }

    if (numeroIngresado === 0) {
        cantCeros++;
    } else if (numeroIngresado > 0) {
        sumaPositivo = sumaPositivo + numeroIngresado;
        cantidadPositivo++;
    } else {
        sumaNegativo = sumaNegativo + numeroIngresado;
    }
    if (numeroIngresado % 2 == 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }
    respuesta = prompt('desea ingresar mas datos? si/no');
} while (respuesta != 'no');

