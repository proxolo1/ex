let mysql=require('mysql');
let fs=require('fs')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'e-learn registration',
  multipleStatements:true
});
let userid=courseid=1;
connection.connect();
connection.query(`select * from users where id=${userid};select * from courses where id=${courseid}`,[1,2],(err,data)=>{
    console.log(data[0],data[1]);
})