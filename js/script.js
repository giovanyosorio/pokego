
let ataqueJugador, ataqueEnemigo,vidasEnemigo=3,vidasJugador=3
function seleccionarMascota() {

    let seleccionarMascota =document.getElementById("select-pet")
    seleccionarMascota.style.display="none"

    let seleccionarAtaque =document.getElementById("select_attack")
    seleccionarAtaque.style.display="block"

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
     combate()
}

function crearMensaje(resultado) {
    let seccionMensajes=document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML="Tu mascota atacó con " + ataqueJugador + " la mascota del enemigo atacó con" + ataqueEnemigo + " " + resultado 
    seccionMensajes.appendChild(parrafo)


}
function aleatorio(min,max) {
    return  Math.floor(Math.random()*(max-min+1)+min)
}

function reiniciarJuego(params) {
    location.reload()
}
function iniciarJuego() {
    let seleccionarAtaque =document.getElementById("select_attack")
    seleccionarAtaque.style.display="none"

    let btn_mascota = document.getElementById("btn-pet")
    btn_mascota.addEventListener('click',seleccionarMascota)
    let btn_fuego = document.getElementById("btn-fire")
    btn_fuego.addEventListener("click",ataqueFuego)

    let btn_agua = document.getElementById("btn-water")
    btn_agua.addEventListener("click",ataqueAgua)

    let btn_tierra= document.getElementById("btn-ground")
    btn_tierra.addEventListener("click",ataqueTierra)

    let btn_trueno= document.getElementById("btn-thunder")
    btn_trueno.addEventListener("click",ataqueTrueno)
  
    let btn_reiniciar = document.getElementById("btn-restart")
    btn_reiniciar.addEventListener("click",reiniciarJuego)
    //funciones
    let reiniciar =document.getElementById("reiniciar")
    reiniciar.style.display="none"
 
}

function combate() {
    let spanVidasjugador = document.getElementById("vidas_jugador")
    let spanVidasEnemigos = document.getElementById("vidas_enemigo")

    if (ataqueJugador==ataqueEnemigo  ) {
        spanVidasjugador.innerHTML=vidasJugador
        spanVidasEnemigos.innerHTML=vidasEnemigo
        crearMensaje("Empataste")
     }     else if(ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA"){
        vidasJugador++
        vidasEnemigo--
        spanVidasjugador.innerHTML=vidasJugador
        spanVidasEnemigos.innerHTML=vidasEnemigo
        crearMensaje("GANASTE")
        
     }       else if(ataqueJugador=="AGUA" && ataqueEnemigo=="FUEGO"){
        crearMensaje("GANASTE")
        vidasJugador++
        vidasEnemigo--
        spanVidasjugador.innerHTML=vidasJugador
        spanVidasEnemigos.innerHTML=vidasEnemigo
     }      else if(ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA"){
        crearMensaje("GANASTE")
        vidasJugador++
        vidasEnemigo--
        spanVidasjugador.innerHTML=vidasJugador
        spanVidasEnemigos.innerHTML=vidasEnemigo
     } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        vidasEnemigo++
        spanVidasjugador.innerHTML=vidasJugador
        spanVidasEnemigos.innerHTML=vidasEnemigo
     }
     revisarVidas()

}
function crearMensajeVidas(resultadoFinal) {

    let seccionMensajes=document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML= resultadoFinal
    seccionMensajes.appendChild(parrafo)

    let btn_fuego = document.getElementById("btn-fire")
    btn_fuego.disabled=true

    let btn_agua = document.getElementById("btn-water")
    btn_agua.disabled=true

    let btn_tierra= document.getElementById("btn-ground")
    btn_tierra.disabled=true

    let btn_trueno= document.getElementById("btn-thunder")
    btn_trueno.disabled=true
    
    let reiniciar =document.getElementById("reiniciar")
    reiniciar.style.display="block"
}

function revisarVidas() {
        if (vidasJugador==0 ) {
            crearMensajeVidas(" Lo siento Acabaste de Perder")
        } else if (vidasEnemigo==0 ){
            crearMensaje("Felicitaciones Ganaste")
        }
}
window.addEventListener('load',iniciarJuego)