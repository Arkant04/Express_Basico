const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));

app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre;
    console.log(nombre)
    res.send(`Hola, ${nombre}!`);
});

app.post('/enviar', (req, res) => {
    const mensaje = req.body.mensaje;
    res.send(`Mensaje recibido: ${mensaje}`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});