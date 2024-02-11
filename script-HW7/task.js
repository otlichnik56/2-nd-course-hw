//task 1
let str = "js";
console.log(str.toUpperCase()); 


//task 2
function filterByPrefix(arr, prefix) {
    const prefixLowerCase = prefix.toLowerCase();
    const filteredArray = arr.filter(item => item.toLowerCase().startsWith(prefixLowerCase));    
    return filteredArray;
}
console.log(filterByPrefix(["Кошка", "Кит", "Комар", "Носорог"], "ко")); 

//task 3
let number = 32.58884;
console.log(Math.floor(number)); 
console.log(Math.ceil(number)); 
console.log(Math.round(number));

//task 4
const numbers = [52, 53, 49, 77, 21, 32];
console.log("Наименьшее число:", Math.min(...numbers));
console.log("Наибольшее число:", Math.max(...numbers));

//task 5
const getRandomNumber = () => {
    const randomNumber = Math.random();
    const scaledNumber = Math.floor(randomNumber * 10) + 1;
    return scaledNumber;
};
console.log(getRandomNumber());

//task 6
function generateRandomArray(n) {
    const length = Math.floor(n / 2);
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (n + 1));
        randomArray.push(randomNumber);
    }
    return randomArray;
}
console.log(generateRandomArray(10));

//task 7
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInteger(5, 10));

//task 8
const currentDate3 = new Date();
console.log(currentDate3);

//task 9
const currentDate2 = new Date();
const currentDay2 = currentDate2.getDate();
currentDate2.setDate(currentDay2 + 73);
console.log(currentDate2);

//task 10
function formatDateTime(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const formattedDate = `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
    return `${formattedDate}\n${formattedTime}`;
}
const currentDate = new Date();
const formattedDateTime = formatDateTime(currentDate);
console.log(formattedDateTime);

//task11


