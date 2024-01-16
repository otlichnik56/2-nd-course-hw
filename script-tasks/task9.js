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