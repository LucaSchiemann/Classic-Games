
//Setting up main game

var newX;
var newY;
var gameMode = 0;
var myTurn = true;
var canPlace = true;
var Draw = true;

var pos = ["filler","empty","empty","empty","empty","empty","empty","empty","empty","empty"];

var XO = function(config){
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 0;
    this.height = config.width || 0;
    this.onClick = config.onClick || function(){};
};

XO.prototype.isMouseInside = function(){
    return mouseX > (this.x-75) &&
           mouseX < (this.x +75) &&
           mouseY > this.y-75 &&
           mouseY < (this.y +75);
};

XO.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var X = function(x, y, width, height){
    XO.call(this, x, y, width, height);
};

X.prototype = Object.create(XO.prototype);

X.prototype.draw = function() {
    line(this.x-this.width/2, this.y-this.height/2, this.x+this.width/2, this.y+this.height/2);
    line(this.x+this.width/2, this.y-this.height/2, this.x-this.width/2, this.y+this.height/2);
};

var x1 = new X({
    x: 147.5,
    y: 147.5,
    width: 100,
    height: 100,
    onClick: function(){
        x1.draw();
        myTurn=false;
        pos[1] = "filledX";
    }
});

var x2 = new X({
    x: 300,
    y: 147.5,
    width: 100,
    height: 100,
    onClick: function(){
        x2.draw();
        myTurn=false;
        pos[2] = "filledX";
    }
});

var x3 = new X({
    x: 452.5,
    y: 147.5,
    width: 100,
    height: 100,
    onClick: function(){
        x3.draw();
        myTurn=false;
        pos[3] = "filledX";
    }
});

var x4 = new X({
    x: 147.5,
    y: 300,
    width: 100,
    height: 100,
    onClick: function(){
        x4.draw();
        myTurn=false;
        pos[4] = "filledX";
    }
});

var x5 = new X({
    x: 300,
    y: 300,
    width: 100,
    height: 100,
    onClick: function(){
        x5.draw();
        myTurn=false;
        pos[5] = "filledX";
    }
});

var x6 = new X({
    x: 452.5,
    y: 300,
    width: 100,
    height: 100,
    onClick: function(){
        x6.draw();
        myTurn=false;
        pos[6] = "filledX";
    }
});

var x7 = new X({
    x: 147.5,
    y: 452.5,
    width: 100,
    height: 100,
    onClick: function(){
        x7.draw();
        myTurn=false;
        pos[7] = "filledX";
    }
});

var x8 = new X({
    x: 300,
    y: 452.5,
    width: 100,
    height: 100,
    onClick: function(){
        x8.draw();
        myTurn=false;
        pos[8] = "filledX";
    }
});

var x9 = new X({
    x: 452.5,
    y: 452.5,
    width: 100,
    height: 100,
    onClick: function(){
        x9.draw();
        myTurn=false;
        pos[9] = "filledX";
    }
});

var O = function(x, y, width, height){
    XO.call(this, x, y, width, height);
};

O.prototype = Object.create(XO.prototype);

O.prototype.draw = function() {
    noFill();
    ellipse(this.x, this.y, this.width, this.height);
};

var o1 = new O({
    x: 147.5,
    y: 147.5,
    width: 100,
    height: 100,
    onClick: function(){
        o1.draw();
        myTurn=true;
        pos[1] = "filledO";
    }
});

var o2 = new O({
    x: 300,
    y: 147.5,
    width: 100,
    height: 100,
    onClick: function(){
        o2.draw();
        myTurn=true;
        pos[2] = "filledO";
    }
});

var o3 = new O({
    x: 452.5,
    y: 147.5,
    width: 100,
    height: 100,
    onClick: function(){
        o3.draw();
        myTurn=true;
        pos[3] = "filledO";
    }
});

