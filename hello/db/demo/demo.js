import inquirer from 'inquirer';
import fs from 'fs';
let arr=[];
inquirer.prompt([{
    type:'list',
    name:'auth',
    message:"please select options  ",
    choices:[
        'login',
        'register'
    ]
}]).then(answer=>{
    if(answer.auth=='register'){
        registerUser();
    }
    else{
        loginUser();
    }
})
function registerUser(){
    inquirer.prompt([{
        type:'input',
        name:"name",
        message:"enter your name"

    },{
        type:"input",
        name:"email",
        message:"enter your email "
    }]).then(answer=>{
        arr.push(answer);
    }).catch(err=>{
        console.log(err);
    })
    file();
    loginUser();
}
function loginUser(){
    let data=JSON.parse(fs.readFileSync('ecom.txt',{encoding:'utf-8'}));
    inquirer.prompt([
        {
            
        }
    ])
}
function file(){
    fs.writeFileSync('ecom.txt',JSON.stringify(arr),(err)=>{
        if(err) throw err;
        console.log("saved !!!!!!!")
    })
}