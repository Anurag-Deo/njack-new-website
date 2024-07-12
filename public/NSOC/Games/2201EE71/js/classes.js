class Sprite {
    constructor({ position, imageSrc, width, height,scale=1,maxframes=1,offset={x:0,y:0}}) {
        this.position = position;
        this.width = width || 50;
        this.height = height || 150;
        this.image = new Image();
        this.image.src = imageSrc;
        this.maxframes=maxframes
        this.framesCurrent=0
        this.framesElapsed=0
        this.framesHold=3
        this.scale=scale
        this.offset=offset
    }

    draw() {
        c.drawImage(this.image, 
            this.framesCurrent*(this.image.width/this.maxframes),
            0,
            this.image.width/this.maxframes,
            this.image.height,
            this.position.x-this.offset.x,
            this.position.y-this.offset.y,
            ( this.image.width/this.maxframes)*this.scale, 
            this.image.height*this.scale);
    }
    animateframe(){
        this.framesElapsed++
        if(this.framesElapsed%this.framesHold==0){
        if(this.framesCurrent<this.maxframes-1)
        this.framesCurrent++
        else this.framesCurrent=0
        }
    }
    update() {
        this.draw();
        this.animateframe()
    }
}

class Fighter extends Sprite {
    constructor({
        position,
        velocity,
        color = 'red',
        imageSrc,
        scale = 1,
        maxframes = 1,
        offset = { x: 0, y: 0 },
        sprites,
        attackbox = { offset: { x: 100, y: 50 }, width: 200, height: 50 }
    }) {
        super({ position, imageSrc, maxframes, scale, offset });
        this.velocity = velocity;
        this.width = 50;
        this.height = 150;
        this.lastkey;
        this.attackbox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: attackbox.offset ,
            height: attackbox.height ,
            width: attackbox.width
        };
        this.color = color;
        this.isAttacking = false;
        this.health = 100;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 4;
        this.sprites = sprites;
        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc;
        }

        // Debug logs for constructor initialization
        console.log('Fighter Initialization:', {
            position: this.position,
            velocity: this.velocity,
            attackbox: this.attackbox
        });
    }

    update() {
        this.draw();
        this.animateframe();

        // Update attackbox position
        this.attackbox.position.x = this.position.x + this.attackbox.offset.x;
        this.attackbox.position.y = this.position.y + this.attackbox.offset.y;

        // Debug logs for attackbox properties
        console.log('Updated Attack Box Position:', this.attackbox.position);
        console.log('Updated Attack Box Dimensions:', this.attackbox.width, this.attackbox.height);

        // Set fill style and draw attack box
        // c.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Red with some transparency
        // c.fillRect(
        //     this.attackbox.position.x,
        //     this.attackbox.position.y,
        //     this.attackbox.width,
        //     this.attackbox.height
        // );

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y >= canvas.height - 50) {
            this.velocity.y = 0;
        } else this.velocity.y += gravity;
    }

    attack() {
        this.switchsprite('attack1');
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false;
        }, 1000);
    }


    switchsprite(sprite) {
        if (this.image == this.sprites.attack1.image && this.framesCurrent < this.sprites.attack1.maxframes - 1) return;
        switch (sprite) {
            case 'idle':
                if (this.image != this.sprites.idle.image) {
                    this.image = this.sprites.idle.image;
                    this.maxframes = this.sprites.idle.maxframes;
                }
                break;
            case 'run':
                if (this.image != this.sprites.run.image) {
                    this.image = this.sprites.run.image;
                    this.maxframes = this.sprites.run.maxframes;
                }
                break;
            case 'jump':
                if (this.image != this.sprites.jump.image){
                    this.image = this.sprites.jump.image;
                this.maxframes = this.sprites.jump.maxframes;
                }
                break;
            case 'attack1':
                if (this.image != this.sprites.attack1.image){
                    this.image = this.sprites.attack1.image;
                    this.maxframes = this.sprites.attack1.maxframes;
                }
                break;
        }
    }
}
