function openGameOne() {
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
}


