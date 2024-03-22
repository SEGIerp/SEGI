var app = require('./config/express')();
var rotas = require('./app/routes/rotas')(app);

app.listen(3000, function(){
    console.log("Servidor Rodando!");
});