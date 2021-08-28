const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const para = document.querySelector('p');
let count = 0;

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
// function to generate random number
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}
/* change your existing Ball() constructor so that it becomes a Shape() constructor and add a new Ball() constructor */
function Shape(x, y, velX, velY, exists ) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
     
}


function Ball(x, y, velX, velY, color, size, exists) {
    Shape.call(this, x, y, velX, velY, exists)

    this.color = color;
    this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

/* Ball.prototype.collisionDetect = function() {
    for (let j = 0; j <balls.length; j++) {
        if (!(this === balls[j]) && balls[j].exists) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
            }
        }
    }
} */
Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j]) && balls[j].exists) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
        }
      }
    }
  }
  

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}


Ball.prototype.update = function() {

    /*  my bug here
        (this.x + this.site) >= width
    is different from (site # size)
        (this.x + this.size) >= width */
    
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
    
    
    
        if ((this.x - this.size) <= 0 ){
            this.velX = -(this.velX);
        }
    
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
    
    /*     if ((this.y - this.size) <= 0) {
            this.velY = -(-this.velY); my mistake there -(-this)
        } */
    
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }
    
        this.x += this.velX;
        this.y += this.velY;
    
    }


    // Defining EvilCircle()

    function EvilCircle(x, y, exists) {
        Shape.call(this,x, y, 20, 20, exists);
        this.color = 'white';
        this.size = 10;
    }

    EvilCircle.prototype = Object.create(Shape.prototype);
    EvilCircle.prototype.constructor = EvilCircle;


    EvilCircle.prototype.draw = function() {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    };
    
    EvilCircle.prototype.checkBounds = function() {

        /*  my bug here
            (this.x + this.site) >= width
        is different from (site # size)
            (this.x + this.size) >= width */
        
            if ((this.x + this.size) >= width) {
                this.x -= this.size;
            }
        
        
        
            if ((this.x - this.size) <= 0 ){
                this.x += this.size;
            }
        
            if ((this.y + this.size) >= height) {
                this.y -= this.size;
            }
        
        /*     if ((this.y - this.size) <= 0) {
                this.velY = -(-this.velY); my mistake there -(-this)
            } */
        
            if ((this.y - this.size) <= 0) {
                this.y += this.size;
            }
        
        
        };

        EvilCircle.prototype.setControls = function() {
            let _this = this;
            window.onkeydown = function(e) {
                if (e.key === 'a' || e.key === 'ArrowLeft') {
                    _this.x -= _this.velX;
                } else if (e.key === 'd'|| e.key === 'ArrowRight') {
                    _this.x += _this.velX;
                } else if (e.key === 'w'|| e.key === 'ArrowUp') {
                    _this.y -= _this.velY;
                } else if (e.key === 's' || e.key === 'ArrowDown') {
                    _this.y += _this.velY;
                }
            }
        }

        EvilCircle.prototype.collisionDetect = function() {
            for (let j = 0; j <balls.length; j++) {
                if (balls[j].exists === true) {
                    const dx = this.x - balls[j].x;
                    const dy = this.y - balls[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
        
                    if (distance < this.size + balls[j].size) {
                        balls[j].exists = false;
                        count--;
                        para.textContent = 'Ball count: ' + count;
                    }
                }
            }
        }
    
    let balls = [];

while (balls.length < 25) {
    let size = random(10,20);
    let ball = new Ball(
        //ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        size,
        true
    );
    balls.push(ball);
    count++;
    para.textContent = "Ball count: " + count;
}

let evil = new EvilCircle(random(0,width), random(0,height), true)
evil.setControls();
evil.size = 35; //set size to easy mode
// evil.setControls();

function loop() {
    /* rgba(red, green, blue, alpha)
    */
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
    
    for (let i = 0; i < balls.length; i++) {
/*         if(balls[i].exists === true) 
this is my whole mistake there, please becareful when not include the
curly brace after the if statement, that let the strange bug
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect(); */
        if (balls[i].exists) {
            // count++; this is another important bug here fackkkkk
            // please be careful next time
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        } 
        /* bug here, please careful when
        trying some code modify and delete it 
        if not use that method anymore
        // else  while(count >0) count--; */

        //Ball count

    }
    evil.draw();
    evil.checkBounds();
    evil.collisionDetect();
    requestAnimationFrame(loop);
}

loop();