const mysql=require('mysql2/promise');

const pool=mysql.createPool({
    host:'localhost',
    database:'qrcode',
    user:'root',
    password:'root'
})
module.exports=pool;