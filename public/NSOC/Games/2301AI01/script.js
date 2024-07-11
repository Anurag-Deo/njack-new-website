const cards = document.querySelectorAll(".card");
var element2;
var elements;
let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;
let count = 0;
let model=0;
// let clicked=8;
function restart()
{
    
       
            count = 0;
            elements = document.querySelector('.wrapper');
            elements.style.display="flex";
            element2=document.querySelector('.congrats');
            element2.style.display="none";

            return shuffleCard();
}

function mode() {
    if(model==0)
    {
       
    document.body.style.background = "white";
    document.body.style.color="black";
    model=1;
    }
    else{
        document.body.style.background = "black";
        document.body.style.color="white";

    model=0;
    }


}
function flipCard(e) {
    let clickedCard = e.target;
    if (clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector('img').src,
            cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);
    }

}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matchedCard++;
        count++;
        // document.getElementById("inpt").value = count;   
        if (matchedCard == 8) {
            
            elements = document.querySelector('.wrapper');
            element2=document.querySelector('.congrats');
             elements.style.display="none";
             element2.style.display="flex";
             console.log("sahvdg");
             matchedCard=0;
                
           
        }


        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        document.getElementById("inpt").value = count;
        return disableDeck = false;
    } else {
        count++;
        document.getElementById("inpt").value = count;
    }
    // document.getElementById("inpt").value = count;
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}
function shuffleCard() {
    matchedCard = 0;
    count = 0;
    document.getElementById("inpt").value = count;
    cardOne = cardTwo = "";
    disableDeck = false;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `img-${arr[index]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

cards.forEach(card => {
    // card.classList.add("flip");
    card.addEventListener("click", flipCard);
});
// var whole_part=
