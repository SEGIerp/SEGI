
    var mysql = require('mysql');

    var databaseConect = function(){
        return mysql.createConnection({host : 'localhost',user : 'root', password : '', database : 'livraria'});
    } 


    module.exports = function(){
        return databaseConect;
    }
