//task 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ]; 
 people.sort((a, b) => a.age - b.age); 
 console.log(people);

//task 2
function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(array, ruleFunction) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
console.log(filter([3, -4, 1, 9], isPositive));
const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
console.log(filter(people2, isMale));


//task 3
let count = 0;
const intervalId = setInterval(() => {
    console.log(new Date());
    count += 3;

    if (count >= 30) {
        clearInterval(intervalId); 
        console.log("30 секунд прошло");
    }
}, 3000);


//task 4
function delayForSecond(callback) {
    setTimeout(callback, 1000); 
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//task 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
		if(cb) { 	
            cb(); 
        }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => {
    sayHi('Глеб');
});