let respuesta = document.querySelector('.respuesta');
let btncal = document.getElementById('btncal');

btncal.addEventListener('click', function calcular(event) {
    event.preventDefault();

    let ladoLongitud = parseInt(document.getElementById('lado').value);
    let ladoLongitud1 = parseInt(document.getElementById('lado2').value);
    let ladoLongitud2 = parseInt(document.getElementById('lado3').value);

    if (ladoLongitud === ladoLongitud1 && ladoLongitud1 === ladoLongitud2) {
        alert('Todos los lados son iguales, es un triángulo equilátero');
    } else if (ladoLongitud === ladoLongitud1 || ladoLongitud1 === ladoLongitud2 || ladoLongitud2 === ladoLongitud) {
        alert('Dos de los lados son iguales, es un triángulo isósceles');
    } else {
        alert('Todos los lados son diferentes, es un triángulo escaleno');
    }
});

