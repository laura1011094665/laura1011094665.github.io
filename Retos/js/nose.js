// Obtener elementos del DOM
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');
const triangleForm = document.getElementById('triangleForm');
const resultDiv = document.getElementById('result');

// Función para mostrar el modal
function openModal() {
  modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = 'none';
}

// Función para calcular el área del triángulo
function calculateArea(event) {
  event.preventDefault();

  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
    resultDiv.textContent = 'Ingresa valores válidos para base y altura.';
    return;
  }

  const area = (base * height) / 2;
  resultDiv.textContent = 'El área del triángulo es: ' + area.toFixed(2);
}

// Asociar eventos a los elementos
openModalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
triangleForm.addEventListener('submit', calculateArea);
