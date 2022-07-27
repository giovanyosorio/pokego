
let ataqueJugador, ataqueEnemigo
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
    }   else if(Pydos.checked){
        spanMascotaJugador.innerHTML= 'Pydos' 
    }
    else{  alert('no seleccionaste ninguna mascota ')
    }    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let seleccionarAtaqueAleatorio= aleatorio(1,6)
    let mascota_enemigo= document.getElementById('mascota_enemigo')
    if (seleccionarAtaqueAleatorio==1) {
        mascota_enemigo.innerHTML= 'hypodoge' 
     }     else if(seleccionarAtaqueAleatorio==2){
        mascota_enemigo.innerHTML= 'Capipeyo' 
     }    else if(seleccionarAtaqueAleatorio==3){
        mascota_enemigo.innerHTML= 'Ratigueya' 
     }    else if(seleccionarAtaqueAleatorio==4){
        mascota_enemigo.innerHTML= 'Langostelvis' 
     }    else if(seleccionarAtaqueAleatorio==5){
        mascota_enemigo.innerHTML= 'Tupacalma' 
     }   else if(seleccionarAtaqueAleatorio==6){
        mascota_enemigo.innerHTML= 'Pydos' 
     }
     else{
         alert('No se selecciono ataque')
     }
}

function ataqueFuego() {
    ataqueJugador="FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador="AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador="TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueTrueno() {
    ataqueJugador="TRUENO"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio= aleatorio(1,4)
    if (ataqueAleatorio==1) {
        ataqueEnemigo= 'FUEGO' 
     }     else if(ataqueAleatorio==2){
        ataqueEnemigo= 'AGUA' 
     }    else if(ataqueAleatorio==3){
        ataqueEnemigo= 'TIERRA' 
     } else {
        ataqueEnemigo= 'TRUENO'
     }
}
function aleatorio(min,max) {
    return  Math.floor(Math.random()*(max-min+1)+min)
}

function iniciarJuego() {
    let btn_mascota = document.getElementById("btn-pet")

    let btn_fuego = document.getElementById("btn-fire")
    btn_fuego.addEventListener("click",ataqueFuego)

    let btn_agua = document.getElementById("btn-water")
    btn_agua.addEventListener("click",ataqueAgua)

    let btn_tierra= document.getElementById("btn-ground")
    btn_tierra.addEventListener("click",ataqueTierra)

    let btn_trueno= document.getElementById("btn-thunder")
    btn_trueno.addEventListener("click",ataqueTrueno)
  
    let btn_reiniciar = document.getElementById("btn-restart")
    //funciones
btn_mascota.addEventListener('click',seleccionarMascota)
}



window.addEventListener('load',iniciarJuego)