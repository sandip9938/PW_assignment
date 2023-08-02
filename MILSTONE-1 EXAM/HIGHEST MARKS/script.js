let highestMarks = 0;
let highestMarksStudent = '';

document.getElementById('marksForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = document.getElementById('name').value;
    const marksInput = parseFloat(document.getElementById('marks').value);

    if (marksInput > highestMarks) {
        highestMarks = marksInput;
        highestMarksStudent = nameInput;
    }

    updateResult();
    document.getElementById('name').value = '';
    document.getElementById('marks').value = '';
});

function updateResult() {
    const resultElement = document.getElementById('result');
    if (highestMarksStudent !== '') {
        resultElement.textContent = `Highest marks: ${highestMarksStudent} (${highestMarks})`;
    } else {
        resultElement.textContent = 'No data available.';
    }
}
