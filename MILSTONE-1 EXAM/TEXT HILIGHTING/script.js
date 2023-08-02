const textArea = document.getElementById("textArea");

textArea.addEventListener('input', highlightWords);

function highlightWords() {
  const text = textArea.value;
  const words = text.split(" ");

  const highlightedText = words
    .map((word) => {
      if (word.length > 8) {
        return `<span class="highlighted">${word}</span>`;
      } else {
        return word;
      }
    })
    .join(" ");

  textArea.innerHTML = highlightedText;
}
