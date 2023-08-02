document.getElementById('generateBtn').addEventListener('click', function () {
    const randomNumber = getRandomNumber(1, 100); // You can adjust the range as per your requirements
    displayResult(randomNumber);
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function displayResult(number) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Random Number: ${number}`;
}
