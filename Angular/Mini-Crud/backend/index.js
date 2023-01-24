(async () => {
    const database = require('./db/db');
    const Usuario = require('./model/usuario')

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})(); /* verifica database */


const express = require('express');
const Usuario = require('./model/usuario');
const bodyParser = require('body-parser');
const { application } = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* permite acesso do front */
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://localhost:4200/");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.post('/add', function (req, res) {
    Usuario.create({
        fname: req.body.fname,
        lname: req.body.lname
    }).catch(function (error) {
        res.send(error)
    })
})

app.get('/', function (req, res) {
    Usuario.findAll().then(function (posts) {
        res.json(posts)
    })
})

app.get('/delete/:id', function (req, res) {
    Usuario.destroy({ where: { 'id': req.params.id } })
    res.redirect('http://localhost:4200/exclusao')
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});