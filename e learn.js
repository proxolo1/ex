
let userArr = [];
let rl = require("readline-sync")
let fs = require('fs')
const Course=require('./classes/course');
const User=require('./classes/user')
const myFunction=require('./functions/functions')
function startApp(value) {
    switch (value) {
        case "1":
            console.log(myFunction.printUser(myFunction.readLine("enter user email : ")));
            break;
        case "2":
            console.log(myFunction.addUser(new User(myFunction.readLine("enter unique id : "), myFunction.readLine("enter name : "), myFunction.readLine("enter email : "), new Course(myFunction.readLine("enter course name : "), myFunction.readLine("ente level : "), myFunction.readLine("enter description : ")))))
            break;
        case "3":
            console.log(myFunction.admin(myFunction.readLine("enter your email id : ")));
            break;
        case "4":
            return;
        default:
            throw new Error("invalid input");
    }

    return startApp(rl.question("1.existing user\n2.new user\n3.admin\n4.exit\n"));

}
// try {

//     startApp(rl.question("1.existing user\n2.new user\n3.admin\n4.exit\n"));
//     console.log(userArr)
// }
// catch (e) {
//     fs.appendFileSync('./textFiles/log.txt', e.toString(), (err) => {
//         if (err) throw err;
//         console.log("saved...")
//     })
// }
module.exports=startApp

// module.exports = { User, Course, searchData, readLine, deleteUser, view, printUser, update, startApp }