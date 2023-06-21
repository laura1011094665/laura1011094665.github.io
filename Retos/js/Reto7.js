/*Texto Prueba*/

/*Jennifer Fajardo	
311 1234567
jennifer_fajardo@misena.edu.co
www.sena.edu.co

Tatiana Cabrera
314-1234567
tatiana_cabrera@misena.edu.co
www.sena.edu.co*/


/*Coincidencias Basicas*/

/*.       - Cualquier Caracter, excepto nueva linea
\d      - Cualquier Digitos (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - No es un Espacio, Tab o nueva linea.

Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Numero Exacto
{3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro*/


// Definir las reglas de validación
const number = /^[0-9]{1,10}$/;
const text = /[A-Za-z Á-Úá-úñÑ]{3,20}/;
const text1 = /[A-Za-z Á-Úá-úñÑ]{3,20}/;
const email = /^[a-zA-Z0-9._%+-]+@misena\.edu\.co$/
const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const fecha = /^(\d{2})-(\d{2})-(\d{4})$/;


//const date = / /; 

// Acceder a los elementos que se van a alterar
const form = document.getElementById("frmValidacion");
console.log(form);

const feedbackTipo = document.querySelector('#selectTipo .feedback') 
const feedbackNumDoc = document.querySelector('#InputNumDoc .feedback');
const feedbackNombre = document.querySelector('#InputNombre .feedback');
const feedbackApellido = document.querySelector('#InputApellido .feedback'); 
const feedbackFecha = document.querySelector('#InputFecha .feedback')
const feedbackEmail = document.querySelector('#InputEmail .feedback')
const feedbackPass = document.querySelector('#InputPass .feedback')
const feedbackPass1 = document.querySelector('#InputPass1 .feedback')
const feedbackChecbox = document.querySelector('#InputTerminos .feedback')

//validacion  del tipo
form.tipo.addEventListener('change', (e) => {
  e.preventDefault();

  if (form.tipo.value === "1" ||form.tipo.value === "2"||form.tipo.value === "3") {
    // Pasa la validación
    form.tipo.setAttribute("class", "success");
    feedbackTipo.style.display = 'none';
    feedbackTipo.style.visibility = "hidden";
    feedbackTipo.style.opacity = "0";
  } else {
    // No pasa la validación
    form.tipo.setAttribute("class", "error");
    feedbackTipo.style.visibility = "visible";
    feedbackTipo.style.display = 'block';
    feedbackTipo.style.color = 'black';
    feedbackTipo.style.opacity = "1";
    feedbackTipo.textContent = "Debe seleccionar una opción válida";
  }
});

// Validación del número de documento
form.NumDoc.addEventListener('input', (e) => {
  e.preventDefault();

  if (number.test(e.target.value)) {
    // Pasa la validación
    form.NumDoc.setAttribute("class", "success");
    feedbackNumDoc.style.display = 'none';
    feedbackNumDoc.style.visibility = "hidden";
    feedbackNumDoc.style.opacity = "0";
  } else {
    // No pasa la validación
    form.NumDoc.setAttribute("class", "error");
    feedbackNumDoc.style.visibility = "visible";
    feedbackNumDoc.style.display = 'block';
    feedbackNumDoc.style.color = 'black';
    feedbackNumDoc.style.opacity = "1";
    feedbackNumDoc.textContent = "Solo se permiten números menores de 15 caracteres";
  }
});

// Validación del nombre
form.nombre.addEventListener('input', (e) => {
  e.preventDefault();

  if (text.test(e.target.value)) {
    // Pasa la validación
    form.nombre.setAttribute("class", "success");
    feedbackNombre.style.display = 'none';
    feedbackNombre.style.visibility = "hidden";
    feedbackNombre.style.opacity = "0";
  } else {
    // No pasa la validación
    form.nombre.setAttribute("class", "error");
    feedbackNombre.style.visibility = "visible";
    feedbackNombre.style.display = 'block';
    feedbackNombre.style.color = 'black';
    feedbackNombre.style.opacity = "1";
    feedbackNombre.textContent = "solo puede tener letras de 1 a 10";
  }
});

//validar apellido
form.apellido.addEventListener('input', e => {
  e.preventDefault();

  if (text1.test(e.target.value)) {
    // Pasa la validación
    form.apellido.setAttribute("class", "success");
    feedbackApellido.style.display = 'none';
    feedbackApellido.style.visibility = "hidden";
    feedbackApellido.style.opacity = "0";
  } else {
    // No pasa la validación
    form.apellido.setAttribute("class", "error");
    feedbackApellido.style.visibility = "visible";
    feedbackApellido.style.display = 'block';
    feedbackApellido.style.color = 'black';
    feedbackApellido.style.opacity = "1";
    feedbackApellido.textContent = "solo puede tener letras de 1 a 10";
  }
});
//validar 
form.FechaNa.addEventListener('input', e => {
  e.preventDefault();
  const fechaLimite = new Date('2007-01-01');
  const fechaNa = new Date(e.target.value.replace(fecha, "$3-$2-$1"));


  if (fechaNa < fechaLimite) {
    form.FechaNa.setAttribute("class", "success");
    feedbackFecha.style.display = 'none';
    feedbackFecha.style.visibility = "hidden";
    feedbackFecha.style.opacity = "0";
  } else {
    form.FechaNa.setAttribute("class", "error");
    feedbackFecha.style.visibility = "visible";
    feedbackFecha.style.display = 'block';
    feedbackFecha.style.color = 'black';
    feedbackFecha.style.opacity = "1";
    feedbackFecha.textContent = "La fecha debe ser anterior al 01/01/2005";
  }

  console.log('Fecha límite:', fechaLimite);
  console.log('Fecha de nacimiento:', fechaNa);
});
//validacion de email


