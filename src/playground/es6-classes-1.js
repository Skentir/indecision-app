class Person {
    constructor(name = "Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi ${this.name}`;
    }

    getDescription() {
        return `Hi, I am ${this.name} and I'm ${this.age} years old.`;
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }

}

class Traveller extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }

    getGreeting() {
        return super.getDescription() + ` This person is from ${this.location}.`
    };
}
const me = new Student("Skentir", 21, "Medicine");
console.log(me.getDescription());

const other = new Traveller("Lumine", 18, "Teyvat");
console.log(other.getGreeting());