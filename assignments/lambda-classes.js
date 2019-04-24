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
