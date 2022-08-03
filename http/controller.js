const fs = require("fs");
class Controller {
    constructor() {
        this.file = {
            read: function () {
                return fs.readFileSync('todo.json', { encoding: 'utf8' }, (err, data) => {
                    if (err) throw err;
                    console.log(data);
                });
            },
            write: function (data) {
                fs.writeFileSync('todo.json', JSON.stringify(data), (err, data) => {
                    if (err) throw err;
                    console.log("file saved")
                })
            }
        }
    }
    getTodo() {
        return this.file.read();
    }
    getTodoId(id) {
        let todoList = JSON.parse(this.file.read());
        return JSON.stringify(todoList.find(todo => todo.id == id));

    }
    createTodo(todoObject) {
        let todoList = JSON.parse(this.file.read());
        console.log(todoObject)
        todoList.push(todoObject);
        this.file.write(todoList);
        return "successfully added new todo";
    }

}
module.exports = new Controller();