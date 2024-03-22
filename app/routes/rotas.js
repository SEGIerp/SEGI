module.exports = function (app) {
    app.get('/SEGI', function (request, response) {
        
        var connection = app.infra.connectionFactory;

    /* --------------------exemplo lista do banco--------------------------------
      connection.query('select * from livros',function(erro, results){
           response.render('produtos/SEGI', {lista:results}); 
        });
    */
        response.render('Exemplo'); 
        connection.end();
    });
}