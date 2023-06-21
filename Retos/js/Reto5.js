let calcula = document.getElementById('calcula')

calcula.addEventListener('click', function(event) {
  event.preventDefault()
  
  let nom = document.getElementById('nombre').value
  let apell = document.getElementById('apellido').value
  let mat = document.getElementById('materia').value
  let mensaje = document.getElementById('mensaje')

  if (nom === "1" && apell === "1" && mat === "1") {
    mensaje.textContent = "Es correcto"
    mensaje.style.color = "green"
  } else if (nom !== "1" && apell === "1" && mat === "1") {
    mensaje.textContent = "Es incorrecto"
    mensaje.style.color = "tomato"
  } else if (nom === "1" && apell !== "1" && mat === "1") {
    mensaje.textContent = "Es incorrecto"
    mensaje.style.color = "tomato"
  } else if (nom === "1" && apell === "1" && mat !== "1") {
    mensaje.textContent = "Es incorrecto"
    mensaje.style.color = "tomato"
  } else if (nom === "2" && apell === "2" && mat === "2") {
    mensaje.textContent = "Es correcto"
    mensaje.style.color = "green"
  } else if (nom !== "2" && apell === "2" && mat === "2") {
    mensaje.textContent = "Es incorrecto"
    mensaje.style.color = "tomato"
  } else if (nom === "2" && apell !== "2" && mat === "2") {
    mensaje.textContent = "Es incorrecto"
    mensaje.style.color = "tomato"
  } else if (nom === "2" && apell === "2" && mat !== "2") {
    mensaje.textContent = "Es incorrecto"
    mensaje.style.color = "tomato"
  } else if (nom === "3" && apell === "3" && mat === "3") {
    mensaje.textContent = "Es correcto"
    mensaje.style.color = "green"
  } else if (nom !== "3" && apell === "3" && mat === "3") {
    mensaje.textContent = "Es incorrecto"
    mensaje.style.color = "tomato"
  } else if (nom === "3" && apell !== "3" && mat === "3") {
    mensaje.textContent = "Es incorrecto"
    mensaje.style.color = "tomato"
  } else if (nom === "3" && apell === "3" && mat !== "3") {
    mensaje.textContent = "Es incorrecto"
    mensaje.style.color = "tomato"
  } else {
    mensaje.textContent = "La opción no fue elegida. Por favor, elija una opción"
    mensaje.style.color = "red"
  }
});
