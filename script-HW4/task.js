// task 1
let i = 0;
do {
  console.log('Привет!');
	i++;
} while (i < 2);

// task 2
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// task 3
for (let i = 7; i < 23; i++) {
    console.log(i);
}

// task 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ' — зарплата ' + obj[key] + ' долларов.');
    }
}

// task 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log('Получится число: ' + n);
console.log('Количество итераций: ' + num);

// task 6
const firstFriday = 5; 
for (let day = 1; day <= 31; day++) {
    if (day % 7  === firstFriday) {
        console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
    }
}