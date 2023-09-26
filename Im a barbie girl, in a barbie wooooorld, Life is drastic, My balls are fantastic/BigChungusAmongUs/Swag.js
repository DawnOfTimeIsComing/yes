// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// Function to generate and display prime numbers
function generatePrimes() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results

    for (let i = 0; i <= 1000; i++) {
        if (isPrime(i)) {
            const primeSpan = document.createElement("span");
            primeSpan.textContent = i + ", ";
            resultDiv.appendChild(primeSpan);
        }
    }
}

// Attach the generatePrimes function to the button click event
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generatePrimes);
