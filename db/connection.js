let mysql = require("mysql")

let con = mysql.createConnection({
    host:"18.157.127.87",
    user:"user2",
    password:"hRMyzHVgtWgDJAwe",
    database:"task_db"
})

module.exports = con