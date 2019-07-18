var mysql=require("mysql");
//提示   性别存储  男 1   女  3   保密  2
module.exports=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"77233feng",
    database:"teachtest",
    timezone:"HH:MM"
});

