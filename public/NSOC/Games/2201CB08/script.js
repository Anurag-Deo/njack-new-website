let row = 4; // Number of rows
let col = 4; // Number of columns

let currTile;
let otherTile;

let turns = 0;
let timer;
let startTime;
let elapsedTime = 0;

let cont = document.getElementById("container");
let header = document.getElementById("header");
let ins=document.getElementById("ins")
cont.style.display = "none";

window.onload = function () {
    document.getElementById("startButton").addEventListener("click", startGame);
}

function startGame() {
    cont.style.display = "block";
    ins.style.display="none"
    initializeBoard();
    startTimer();
    document.getElementById("startButton").disabled = true; // Disable start button after starting the game
    header.style.display = "none";
}

function initializeBoard() {
    // Clear the board
    document.getElementById("board").innerHTML = '';
    document.getElementById("pieces").innerHTML = '';
    document.getElementById("message").innerText = '';
    turns = 0;
    document.getElementById("turns").innerText = turns;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let tile = document.createElement("img");
            tile.src = "White.png";

            // DRAG FUNCTIONALITY
            addDragAndTouchListeners(tile);

            document.getElementById("board").append(tile);
        }
    }

    // Choose a random image folder
    let folderNum = Math.floor(Math.random() * 7) + 1;
    let folderName = `image${folderNum}`;

    //pieces
    let pieces = [];
    for (let i = 1; i <= row * col; i++) {
        pieces.push(`${folderName}/${i}.jpg`); // put image set pieces into the array
    }

    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let temp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = temp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = pieces[i];

        // DRAG FUNCTIONALITY
        addDragAndTouchListeners(tile);

        document.getElementById("pieces").append(tile);
    }
}

function addDragAndTouchListeners(tile) {
    // Mouse events
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);

    // Touch events
    tile.addEventListener("touchstart", touchStart);
    tile.addEventListener("touchmove", touchMove);
    tile.addEventListener("touchend", touchEnd);
}

// DRAG TILES
function dragStart(e) {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave(e) { }

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (currTile.src.includes("White")) {
        return;
    }
    swapTiles();
    turns += 1;
    document.getElementById("turns").innerText = turns;

    if (checkIfSolved()) {
        document.getElementById("message").innerText = "Congratulations! You've solved the puzzle!";
        stopTimer();
        resetTimer();
        header.style.display = "block"; // Show the header again
        document.getElementById("startButton").disabled = false; // Enable start button again
    }
}

// TOUCH TILES
function touchStart(e) {
    e.preventDefault();
    currTile = e.target;
}

function touchMove(e) {
    e.preventDefault();
    let touch = e.touches[0];
    let targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    if (targetElement && targetElement.tagName === "IMG") {
        otherTile = targetElement;
    }
}

function touchEnd(e) {
    if (currTile && otherTile && currTile !== otherTile) {
        swapTiles();
        turns += 1;
        document.getElementById("turns").innerText = turns;

        if (checkIfSolved()) {
            document.getElementById("message").innerText = "Congratulations! You've solved the puzzle!";
            stopTimer();
            resetTimer();
            header.style.display = "block"; // Show the header again
            document.getElementById("startButton").disabled = false; // Enable start button again
        }
    }
}

function swapTiles() {
    if (currTile.src.includes("White")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;
}

// Check if the puzzle is solved
function checkIfSolved() {
    let tiles = document.getElementById("board").getElementsByTagName("img");
    for (let i = 0; i < tiles.length; i++) {
        let tileNum = tiles[i].src.match(/\/(\d+)\.jpg$/);
        if (!tileNum || parseInt(tileNum[1]) !== i + 1) {
            return false;
        }
    }
    return true;
}

// TIMER FUNCTIONS
function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / 60000);
    document.getElementById("timer").innerText = `${pad(minutes)}:${pad(seconds)}`;
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    document.getElementById("timer").innerText = "00:00";
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
