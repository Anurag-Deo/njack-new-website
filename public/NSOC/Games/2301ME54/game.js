const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const timeDisplay = document.getElementById('time');
const itemsCollectedDisplay = document.getElementById('itemsCollected');

const tileSize = 48;
const playerHeight = 68;
const playerWidth = 48;
const gameTime = 11;
const mapHeight = 480;
const mapWidth = 498;
let timeLeft = gameTime;
let itemsCollected = 0;

const player = {
    x: 100,
    y: 100,
    speed: 2,
    width: playerWidth,
    height: playerHeight,
    color: 'rgba(0,0,255,0)',
    moving : false
};

let frames = {

    val: 0,
    elapsed: 0,
    max:3




}
const items = [
    { x: 52, y: 358, collected: false },
    { x: 407, y: 145, collected: false },
    { x: 207, y: 200, collected: false },
    { x: 395, y: 292, collected: false },
    { x: 230, y: 421, collected: false }
];

const obstacles = [
    { x: 0, y: 28, width: canvas.width, height: 18 },
    { x: 0, y: 0, width: 21, height: canvas.height },
    { x: canvas.width - 21, y: 0, width: 21, height: canvas.height },
    { x: 0, y: canvas.height - 18, width: canvas.width, height: 18 },
    { x: 57, y: 61, width: 75, height: 18 },
    { x: 99, y: 192, width: 45, height: 62 },
    { x: 339, y: 81, width: 45, height: 43 },
    { x: 339, y: 336, width: 45, height: 43 },
    { x: 449, y: 336, width: 45, height: 43 },
    { x: 288, y: 81, width: 39, height: 35 },
    { x: 0, y: 0, width: canvas.width, height: 18 },
   


];

const mapImage = new Image();
mapImage.src = './assets/map.png';

let playerImage = new Image();
playerImage.src = './assets/playerDown.png';

const foreImage = new Image();
foreImage.src = './assets/foreground.png'

const item1 = new Image();
item1.src = './assets/item1.png'

const item2 = new Image();
item2.src = './assets/item2.png'

const item3 = new Image();
item3.src = './assets/item3.png'

const item4 = new Image();
item4.src = './assets/item4.png'

const item5 = new Image();
item5.src = './assets/item5.png'

const playerDownImage = new Image();
playerDownImage.src = './assets/playerDown.png';

const playerUpImage = new Image();
playerUpImage.src = './assets/playerUp.png';

const playerLeftImage = new Image();
playerLeftImage.src = './assets/playerLeft.png';

const playerRightImage = new Image();
playerRightImage.src = './assets/playerRight.png';





let keys = {};
const allowedKeys = ['w', 'W', 'a', 'A', 's', 'S', 'd', 'D', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', (e) => {
    if (allowedKeys.includes(e.key)) {
        player.moving = true;
        keys[e.key] = true;
        
    }
});

document.addEventListener('keyup', (e) => {
    if (allowedKeys.includes(e.key)) {
        keys[e.key] = false;
        player.moving = false;
        frames.val = 0
    
    }
});

function drawMap() {
    ctx.drawImage(mapImage, -48, 0);
}

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.drawImage(playerImage, frames.val * player.width, 0, player.width, player.height, player.x, player.y, player.width, player.height);


    if(!player.moving){
        return}


    if(frames.max > 1){
        frames.elapsed++
    }


    if(frames.elapsed%10 === 0){
    if(frames.val < frames.max) frames.val++
    else frames.val = 0}

    


}


function drawFore() {
    ctx.drawImage(foreImage, -48, 0);
}

function drawItems() {
    ctx.fillStyle = 'rgba(0,255,0, 0)';
    items.forEach(item => {
        if (!item.collected) {
            ctx.fillRect(item.x, item.y, tileSize, tileSize);
        }
    });
    
    item = items[0];
    if (!item.collected) 
    ctx.drawImage(item1, item.x, item.y, tileSize, tileSize);

    item = items[1];
    if (!item.collected) 
    ctx.drawImage(item2, item.x + tileSize/4, item.y + tileSize/4, tileSize/2, tileSize/2);
    
    item = items[2];
    if (!item.collected) 
    ctx.drawImage(item3, item.x, item.y, tileSize, tileSize);
    
    item = items[3];
    if (!item.collected) 
    ctx.drawImage(item4, item.x, item.y, tileSize, tileSize);
    
    item = items[4];
    if (!item.collected) 
    ctx.drawImage(item5, item.x, item.y, tileSize, tileSize);



}

