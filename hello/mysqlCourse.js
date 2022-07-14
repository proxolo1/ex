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
    let data=JSON.parse(fs.readFileSync('e.txt',{encoding:"ascii"}));
    
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql =`CREATE TABLE courses (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), level varchar(22),description varchar(255),trainer varchar(255),duration varchar(255),maxRegistration int,noRegistration int);INSERT INTO courses (name,level,description,trainer,duration,maxRegistration,noRegistration) VALUES ?`;
        // var sql1= "INSERT INTO employees (name, age) VALUES ?";
        let arr=[];
       
        // console.log(data)
        for(let i=0;i<data.length;i++){
            console.log(data[i].course.level)
            arr.push([data[i].course.name,data[i].course.level,data[i].course.description,data[i].course.trainer,data[i].course.duration,data[i].course.maxRegistration,data[i].course.noRegistration]);
        }
        
        connection.query(sql,[arr], function (err, result) {
          if (err) throw err;
          console.log(result);
        });
      });
    //   connection.end();
    }
    mysql();