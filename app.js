const express = require('express');
const app = express();
const port = process.emitWarning.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use('/', function (req, res, next){
    console.log('Requeest Url:' + req.url);
    next();
});

app.get('/api', function (req,res) {
  res.json({
     firstname: 'Leonel', 
    lastname: 'Ceballos'
  });
});

app.get('/index', function (req,res) {
  res.render('index');
}); 

app.get('/person/:id', function (req,res) {
    res.render('person', {ID: req.params.id});
}); 

let data = [
    {id : 1, nombre: 'Hugo', apellidos : 'Estrada Ramirez', edad : 19},
    {id : 2, nombre: 'Estela', apellidos : 'Perez Suarez', edad : 18},
    {id : 3, nombre: 'Sabrina', apellidos : 'Contreras Morales', edad : 17},
    {id: 4, nombre: 'Aliaha', apellidos : 'Zepeda Paz', edad : 19}
];

app.get('/personas', function(req, res){
    res.render('personas', {personas: data});
});

app.listen(port);
