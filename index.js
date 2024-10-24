//Exercise 1

function guessNumberGame() {
    const correctNumber = Math.floor(Math.random() * 10) + 1;
    let guess = null;

    while (guess !== correctNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 10!"))
        if (guess < correctNumber) {
            console.log("A little higher");        
        }
        else {
            console.log("A little lower");
            
        }
    }
    console.log("Congratulations, you win!");
    
}

guessNumberGame();

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