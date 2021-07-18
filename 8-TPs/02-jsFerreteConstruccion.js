/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {

    let largo = parseFloat(document.getElementById('txtIdLargo').value);
    let ancho = parseFloat(document.getElementById('txtIdAncho').value);
    let cantHilos = 3;

    let rectangulo = (largo + ancho) * 2;
    let resultado = rectangulo * cantHilos;
    alert(`necesitas ${resultado} metros de alambre`);
}
function Circulo() {

    let radio = parseFloat(document.getElementById('txtIdRadio').value);
    let cantHilos = 3;

    let circulo = parseFloat(Math.PI * radio);
    let resultado = (circulo * cantHilos).toFixed(2);
    alert(`necesitas ${resultado} metros de alambre`);
}
function Materiales() {

    let largo = parseFloat(document.getElementById('txtIdLargo').value);
    let ancho = parseFloat(document.getElementById('txtIdAncho').value);

    let cemento = (largo * ancho) * 2;
    let cal = (largo * ancho) * 3;
    alert(`necesitas ${cemento} bolsas de cemento y ${cal} de cal`);
}