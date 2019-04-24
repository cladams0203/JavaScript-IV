// CODE here for your Lambda Classes

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