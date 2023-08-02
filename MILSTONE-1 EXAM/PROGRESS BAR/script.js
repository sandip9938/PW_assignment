const progressBar = document.getElementById("myProgressBar");
let progress = 0;

function updateProgressBar() {
  progressBar.style.width = `${progress}%`;
}

function increaseProgress() {
  if (progress < 100) {
    progress += 10;
    updateProgressBar();
  }
}

function decreaseProgress() {
  if (progress > 0) {
    progress -= 10;
    updateProgressBar();
  }
}

document.addEventListener("DOMContentLoaded", updateProgressBar);
