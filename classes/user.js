const Course=require('./course')
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
module.exports=User;