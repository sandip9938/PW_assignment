let delayInSeconds = 3;
let remainingTime = delayInSeconds;

function countNumber() {
    if (remainingTime > 0) {
        console.log(`Generating random number in ${remainingTime} seconds...`);
        remainingTime--;
        setTimeout(countNumber, 1000);
    } else {
        let randomNumber = Math.floor(Math.random() * 100);
        console.log(`Generated random number: ${randomNumber}`);
    }
}

countNumber();
