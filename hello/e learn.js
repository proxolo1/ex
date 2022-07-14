class Course {
    constructor(name, level, description) {
        this.name = name;
        this.level = level;
        this.description = description;
        this.trainer;
        this.duration;
        this.maxRegistration;
        this.noRegistration;
        this.set();
        // this.setRole();
    }
    set() {
        this.trainer = "trainer";
        this.duration = "2 months";
        this.maxRegistration = 10;
        this.noRegistration = 2;
        return true;
    }
    setAll(name, level, description, trainer, duration, maxRegistration, noRegistration) {
        this.name = name;
        this.level = level;
        this.description = description;
        this.trainer = trainer;
        this.duration = duration;
    }


}
class User {
    constructor(id, name, email, course) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = this.setRole();
        this.course = new Course(course.name, course.level, course.description)
    }
    setRole() {
        if (this.email != "ajay.santhosh@ust.com") {
            return "user";
        }
        return "admin";

    }

}

let userArr = [];
let rl = require("readline-sync")
let fs = require('fs')

function startApp(value) {
    switch (value) {
        case "1":
            printUser(rl.question("enter user email : "));
            break;
        case "2":
            addUser(new User(readLine("enter unique id : "), readLine("enter name : "), readLine("enter email : "), new Course(readLine("enter course name : "), readLine("ente level : "), "enter description : ")))
            break;
        case "3":
            admin(readLine("enter your email id : "), readLine("1.add\n2.update\n3.delete\n4.view\n5.exit"));
            break;
        case "4":
            return;
        default:
            throw new Error("invalid input");
    }

    return startApp(rl.question("1.existing user\n2.new user\n3.admin\n4.exit\n"));

}
try {

    // startApp(rl.question("1.existing user\n2.new user\n3.admin\n4.exit\n"));
    // console.log(userArr)
}
catch (e) {
    fs.writeFileSync('log.txt', e.toString(), (err) => {
        if (err) throw err;
        console.log("saved...")
    })
}
function addUser(user) {
    let count = userArr.push(user);
    file();
    return count;
}
function readLine(value) {
    return rl.question(value)
}
function printUser(id) {
    for (i = 0; i < userArr.length; i++) {
        if (userArr[i].email === id) {
            return userArr[i];
        }
    }
    return false;
}
function admin(value, input) {
    if (value === "ajay.santhosh@ust.com") {
        switch (input) {
            case "1":
                addUser(new User(readLine("enter unique id : "), readLine("enter name : "), readLine("enter email : "), new Course(readLine("enter course name : "), readLine("ente level : "), "enter description : ")));
                return true;
            case "2":
                update(rl.question("enter email id"), readLine("enter catergory"), readLine("enter updated value"));
                return true;
            case "3":
                deleteUser(rl.question("enter email id :"))
                return true;
            case "4":
                view(readLine("enter email id :"))
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
    for (i = 0; i < userArr.length; i++) {
        if (userArr[i].email === email) {
            return userArr[i];
        }
    }
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
    fs.writeFileSync("e.txt", JSON.stringify(userArr), (err) => {
        if (err) throw new Error("error happend");
        console.log("saved !!")
        return true;
    })
}

function searchData(email) {
    let data = fs.readFileSync('e.txt', { encoding: 'ascii' });
    arrObj = JSON.parse(data);
    for (i = 0; i < arrObj.length; i++) {
        if (arrObj[i].email === email) {
            return arrObj[i];
        }
    }
    return false;
}


module.exports = { User, Course, admin, file, addUser, searchData, readLine, deleteUser, view, printUser, update, startApp }