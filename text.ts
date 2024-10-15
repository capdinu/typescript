// TypeScript Practice Questions

// 1. Basic Types
let str: string = "Hello, TypeScript!";
let num: number = 42;
let bool: boolean = true;
let numArray: number[] = [1, 2, 3, 4, 5];

console.log({
 str
,num
,bool
,numArray
})

// 2. Functions
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Example usage
const sum = addNumbers(5, 10);
console.log(sum)


// 3. Interfaces
interface Person {
    name: string;
    age: number;
}

function greet(person: Person): string {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

// Example usage
const person: Person = { name: "Alice", age: 30 };
const greeting = greet(person);

console.log(greeting);


// 4. Union Types
function processValue(value: string | number): number | string {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * value;
    }
}

// Example usage
const stringLength = processValue("Hello");
const numberSquare = processValue(5);

console.log(stringLength, numberSquare);
 

// 5. Classes
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails(): string {
        return `Car: ${this.year} ${this.make} ${this.model}`;
    }
}

// Example usage
const myCar = new Car("Toyota", "Camry", 2020);
const carDetails = myCar.getDetails();

console.log(carDetails);


// 6. Generics
function identity<T>(arg: T): T {
    return arg;
}

// Example usage
const stringIdentity = identity<string>("TypeScript");
const numberIdentity = identity<number>(100);

console.log(stringIdentity, numberIdentity);

// 7. Enums
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

function getDirectionMessage(direction: Direction): string {
    switch (direction) {
        case Direction.Up:
            return "You chose Up!";
        case Direction.Down:
            return "You chose Down!";
        case Direction.Left:
            return "You chose Left!";
        case Direction.Right:
            return "You chose Right!";
        default:
            return "Unknown direction!";
    }
}

// Example usage
const directionMessage = getDirectionMessage(Direction.Left);

console.log(directionMessage);
// 8. Type Assertions
function assertString(value: unknown): string {
    return (value as string).toUpperCase();
}

// Example usage
const upperCaseString = assertString("hello world");

