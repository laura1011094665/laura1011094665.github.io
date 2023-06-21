 const result=document.querySelector(".resultado")
const a= document.getElementById('a')

let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function calcular(e){
    e.preventDefault()
    let palabra=document.getElementById("palabra").value 
    let opcion=document.getElementById("opcion").value

    if (opcion=="1") {
        var longitud=palabra.length
        a.textContent='la longitud de la palabra es: ' + longitud
    }else if (opcion=="2") {
        var mayu=palabra.toUpperCase()
        a.textContent='la palabra en mayuscula es: ' + mayu
        
    }else if (opcion=="3") {
        var minu=palabra.toLowerCase()
        a.textContent='la palabra en minuscula es: ' + minu
        
    }else if (opcion==4) {
        var primerCaracter=palabra.charAt(0)
        a.textContent='el primer caracter de la palabra es: ' + primerCaracter
        
    }
})
