//task 1
const array = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === 10) {
        break; 
    }
    console.log(element);
}

//task 2
const array2 = [1, 5, 4, 10, 0, 3];
const number = 4;
const indexOf = array2.indexOf(number);
if (indexOf !== -1) {
    console.log(`Число ${number} находится в массиве на позиции  ${indexOf}`);
} else {
    console.log(`Число ${number} не найдено в массиве`);
}

//task 3
const array3 = [1, 3, 5, 10, 20];
const result = array3.join(' ');
console.log(result);

//task 4
const numRows = 3; 
const numCols = 3; 
const value = 1; 
const multiArray = [];
for (let i = 0; i < numRows; i++) {
    const row = [];   
    for (let j = 0; j < numCols; j++) {
        row.push(value); 
    }  
    multiArray.push(row);
}
console.log(multiArray);

//task 5
const array4 = [1, 1, 1];
const valuesToAdd = [2, 2, 2];
array4.push(...valuesToAdd);
console.log(array4); 

//task 6
const array5 = [9, 8, 7, 'a', 6, 5];
const filteredArray = array5.filter(item => typeof item === 'number');
filteredArray.sort((a, b) => a - b);
console.log(filteredArray);

//task 7
const numbers = [9, 8, 7, 6, 5];
const userGuess = prompt('Попробуйте угадать число:');
const guessedNumber = parseInt(userGuess);
if (numbers.includes(guessedNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//task 8
const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr); 

//task 9
const twoDimensionalArray = [[1, 2, 3], [4, 5, 6]];
const oneDimensionalArray = twoDimensionalArray.flat();
console.log(oneDimensionalArray);

//task 10
const numbers2 = [3, 6, 2, 8, 1, 9, 4, 7, 5, 10];
for (let i = 0; i < numbers.length - 1; i++) {
    const currentElement = numbers2[i];
    const nextElement = numbers2[i + 1];
    const sum = currentElement + nextElement;
    console.log(`Сумма ${currentElement} и ${nextElement} равна ${sum}`);
}

//task11
function squareArray(arr) {
    const squaredArray = [];    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const squaredElement = element * element;
        squaredArray.push(squaredElement);
    }  
    return squaredArray;
}  
const inputArray = [1, 2, 3, 4, 5];
const resultArray = squareArray(inputArray);  
console.log(resultArray);

//task 12
function wordLengths(arr2) {
    const lengthsArray2 = [];    
    for (let i = 0; i < arr2.length; i++) {
        const word = arr2[i];
        const length = word.length;
        lengthsArray2.push(length);
    }
    return lengthsArray2;
}
const inputArray2 = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const resultArray2 = wordLengths(inputArray2);
console.log(resultArray2); 

//task 13
function filterNegativeNumbers(arr) {
    const negativeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (number < 0) {
            negativeNumbers.push(number);
        }
    }
    return negativeNumbers;
}
const inputArray3 = [-25, 25, 0, -1000, -2];
const resultArray3 = filterNegativeNumbers(inputArray3);
console.log(resultArray3); 

