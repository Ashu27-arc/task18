// Q1 - Use the map function to square each element of the array.
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log("Q1 - Squares:", squares); // [1, 4, 9, 16, 25]

// Q2 - Use a function to grade a student's score using ternary operators.
function getGrade(score) {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}
console.log("Q2 - Grade:", getGrade(85)); // B

// Q3 - Car object and functions to modify and extract properties.
const car = {
    company: "Toyota",
    model: "Corolla",
    year: 2020,
};

function updateCarYear(newYear) {
    car.year = newYear;
}
updateCarYear(2023); // Change year to 2023

const { model, year } = car; // Object destructuring
console.log("Q3 - Model:", model, "Year:", year); // Corolla, 2023

// Q4 - Filter array to contain only prime numbers.
const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primes = numbers.filter(isPrime);
console.log("Q4 - Primes:", primes); // [2, 3, 5]

// Q5 - Use cases for map, filter, and reduce.
// Map: Transform array elements (e.g., converting numbers to strings).
// Filter: Select specific elements based on a condition (e.g., only even numbers).
// Reduce: Aggregate array data into a single value (e.g., summing elements).

// Example:
const nums = [1, 2, 3, 4, 5];
console.log("Q5 - Map (to strings):", nums.map(String)); // ["1", "2", "3", "4", "5"]
console.log("Q5 - Filter (even numbers):", nums.filter(num => num % 2 === 0)); // [2, 4]
console.log("Q5 - Reduce (sum):", nums.reduce((sum, num) => sum + num, 0)); // 15

// Q6 - Asynchronous function to fetch API data.
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log("Q6 - API Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

// Q7 - Nested object and optional chaining.
const person = {
    name: "John Doe",
    address: {
        city: "New York",
        zip: "10001",
    },
    // contact: { phone: "123-456-7890" }
};

console.log("Q7 - Phone Number:", person.contact?.phone || "Phone number not available");
