let userArr = [];
let rl = require("readline-sync")
let fs = require('fs')
function addUser(user) {
    let count = userArr.push(user);
    file();
    return count;
}
function readLine(value) {
    return rl.question(value)
}
 printUser=function(id) {
    let userArr1 = JSON.parse(fs.readFileSync('./textFiles/e.txt', { encoding: 'utf-8' }));
    for (i = 0; i < userArr1.length; i++) {
        if (userArr1[i].email === id) {
            return userArr1[i];
        }
    }
    return false;
}
function admin(value) {
    if (value === "ajay.santhosh@ust.com") {
        switch (readLine("1.add\n2.update\n3.delete\n4.view\n5.exit")) {
            case "1":
                console.log(addUser(new User(readLine("enter unique id : "), readLine("enter name : "), readLine("enter email : "), new Course(readLine("enter course name : "), readLine("ente level : "), "enter description : "))));
                return true;
            case "2":
                console.log(update(rl.question("enter email id"), readLine("enter catergory"), readLine("enter updated value")));
                return true;
            case "3":
                console.log(deleteUser(rl.question("enter email id :")))
                return true;
            case "4":
                console.log(view(readLine("enter email id :")))
                return true;
            case "5":
                return;
        }
        admin();
    }
    else {
        return false;
    }

}
function update(input, catergory, uValue) {
    for (i = 0; i < userArr.length; i++) {
        if (userArr[i].email === input) {
            for (obj in userArr[i]) {
                if (catergory != 'course') {
                    if (obj == catergory) {

                        userArr[i][obj] = uValue;
                        file();

                        return true;
                    }

                }
                else {


                    userArr[i].course.setAll(readLine("enter course name : "), readLine("enter level : "), readLine("enter description : "), readLine("enter trainer : "), readLine("enter duration : "), readLine("enter maxRegistraion : "), readLine("enter no of registraion : "));
                    return true;

                }



            }

        } return false;
    }
}
function view(email) {
    // userArr.filter(value => {
    //     return value.email === email;
    // })
    let count = 0;
    for (i = 0; i < userArr.length; i++) {
        if (userArr[i].email === email) {
            return userArr[i];
        }
    }
    userArr.forEach(value => {
        console.log(count++, ". " + JSON.stringify(value))
    })
    return false;
}
function deleteUser(email) {
    for (i = 0; i < userArr.length; i++) {

        if (userArr[i].email === email) {
            userArr.splice(i, 1)
            file();
            return true;
        }
        return false;
    }
}
function file() {
    fs.writeFile("./textFiles/e.txt", JSON.stringify(userArr), (err) => {
        if (err) throw new Error("error happend");
        console.log("saved !!")
        return true;
    })
}

function searchData(email) {
    let data = fs.readFileSync('./textFiles/e.txt', { encoding: 'ascii' });
    arrObj = JSON.parse(data);
    for (i = 0; i < arrObj.length; i++) {
        if (arrObj[i].email === email) {
            return arrObj[i];
        }
    }
    return false;
}
module.exports = { file, addUser, searchData, admin, readLine, deleteUser, view, printUser, update }