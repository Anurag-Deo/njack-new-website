const words = ["ENGINEERING", "CAMPUS", "STUDENT", "PROFESSOR", "LIBRARY", "LABORATORY", "HOSTEL","GHEXT","NESCAFE","BANJARA","ARYABHATTA","CVRAMAN","KALAM","ASIMA","RISHI","SANTOSH","BIOLOGY"];
let selectedWord = '';
let guessedLetters = [];
let wrongGuesses = 0;

function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
}

function displayWord() {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';
    selectedWord.split('').forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.textContent = guessedLetters.includes(letter) ? letter : '_';
        wordContainer.appendChild(letterElement);
    });
}

function displayLetters() {
    const lettersContainer = document.getElementById('letters-container');
    lettersContainer.innerHTML = '';
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
        const letterElement = document.createElement('div');
        letterElement.textContent = letter;
        letterElement.classList.add('letter');
        if (guessedLetters.includes(letter) || wrongGuesses >= 6) {
            letterElement.classList.add('disabled');
        } else {
            letterElement.addEventListener('click', () => handleLetterClick(letter));
        }
        lettersContainer.appendChild(letterElement);
    });
}

function handleLetterClick(letter) {
    guessedLetters.push(letter);
    if (selectedWord.includes(letter)) {
        displayWord();
        checkWin();
    } else {
        wrongGuesses++;
        checkLoss();
    }
    displayLetters();
}

function checkWin() {
    if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
        document.getElementById('message-container').textContent = 'You won!';
        disableAllLetters();
    }
}

function checkLoss() {
    if (wrongGuesses >= 6) {
        document.getElementById('message-container').textContent = `You lost! The word was: ${selectedWord}`;
        disableAllLetters();
    }
}

function disableAllLetters() {
    const letterElements = document.querySelectorAll('.letter');
    letterElements.forEach(letterElement => letterElement.classList.add('disabled'));
}

function resetGame() {
    guessedLetters = [];
    wrongGuesses = 0;
    document.getElementById('message-container').textContent = '';
    selectRandomWord();
    displayWord();
    displayLetters();
}

document.getElementById('reset-button').addEventListener('click', resetGame);

resetGame();
