const express = require("express");

//crear app , representa nuestro servidor

const app = express(); //se genera una instancia del servidor
let jugadores = [];

class Jugador {
  constructor(id) {
    this.id = id;
  }
}

app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`;

  const jugador = new Jugador(id);
  jugadores.push(jugador);

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send(id);
});

app.listen(8080, () => {
  console.log("Servidor funcionando");
});
