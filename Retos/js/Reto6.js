/* Calcula el área del triángulo */
const open = document.getElementById('open')
const modal = document.getElementById('modal')
const closeButton = document.querySelector('.close')
const triangleForm = document.getElementById('triangleForm')
const resultDiv = document.getElementById('result')

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

function calculateArea(event) {
  event.preventDefault()

  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
    resultDiv.textContent = 'Ingresa valores válidos para base y altura.';
    return
  }
0
  const area = (base * height) / 2;
  resultDiv.textContent = 'El área del triángulo es: ' + area.toFixed(2);
}

open.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
triangleForm.addEventListener('submit', calculateArea)

/* Calcula el perímetro del triángulo */

const openPerimetro = document.getElementById('openPerimetro');
const modalPerimetro = document.getElementById('modalPerimetro');
const closePe = document.querySelector('.closePe');
const formPeriTri= document.getElementById('formPeriTri')
const resultado=document.getElementById('resultado')

function openPe() {
  modalPerimetro.style.display = 'block';
}

function closePeModal() {
  modalPerimetro.style.display = 'none';
}
function calcularPerimetroTri(event) {
  event.preventDefault()

  const lado1 = parseInt(document.getElementById('lado1').value)
  const lado2 = parseInt(document.getElementById('lado2').value)
  const lado3 =parseInt(document.getElementById('lado3').value)

  if (isNaN(lado1) || isNaN(lado2)||isNaN(lado3) || lado1 <= 0 || lado2 <= 0|| lado3<=0) {
    resultDiv.textContent = 'Ingresa valores válidos para base y altura.';
    return
  }

  const perimetro = (lado1+lado2+lado3);
  resultado.textContent = 'El perímetro del triángulo es: ' + perimetro;

}



openPerimetro.addEventListener('click', openPe);
closePe.addEventListener('click', closePeModal);
formPeriTri.addEventListener('submit', calcularPerimetroTri);


/*area del circulo */ 
const abrirCirculo = document.getElementById('abrirCirculo');
const modalCirculo = document.getElementById('modalCirculo');
const cerrarCirculo = document.querySelector('.cerrarCirculo');
const formCirculo = document.getElementById('formAreaCirculo');
const resultado1 = document.getElementById('resultado1');

function abrirCi() {
    modalCirculo.style.display = 'block';
}

function cerrarCi() {
    modalCirculo.style.display = 'none';
}

function calcularCirculo1(event) {
    event.preventDefault();

    const radio = parseFloat(document.getElementById('radio').value);

    if (isNaN(radio) || radio <= 0) {
        resultado1.textContent = 'Ingresa un valor válido para el radio.';
        return;
    }

    const areaCirculo = Math.PI * Math.pow(radio, 2);
    resultado1.textContent = 'El área del círculo es: ' + areaCirculo.toFixed(2);
}

abrirCirculo.addEventListener('click', abrirCi);
cerrarCirculo.addEventListener('click', cerrarCi);
formCirculo.addEventListener('submit', calcularCirculo1);


/* perimetro del circulo*/const abrirPerimetroCi1 = document.getElementById('abrirPerimetroCi1');
const modalPeriCi = document.getElementById('modalPeriCi');
const cerrarPeriCi1 = document.querySelector('.cerrarPeriCi1');
const formPerimetroCi1 = document.getElementById('formPerimetroCi1')
const resultado2 = document.getElementById('resultado2') 

function abrirPeCi() {
    modalPeriCi.style.display = 'block';
}

function cerrarPeriCi() {
    modalPeriCi.style.display = 'none';
}

function calculaPerimetroCi(event) {
    event.preventDefault();

    const radio2 = parseFloat(document.getElementById('radio2').value);

    if (isNaN(radio2) || radio2 <= 0) {
        resultado2.textContent = 'Ingresa un valor válido para el radio.';
        return;
    }

    const perimetroCirculo = 2 * Math.PI * radio2;
    resultado2.textContent = 'El perímetro del círculo es: ' + perimetroCirculo.toFixed(2);
}

abrirPerimetroCi1.addEventListener('click', abrirPeCi);
cerrarPeriCi1.addEventListener('click', cerrarPeriCi);
formPerimetroCi1.addEventListener('submit', calculaPerimetroCi);

/*area del rectangulo*/
const abrirRectangulo = document.getElementById('abrirRectangulo');
const modalRectangulo = document.getElementById('modalRectangulo');
const cerrarRectangulo = document.querySelector('.cerrarRectangulo');
const formRectangulo = document.getElementById('formRectangulo');
const resultado3 = document.getElementById('resultado3');

function abrirModalRe() {
  modalRectangulo.style.display = 'block';
}

function cerrarModalRe() {
  modalRectangulo.style.display = 'none';
}

