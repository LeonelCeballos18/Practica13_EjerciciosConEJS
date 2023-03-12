const express = require('express')
const app = express()
let port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use('/', function(req, res, next){
    console.log('Request Url:' + req.url);
    next();
})

app.get('/', function(req, res){
  res.render('index');
})

app.get('/person:id', function(req, res){
  res.render('person', { ID: req.params.id });
})

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html><html lang="en"><head><link href=/assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello world!</h1></body></html>`)
})

app.get('/person/:id', function (req, res) {
  res.send('<!DOCTYPE html><html lang="en"><head></head><body><h1>Person: ' + req.params.id +'</h1></body></html>')
})

app.get('/api', function (req, res) {
    res.json({firstname: 'Jonh', lastname: 'Doe'});
  })

app.listen(port)