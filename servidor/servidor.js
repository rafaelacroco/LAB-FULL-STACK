const express = require("express");
const app = express();
const porta = 80; 
app.use(express.static("./public"));

app.listen(porta, () => {
    console.log("Servidor rodando!");
});