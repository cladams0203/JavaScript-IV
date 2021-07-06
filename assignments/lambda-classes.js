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
    };
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
        this.favSubjects.forEach(element => {
            console.log(`One of my favorite subjects is ${element}`);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
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
        console.log(`${this.name} announces to ${channel}. @channel standy times!`);
    }
    deBugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//New Instructor.
const keiran = new Instructor({
    name: 'Keiran',
    location: 'Somewhere USA',
    age: 30,
    gender: 'male',
    favLanguage: 'Javascript',
    specialty: 'Prototypes',
    catchPhrase: 'How about a Meme?'
});

// New Student.
const chris = new Student({
    name: 'Chris',
    location: 'Sarasota',
    age: 39,
    gender: 'male',
    previousBackground: 'Mechanic',
    className: 'WebPT6',
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

// New PM.
const jordan = new ProjectManagers({
    name: 'Jordan',
    location: 'New York',
    age: 27,
    gender: 'male',
    favLanguage: 'Javascript',
    specialty: 'WebPT6 PM',
    catchPhrase: 'Droppin\' a link!',
    gradClassName: 'WebFT?',
    favInstructor: 'Jim Bob Cooter'
});
//Logs to make sure everything works.
keiran.speak();
jordan.speak();
chris.speak();
jordan.standUp('hey');
jordan.deBugsCode(chris, 'javascript');
chris.listsSubjects();
chris.PRAssignment('javascript IV');
keiran.demo('Javascript IV');
keiran.grade(chris, 'Javascript Fundamentals');