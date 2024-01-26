console.log(findMinNumber(10, 2)); // Проверка 1 задачи
console.log(findMinNumber(5, 5)); // Проверка 1 задачи
console.log(checkEvenOrOdd(10)); // Проверка 2 задачи
console.log(checkEvenOrOdd(7));  // Проверка 2 задачи
printSquare(5);  // Проверка 3.1 задачи
console.log(square(5)); // Проверка 3.2 задачи
greetUser();  // Проверка 4 задачи
console.log(multiplyNumbers(5, 3)); // Проверка 5 задачи
console.log(multiplyNumbers('abc', 3)); // Проверка 5 задачи
console.log(multiplyNumbers(7, 'xyz')); // Проверка 5 задачи
console.log(cubeNumber());  // Проверка 6 задачи
console.log(`Площадь круга circle1: ${circle1.getArea()}`);  // Проверка 7 задачи
console.log(`Периметр круга circle1: ${circle1.getPerimeter()}`);  // Проверка 7 задачи
console.log(`Площадь круга circle2: ${circle2.getArea()}`);  // Проверка 7 задачи
console.log(`Периметр круга circle2: ${circle2.getPerimeter()}`);  // Проверка 7 задачи
console.log(getSeason(1));  // Проверка 8 задачи
console.log(getSeason(4));  // Проверка 8 задачи
console.log(getSeason(8));  // Проверка 8 задачи
console.log(getSeason(11)); // Проверка 8 задачи
console.log(getSeason(13)); // Проверка 8 задачи


// task 1
const findMinNumber = (a, b) => (a < b ? a : b); 


// task 2
const checkEvenOrOdd = (number) => (number % 2 === 0 ? 'Число четное' : 'Число нечетное');


// task 3
const printSquare = (number) => {
    const square = number * number;
    console.log(`Квадрат числа ${number} равен ${square}`);
};
const square = (number) => number * number;


// task 4
function greetUser() {
    const age = Number(prompt("Сколько вам лет?"));    
    if (isNaN(age) || age < 0) { 
        console.log("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) { 
        console.log("Привет, друг!");
    } else { 
      console.log("Добро пожаловать!");
    }
}


// task 5
function multiplyNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2) || 
    num1 == null || num1 == undefined || num2 == null || num2 == undefined) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}


// task 6
function cubeNumber() {
    const userInput = prompt("Введите число:");
    const number = Number(userInput);  
    if (isNaN(number)  || userInput === "") {
        return 'Переданный параметр не является числом';
    } else {
        const result = number ** 3; 
        return `${number} в кубе равняется ${result}`;
    }
}


// task 7
const circle1 = {
    radius: 5
};
const circle2 = {
    radius: 8
};
function getArea(radius) {
    return Math.PI * radius ** 2; 
}
function getPerimeter(radius) {
    return 2 * Math.PI * radius; 
}


// task 8
function getSeason(monthNumber) {
    if (monthNumber === 12 || monthNumber <= 2 && monthNumber > 0) {
        return "Зима";
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        return "Весна";
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        return "Лето";
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        return "Осень";
    } else {
        return "Неправильный номер месяца";
    }
}
