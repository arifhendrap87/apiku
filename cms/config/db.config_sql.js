const mysql = require('mysql')
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_wordpress'
});
dbConn.connect(
    function (err) {
        if (err) throw err;
        console.log("Database Connected!");
    });
module.exports = dbConn;