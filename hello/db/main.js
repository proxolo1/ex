import inquirer from 'inquirer';
import { readFileSync, writeFileSync } from 'fs';
import database from './database/db.js'
let arr = new Array();
startApp()

function registerUser() {
    inquirer.prompt([{
        type: "input",
        message: "enter your name",
        name: "name"
    }, {
        type: "input",
        message: "enter your email ",
        name: "email"
    }]).then(answer => {
        arr.push(answer);
        file();
        console.log('-----------------registered successfully-----------------')
        startApp();
    })
    // file();
    // loginUser();
}
function loginUser() {
    console.log('===========login==============')
    arr = JSON.parse(readFileSync('ecom.txt', { encoding: 'utf-8' }));
    inquirer.prompt([
        {
            type: "input",
            message: "enter your email id",
            name: "email"
        }
    ]).then(answer => {
        let obj = arr.find((value) => {
            return value.email == answer.email
        })
        if (obj != undefined) {
            ecom(obj);
        }
        else {
            throw new Error("not existing....")
        }
    })
}
function file() {
    writeFileSync('ecom.txt', JSON.stringify(arr), (err) => {
        if (err) throw err;
        console.log("saved !!!!!!!")
    })
}
function startApp() {
    console.log("hello")
    inquirer.prompt([{
        type: 'list',
        name: 'auth',
        message: "please select options  ",
        choices: [
            'login',
            'register',
            'exit'
        ]
    }]).then(answer => {
        if (answer.auth == 'register') {
            registerUser();
        }
        else if (answer.auth === 'login') {
            loginUser();
        }
        else {
            return;
        }
    })
}
function ecom(value) {
    inquirer.prompt([
        {
            type: 'list',
            message: "please select any options below",
            name: "options",
            choices: [
                "add order",
                "delete order",
                "update products"
            ]
        }
    ]).then(answer => {
        if (answer.options === "add order") {

            order(value)
        }
        else if (answer.options === "delete order") {
            deleteOrder(value);
        }
        else if (answer.options === "update products") {
            updateProduct(value);
        }

    })
}

function order(value) {
    let index = arr.findIndex(ele => {
        return ele === value;
    });

    inquirer.prompt({
        type: 'list',
        message: "enter products you want to order",
        name: "products",
        choices: [
            "apple",
            "orange",
            "pinapple",
            "guava",
            "exit"
        ]
    }).then(answer1 => {
        if (answer1.products != "exit") {
            if(value['order']===undefined) {
                value['order'] =[]
            }
            value['order'].push(answer1);
            arr[index] = value;
            order(value);
            file();
        }


    })


}
function deleteOrder(value) {
    if (value.order != undefined) {
        value.order.splice(0, value.order.length);
        file();
    }
    else {
        throw new Error("order is null")
    }
}
function updateProduct(value) {
    if (value.order != undefined) {
        inquirer.prompt([{
            type: 'input',
            message: "enter old product name",
            name: "old"
        }, {
            type: 'input',
            message: "enter new product name",
            name: "new"
        }]).then(answer => {
            value.order.forEach((ele, index) => {
                if (answer.old === ele.products) {
                    value.order[index].products = answer.new;
                    file();
                }


            })
        })

    }
}
function createTables(){
    database.createTableCustomer();
    database.createTableOrder();
    database.createTableProduct();
    database.createTablePromotion();
}