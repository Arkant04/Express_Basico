const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre;
    console.log(nombre)
    res.send(`Hola, ${nombre}!`);
});

app.post('/enviar', (req, res) => {
    const mensaje = req.body.mensaje;
    const nombre = req.body.nombre;
    console.log(mensaje, nombre)
    res.send(`Mensaje recibido: ${nombre}, ${mensaje}`);
});

app.post('/json', (req, res) => {
    const nombre = req.body.nombre;
    res.send(`Hola, ${nombre}!`);
});

app.get('/html', (req, res)=> {
    res.send('<a href="https://youtu.be/dQw4w9WgXcQ">Bloodborne Gratis para pc</a>')
})

app.get('/enviarArchivos', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'all-might.gif'))
})

app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Usuario ID: ${id}`);
});

app.get('/status', (req, res)=> {
    res.status(200).send("Entro bien")
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});