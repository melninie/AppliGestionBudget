
// fichier utilisé à chaque fois qu'une requete est faite sur la base de données

var mysql=require('mysql');
var express = require('express')
var app = express();
var connection=mysql.createConnection({
    host:'sql7.freemysqlhosting.net',
    port:'3306',
    user:'sql7245241',
    password:'c6ff2qPJPa',
    database:'sql7245241',
   /* host:'127.0.0.1',
    user:'myaccount',
    password:'myaccount',
    database:'myaccount_test',*/
    multipleStatements:true
});

console.log('test console log after all');
module.exports = connection;
