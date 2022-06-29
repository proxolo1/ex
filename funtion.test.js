let myFunction=require("./function");
let Customer = require("./class");
let customer = new Customer();
customer.setId(123);
customer.setName("something");
customer.setAge(22);
customer.setOrder("apple,orange,jackfruit");
customer.setOrder("koenigsegg,porche");
// customer.deleteProduct("apple");
// customer.modifyProduct("orange", "orangesss")
test("testing function",()=>{
    expect(myFunction.randomNumber()).toBeDefined();
})
test("testing search order function",()=>{
    expect(myFunction.searchOrder("apple",customer)).toBeDefined()
})
// test("testing deleteProduct",()=>{
//     expect(customer.deleteProduct("orange"));
// })