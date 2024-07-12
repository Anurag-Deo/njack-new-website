let nilgaiInterval;
let studentInterval;
let backgroundMusic = document.getElementById("background-music");

window.onload = function() {
    document.getElementById("play-button").addEventListener("click", startGame);
    document.getElementById("instructions-button").addEventListener("click", showInstructions);
    document.getElementById("play-again-button").addEventListener("click", restartGame);
    document.getElementById("back-to-loading-button").addEventListener("click", backToLoadingScreen);
    document.getElementById("back-to-loading-from-instructions-button").addEventListener("click", backToLoadingScreenFromInstructions);
}

function startGame() {
    clearAllIntervals(); // Clear any existing intervals before starting a new game
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    setGame(); // Set up the game board and start intervals
    playBackgroundMusic(); // Start playing background music
}

function showInstructions() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("instructions-screen").style.display = "flex";
}

function restartGame() {
    clearAllIntervals(); // Clear any existing intervals before restarting the game
    document.getElementById("game-over-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    resetGame(); // Reset the game state and start a new game
    playBackgroundMusic(); // Start playing background music
}

function backToLoadingScreen() {
    clearAllIntervals(); // Clear any existing intervals before going back to the loading screen
    document.getElementById("game-over-screen").style.display = "none";
    document.getElementById("loading-screen").style.display = "flex";
    resetGame(); // Reset the game state
    stopBackgroundMusic(); // Stop background music
}

function backToLoadingScreenFromInstructions() {
    document.getElementById("instructions-screen").style.display = "none";
    document.getElementById("loading-screen").style.display = "flex";
    stopBackgroundMusic(); // Stop background music
}

function endGame() {
    setTimeout(function() {
        clearAllIntervals(); // Clear intervals when the game ends
        document.getElementById("game-screen").style.display = "none";
        document.getElementById("game-over-screen").style.display = "flex";
        document.getElementById("final-score").innerText = "Your Score: " + score;
        stopBackgroundMusic(); // Stop background music
    }, 650); // 650ms delay before showing the game-over screen
}

let currNilgaiTile;
let currStudentTile;
let score = 0; // Initialize score to 0
let gameOver = false; // Initialize gameOver state to false

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile); // Add click event listener to each tile
        document.getElementById("board").appendChild(tile);
    }
    nilgaiInterval = setInterval(setNilgai, 750); // Set interval for nilgai
    studentInterval = setInterval(setStudent, 1500); // Set interval for students
}

function resetGame() {
    score = 0; // Reset score to 0
    gameOver = false; // Reset gameOver state to false
    currNilgaiTile = null; // Reset current nilgai tile
    currStudentTile = null; // Reset current student tile
    document.getElementById("score").innerText = score.toString(); // Update score display
    let board = document.getElementById("board");
    while (board.firstChild) {
        board.removeChild(board.firstChild); // Remove all child elements from the board
    }
    setGame(); // Set up a new game board and intervals
}

// Get a random tile number between 0 and 8
function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

// Set a nilgai image on a random tile
function setNilgai() {
    if (gameOver) {
        return; // Do nothing if the game is over
    }
    if (currNilgaiTile) {
        currNilgaiTile.innerHTML = ""; // Clear the current nilgai tile
    }
    let nilgai = document.createElement("img");
    nilgai.src = "./images/nilgai-removebg-preview.png";
    let num = getRandomTile();
    if (currStudentTile && currStudentTile.id == num) {
        return; // Do nothing if the random tile has a student
    }
    currNilgaiTile = document.getElementById(num);
    currNilgaiTile.appendChild(nilgai); // Set the nilgai on the random tile
}

// Set a student image on a random tile
function setStudent() {
    if (gameOver) {
        return; // Do nothing if the game is over
    }
    if (currStudentTile) {
        currStudentTile.innerHTML = ""; // Clear the current student tile
    }
    let student = document.createElement("img");
    student.src = "./images/boy2.png";
    let num = getRandomTile();
    if (currNilgaiTile && currNilgaiTile.id == num) {
        return; // Do nothing if the random tile has a nilgai
    }
    currStudentTile = document.getElementById(num);
    currStudentTile.appendChild(student); // Set the student on the random tile
}

// Handle tile selection by the player
function selectTile() {
    if (gameOver) {
        return; // Do nothing if the game is over
    }
    if (this == currNilgaiTile) {
        score += 10; // Increment score by 10 if nilgai is hit
        document.getElementById("score").innerText = score.toString(); // Update score display
        vibrate(100); // Vibrate for 100ms
    } else if (this == currStudentTile) {
        document.getElementById("score").innerText = " ❌ GAME OVER: " + score.toString(); // Show game over message
        gameOver = true; // Set gameOver state to true
        endGame(); // Call endGame function
    }
}

// Clear all intervals
function clearAllIntervals() {
    clearInterval(nilgaiInterval);
    clearInterval(studentInterval);
}


