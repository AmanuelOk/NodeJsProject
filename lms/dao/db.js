var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'selemet24!',
    database : 'lms'
});

module.exports = connection;