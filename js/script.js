

function seleccionarMascota(mascota) {
    alert('seleccionaste tu mascota')   
    if (document.getElementById("Hipodoge").checked) {
        console.log('elegiste hypodoge')
    } else if(document.getElementById('Hipodoge')){
        console.log('elegiste hypodoge')
    }
}

function iniciarJuego(mascota) {
    let btn_mascota = document.getElementById("btn-pet")
    let btn_Hipodoge = document.getElementById("Hipodoge")
    let btn_fuego = document.getElementById("btn-fire")
    let btn_agua = document.getElementById("btn-water")
    let btn_tierra= document.getElementById("btn-ground")
    let btn_trueno= document.getElementById("btn-thunder")
    let btn_reiniciar = document.getElementById("btn-restart")
    //funciones
btn_mascota.addEventListener('click',seleccionarMascota)
}




window.addEventListener('load',iniciarJuego)