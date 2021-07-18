/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    let temperatura = parseFloat(document.getElementById('txtIdTemperatura').value);
    let convertedTemperature = parseFloat((temperatura - 32) * 0.5556).toFixed(1);
    alert(`${temperatura} Fahrenheit son ${convertedTemperature} celcius`)

}

function CentigradosFahrenheit() {
    let temperatura = parseFloat(document.getElementById('txtIdTemperatura').value);
    let convertedTemperature = parseFloat((temperatura * 1.8) + 32).toFixed(1);
    alert(`${temperatura} centigrados son ${convertedTemperature} farenheit`)
}
