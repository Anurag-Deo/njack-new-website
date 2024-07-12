var rows = 3;
var columns = 4;
var emptyRow = rows - 1; // Starting with the last row
var emptyCol = columns - 1; // Starting with the last column
var turns = 0;

var imgOrder = ["piece_0_0.jpg", "piece_0_1.jpg", "piece_0_2.jpg", "piece_0_3.jpg",
    "piece_1_0.jpg", "piece_1_1.jpg", "piece_1_2.jpg", "piece_1_3.jpg",
    "piece_2_0.jpg", "piece_2_1.jpg", "piece_2_2.jpg"];

// Function to shuffle the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the image order array
shuffle(imgOrder);

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            if (r === emptyRow && c === emptyCol) {
                tile.classList.add("empty"); // Marking the empty tile
                tile.src = "";
            } else {
                tile.src = imgOrder.shift();
                tile.classList.add("puzzle-piece");
                tile.addEventListener("click", function() {
                    moveTile(r, c);
                });
            }
            document.getElementById("board").appendChild(tile);
        }
    }
}

function moveTile(row, col) {
    if (canMove(row, col)) {
        swapTiles(row, col);
        turns += 1;
        document.getElementById("turns").innerText = turns;
    }

    if (isSolved()) {
        alert("Congratulations! You solved the puzzle.");
    }
}

function canMove(row, col) {
    // Check if the clicked tile is adjacent to the empty tile
    return (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
        (col === emptyCol && Math.abs(row - emptyRow) === 1);
}

function swapTiles(row, col) {
    let clickedTile = document.getElementById(row + "-" + col);
    let emptyTile = document.querySelector(".empty");

    // Swap the src attributes
    let tempSrc = clickedTile.src;
    clickedTile.src = emptyTile.src;
    emptyTile.src = tempSrc;

    // Swap the empty class
    clickedTile.classList.add("empty");
    emptyTile.classList.remove("empty");

    // Update empty tile position
    emptyRow = row;
    emptyCol = col;
}

function isSolved() {
    let solved = true;
    let pieces = document.querySelectorAll(".puzzle-piece");

    for (let i = 0; i < pieces.length; i++) {
        let row = Math.floor(i / columns);
        let col = i % columns;
        let pieceId = `piece_${row}_${col}.jpg`;
        if (pieces[i].src.endsWith(pieceId)) {
            continue;
        } else {
            solved = false;
            break;
        }
    }

    return solved;
}
