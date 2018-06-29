
// fichier utilisé à chaque fois qu'une requete est faite sur la base de données

var mysql=require('mysql');
var express = require('express')
var app = express();

var connection=mysql.createConnection({
   /* host:'185.31.40.40',
    user:'myaccount',
    password:'myaccount',
    database:'myaccount_test',*/
    host:'127.0.0.1',
    user:'myaccount',
    password:'myaccount',
    database:'myaccount_test',
    multipleStatements:true
});

module.exports = connection;
