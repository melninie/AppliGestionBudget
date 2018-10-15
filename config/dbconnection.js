
// fichier utilisé à chaque fois qu'une requete est faite sur la base de données

var mysql=require('mysql');
var express = require('express')
var app = express();
var connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    database:'myaccount',
    multipleStatements:true
});

console.log('test console log after all');
module.exports = connection;
