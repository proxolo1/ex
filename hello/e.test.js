
const mymodule = require('./e learn');
let user = new mymodule.User(1, "ajay", "ajay.santhosh@ust.com", new mymodule.Course("maths", "2", "idk"))
let user1 = new mymodule.User(1, "demo", "amal@ust.com", new mymodule.Course("maths", "2", "idk"))
test('testing..', () => {
    expect(mymodule.addUser(user)).toBe(1);
    expect(mymodule.printUser("example@com")).toBeFalsy();
    expect(mymodule.printUser("ajay.santhosh@ust.com")).toEqual(user);
    expect(mymodule.searchData('ajay.santhosh@ust')).toBeFalsy()
    expect(mymodule.searchData('ajay.santhosh@ust.com')).toEqual(user)
    expect(mymodule.update("ajay.santhosh@ust.com", "name", "amal")).toBeTruthy();
    expect(mymodule.update("ajay.santhosh@ust.com","course","")).toBeTruthy();
    expect(mymodule.update("idk")).toBeFalsy();
    // expect(mymodule.file()).toBeTruthy()
    expect(mymodule.view("example@com")).toBeFalsy();
    expect(mymodule.view("ajay.santhosh@ust.com")).toEqual(user);
    expect(mymodule.startApp('1')).toBeUndefined();
    expect(mymodule.admin('','')).toBeFalsy();
    expect(mymodule.readLine('testingg...')).toBeDefined();
    expect(user.setRole()).toBe("admin");
    expect(user1.setRole()).toBe("user")
    expect(mymodule.deleteUser('ajay.santhosh@us')).toBeFalsy();
    expect(mymodule.deleteUser('ajay.santhosh@ust.com')).toBeTruthy();



})
