let mysql = require('mysql');
let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'zhuxianjian123',
        database: 'alice'
    });
    connection.connect();

    //exports.connection;
    module.exports = connection;