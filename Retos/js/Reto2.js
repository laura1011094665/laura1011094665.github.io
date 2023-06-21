
let button = document.getElementById("button")
const palaabra4 = document.getElementById('palabra4')
button.addEventListener('click', function () {
    palabra4.textContent="me has tocado"
})
document.addEventListener('DOMContentLoaded', function() {
    let div = document.getElementById('miDiv')
  
    div.addEventListener('mouseover', function(event) {
      event.target.style.color =  '#F5FCF5'
    })

    div.addEventListener('mouseout', function(event) {
      event.target.style.color = 'black'
    })
  })
  document.addEventListener('DOMContentLoaded', function() {
    let div1 = document.getElementById('div1')
  
    div1.addEventListener('mouseout', function(event) {
      // Código a ejecutar cuando el cursor sale del elemento
      event.target.style.color = '#F5FCF5'
    })
  })

  document.addEventListener('keydown', function f(event) {
    let div2=document.getElementById('div2')

    div2.addEventListener('keydown', function (event) {

        var p=document.getElementById("cont")
        var cont=document.createTextNode("La tecla precionada es: "+event.key)
        p.appendChild(cont)
    })
    
  })


  document.addEventListener('change', function(event) {
    let div3 = document.getElementById('div3');
    div3.addEventListener('change', function(event) {
      alert("Sí: " + event.target.value);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    let focus1 = document.getElementById('focus1')
    let p = document.getElementById('co')
})

document.addEventListener('DragDrop', function (event) {
  event.preventDefault()
  function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function dragEnter(event) {
    event.target.style.border = "2px dashed black";
  }

  function dragLeave(event) {
    event.target.style.border = "";
  }

  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
    event.target.style.border = "";
  }
})



const div = document.getElementById('div3');
const palabra1= document.getElementById('palabra1')

div.addEventListener('dblclick', function(event) {
palabra1.textContent= 'me has tocado dos veces';
})

const div4 = document.getElementById('div4');
const palabra= document.getElementById('palabra')
    div4.addEventListener('mousemove', function(event) {
      const x = event.clientX
      const y = event.clientY
      palabra.textContent= `Posición del ratón: ${x}, ${y}`
    })


    const input = document.getElementById('otro');
    
const palabra2= document.getElementById('palabra2')

    input.addEventListener('blur', function(event) {
      palabra2.textContent='ya no me escribes :('
    })

    const select = document.getElementById('seleccion');

    const palabra3= document.getElementById('palabra3')
    select.addEventListener('change', function(event) {
      alert('El valor seleccionado ha cambiado')
      alert('Nuevo valor seleccionado:', event.target.value)
    })

    const container = document.getElementById('container');

  container.addEventListener('scroll', function(event) {
    // Código a ejecutar cuando se produce el desplazamiento
    palabra3.textContent='Se ha producido un desplazamiento';
    palabra3.textContent='Posición de desplazamiento vertical:', container.scrollTop;
    palabra3.textContent='Posición de desplazamiento horizontal:', container.scrollLeft;
  });

 