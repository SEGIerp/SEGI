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

    /* --------------------------------exemplo rota com post(incompleto, precisa baixar e instalar o framework)
    app.post('/SEGI', function (request, response) {
        
        var body = request.body

        var connection = app.infra.connectionFactory;

   
        response.render('Exemplo'); 
        connection.end();
    });
    */
}