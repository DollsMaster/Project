let mysql = require('mysql');
let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'zhuxianjian12345',
        database: 'mydatabase'
    });
    connection.connect();

    //exports.connection;
    module.exports = connection;