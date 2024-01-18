// task 1
let a1 = 10;
alert(a1);
a1 = 20;
alert(a1);

// task 2
let year = 2007;
alert(`Год выпуска первого iPhone ${year} год.`);

// task 3
let namea = "Брендан Эйх";
alert(`Имя создателя языка JavaScript - ${namea}`);

// task 4
let a = 10;
let b = 2;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
alert(`${a} и ${b}. Их сумма = ${c}, разность = ${d}, произведение = ${e} и частное = ${f} `);

// task 5
let aaa = 2;
let baa = 5;
let resulttt = aaa ** bbb;
alert(`${aaa} в ${bbb}-ой степени = ${resulttt}`);

// task 6
let aa = 9;
let bb = 2;
let resultt = a % b;
alert(`Остаток от деления ${aa} на ${bb} = ${resultt}`);

// task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// task 8
let age = prompt("Сколько вам лет?");
alert(age);

// task 9
const user = {
    name: 'Bob',
    age: 25,
    isAdmin: true,
}

user['city of residence'] = "London";

user.age = 30;

delete user['city of residence'];

let info = prompt("Какую информацию хотите узнать о пользователе?");

alert(user[info]);

// task 10
let name = prompt("Как величать тебя?");
alert(`Привет, ${name}`);