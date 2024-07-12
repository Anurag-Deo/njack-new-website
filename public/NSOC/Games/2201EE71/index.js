const canvas=document.querySelector('canvas')
const c=canvas.getContext('2d')
let  gameStarted=false;
canvas.width= 1024
canvas.height=576

c.fillRect(0,0,canvas.width,canvas.height)

const gravity=0.7

const background=new Sprite({
    position:{
        x:0,
        y:0
    },
    imageSrc:'backgnd2.jpg',
     width:1024,
    height:576
})
// const shop=new Sprite({
//     position:{
//         x:700,
//         y:170
//     },
//     imageSrc:'./img/shop_animation.png',
//     width: 800,
//     height: 300,
//     scale:2,
//     maxframes:6
    
// })
const player=new Fighter({
    position: {
        x:100,
        y:0
    },
    velocity: {
        x:0,
        y:0
    },
    offset:{
        x:0,
        y:0
    },
    imageSrc:'./img2/Idle.png',
    maxframes:8,
    scale:3.5,
    offset:{
        x:200,
        y:250
    },
    sprites: {
        idle: {
            imageSrc: './img2/Idle.png',
            maxframes:8
        },
        run:{
            imageSrc: './img2/Run.png',
            maxframes:8,
            image:new Image()
        },
        jump:{
            imageSrc: './img2/Jump.png',
            maxframes:2,
            image:new Image()
        },
        attack1:{
            imageSrc: './img2/Attack1.png',
            maxframes:6,
            image:new Image()
        }
    },
        attackbox:{
            offset:{
                x:50,
                y:30
            },
            height:50,
            width:150
        }
})

const enemy=new Fighter({
    position: {
        x:400,
        y:0
    },
    velocity: {
        x:0,
        y:0
    },
    offset:{ 
        x:50,
        y:0
    },
    color:'blue',
    imageSrc:'./img/enemy/Idle.png',
    maxframes:4,
    scale:3.5,
    offset:{
        x:200,
        y:270
    },
    sprites: {
        idle: {
            imageSrc: './img/enemy/Idle.png',
            maxframes:4
        },
        run:{
            imageSrc: './img/enemy/Run.png',
            maxframes:8,
            image:new Image()
        },
        jump:{
            imageSrc: './img/enemy/Jump.png',
            maxframes:2,
            image:new Image()
        },
        attack1:{
            imageSrc: './img/enemy/Attack1.png',
            maxframes:4,
            image:new Image()
        }
    },
    attackbox:{
        offset:{
            x:-150,
            y:30
        },
        height:50,
        width:150
    }
})

// enemy.draw()
// console.log(player);

const keys={
    a:{
        pressed:false
    },
    d:{
        pressed:false
    },
    w:{
        pressed:false
    },
    ArrowLeft:{
        pressed:false
    },
    ArrowRight:{
        pressed:false
    }
}

function animate() {
    if (!gameStarted) return;
    window.requestAnimationFrame(animate) //animate objects frame by frame
c.fillRect(0,0,canvas.width,canvas.height)
background.update()
// shop.update()
c.fillStyle='rgba(255,255,255,0.4)'
c.fillRect(0,0,canvas.width,canvas.height)

player.update()  //calling for every frame within animation loop 
enemy.update()
player.velocity.x=0
enemy.velocity.x=0
//player movement
if(keys.a.pressed && player.lastkey=='a'){
    player.velocity.x=-5
    player.switchsprite('run')
}
else if(keys.d.pressed && player.lastkey=='d'){
    player.velocity.x=5
    player.switchsprite('run')
}
else{
    player.switchsprite('idle') 
}
//jumping
if(player.velocity.y<0){
player.switchsprite('jump')
}
// enemy movement
if(keys.ArrowLeft.pressed && enemy.lastkey=='ArrowLeft'){
    enemy.velocity.x=-5
    enemy.switchsprite('run')
}
else if(keys.ArrowRight.pressed && enemy.lastkey=='ArrowRight'){
    enemy.velocity.x=5
    enemy.switchsprite('run')
}
else{
    enemy.switchsprite('idle')
}
//jumping
if(enemy.velocity.y<0){
    enemy.switchsprite('jump')
}

//detect for collision
if(
    rectangularcollision({
        rect1:player,
        rect2:enemy
    })
&& player.isAttacking
){
    player.isAttacking=false
    enemy.health-=20
    document.querySelector('#enemyhealth').style.width=enemy.health+'%'
}

//if player is missed
if(player.isAttacking && player.framesCurrent==4) player.isAttacking=false;

if(
    rectangularcollision({
        rect1:enemy,
        rect2:player
    })
&& enemy.isAttacking 
){
    enemy.isAttacking=false
    player.health-=20
    document.querySelector('#playerhealth').style.width=player.health+'%'
}
if(enemy.isAttacking && enemy.framesCurrent==2) enemy.isAttacking=false;

//end game based on health
if(player.health<=0 || enemy.health<=0){
    determineWinner({player,enemy,timerId})
}
}
displayWelcomeMessage()
startGame()
animate()
window.addEventListener('keydown', (event)=>{
    if(gameStarted){
    switch(event.key){
        case 'd':
            keys.d.pressed=true
            player.lastkey='d'
            break
        case 'a':
            keys.a.pressed=true
            player.lastkey='a'
            break
        case 'w':
            player.velocity.y=-23
            break
        case ' ':
            player.attack()
            break
         case 'ArrowRight':
            keys.ArrowRight.pressed=true
            enemy.lastkey='ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed=true
            enemy.lastkey='ArrowLeft'
            break
        case 'ArrowUp':
            enemy.velocity.y=-23
            break
        case 'ArrowDown':
            enemy.attack()
            break   
    }}
})

window.addEventListener('keyup',(event)=>{
    if(gameStarted){
    switch(event.key){
        case 'd':
            keys.d.pressed=false
            break
        case 'a':
            keys.a.pressed=false
            break
    }
    //enemy keys
    switch(event.key){
        case 'ArrowRight':
            keys.ArrowRight.pressed=false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed=false
            break
    }}
})
