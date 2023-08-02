const image = document.getElementById('image');
let posX = 0;
let posY = 0;
const stepSize = 10;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            posY -= stepSize;
            break;
        case 'ArrowDown':
            posY += stepSize;
            break;
        case 'ArrowLeft':
            posX -= stepSize;
            break;
        case 'ArrowRight':
            posX += stepSize;
            break;
    }

    image.style.transform = `translate(${posX}px, ${posY}px)`;
});
