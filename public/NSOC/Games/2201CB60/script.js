const bird = document.getElementById('bird');
const gameContainer = document.querySelector('.game-container');
let scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');
const book = document.getElementById('book');
let birdTop = 220;
let birdLeft = 80;
let gravity = 2;
let isGameOver = false;
let gameSpeed = 4;
let score = 0;
let animationId;
function jump() {
    if (birdTop > 10) {
        birdTop -= 50;
        bird.style.top = birdTop + 'px';
    }
}
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space' && !isGameOver) {
        jump();
    }
});

function gameLoop() {
    if (!isGameOver) {
        birdTop += gravity;
        bird.style.top = birdTop + 'px';
        let pipes = document.querySelectorAll('.pipe');
        if (pipes.length === 0 || parseInt(pipes[pipes.length - 1].style.left) < 200) {
            createPipe();
        }
        pipes.forEach(function (pipe) {
            let pipeLeft = parseInt(pipe.style.left);
            pipeLeft -= gameSpeed;
            pipe.style.left = pipeLeft + 'px';
            if (checkCollision(bird, pipe)) {
                gameOver();
            }
            if (pipeLeft + gameSpeed === birdLeft) {
                score++;
                scoreDisplay.textContent = score;
            }
            if (pipeLeft < -120) {
                pipe.remove();
            }
        });
        if (birdTop > gameContainer.clientHeight - bird.clientHeight || birdTop < 0) {
            gameOver();
        }
        if (score >= 100) {
            gameWon();
        } else {
            animationId = requestAnimationFrame(gameLoop);
        }
    }
}
function createPipe() {
    let pipeHeight = Math.floor(Math.random() * 100) + 50;
    let pipeBottomHeight = gameContainer.clientHeight - pipeHeight - 150;
    let pipeTop = document.createElement('div');
    pipeTop.className = 'pipe';
    pipeTop.style.height = pipeHeight + 'px';
    pipeTop.style.top = '0';
    pipeTop.style.left = '400px';
    gameContainer.appendChild(pipeTop);
    let pipeBottom = document.createElement('div');
    pipeBottom.className = 'pipe';
    pipeBottom.style.height = pipeBottomHeight + 'px';
    pipeBottom.style.bottom = '0';
    pipeBottom.style.left = '400px';
    gameContainer.appendChild(pipeBottom);
}
function checkCollision(bird, pipe) {
    let birdRect = bird.getBoundingClientRect();
    let pipeRect = pipe.getBoundingClientRect();

    return !(
        birdRect.top > pipeRect.bottom ||
        birdRect.right < pipeRect.left ||
        birdRect.bottom < pipeRect.top ||
        birdRect.left > pipeRect.right
    );
}
function gameOver() {
    isGameOver = true;
    cancelAnimationFrame(animationId);
    let gameOverText = document.createElement('div');
    gameOverText.className = 'game-over';
    gameOverText.innerHTML = 'Game Over!<br>Refresh to replay';
    gameContainer.appendChild(gameOverText);
}
function gameWon() {
    isGameOver = true;
    cancelAnimationFrame(animationId);
    let winText = document.createElement('div');
    winText.className = 'game-over';
    winText.textContent = 'You won! A grand library awaits you! :)';
    gameContainer.appendChild(winText);
}
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    bird.style.display = 'block';
    isGameOver = false;
    score = 0;
    scoreDisplay.textContent = score;
    gameLoop();
});
book.addEventListener('click', () => {
    book.classList.toggle('open');
});
