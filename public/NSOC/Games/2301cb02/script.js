score = 0;
cross = true;
audio = new Audio('bg.mp3');
audiogo = new Audio('go_01.mp3');





document.onkeydown = function(e){
    if(e.keyCode==38){
      let  boy = document.querySelector('.car');
        boy.classList.add('animateBoy');
        setTimeout(() => {
            boy.classList.remove('animateBoy');
        }, 700);  
    }
    if(e.keyCode==39){
        let  boy = document.querySelector('.car');
        dx = parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'))
        boy.style.left = dx + 152 + "px";
      }
      if(e.keyCode==37){
        let  boy = document.querySelector('.car');
        dx = parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'))
        boy.style.left = (dx - 152) + "px";
      }
    setTimeout(() => {
    audio.play()
    }, 1000);
    
    
}

setInterval(() => {
      boy = document.querySelector('.car');
     bus = document.querySelector('.obstacle');
     word = document.querySelector('#word');

     dx = parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'))
     dy = parseInt(window.getComputedStyle(boy,null).getPropertyValue('top'))

     ox = parseInt(window.getComputedStyle(bus,null).getPropertyValue('left'))
     oy = parseInt(window.getComputedStyle(bus,null).getPropertyValue('top'))

     offsetX = Math.abs(dx-ox);
     offsetY = Math.abs(dy-oy);
    
    
    
    
    
     if(offsetX < 70 && offsetY < 100){
        bus.classList.remove('bus')
        word.innerHTML = "Game Over - Refresh to Play Again"
        audiogo.play();
        audio.pause();
        setTimeout(() => {
            audiogo.pause();
            audio.play()
        }, 2500);
        
     }
     else if(offsetX<130 && cross){
        
        
        
        score=score+1;
        UpdateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(bus,null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.2;
            bus.style.animationDuration = newdur + 's';
            console.log(newdur)
        }, 500);                 
     }
    }, 10);

    function UpdateScore(score){
        sc = document.querySelector('#score')
        sc.innerHTML  = "Your Score : " + score
    }
