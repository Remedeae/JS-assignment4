//Exercise 2

function generateRandomArray(length) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1);  
    }
    return randomArray;
}
console.log(generateRandomArray(30));

//Exercise 3

function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(sumEvenNumbers(generateRandomArray(30)))