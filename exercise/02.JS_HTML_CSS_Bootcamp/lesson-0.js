const htmlBody = document.querySelector('body');



const randomClickFunction = function () {
    const colors = ["#002942", "#0CA7DB", "red", "green", "blue", "yellow", "purple"];

    const randomIndex = Math.floor(Math.random() * colors.length);

    const randomColor = colors[randomIndex];

    htmlBody.style.background = randomColor;
    console.log('The user clicked and set the color to' + randomColor);
}

htmlBody.onclick = randomClickFunction