// CODE here for your Lambda Classes
// Base class for roster.
class Person {
    constructor(people) {
        this.name = people.name;
        this.age = people.age;
        this.location = people.location;
        this.gender = people.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

// Instructor class.
class Instructor extends Person {
    constructor(instr) {
        super(instr);
        this.specialty = instr.specialty;
        this.favLanguage = instr.favLanguage;
        this.catchPhrase = instr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} recieves a perfect score on ${subject}!`);
    }
}

// Student class.
class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }
    listsSubjects() {
        student.favSubjects.forEach(element => {
            console.log(`One of my favorite subjects is ${element}`);
        });
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
}

//PM class.
class ProjectManagers extends Instructor {
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp(channel) {
        console.log(`${pm.name} announces to ${channel}. @channel standy times!`);
    }
    deBugsCode(student, subject) {
        console.log(`${pm.name} debugs ${student.name}'s code on ${subject}`);
    }
}