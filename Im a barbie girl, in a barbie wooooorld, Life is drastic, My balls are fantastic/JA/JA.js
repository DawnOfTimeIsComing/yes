document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const inputNumber = parseInt(document.getElementById("inputNumber").value, 10);
        const binaryValue = decimalToBinary(inputNumber);
        resultElement.textContent = binaryValue;
    });

    function decimalToBinary(decimalNumber) {
        return decimalNumber.toString(2);
    }
});