form.correo.addEventListener('input', e => {
  e.preventDefault();

  if (email.test(e.target.value)) {
    // Pasa la validación
    form.correo.setAttribute("class", "success");
    feedbackEmail.style.display = 'none';
    feedbackEmail.style.visibility = "hidden";
    feedbackEmail.style.opacity = "0";
  } else {
    // No pasa la validación
    form.correo.setAttribute("class", "error");
    feedbackEmail.style.visibility = "visible";
    feedbackEmail.style.display = 'block';
    feedbackEmail.style.color = 'black';
    feedbackEmail.style.opacity = "1";
    feedbackEmail.textContent = "tiene que ser un correo valido";
  }
});

//validacion de la contraseña 

form.pass1.addEventListener('input', e => {
  e.preventDefault();

  if (pass.test(e.target.value)) {
    // Pasa la validación
    form.pass1.setAttribute("class", "success");
    feedbackPass.style.display = 'none';
    feedbackPass.style.visibility = "hidden";
    feedbackPass.style.opacity = "0";
  } else {
    // No pasa la validación
    form.pass1.setAttribute("class", "error");
    feedbackPass.style.visibility = "visible";
    feedbackPass.style.display = 'block';
    feedbackPass.style.color = 'black';
    feedbackPass.style.opacity = "1";
    feedbackPass.textContent = "Solo se permite una contraseña con mayusculas, minusculas,numero o caracteres especiales";
  }



});

//validacion de la contraseña2


form.pass2.addEventListener('input', e => {
  e.preventDefault();
    // Pasa la validación
    let pass1= form.pass1.value
    let pass2 = form.pass2.value
    if (pass2== pass1) {
    form.pass2.setAttribute("class", "success");
    feedbackPass1.style.display = 'none';
    feedbackPass1.style.visibility = "hidden";
    feedbackPass1.style.opacity = "0";
  } else {
    // No pasa la validación
    form.pass2.setAttribute("class", "error");
    feedbackPass1.style.visibility = "visible";
    feedbackPass1.style.display = 'block';
    feedbackPass1.style.color = 'black';
    feedbackPass1.style.opacity = "1";
    feedbackPass1.textContent = "confirme la contraseña";
  }
});


const open = document.getElementById('open')
const modal = document.getElementById('modal')
const close = document.querySelector('.close')
const close1 = document.querySelector('.close1')

function openModal(e) {
  e.preventDefault()
  modal.style.display = 'block'
}

function closeModal(e) {
  e.preventDefault()
  modal.style.display = 'none'
  
  document.getElementById('myCheckbox').checked = false;
  
  form.myCheckbox.setAttribute("class", "error");
  feedbackChecbox.style.visibility = "visible";
  feedbackChecbox.style.display = 'block';
  feedbackChecbox.style.color = 'black';
  feedbackChecbox.style.opacity = "1";
  feedbackChecbox.textContent = "aceptame";
}

function closeModalA(e) {
  e.preventDefault()
  modal.style.display = 'none'
  document.getElementById('myCheckbox').checked = true;
  
    // Pasa la validación
    form.myCheckbox.setAttribute("class", "success");
    feedbackChecbox.style.display = 'none';
    feedbackChecbox.style.visibility = "hidden";
    feedbackChecbox.style.opacity = "0";
}

open.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
close1.addEventListener('click', closeModalA);

form.myCheckbox.addEventListener('input', e => {
  e.preventDefault();

  if (myCheckbox.checked=true ) {
    // Pasa la validación
    form.myCheckbox.setAttribute("class", "success");
    feedbackChecbox.style.display = 'none';
    feedbackChecbox.style.visibility = "hidden";
    feedbackChecbox.style.opacity = "0";
  } else {
    // No pasa la validación
    form.myCheckbox.setAttribute("class", "error");
    feedbackChecbox.style.visibility = "visible";
    feedbackChecbox.style.display = 'block';
    feedbackChecbox.style.color = 'black';
    feedbackChecbox.style.opacity = "1";
    feedbackChecbox.textContent = "a";
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  // Validar tipo
  if (form.tipo.value !== "1" && form.tipo.value !== "2" && form.tipo.value !== "3") {
    form.tipo.setAttribute("class", "error");
    return;
  }

  // Validar número de documento
  if (!number.test(form.NumDoc.value)) {
    form.NumDoc.setAttribute("class", "error");
    return;
  }

  // Validar nombre
  if (!text.test(form.nombre.value)) {
    form.nombre.setAttribute("class", "error");
    return;
  }

  // Validar apellido
  if (!text1.test(form.apellido.value)) {
    form.apellido.setAttribute("class", "error");
    return;
  }

  // Validar fecha
  if (fecha.test(form.FechaNa.value)) {
    form.FechaNa.setAttribute("class", "error");
    return;
  }

  // Validar correo electrónico
  if (!email.test(form.correo.value)) {
    form.correo.setAttribute("class", "error");
    return;
  }

  // Validar contraseña
  if (!pass.test(form.pass1.value)) {
    form.pass1.setAttribute("class", "error");
    return;
  }

  // Validar coincidencia de contraseñas
  if (form.pass1.value !== form.pass2.value) {
    form.pass2.setAttribute("class", "error");
    return;
  }

  // Validar términos y condiciones
  if (!form.myCheckbox.checked) {
    form.myCheckbox.setAttribute("class", "error");
    return;
  }else{
      // Envío exitoso
  form.submit();
  }
});







