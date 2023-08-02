const inputField = document.getElementById("inputField");
const removeDuplicatesBtn = document.getElementById("removeDuplicatesBtn");
const outputDiv = document.getElementById("output");

removeDuplicatesBtn.addEventListener("click", removeDuplicates);

function removeDuplicates() {
  const inputText = inputField.value;
  const items = inputText.split(",").map(item => item.trim());
  const uniqueItems = [...new Set(items)];

  const outputText = uniqueItems.join(", ");

  outputDiv.textContent = outputText;
}
