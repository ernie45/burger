var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "!3Rnl00k",
    database: "burgers_db"
});
connection.connect(function(error){
    if (error){
        console.log(error); 
    }
    console.log("connected as id " + connection.threadId); 
});
module.exports = connection;