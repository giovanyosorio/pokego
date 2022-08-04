const express = require("express");

//crear app , representa nuestro servidor

const app = express(); //se genera una instancia del servidor

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(8080, () => {
  console.log("Servidor funcionando");
});