var o4 = new O({
    x: 147.5,
    y: 300,
    width: 100,
    height: 100,
    onClick: function(){
        o4.draw();
        myTurn=true;
        pos[4] = "filledO";
    }
});

var o5 = new O({
    x: 300,
    y: 300,
    width: 100,
    height: 100,
    onClick: function(){
        o5.draw();
        myTurn=true;
        pos[5] = "filledO";
    }
});

var o6 = new O({
    x: 452.5,
    y: 300,
    width: 100,
    height: 100,
    onClick: function(){
        o6.draw();
        myTurn=true;
        pos[6] = "filledO";
    }
});

var o7 = new O({
    x: 147.5,
    y: 452.5,
    width: 100,
    height: 100,
    onClick: function(){
        o7.draw();
        myTurn=true;
        pos[7] = "filledO";
    }
});

var o8 = new O({
    x: 300,
    y: 452.5,
    width: 100,
    height: 100,
    onClick: function(){
        o8.draw();
        myTurn=true;
        pos[8] = "filledO";
    }
});

var o9 = new O({
    x: 452.5,
    y: 452.5,
    width: 100,
    height: 100,
    onClick: function(){
        o9.draw();
        myTurn=true;
        pos[9] = "filledO";
    }
});

var drawBoard = function(){
    strokeWeight(10);
    //top
    line(75,220,525,220);
    //bottom
    line(75,380,525,380);
    //left
    line(220,75,220,525);
    //right
    line(380,75,380,525);
};

var gameOver = false;

var winScreen = function(pos1X, pos1Y, pos2X, pos2Y, altDraw){
    strokeWeight(15);
    if(newX<pos2X){
    newX+=25;
    }
    if(newY<pos2Y){
    newY+=25;
    }
    else if(newY>pos2Y && altDraw === true){
    newY-=25;
    }
    
    line(pos1X,pos1Y,newX,newY);
    canPlace = false;
    gameOver = true;
};

var checkWin = function() {
if(pos[1]==="filledX" && pos[2]==="filledX" && pos[3]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 150;
    Draw = false;
    }
    
    winScreen(75, 150, 525, 150);
} 

else if(pos[4]==="filledX" && pos[5]==="filledX" && pos[6]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 300;
    Draw = false;
    }
    
    winScreen(75, 300, 525, 300);
}

else if(pos[7]==="filledX" && pos[8]==="filledX" && pos[9]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 450;
    Draw = false;
    }
    
    winScreen(75, 450, 525, 450);
}

else if(pos[1]==="filledX" && pos[4]==="filledX" && pos[7]==="filledX"){
    if(Draw===true){
    newX = 150;
    newY = 75;
    Draw = false;
    }
    
    winScreen(150, 75, 150, 525);
}

else if(pos[2]==="filledX" && pos[5]==="filledX" && pos[8]==="filledX"){
    if(Draw===true){
    newX = 300;
    newY = 75;
    Draw = false;
    }
    
    winScreen(300, 75, 300, 525);
}

else if(pos[3]==="filledX" && pos[6]==="filledX" && pos[9]==="filledX"){
    if(Draw===true){
    newX = 450;
    newY = 75;
    Draw = false;
    }
    
    winScreen(450, 75, 450, 525);
}

else if(pos[1]==="filledX" && pos[5]==="filledX" && pos[9]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 75;
    Draw = false;
    }
    
    winScreen(75, 75, 525, 525);
}

else if(pos[3]==="filledX" && pos[5]==="filledX" && pos[7]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 525;
    Draw = false;
    }
    
    winScreen(75, 525, 525, 75, true);
}

//for o winning

if(pos[1]==="filledO" && pos[2]==="filledO" && pos[3]==="filledO"){
    if(Draw===true){
    newX = 75;
    newY = 150;
    Draw = false;
    }
    
    winScreen(75, 150, 525, 150);
} 

