
// fichier utilisé à chaque fois qu'une requete est faite sur la base de données

var mysql=require('mysql');
var express = require('express')
var app = express();

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'myaccount',
    multipleStatements:true
});
module.exports = connection;
