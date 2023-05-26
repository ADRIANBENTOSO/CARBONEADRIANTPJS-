const btncant = document.getElementById("botoncantidad")
const btnres = document.getElementById("botonResumen")
const btncat = document.getElementById("selector")
const btnTotal = document.getElementById("total")
const btnBorrador = document.getElementById("borrador")
document.getElementById('myform').reset()


function obtenerCategoria() {
    let cat = btncat.value;
    //console.log("la cat es "+cat)
    return cat;
}

function descuento() {
    let dto;
    if (obtenerCategoria() == "1")
        dto = 0.8
    else if (obtenerCategoria() == "2")
        dto = 0.5
    else
        dto = 0.85

    return dto;

}

btnres.onclick = mostrarTotal


function mostrarTotal() {

    let total;
    let cant = parseInt(btncant.value);
    let descuentoCategoria = parseFloat(descuento())
    total = 200 * cant * descuentoCategoria
    if (isNaN(parseInt(btncant.value))){
    btnTotal.innerHTML = "¡DEBE INGRESAR CANTIDAD EN NUMEROS! " 
     alertar()    
}
    else
    btnTotal.innerHTML = "Total a pagar $ " + total

}


btnBorrador.onclick = borrarTotal;

function borrarTotal() {
    btnTotal.innerHTML = "Total a pagar $ "
}
function alertar() {

    alert("INGRESE CANTIDAD EN NUMEROS!!!!!!!!!!!!!")
}



