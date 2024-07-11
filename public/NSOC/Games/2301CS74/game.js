const images = [
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'logo.jpeg',
    'patna2.jpeg',
    'img1.webp',
    'patna3.avif'

];

let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;
let timeLeft = 60;
let timer;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createBoard() {
    const gameBoard = document.getElementById('game-board');
    const shuffledImages = shuffle([...images, ...images]);
    shuffledImages.forEach(src => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<img src="${src}" alt="Image">`;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
    });
    startTimer();
}

function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.querySelector('img').src === secondCard.querySelector('img').src;

    if (isMatch) {
        updateScore();
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        displayTimeLeft();
        if (timeLeft == 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function displayTimeLeft() {
    const sec = timeLeft;
    if(sec<=9){
        document.getElementById('timer').
        textContent=`Time left : 00:0${sec}`;  
    }else{
    document.getElementById('timer').
    textContent=`Time left : 00:${sec}`;
    }
}

function updateScore() {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
}

function endGame() {
    alert(`Game Over! Your score is ${score}`);
}

createBoard();
