class Course {
    constructor(name, level, description) {
        this.name = name;
        this.level = level;
        this.description = description;
        this.trainer;
        this.duration;
        this.maxRegistration;
        this.noRegistration;
        this.set();
        // this.setRole();
    }
    set() {
        this.trainer = "trainer";
        this.duration = "2 months";
        this.maxRegistration = 10;
        this.noRegistration = 2;
        return true;
    }
    setAll(name, level, description, trainer, duration, maxRegistration, noRegistration) {
        this.name = name;
        this.level = level;
        this.description = description;
        this.trainer = trainer;
        this.duration = duration;
        this.maxRegistration=maxRegistration;
        this.noRegistration=noRegistration;
    }


}
module.exports=Course;