document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const dotLine = document.getElementById("dotLine");

    generateButton.addEventListener("click", function () {
        const lineLength = parseInt(document.getElementById("lineLength").value, 10);
        generateDotLine(dotLine, lineLength);
    });
});

function generateDotLine(container, length) {
    container.innerHTML = ""; // Clear previous dot line

    for (let i = 0; i < length; i++) {
        const dot = document.createTextNode(".");
        container.appendChild(dot);
    }
}
