function mysql(){
    let mysql=require('mysql');
    let fs=require('fs')
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'e-learn registration',
      multipleStatements:true
    });
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql ="CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255),role varchar(255));INSERT INTO users (name, email,role) VALUES ?";
        // var sql1= "INSERT INTO employees (name, age) VALUES ?";
        let arr=[];
        let data=JSON.parse(fs.readFileSync('e.txt',{encoding:"ascii"}));
        // console.log(data)
        for(let i=0;i<data.length;i++){
            arr.push([data[i].name,data[i].email,data[i].role]);
        }
        
        connection.query(sql,[arr], function (err, result) {
          if (err) throw err;
          console.log(result);
        });
      });
    //   connection.end();
    }
    mysql();