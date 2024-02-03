// task 1
let password = '123';
let insert = prompt("Введите пароль");
if(insert === password){
    alert("Пароль введен верно");
} else{
    alert("Пароль введен неправильно");
}

// task 2
let c = prompt("Введите число");
if(c > 0 && c < 10){
    console.log("Верно");
} else{
    console.log("Неверно");
}

// task 3
let d = prompt("Введите 1 число");
let e = prompt("Введите 2 число");
if(d > 100 || e > 100){
    console.log("Верно");
} else{
    console.log("Неверно");
}

// task 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// task 5
let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
    case 1:
	case 2:
    case 12:
		alert("Зима же");
		break;
	case 3:
    case 4:
    case 5:
		alert("Весна же");
		break;
    case 6:
    case 7:
    case 8:
		alert("Лето же");
		break;
    case 9:
    case 10:
    case 11:
		alert("Осень же");
		break;
	default: alert("Нет такого месяца");
		break;
}