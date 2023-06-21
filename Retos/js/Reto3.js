function celciusFarenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function celsiusKelvin(celsius) {
    return (celsius+273.15)
}

function fahrenheitCelcius(fahrenheit) {
    return (fahrenheit-32)*5/9
}

function fahrenheitKelvin(fahrenheit) {
    return (fahrenheit+459.67) * 5/9
}

function kelvinCelcius(kelvin) {
    return kelvin-273.15
}

function kelvin1Fahrenheit(kelvin) {
    return (fahrenheit+ 459.67) * 5/9
}
let btncal = document.getElementById('btncal');

btncal.addEventListener('click', function calculo(event) {
    event.preventDefault();
    let numero = parseInt(document.getElementById('numero').value);
    let opcion1 = document.getElementById('opcion1');
    let opcion2 = document.getElementById('opcion2');

    if (opcion1.value == "1" && opcion2.value == "2") {
        let celsius = celciusFarenheit(numero);
        alert('La conversión es: ' + celsius);
    } else if (opcion1.value == "1" && opcion2.value == "3") {
        let celsius1 = celsiusKelvin(numero)
        alert('La conversión es: ' + celsius1);
    } else if (opcion1.value == "2" && opcion2.value == "1") {
       let fahrenheit =fahrenheitCelcius(numero)
       alert('la convercion es: '+fahrenheit)
    } else if (opcion1.value == "2" && opcion2.value == "3") {
        let fahrenheit1 = fahrenheitKelvin(numero)
        alert('la convercion es: '+fahrenheit1)

    } else if (opcion1.value == "3" && opcion2.value == "1") {
        let kelvin=kelvinCelcius(numero)
        alert('la convercion es: '+kelvin)
    } else if (opcion1.value == "3" && opcion2.value == "2") {
       let kelvin1=kelvin1Fahrenheit(numero)
       alert('la convercion es: '+kelvin1)
    }else{
        alert('ha escogido una opcion incorrecta, porfavor escoja otra opcion')
    }
});

