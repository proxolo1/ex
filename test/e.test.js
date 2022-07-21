
// const mymodule = require('./e learn');
const myFunctions = require('../functions/functions')
const main = require('../e learn')
const User = require("../classes/user")
const Course = require('../classes/course');
const fs=require('fs');
let user = new User(1, "ajay", "ajay.santhosh@ust.com", new Course("maths", "2", "idk"))
let user1 = new User(2, "demo", "amal@ust.com", new Course("maths", "2", "idk"))
test(' testing main functions..', () => {

    expect(myFunctions.addUser(user)).toBe(1);
    expect(myFunctions.printUser("example@com")).toBeFalsy();
    expect(myFunctions.printUser("ajay.santhosh@ust.com")).toEqual(user);
    expect(myFunctions.searchData('ajay.santhosh@ust')).toBeFalsy()
    expect(myFunctions.searchData('ajay.santhosh@ust.com')).toEqual(user)
    expect(myFunctions.update("ajay.santhosh@ust.com", "name", "amal")).toBeTruthy();
    expect(myFunctions.update("ajay.santhosh@ust.com", "course", "")).toBeTruthy();
    expect(myFunctions.update("idk")).toBeFalsy();
    // expect(myFunctions.file()).toBeTruthy()
    expect(myFunctions.view("example@com")).toBeFalsy();
    expect(myFunctions.view("ajay.santhosh@ust.com")).toEqual(user);
    expect(main('1')).toBeUndefined();
    expect(myFunctions.admin('', '')).toBeFalsy();
    expect(myFunctions.readLine('testingg...')).toBeDefined();
    expect(user.setRole()).toBe("admin");
    expect(user1.setRole()).toBe("user")
    expect(myFunctions.deleteUser('ajay.santhosh@us')).toBeFalsy();
    expect(myFunctions.deleteUser('ajay.santhosh@ust.com')).toBeTruthy();



}
)
describe("mocking modules",()=>{
    
   
    jest.mock('fs')
    test("should create file demo.txt",()=>{
        myFunctions.file();
        expect(fs.writeFile).toHaveBeenCalled();
    })
});




