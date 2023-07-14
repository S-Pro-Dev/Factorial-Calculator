function find() {
    const num = parseInt(document.getElementById("input").value);
    const resElement = document.getElementById("res");
    let result;

    if (num === 0) {
        result = `The factorial of ${num} is 1`;
    } else if (num < 0) {
        result = `The factorial of ${num} negative numbers is not possible`;
    } else {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        result = `The factorial of ${num} is ${fact}`;
    }

    const resultElement = document.createElement("p");
    resultElement.textContent = result;
    resultElement.classList.add("res");
    resElement.appendChild(resultElement);
}
