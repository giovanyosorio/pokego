

function seleccionarMascota() {
    let hypodoge = document.getElementById("Hipodoge")
    let Capipeyo = document.getElementById("Capipeyo")
    let Ratigueya = document.getElementById("Ratigueya")
    let Langostelvis = document.getElementById("Langostelvis")
    let Tupacalma = document.getElementById("Tupacalma")
    let Pydos = document.getElementById("Pydos")
    let spanMascotaJugador= document.getElementById('mascota_jugador')
    if (hypodoge.checked) {
       spanMascotaJugador.innerHTML= 'hypodoge' 
    }     else if(Capipeyo.checked){
        spanMascotaJugador.innerHTML= 'Capipeyo' 
    }    else if(Ratigueya.checked){
        spanMascotaJugador.innerHTML= 'Ratigueya' 
    }    else if(Langostelvis.checked){
        spanMascotaJugador.innerHTML= 'Langostelvis' 
    }    else if(Tupacalma.checked){
        spanMascotaJugador.innerHTML= 'Tupacalma' 
    }    else if(Langostelvis.checked){
        spanMascotaJugador.innerHTML= 'Langostelvis' 
    }    else if(Pydos.checked){
        spanMascotaJugador.innerHTML= 'Pydos' 
    }
    else{
        alert('no seleccionaste ninguna mascota ')
    }
}

function iniciarJuego(mascota) {
    let btn_mascota = document.getElementById("btn-pet")
    
    let btn_fuego = document.getElementById("btn-fire")
    let btn_agua = document.getElementById("btn-water")
    let btn_tierra= document.getElementById("btn-ground")
    let btn_trueno= document.getElementById("btn-thunder")
    let btn_reiniciar = document.getElementById("btn-restart")
    //funciones
btn_mascota.addEventListener('click',seleccionarMascota)
}




window.addEventListener('load',iniciarJuego)