function calcularAreaRectangulo(event) {
  event.preventDefault();

  const base1 = parseFloat(document.getElementById('base1').value);
  const altura1 = parseFloat(document.getElementById('altura1').value);

  if (isNaN(base1) || isNaN(altura1) || base1 <= 0 || altura1 <= 0) {
    resultado3.textContent = 'Ingresa valores válidos para base y altura.';
    return;
  }

  const areaRectangulo = base1 * altura1;
  resultado3.textContent = 'El área del rectángulo es: ' + areaRectangulo;

}

abrirRectangulo.addEventListener('click', abrirModalRe);
cerrarRectangulo.addEventListener('click', cerrarModalRe);
formRectangulo.addEventListener('submit', calcularAreaRectangulo);

/* perimetro del rectangulo */

const abrirPerimetroRe = document.getElementById('abrirPerimetroRe');
const modalPerimetroRe = document.getElementById('modalPerimetroRe');
const cerrarPerometroRe = document.querySelector('.cerrarPerometroRe');
const formRectanguloPeri = document.getElementById('formRectanguloPeri');
const resultado4 = document.getElementById('resultado4');

function abrirPerimetroRe1() {
  modalPerimetroRe.style.display = 'block';
}

function cerrarPerimetroRe1() {
  modalPerimetroRe.style.display = 'none';
}

function calcularPerimetroRec(event) {
  event.preventDefault();

  const base2 = parseFloat(document.getElementById('base2').value);
  const altura2 = parseFloat(document.getElementById('altura2').value);

  if (isNaN(base2) || isNaN(altura2) || base2 <= 0 || altura2 <= 0) {
    resultado4.textContent = 'Ingresa valores válidos para la base y la altura.';
    return;
  }

  const perimetroRectangulo = 2 * (base2 + altura2);
  resultado4.textContent = 'El perímetro del rectángulo es: ' + perimetroRectangulo;
}

abrirPerimetroRe.addEventListener('click', abrirPerimetroRe1);
cerrarPerometroRe.addEventListener('click', cerrarPerimetroRe1);
formRectanguloPeri.addEventListener('submit', calcularPerimetroRec);

  /* area del cuadrado */
  const abrirModalCu = document.getElementById('abrirModalCu');
  const modalCuadrado = document.getElementById('modalCuadrado');
  const cerrarCuadrado = document.querySelector('.cerrarCuadrado');
  const formCuadrado = document.getElementById('formCuadrado');
  const resultado5 = document.getElementById('resultado5');
  
  function abrirModalCuadrado() {
    modalCuadrado.style.display = 'block';
  }
  
  function cerrarModalCuadrado() {
    modalCuadrado.style.display = 'none';
  }
  
  function calcularAreaCuadrado(event) {
    event.preventDefault();
  
    const lado4 = parseFloat(document.getElementById('lado4').value);
  
    if (isNaN(lado4) || lado4 <= 0) {
      resultado5.textContent = 'Ingresa un valor válido para el lado.';
      return;
    }
  
    const areaCuadrado = lado4 * lado4;
    resultado5.textContent = 'El área del cuadrado es: ' + areaCuadrado.toFixed(2);
  }
  
  abrirModalCu.addEventListener('click', abrirModalCuadrado);
  cerrarCuadrado.addEventListener('click', cerrarModalCuadrado);
  formCuadrado.addEventListener('submit', calcularAreaCuadrado);
  
/* el perimetro del cuadrado */
const abrirModalPeCu = document.getElementById('abrirModalPeCu');
const modalPeCuadrado = document.getElementById('modalPeCuadrado');
const cerrarPerimetroCu = document.querySelector('.cerrarPerimetroCu');
const formularioCalcularPerimetroCu = document.getElementById('formularioCalcularPerimetroCu');
const resultado6 = document.getElementById('resultado6');

function abrirPerimetroCu() {
  modalPeCuadrado.style.display = 'block';
}

function cerrarPeriCu() {
  modalPeCuadrado.style.display = 'none';
}

function calcularPerimetroCubo(event) {
  event.preventDefault();

  const lado5 = parseFloat(document.getElementById('nose').value);

  if (isNaN(lado5) || lado5 <= 0) {
    resultado6.textContent = 'Ingresa un valor válido para el lado.';
    return;
  }

  const PerimetroCuadradoSa = lado5 * 4;
  resultado6.textContent = 'El perímetro del cuadrado es: ' + PerimetroCuadradoSa.toFixed(2);
}

abrirModalPeCu.addEventListener('click', abrirPerimetroCu);
cerrarPerimetroCu.addEventListener('click', cerrarPeriCu);
formularioCalcularPerimetroCu.addEventListener('submit', calcularPerimetroCubo);