else if(pos[4]==="filledO" && pos[5]==="filledO" && pos[6]==="filledO"){
    if(Draw===true){
    newX = 75;
    newY = 300;
    Draw = false;
    }
    
    winScreen(75, 300, 525, 300);
}

else if(pos[7]==="filledO" && pos[8]==="filledO" && pos[9]==="filledO"){
    if(Draw===true){
    newX = 75;
    newY = 450;
    Draw = false;
    }
    
    winScreen(75, 450, 525, 450);
}

else if(pos[1]==="filledO" && pos[4]==="filledO" && pos[7]==="filledO"){
    if(Draw===true){
    newX = 150;
    newY = 75;
    Draw = false;
    }
    
    winScreen(150, 75, 150, 525);
}

else if(pos[2]==="filledO" && pos[5]==="filledO" && pos[8]==="filledO"){
    if(Draw===true){
    newX = 300;
    newY = 75;
    Draw = false;
    }
    
    winScreen(300, 75, 300, 525);
}

else if(pos[3]==="filledO" && pos[6]==="filledO" && pos[9]==="filledO"){
    if(Draw===true){
    newX = 450;
    newY = 75;
    Draw = false;
    }
    
    winScreen(450, 75, 450, 525);
}

else if(pos[1]==="filledO" && pos[5]==="filledO" && pos[9]==="filledO"){
    if(Draw===true){
    newX = 75;
    newY = 75;
    Draw = false;
    }
    
    winScreen(75, 75, 525, 525);
}

else if(pos[3]==="filledO" && pos[5]==="filledO" && pos[7]==="filledO"){
    if(Draw===true){
    newX = 75;
    newY = 525;
    Draw = false;
    }
    
    winScreen(75, 525, 525, 75, true);
}
};

//creating AI

