const { readLine } = require("../../functions/functions");
const myModule =require('./main') 
const rl=require('readline-sync')
const fs=require('fs')
describe('mocking function',()=>{
    test("readline function should return string",()=>{
       const input="hello world"
       rl.question= jest.fn(input=>{
           return input;
       });
       expect(readLine(input)).toBe(input);
    })
    test("mocking console log function",()=>{
        let output,input="hello world";
        console.log=jest.fn(input=>{
            output=input.toString();
        })
        myModule.print(input);
        expect(input).toBe(output)
    })
    test("mocking readFile function",()=>{
        fs.readFile=jest.fn();
        myModule.file["read"];
        expect(fs.readFile.mock).toBeTruthy();
    })

})
describe("mocking using spyon",()=>{
    test("readline return string",()=>{
        const input="hello world"
        const spyFunction=jest.spyOn(rl,"question");
        let result=spyFunction(input);
        expect(result).toBe(input)
        expect(rl.question.mock).toBeTruthy();
    })
    test("mocking console.log using spyOn",()=>{
        const input="hello world";
        jest.spyOn(fs,"writeFile");
        expect(fs.writeFile.mock).not.toBeFalsy();
        
    })
})
describe("mocking modules",()=>{
    test("mocking readline-sync module",()=>{
        jest.mock("readline-sync");
        
        expect(rl.question.mock).toBeTruthy();
        expect(rl.question).toHaveBeenCalled();
        
    })
    test("mocking file module",()=>{
        jest.mock("fs");
        expect(fs.writeFile.mock).toBeTruthy();
        expect(fs.readFile.mock).toBeTruthy();
    })
})


