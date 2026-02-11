const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    console.log('Página planetas cargada');
    res.render('pages/planetas');
});

app.get('/planetas', (req, res) => {
    res.render('pages/planetas');
});

app.get('/mercurio', (req, res) => {
    res.render('pages/mercurio');
});

app.get('/venus', (req, res) => {
    res.render('pages/venus');
});

app.get('/tierra', (req, res) => {
    res.render('pages/tierra');
});

app.get('/marte', (req, res) => {
    res.render('pages/marte');
});

app.get('/jupiter', (req, res) => {
    res.render('pages/jupiter');
});

app.get('/saturno', (req, res) => {
    res.render('pages/saturno');
});

app.get('/urano', (req, res) => {
    res.render('pages/urano');
});

app.get('/neptuno', (req, res) => {
    res.render('pages/neptuno');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
