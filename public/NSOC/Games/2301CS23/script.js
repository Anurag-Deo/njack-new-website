
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let turnPlayer = "score1";
let cardFlip=new Audio("flip-card.mp3")
let bgMusic=new Audio("bgMusic.mp3")

function checkCompletion(){

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].querySelector('.card').style.transform == '') {
            return; // Exits the entire function
        }
    }
    // we reach here means the game is completed
    let score_1=parseInt(document.getElementById('score1').innerText);
    let score_2=parseInt(document.getElementById('score2').innerText);
    let s;
    if(score_1>score_2){
        document.querySelector('.winImg').src='Iwon.gif';
        s="Player 1 wins";
    } else if(score_1<score_2){
        document.querySelector('.winImg').src='Iwon.gif';
        s="Player 2 wins";
    } else{
        document.querySelector('.winImg').src='OhNo.gif';
        s="It's a tie";
    }
    // bgMusic.play();
    document.querySelector('.winImg').style.width='200px';
    document.querySelector('.win').innerText=s;
}
function changePlayer() {
    return turnPlayer == "score1" ? "score2" : "score1";
}
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    cardFlip.play()
    this.querySelector('.card').style.transform = 'rotateY(180deg)'; //flip the card

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    // second click
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.getElementsByClassName('imageClass')[0].src === secondCard.getElementsByClassName('imageClass')[0].src;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {

    (document.getElementById(turnPlayer).innerText) = parseInt((document.getElementById(turnPlayer).innerText)) + 2;
    firstCard.removeEventListener('click', flipCard);   //freeze the cards
    secondCard.removeEventListener('click', flipCard);
    checkCompletion();
    resetBoard();
}

function unflipCards() {

    lockBoard = true;
    turnPlayer = changePlayer();
    setTimeout(() => {
        firstCard.querySelector('.card').style.transform = '';
        secondCard.querySelector('.card').style.transform = '';

        resetBoard();
    }, 1500);
}

function resetBoard() {

    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

let ar2=[
    'ACElogo.webp',
    'APCIITPatnalogo.webp',
    'ChESSxLogo.webp',
    'FinanceClubIITPLogo.webp',
    'Mateslogo.webp',
    'MoodBoard.webp',
    'NJACKLogo.webp',
    'Phoenix.png',
    'RnALogo.webp',
    'SCMELogo.webp',
    'sparkonicsLogo.webp',
    'TinkersLogo.webp'
  ]
let cont =document.querySelector('.container');
for (let ind = 0; ind < 2*ar2.length; ind++) {
    cont.innerHTML+=`<div class="cardContainer">
                <div class="card">
                    <div class="front"></div>
                    <div class="back">
                        <div class="cardImg">
                            <img class="imageClass" src="" alt="">
                        </div>
                    </div>
                </div>
            </div>`;
    
}
//This piece of code randomizes our image on all of the cards
function shuffle(){
    let cardImg = (document.querySelector('.container').getElementsByClassName('imageClass'));
    let vis = new Array(cardImg.length).fill(0);
    for (let ind = 0; ind < ar2.length; ind++) {
        const ele = ar2[ind];
        for(let i=0;i<2;i++){
            while (true) {
                let rand_ind = Math.floor(Math.random() * cardImg.length);
                if (vis[rand_ind] == 0) {
                    cardImg[rand_ind].src ="assets/"+ele;
                    vis[rand_ind] = 1;
                    break;
                }
            }
        }
    }
}

const cards = document.querySelectorAll('.cardContainer');
shuffle();

//reset button
btn.addEventListener('click',()=>{
    cards.forEach(card=>{
        card.querySelector('.card').style.transform = '';
        card.addEventListener('click', flipCard);
    })
    document.getElementById('score1').innerText='0';
    document.getElementById('score2').innerText='0';
    resetBoard();
    lockBoard=true;
    setTimeout(()=>{
        shuffle();
        lockBoard=false;
    },1000)
    document.querySelector('.win').innerText="";
    document.querySelector('.winImg').style.width='0px';
})

//bg Music
document.getElementById('playIcon').addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

//For each card there is a flipCard handler
cards.forEach(card => card.addEventListener('click', flipCard));
