//Exercise 2

function generateRandomArray(length) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1);  
    }
    return randomArray;
}
console.log(generateRandomArray(30));