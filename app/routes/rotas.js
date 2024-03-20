module.exports = function (app) {
    app.get('/SEGI', function (request, response) {
        
        var connection = app.infra.connectionFactory;

        connection.query('select * from livros',function(erro, results){
           response.render('produtos/lista', {lista:results}); 
        });

        connection.end();
    });
}