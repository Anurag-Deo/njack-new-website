//board 
let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

//doodler
let doodlerheight = 42;
let doodlerwidth = 42;
let doodlerX = boardWidth/2 - doodlerwidth/2;
let doodlerY = boardHeight*7/8 - doodlerheight;
let doodlerLeftImg;
let doodlerRightImg;
let doodler ={
    img :null,
    x : doodlerX,
    y : doodlerY,
    width : doodlerwidth,
    height : doodlerheight
}

//physics
let velocityX=0;
let speed = 4;
let velocityY = 0;
let initialVelocityY = -8;
let gravity = 0.4;

//platforms
let platformArray = [];
let platformWidth = 60;
let platformHeight = 18;
let platformImg;

let score = 0;
let maxScore = 0;
let gameOver = false;

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight ;
    board.width = boardWidth ;
    context = board.getContext("2d");

    //load images
    doodlerRightImg = new Image();
    doodlerRightImg.src = "./doodler-right.png";

    doodlerLeftImg = new Image();
    doodlerLeftImg.src = "./doodler-left.png";

    doodler.img = doodlerRightImg;
    doodlerRightImg.onload = function() {
        context.drawImage(doodler.img,doodler.x,doodler.y,doodler.width,doodler.height);
    }

    platformImg = new Image();
    platformImg.src = "./platform.png";

    velocityY = initialVelocityY;
    placePlatforms();

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveDoodler);
}

function update() {
    requestAnimationFrame(update);
    context.clearRect(0,0,board.width,board.height);

    doodler.x += velocityX;
    if(doodler.x + doodler.width<0)
        doodler.x=board.width;
    else if(doodler.x > board.width)
        doodler.x=-doodler.width;

    velocityY += gravity;
    doodler.y += velocityY;
    if(doodler.y > board.height){
        gameOver = true;
    }
    context.drawImage(doodler.img,doodler.x,doodler.y,doodler.width,doodler.height);

    //platforms
    for(let i = 0; i < platformArray.length ; i++){
        let platform = platformArray[i];
        if(doodler.y<boardHeight*3/4 && velocityY<0){
            platform.y -= velocityY;
        }
        if(detectCollision(doodler , platform) && velocityY >= 0){
            velocityY = initialVelocityY;
        }
        context.drawImage(platform.img,platform.x,platform.y,platform.width,platform.height);
    }

    // clear platforms and add new platform
    while (platformArray.length > 0 && platformArray[0].y >= boardHeight) {
        platformArray.shift(); //removes first element from the array
        newPlatform(); //replace with new platform on top
    }

    //update score
    updateScore();
    context.fillStyle = "black";
    context.font = "16px roboto";
    context.fillText(score,5,20);
    if(gameOver){
        context.fillText("Game Over: Press 'Space' to Re:start",boardWidth/7, boardHeight*7/8);
    }
}

function moveDoodler(e){
    if(e.key == "ArrowRight" || e.key == "KeyD"){
        velocityX = speed;
        doodler.img = doodlerRightImg;
    }
    else if(e.key == "ArrowLeft" || e.key == "KeyA"){
        velocityX = -speed; 
        doodler.img = doodlerLeftImg;
    }
    else if(e.key == "Space" && gameOver){
        //reset
        doodler = {
            img : doodlerRightImg,
            x : doodlerX,
            y : doodlerY,
            width : doodlerWidth,
            height : doodlerHeight
        }

        velocityX = 0;
        velocityY = initialVelocityY;
        score = 0;
        maxScore = 0;
        gameOver = false;
        placePlatforms();
    }
}

function placePlatforms(){
    platformArray = [];

    let platform = {
        img : platformImg,
        x : boardWidth/2,
        y : boardHeight - 50,
        width : platformWidth,
        height : platformHeight
    }
    platformArray.push(platform);

    for(let i=0 ; i<6 ;i++){
        let randomX = Math.floor(Math.random() * boardWidth*3/4);
        let platform ={
            img : platformImg,
            x : randomX,
            y : boardHeight - 75*i -150,
            width : platformWidth,
            height : platformHeight
        }
        platformArray.push(platform);
    }
}

function newPlatform(){
    let randomX = Math.floor(Math.random() * boardWidth*3/4);
    let platform ={
        img : platformImg,
        x : randomX,
        y : -platformHeight,
        width : platformWidth,
        height : platformHeight
    }
    platformArray.push(platform);
}

function detectCollision(a , b){
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}

function updateScore() {
    let points = Math.floor(50*Math.random()); //(0-1) *50 --> (0-50)
    if (velocityY < 0) { //negative going up
        maxScore += points;
        if (score < maxScore) {
            score = maxScore;
        }
    }
    else if (velocityY >= 0) {
        maxScore -= points;
    }
}