# query parameters

En el backend ponemos esto, para iniciarlo y lo demas he instalado nodemon y express desde la terminal

```js
const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre;
    console.log(nombre)
    res.send(`Hola, ${nombre}!`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
```

y en el frontend he puesto esto 

1ºhmtl
```html
<a href="queryParameters.html">queryParameters</a>
```

2ºhtml
```html
<a href="/saludo?nombre=Ale">Saludar</a>
```

## Post request

Esta forma de mandar datos se suele hacer con un formulario html basico

*Añadir le linea del principio  es MUY importante para que todo funciones*

```js
app.use(express.urlencoded({ extended: true }));

app.post('/enviar', (req, res) => {
    const mensaje = req.body.mensaje;
    res.send(`Mensaje recibido: ${mensaje}`);
});
```

```html
 <form action="/enviar" method="POST">
        <input type="text" name="mensaje">
        <button type="submit">Enviar</button>
      </form>
```

## fetch api

Cuando queremos hacer algo con la repuesta de mi backend debemoshacer hacer lo siguiente en el frontend:

```html
 <p id="mensaje"></p>
    <script>
        const parrafo = document.getElementById("mensaje")
        fetch('/json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre: 'Ale' })
    })
    .then(response => response.text())
    .then(data => parrafo.textContent = data);
    </script>
```

En el backend:

```js
app.use(express.json());
app.post('/json', (req, res) => {
    const nombre = req.body.nombre;
    res.send(`Hola, ${nombre}!`);
});
```