// TypeScript Practice Questions
// 1. Basic Types
var str = "Hello, TypeScript!";
var num = 42;
var bool = true;
var numArray = [1, 2, 3, 4, 5];
console.log({
    str: str,
    num: num,
    bool: bool,
    numArray: numArray
});
// 2. Functions
function addNumbers(a, b) {
    return a + b;
}
// Example usage
var sum = addNumbers(5, 10);
console.log(sum);
function greet(person) {
    return "Hello, my name is ".concat(person.name, " and I am ").concat(person.age, " years old.");
}
// Example usage
var person = { name: "Alice", age: 30 };
var greeting = greet(person);
console.log(greeting);
// 4. Union Types
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * value;
    }
}
// Example usage
var stringLength = processValue("Hello");
var numberSquare = processValue(5);
console.log(stringLength, numberSquare);
// 5. Classes
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getDetails = function () {
        return "Car: ".concat(this.year, " ").concat(this.make, " ").concat(this.model);
    };
    return Car;
}());
// Example usage
var myCar = new Car("Toyota", "Camry", 2020);
var carDetails = myCar.getDetails();
console.log(carDetails);
// 6. Generics
function identity(arg) {
    return arg;
}
// Example usage
var stringIdentity = identity("TypeScript");
var numberIdentity = identity(100);
console.log(stringIdentity, numberIdentity);
// 7. Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
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
var directionMessage = getDirectionMessage(Direction.Left);
console.log(directionMessage);
// 8. Type Assertions
function assertString(value) {
    return value.toUpperCase();
}
// Example usage
var upperCaseString = assertString("hello world");
