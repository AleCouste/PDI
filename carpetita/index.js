import express from 'express'

const app = express();

app.get('/teto', function (req, res) {
    res.send('hola mundo (usando get)');
});

app.post('/teto', function (req, res) {
    res.send('esta es la ruta post de mi entidad teto');
});

app.put('/teto', function (req, res) {
    res.send('esta es la ruta put de mi entidad teto');
});

app.delete('/teto', function (req, res) {
    res.send('esta es la ruta delete de mi entidad teto');
});

app.listen(3000, () => {
    console.log('servidor corriendo en http:/localhost:3000')
})