var AI = function(difficulty){
    if(difficulty==="easy"){
        var move = round(random(0.5,9.49999));
        if(move===1 && pos[1]==="empty"){
            o1.draw();
            pos[1]="filledO";
        }
        else if(move===1 && pos[1]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        if(move===2 && pos[2]==="empty"){
            o2.draw();
            pos[2]="filledO";
        }
        else if(move===2 && pos[2]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        if(move===3 && pos[2]==="empty"){
            o3.draw();
            pos[3]="filledO";
        }
        else if(move===3 && pos[3]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        if(move===4 && pos[4]==="empty"){
            o4.draw();
            pos[4]="filledO";
        }
        else if(move===4 && pos[4]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        if(move===5 && pos[5]==="empty"){
            o5.draw();
            pos[5]="filledO";
        }
        else if(move===5 && pos[5]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        if(move===6 && pos[6]==="empty"){
            o6.draw();
            pos[6]="filledO";
        }
        else if(move===6 && pos[6]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        if(move===7 && pos[7]==="empty"){
            o7.draw();
            pos[7]="filledO";
        }
        else if(move===7 && pos[7]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        if(move===8 && pos[8]==="empty"){
            o8.draw();
            pos[8]="filledO";
        }
        else if(move===8 && pos[8]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        if(move===9 && pos[9]==="empty"){
            o9.draw();
            pos[9]="filledO";
        }   
        else if(move===9 && pos[9]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        myTurn=true;
    }
    else if(difficulty === "hard"){
        if(pos===[]){}
    }
};

//Creating menu UI

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 200;
    this.height = config.height || 50;
    this.label = config.label;
    this.onClick = config.onClick || function() {};
};

Button.prototype.isMouseInside = function() {
    return mouseX > (this.x-this.width/2) &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var difOp = false;

var AIdif;

Button.prototype.draw = function() {
    fill(64, 59, 64);
    rect(this.x-(this.width/2), this.y, this.width, this.height, 3);
    fill(0, 0, 0);
    textSize(19);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y+this.height/2);
};

var btn1 = new Button({
    x: 300,
    y: 375,
    label: "Local Game",
    onClick: function() {
        gameMode = 1;
        background(130,36,36);
        drawBoard();
        myTurn = true;
        pos[1] = "empty";
        pos[2] = "empty";
        pos[3] = "empty";
        pos[4] = "empty";
        pos[5] = "empty";
        pos[6] = "empty";
        pos[7] = "empty";
        pos[8] = "empty";
        pos[9] = "empty";
    }
});

var btn2 = new Button({
    x:300,
    y:450,
    label: "Vs Computer",
    onClick: function(){
        difOp = true;
    }
});

var btn3 = new Button({
    x:300,
    y:525,
    label: "Story",
    onClick: function(){
        gameMode = 3;
    }
});

var btn4 = new Button({
    x:300,
    y:540,
    label: "Return to Menu",
    onClick: function(){
        gameMode = 0;
        Draw = true;
        newX = 0;
        newY = 0;
        pos[1] = "empty";
        pos[2] = "empty";
        pos[3] = "empty";
        pos[4] = "empty";
        pos[5] = "empty";
        pos[6] = "empty";
        pos[7] = "empty";
        pos[8] = "empty";
        pos[9] = "empty";
        canPlace = true;
        difOp=false;
        myTurn = true;
        gameOver=false;
    }
});

var btn5 = new Button({
    x:185,
    y:450,
    label:"Easy",
    onClick: function(){
        gameMode = 2;
        AIdif="easy";
        background(130,36,36);
        drawBoard();
        pos[1] = "empty";
        pos[2] = "empty";
        pos[3] = "empty";
        pos[4] = "empty";
        pos[5] = "empty";
        pos[6] = "empty";
        pos[7] = "empty";
        pos[8] = "empty";
        pos[9] = "empty";
        AIdif="easy";
        canPlace = true;
        myTurn = true;
        gameOver=false;
    }
});

var btn6 = new Button({
    x:415,
    y:450,
    label:"Hard",
    onClick: function(){
        gameMode = 2;
        background(130,36,36);
        drawBoard();
        pos[1] = "empty";
        pos[2] = "empty";
        pos[3] = "empty";
        pos[4] = "empty";
        pos[5] = "empty";
        pos[6] = "empty";
        pos[7] = "empty";
        pos[8] = "empty";
        pos[9] = "empty";
        AIdif="hard";
        canPlace=true;
        myTurn = true;
        gameOver=false;
    }
});





mouseClicked = function(){
if(gameMode === 0){
    if(difOp === false) {
    btn1.handleMouseClick();
    btn2.handleMouseClick();
    btn3.handleMouseClick();
    }
    else if(difOp === true) {
    btn5.handleMouseClick();
    btn6.handleMouseClick();
    }
}
else if(gameMode === 1){
    checkWin();
    if(myTurn === true && canPlace === true){
    if(pos[1] === "empty"){
    x1.handleMouseClick();
    } if(pos[2] === "empty"){
    x2.handleMouseClick();
    } if(pos[3] === "empty"){
    x3.handleMouseClick();
    } if(pos[4] === "empty"){
    x4.handleMouseClick();
    } if(pos[5] === "empty"){
    x5.handleMouseClick();
    } if(pos[6] === "empty"){
    x6.handleMouseClick();
    } if(pos[7] === "empty"){
    x7.handleMouseClick();
    } if(pos[8] === "empty"){
    x8.handleMouseClick();
    } if(pos[9] === "empty"){
    x9.handleMouseClick();
    }
}
else if(myTurn === false && canPlace === true){
    if(pos[1] === "empty"){
    o1.handleMouseClick();
    } if(pos[2] === "empty"){
    o2.handleMouseClick();
    } if(pos[3] === "empty"){
    o3.handleMouseClick();
    } if(pos[4] === "empty"){
    o4.handleMouseClick();
    } if(pos[5] === "empty"){
    o5.handleMouseClick();
    } if(pos[6] === "empty"){
    o6.handleMouseClick();
    } if(pos[7] === "empty"){
    o7.handleMouseClick();
    } if(pos[8] === "empty"){
    o8.handleMouseClick();
    } if(pos[9] === "empty"){
    o9.handleMouseClick();
    }
}
    btn4.handleMouseClick();
}
else if(gameMode === 2) {
    btn4.handleMouseClick();
    if(myTurn===true && canPlace===true){
        if(pos[1] === "empty"){
    x1.handleMouseClick();
    } if(pos[2] === "empty"){
    x2.handleMouseClick();
    } if(pos[3] === "empty"){
    x3.handleMouseClick();
    } if(pos[4] === "empty"){
    x4.handleMouseClick();
    } if(pos[5] === "empty"){
    x5.handleMouseClick();
    } if(pos[6] === "empty"){
    x6.handleMouseClick();
    } if(pos[7] === "empty"){
    x7.handleMouseClick();
    } if(pos[8] === "empty"){
    x8.handleMouseClick();
    } if(pos[9] === "empty"){
    x9.handleMouseClick();
    }
    checkWin();
    if (gameOver === false && AIdif==="easy" && myTurn===false){
        AI("easy");
    }
    if (gameOver === false && AIdif==="hard" && myTurn===false){
        AI("hard");
    }
    }
   
}
else if(gameMode === 3) {
   
}
};





var drawBackX = function(a,b){
    strokeWeight(10);
    line(a, b, a+100, b+100);
    line(a+100, b, a, b+100);
};

var drawBackO = function(c,d){
    strokeWeight(10);
    noFill();
    ellipse(c,d,100,100);
};

var backX = function(a, b, xSpeed, ySpeed){
    this.a = a;
    this.b = b;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
};

backX.prototype.make = function() {
    strokeWeight(10);
    line(this.a, this.b, this.a+100, this.b+100);
    line(this.a+100, this.b, this.a, this.b+100);
   
    this.a = this.a + this.xSpeed;
    if(this.a>500){this.xSpeed = -1;}
    if(this.a<0){this.xSpeed = 1;}
    this.b = this.b + this.ySpeed;
    if(this.b>500){this.ySpeed = -1;}
    if(this.b<0){this.ySpeed = 1;}
};

var backx = new backX(random(100,500),random(100,500),1,1);
var backx2 = new backX(random(100,500),random(100,500),1,-1);

var backO = function(a, b, xSpeed, ySpeed){
    this.a = a;
    this.b = b;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
};

backO.prototype.make = function(){
    strokeWeight(10);
    noFill();
    ellipse(this.a,this.b,100,100);
   
    this.a = this.a - this.xSpeed;
    if(this.a>550){this.xSpeed = 1;}
    if(this.a<50){this.xSpeed = -1;}
    this.b = this.b - this.ySpeed;
    if(this.b>550){this.ySpeed = 1;}
    if(this.b<50){this.ySpeed = -1;}
};

var backo = new backO(random(100,500),random(100,500),-1,1);
var backo2 = new backO(random(100,500),random(100,500),1,-1);

var drawMenu = function(){
        checkWin();
        if(gameMode === 0){
        background(130, 36, 36);
       
        backx.make();
        backx2.make();
        backo.make();
        backo2.make();
       
        strokeWeight(3);
        textFont(createFont("Arial Black"));
        textSize(74);
        fill(0);
        textAlign(CENTER, CENTER);
        text("TIC-TAC-TOE", 300, 138);
        btn1.draw();
        btn3.draw();
        if(difOp === false){
            btn2.draw();
        }
        else if(difOp === true){
            btn5.draw();
            btn6.draw();
        }
        }
        else if(gameMode === 1){
            strokeWeight(3);
            btn4.draw();
            strokeWeight(10);
        }
        else if(gameMode ===2){
            strokeWeight(3);
            btn4.draw();
            strokeWeight(10);
        }
   
};

draw = function() {
drawMenu();
};
