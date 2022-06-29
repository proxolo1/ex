let fs = require('fs');
// let rl=require("readline-sync")
function randomNumber() {
    return Math.floor(Math.random() * 2);
}
function dateNow() {
    return new Date();
}
function file(value) {
    fs.writeFileSync('ecommerse.txt', JSON.stringify(value), (err) => {
        if (err) throw err;
        console.log("saved")
    })
}
// function startApp() {


//     // let style = require("ascii-art");
//     let Customer = require("./class");
//     let customer = new Customer();
//     customer.setId(123);
//     customer.setId(123);
//     customer.setName("something");
//     customer.setAge(22);
//     customer.setOrder("apple,orange,jackfruit");
//     customer.setOrder("koenigsegg,porche");
//     console.log(JSON.stringify(customer));
//     file(customer)
//     customer.deleteProduct("apple");
//     customer.modifyProduct("orange", "orangesss")

//     console.log(JSON.stringify(customer));
//     searchOrder(123, customer);
// }

function searchOrder(productName, obj) {
    // console.log(obj)
    // orderId=rl.question("enter order id : ");
    // let data=JSON.parse(fs.readFileSync("ecommerse.txt",{encoding:"ascii"}));
    obj.orderArr.forEach((value) => {
        console.log(value)
        if (value.products.find((data)=>{
            return data==productName;
        })) {
            console.log(value)
            return value;
        }
    })
}
module.exports = { randomNumber, dateNow, file, searchOrder };