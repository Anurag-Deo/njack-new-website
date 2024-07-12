
let btn1 = document.querySelector("#button");
let res = document.querySelector("#result");

btn1.addEventListener("click", () => {
    // Generate a random room number
    let randomNumber = generateRandomNonRepeating(numbers);
    
    // Display the room number with background color change
    res.style.backgroundColor = "aquamarine";
    res.innerHTML = `You have been allotted Room No: ${randomNumber}`;

    // Countdown sequence
    let count = 5;
    let countdownInterval = setInterval(() => {
        if (count >= 1) {
            let countdownNumber = document.createElement('span');
            countdownNumber.textContent = `   REDIRECTING in ${count}.... `;
            res.appendChild(countdownNumber);
            setTimeout(() => {
                countdownNumber.remove();
            }, 1000); // Remove the countdown span after 1 second
            count--;
        } else {
            clearInterval(countdownInterval); // Stop the countdown
            res.innerHTML = ''; // Clear the result after countdown completes

            // Redirect after countdown completes
            setTimeout(() => {
                window.location.href = "./index2.html";
            }, 1000); // Redirect after 1 second
        }
    }, 1000); // Run the countdown every 1 second
});

// Function to generate a random non-repeating number
function generateRandomNonRepeating(numbers) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
}

function generateRandomNonRepeating(numbers) {
    // Count occurrences of each number
    let countMap = new Map();
    for (let num of numbers) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }

    // Filter numbers that occur less than or equal to twice
    let eligibleNumbers = Array.from(countMap.keys()).filter(num => countMap.get(num) <= 2);

    // Select a random number from eligible numbers
    if (eligibleNumbers.length === 0) {
        return null; // Handle case where no eligible numbers are found
    }
    let randomIndex = Math.floor(Math.random() * eligibleNumbers.length);
    return eligibleNumbers[randomIndex];
}

// Example usage:
let numbers = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,112, 113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,
    201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211,212, 213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,
    301, 302, 303, 304, 305, 306,307, 308, 309, 310, 311,312, 313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,
    401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411,412, 413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,
    501, 502, 503, 504,505, 506,507, 508, 509, 510, 511,512, 513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,
    601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611,612, 613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,
    701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711,712, 713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12, 13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,
];
let randomNumber = generateRandomNonRepeating(numbers);
console.log(`Random number that doesn't repeat more than twice: ${randomNumber}`);
