require('dotenv').config();
const hbs = require('hbs');
const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const Swal = require('sweetalert2');
const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); 

app.use(express.urlencoded({extended:false}));

app.use(require('./routes/index'));

// Servir contenido estatico
// app.use( express.static('public'));  

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => { 
    res.render('home', {
        // Header
        titulo: 'Sios Asesores',
        swipTitle1: 'Sistemas Profit Plus',
        swipDesc1: 'Es la solución de gestión administrativa que ofrece soporte a los procesos de negocio de su organización de forma integral, sencilla y flexible en la área de invetntario, compras, ventas, importaciones y tesorería, potenciando el funcionamiento de su negocio.',
        swipButt1: 'Saber Mas',
        swipTitle2: 'Sistema Sigesp Enterprise',
        swipDesc2: 'Simplifique los procesos de gestión administrativa en las organizaciones del sector público venezolano.',
        swipButt2: 'Saber Mas',
        swipTitle3: 'Equipos Fiscales',
        swipDesc3: 'En Sios Asesores contamos con maquinas e impresoras fiscales para su empresa o negocio.',
        swipButt3: 'Saber Mas',
 
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })