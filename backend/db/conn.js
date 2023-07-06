const mysql = require("mysql");


const conn = mysql.createConnection({
	host: 'us-cdbr-east-06.cleardb.net',
	user: 'beffa1464bd0ca',
	password: '7e8041f3',
	database: 'heroku_a6cf754832742b5',
});
// mysql://beffa1464bd0ca:7e8041f3@us-cdbr-east-06.cleardb.net/heroku_a6cf754832742b5?reconnect=true
conn.connect((err)=>{
    if(err) throw err;
    console.log("MySQL Connected!");
});

module.exports = conn;