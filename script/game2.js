const fruits = ["Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];
function openGameTwo() {    
    const shuffledFruits = fruits.sort(() => Math.random() - 0.5);
    alert(shuffledFruits);
    const firstElement = prompt("Чему равнялся первый элемент массива?");
    const lastElement = prompt("Чему равнялся последний элемент массива?");
    if (compareStringsIgnoreCase(firstElement, fruits[0]) && compareStringsIgnoreCase(lastElement, fruits[fruits.length - 1])) {
        alert("Поздравляем, вы угадали оба элемента!");
    } else if (compareStringsIgnoreCase(firstElement, fruits[0]) || compareStringsIgnoreCase(lastElement, fruits[fruits.length - 1])) {
        alert("Вы были близки к победе!");
    } else {
        alert("Вы ответили неверно!");
    }
}

function compareStringsIgnoreCase(str1, str2) {
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();
    if (lowerStr1 === lowerStr2) {
        return true;
    } else {
        return false;
    }
}