function drawObstacles() {
    ctx.fillStyle = 'rgba(255,0,0, 0)';
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}
function gfg(){
    clearTimeout(time);
    alert('You hid all the items in time!\nYour friend wasn\'t caught.');
    alert('Wanna try again\?')
    setInterval(updateTimer, 1000)
    location.reload();}

let time;
    
function checkCollection() {
    items.forEach(item => {
        if (!item.collected && player.x < item.x + tileSize && player.x + player.width > item.x &&
            player.y < item.y + tileSize && player.y + player.height > item.y) {
            item.collected = true;
            itemsCollected++;
            itemsCollectedDisplay.innerText = itemsCollected;
        }
    });

    if (itemsCollected === items.length) {
        time = setTimeout(gfg, 20);
    }
}

function isColliding(rect1, rect2) {
    return !(rect1.x > rect2.x + rect2.width ||
             rect1.x + rect1.width < rect2.x ||
             rect1.y > rect2.y + rect2.height ||
             rect1.y + rect1.height < rect2.y);
}


let data = {};
function adjustPosition(direction, nextPosition, obstacle) {
    data = {
        'playerX': player.x,
        'playerY': player.y,
        'playerWidth': player.width,
        'playerHeight': player.height,
        'obstacleX': obstacle.x,
        'obstacleY': obstacle.y,
        'obstacleWidth': obstacle.width,
        'obstacleHeight': obstacle.height,

    } ;
    console.log(data);
    if ( player.y >= obstacle.y + obstacle.height) {
        nextPosition.y = obstacle.y + obstacle.height;

    } else if ( player.y + player.height <= obstacle.y) {
        nextPosition.y = obstacle.y - player.height;

    } else if ( player.x >= obstacle.x + obstacle.width) {
        nextPosition.x = obstacle.x + obstacle.width;

    } else if ( player.x + player.width <= obstacle.x) {
        nextPosition.x = obstacle.x - player.width;
    }
}

function updatePlayerPosition() {
    let nextX = player.x;
    let nextY = player.y;
    let direction = '';

    if (keys['w'] || keys['W'] || keys['ArrowUp']) {
        nextY -= player.speed;
        direction = 'up';
        playerImage = playerUpImage;
    } else if (keys['s'] || keys['S'] || keys['ArrowDown']) {
        nextY += player.speed;
        direction = 'down';
        playerImage = playerDownImage;
    } else if (keys['a'] || keys['A'] || keys['ArrowLeft']) {
        nextX -= player.speed;
        direction = 'left';
        playerImage = playerLeftImage;
    } else if (keys['d'] || keys['D'] || keys['ArrowRight']) {
        nextX += player.speed;
        direction = 'right';
        playerImage = playerRightImage;
    }

    const nextPosition = { x: nextX, y: nextY, width: player.width, height: player.height };

    let collisionDetected = false;
    for (let obstacle of obstacles) {
        if (isColliding(nextPosition, obstacle)) {
            collisionDetected = true;
            adjustPosition(direction, nextPosition, obstacle);
            break;
        }
    }

    player.x = nextPosition.x;
    player.y = nextPosition.y;
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeDisplay.innerText = timeLeft;
    } else {
        alert('Caretaker came to the room while you were still picking up the stuff.\nBoth you and your friend got heavily fined.');
        alert('Wanna try again?\n\n')
        resetGame();
    }
}

function resetGame() {
    timeLeft = gameTime;
    itemsCollected = 0;
    items.forEach(item => item.collected = false);
    player.x = 100;
    player.y = 100;
    keys = {};
    player.moving = false;
    playerImage = playerDownImage;
    start();
}

function update() {
    updatePlayerPosition();
    checkCollection();
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMap();
    drawItems();
    drawObstacles();
    drawPlayer();
    
    drawFore();
}

function gameLoop() {
    
    update();
    render();
    requestAnimationFrame(gameLoop);
    
}

setInterval(updateTimer, 1000);

mapImage.onload = function start() {
    alert('The caretaker is on round to check for banned stuff in hostel room.\nYou need to help your roommate hide his stuff.');
    alert('Use WASD or arrow keys to move\n\n')
    alert('You got only 10 seconds\nGO! GO! GOOOOO!\n')
    gameLoop();
};
