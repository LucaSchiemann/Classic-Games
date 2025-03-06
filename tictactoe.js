  //Setting up main game

var newX;
var newY;
var gameMode = 0;
var myTurn = true;
var canPlace = true;
var Draw = true;
var difOp = false;
var modeOp = false;
var nextMove = 0;
var hasMoved;
var AIdif;

var pos = ["filler","empty","empty","empty","empty","empty","empty","empty","empty","empty"];

//holds all of the x objects in ultimate mode
var ultimateXs = ["filler", "_"];

//holds all of the y objects in ultimate mode
var ultimateOs = ["filler", "_"];

//holds weather a certain spot is filled in ultimate mode
var ultimatePos = [["filler"]];

//holds location data for all posible x's and y's
var ultimateCords = [["filler"]];

//adds location dada to ultimateCords
for(var w = 0; w < 3; w++) {
for(var x = 0; x < 3; x++) {
for(var y = 0; y < 3; y++) {
for(var z = 0; z < 3; z++) {
ultimateCords.push([(58+z*39)+52+150*x,(109+y*39)+150*w]);
}
}
}
}


for(var i = 0; i < 9; i++) {
    ultimatePos.push(["filler", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]);
}

var XO = function(config){
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 0;
    this.height = config.width || 0;
    this.onClick = config.onClick || function(){};
};

XO.prototype.isMouseInside = function(mode){
    if(mode === "normal"){
    return mouseX > (this.x-75) &&
           mouseX < (this.x +75) &&
           mouseY > (this.y-75) &&
           mouseY < (this.y +75);
    }
    else if(mode === "ultimate"){
    return mouseX > (this.x-20) &&
           mouseX < (this.x +20) &&
           mouseY > (this.y-20) &&
           mouseY < (this.y +20);
    }
};

XO.prototype.handleMouseClick = function() {
    if (this.isMouseInside("normal")) {
        this.onClick();
    }
};

XO.prototype.ultimateHMC = function(i, n, XO) {
    var empty = false;
    
    if(ultimatePos[i][n] === "empty") {
        empty = true;
    }
    
    if (this.isMouseInside("ultimate") && empty === true && XO === "x") {
        this.draw();
        ultimatePos[i][n] = "filledX";
    }
    
    else if(this.isMouseInside("ultimate") && empty === true && XO === "o") {
        this.draw();
        ultimatePos[i][n] = "filledO";
    }
};


//parent class for all x's on gameboard
var X = function(x, y, width, height){
    XO.call(this, x, y, width, height);
};

X.prototype = Object.create(XO.prototype);

X.prototype.draw = function() {
    line(this.x-this.width/2, this.y-this.height/2, this.x+this.width/2, this.y+this.height/2);
    line(this.x+this.width/2, this.y-this.height/2, this.x-this.width/2, this.y+this.height/2);
    
    myTurn = !myTurn;
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

var xs = ["filler", x1, x2, x3, x4, x5, x6, x7, x8, x9];

var O = function(x, y, width, height){
    XO.call(this, x, y, width, height);
};

O.prototype = Object.create(XO.prototype);

O.prototype.draw = function() {
    noFill();
    ellipse(this.x, this.y, this.width, this.height);
    myTurn = !myTurn;
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

var os = ["filler", o1, o2, o3, o4, o5, o6, o7, o8, o9];

//creates all the x instances
for(var i = 1; i<=ultimateCords.length-1; i++) {
    ultimateXs[i] = new X({
    x: ultimateCords[i][0],
    y: ultimateCords[i][1],
    width: 20,
    height: 20,
});

    ultimateOs[i] = new O({
    x: ultimateCords[i][0],
    y: ultimateCords[i][1],
    width: 20,
    height: 20,
    });
}

//draws the main gameboard
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

//draws the ultimate gameboard
var drawUltimateBoard = function(){
    strokeWeight(10);
    line(75,220,525,220);
    line(75,380,525,380);
    line(220,75,220,525);
    line(380,75,380,525);
    
    var dec1 = 93.125;
    var dec2 = 128.166;
    var dec3 = 166.833;
    var dec4 = 201.875;
    
    strokeWeight(5);
    
    for (var n = 0; n < 3; n++) {
        for (var i = 0; i < 3; i++) {
            line(dec1+i*150,dec2+n*150,dec4+i*150,dec2+n*150);
            line(dec1+i*150,dec3+n*150,dec4+i*150,dec3+n*150);
            line(dec2+i*150,dec1+n*150,dec2+i*150,dec4+n*150);
            line(dec3+i*150,dec1+n*150,dec3+i*150,dec4+n*150);
        }
    }
};

var gameOver = false;

//draws a line when a player wins
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

var ultimateWinScreen = function(pos1X, pos1Y, pos2X, pos2Y, player) {
    strokeWeight(10);
            line(pos1X, pos1Y, pos2X, pos2Y);
            line(pos2X, pos1Y, pos1X, pos2Y);
};

var checkWin = function() {
    if(gameMode === 1 || gameMode === 2){
if(pos[1]==="filledX" && pos[2]==="filledX" && pos[3]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 150;
    Draw = false;
    }
   
    winScreen(75, 150, 525, 150, "x");
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
else{
    hasMoved = true;
    
}
}
else if(gameMode === 3) {
    for(var i = 0; i < 9; i++){
        if(ultimatePos[i][1]==="filledX" && ultimatePos[i][2]==="filledX" && ultimatePos[i][3]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 150;
    Draw = false;
    }
   
    ultimateWinScreen(100, 100, 200, 200);
}

else if(ultimatePos[i][4]==="filledX" && ultimatePos[i][5]==="filledX" && ultimatePos[i][6]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 300;
    Draw = false;
    }
   
    winScreen(75, 300, 525, 300);
}

else if(ultimatePos[i][7]==="filledX" && ultimatePos[i][8]==="filledX" && ultimatePos[i][9]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 450;
    Draw = false;
    }
   
    winScreen(75, 450, 525, 450);
}

else if(ultimatePos[i][1]==="filledX" && ultimatePos[i][4]==="filledX" && ultimatePos[i][7]==="filledX"){
    if(Draw===true){
    newX = 150;
    newY = 75;
    Draw = false;
    }
   
    winScreen(150, 75, 150, 525);
}

else if(ultimatePos[i][2]==="filledX" && ultimatePos[i][5]==="filledX" && ultimatePos[i][8]==="filledX"){
    if(Draw===true){
    newX = 300;
    newY = 75;
    Draw = false;
    }
   
    winScreen(300, 75, 300, 525);
}

else if(ultimatePos[i][3]==="filledX" && ultimatePos[i][6]==="filledX" && ultimatePos[i][9]==="filledX"){
    if(Draw===true){
    newX = 450;
    newY = 75;
    Draw = false;
    }
   
    winScreen(450, 75, 450, 525);
}

else if(ultimatePos[i][1]==="filledX" && ultimatePos[i][5]==="filledX" && ultimatePos[i][9]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 75;
    Draw = false;
    }
   
    winScreen(75, 75, 525, 525);
}

else if(ultimatePos[i][3]==="filledX" && ultimatePos[i][5]==="filledX" && ultimatePos[i][7]==="filledX"){
    if(Draw===true){
    newX = 75;
    newY = 525;
    Draw = false;
    }
   
    winScreen(75, 525, 525, 75, true);
}

//for o winning

if(ultimatePos[i][1]==="filledO" && ultimatePos[i][2]==="filledO" && ultimatePos[i][3]==="filledO"){
    if(Draw===true){
    newX = 75;
    newY = 150;
    Draw = false;
    }
   
    winScreen(75, 150, 525, 150);
}

else if(ultimatePos[i][4]==="filledO" && ultimatePos[i][5]==="filledO" && ultimatePos[i][6]==="filledO"){
    if(Draw===true){
    newX = 75;
    newY = 300;
    Draw = false;
    }
   
    winScreen(75, 300, 525, 300);
}

else if(ultimatePos[i][7]==="filledO" && ultimatePos[i][8]==="filledO" && ultimatePos[i][9]==="filledO"){
    if(Draw===true){
    newX = 75;
    newY = 450;
    Draw = false;
    }
   
    winScreen(75, 450, 525, 450);
}

else if(ultimatePos[i][1]==="filledO" && ultimatePos[i][4]==="filledO" && ultimatePos[i][7]==="filledO"){
    if(Draw===true){
    newX = 150;
    newY = 75;
    Draw = false;
    }
   
    winScreen(150, 75, 150, 525);
}

else if(ultimatePos[i][2]==="filledO" && ultimatePos[i][5]==="filledO" && ultimatePos[i][8]==="filledO"){
    if(Draw===true){
    newX = 300;
    newY = 75;
    Draw = false;
    }
   
    winScreen(300, 75, 300, 525);
}

else if(ultimatePos[i][3]==="filledO" && ultimatePos[i][6]==="filledO" && ultimatePos[i][9]==="filledO"){
    if(Draw===true){
    newX = 450;
    newY = 75;
    Draw = false;
    }
   
    winScreen(450, 75, 450, 525);
}

else if(ultimatePos[i][1]==="filledO" && ultimatePos[i][5]==="filledO" && ultimatePos[i][9]==="filledO"){
    if(Draw===true){
    newX = 75;
    newY = 75;
    Draw = false;
    }
   
    winScreen(75, 75, 525, 525);
}

else if(ultimatePos[i][3]==="filledO" && ultimatePos[i][5]==="filledO" && ultimatePos[i][7]==="filledO"){
    if(Draw===true){
    newX = 75;
    newY = 525;
    Draw = false;
    }
   
    winScreen(75, 525, 525, 75, true);
}
else{
    hasMoved = true;
    
}
    }
}
};

//creating AI

var AI = function(difficulty){
    if(difficulty==="easy"){
        var move = round(random(0.5,9.49999));
        hasMoved = false;
        while(hasMoved === "false") {
            if(pos[move] === "empty") {
                os[move].draw();
                pos[move] = "filledO";
                hasMoved = "true";
            }
            else {
                move = round(random(0.5,9.499999));
            }
        }
    }
    else if(difficulty === "hard"){
       
        if(pos[1] === "filledO"&&pos[2]==="filledO"&&pos[3]==="empty" || pos[1] === "filledX"&&pos[2]==="filledX"&&pos[3]==="empty"){
            o3.draw();
            pos[3]="filledO";
        }
        else if(pos[2] === "filledO"&&pos[3]==="filledO"&&pos[1]==="empty" || pos[2] === "filledX"&&pos[3]==="filledX"&&pos[1]==="empty"){
            o1.draw();
            pos[1]="filledO";
        }
        else if(pos[4] === "filledO"&&pos[5]==="filledO"&&pos[6]==="empty" || pos[4] === "filledX"&&pos[5]==="filledX"&&pos[6]==="empty"){
            o6.draw();
            pos[6]="filledO";
        }
        else if(pos[5] === "filledO"&&pos[6]==="filledO"&&pos[4]==="empty" || pos[5] === "filledX"&&pos[6]==="filledX"&&pos[4]==="empty"){
            o4.draw();
            pos[4]="filledO";
        }
        else if(pos[7] === "filledO"&&pos[8]==="filledO"&&pos[9]==="empty" || pos[7] === "filledX"&&pos[8]==="filledX"&&pos[9]==="empty"){
            o9.draw();
            pos[9]="filledO";
        }
        else if(pos[8] === "filledO"&&pos[9]==="filledO"&&pos[7]==="empty" || pos[8] === "filledX"&&pos[9]==="filledX"&&pos[7]==="empty"){
            o7.draw();
            pos[7]="filledO";
        }
        else if(pos[1] === "filledO"&&pos[4]==="filledO"&&pos[7]==="empty" || pos[1] === "filledX"&&pos[4]==="filledX"&&pos[7]==="empty"){
            o7.draw();
            pos[7]="filledO";
        }
        else if(pos[4] === "filledO"&&pos[7]==="filledO"&&pos[1]==="empty" || pos[4] === "filledX"&&pos[7]==="filledX"&&pos[1]==="empty"){
            o1.draw();
            pos[1]="filledO";
        }
        else if(pos[2] === "filledO"&&pos[5]==="filledO"&&pos[8]==="empty" || pos[2] === "filledX"&&pos[5]==="filledX"&&pos[8]==="empty"){
            o8.draw();
            pos[8]="filledO";
        }
        else if(pos[5] === "filledO"&&pos[8]==="filledO"&&pos[2]==="empty" || pos[5] === "filledX"&&pos[8]==="filledX"&&pos[2]==="empty"){
            o2.draw();
            pos[2]="filledO";
        }
        else if(pos[3] === "filledO"&&pos[6]==="filledO"&&pos[9]==="empty" || pos[3] === "filledX"&&pos[6]==="filledX"&&pos[9]==="empty"){
            o6.draw();
            pos[6]="filledO";
        }
        else if(pos[6] === "filledO"&&pos[9]==="filledO"&&pos[3]==="empty" || pos[6] === "filledX"&&pos[9]==="filledX"&&pos[3]==="empty"){
            o3.draw();
            pos[3]="filledO";
        }
        else if(pos[1] === "filledO"&&pos[5]==="filledO"&&pos[9]==="empty" || pos[1] === "filledX"&&pos[5]==="filledX"&&pos[9]==="empty"){
            o9.draw();
            pos[9]="filledO";
        }
        else if(pos[5] === "filledO"&&pos[9]==="filledO"&&pos[1]==="empty" || pos[5] === "filledX"&&pos[9]==="filledX"&&pos[1]==="empty"){
            o1.draw();
            pos[1]="filledO";
        }
        else if(pos[3] === "filledO"&&pos[5]==="filledO"&&pos[7]==="empty" || pos[3] === "filledX"&&pos[5]==="filledX"&&pos[7]==="empty"){
            o7.draw();
            pos[7]="filledO";
        }
        else if(pos[5] === "filledO"&&pos[7]==="filledO"&&pos[3]==="empty" || pos[5] === "filledX"&&pos[7]==="filledX"&&pos[3]==="empty"){
            o3.draw();
            pos[3]="filledO";
        }
        else if(pos[5] === "empty"){
            o5.draw();
            pos[5]="filledO";
        }
        else if(pos.indexOf("empty") !== -1) {
            hasMoved = false;
           
        while(hasMoved === false){
        var move = round(random(0.5,9.49999));
        if(move===1 && pos[1]==="empty"){
            o1.draw();
            pos[1]="filledO";
            hasMoved = true;
        }
        else if(move===1 && pos[1]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        else if(move===2 && pos[2]==="empty"){
            o2.draw();
            pos[2]="filledO";
            hasMoved = true;
        }
        else if(move===2 && pos[2]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        else if(move===3 && pos[3]==="empty"){
            o3.draw();
            pos[3]="filledO";
            hasMoved = true;
        }
        else if(move===3 && pos[3]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        else if(move===4 && pos[4]==="empty"){
            o4.draw();
            pos[4]="filledO";
            hasMoved = true;
        }
        else if(move===4 && pos[4]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        else if(move===5 && pos[5]==="empty"){
            o5.draw();
            pos[5]="filledO";
            hasMoved = true;
        }
        else if(move===5 && pos[5]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        else if(move===6 && pos[6]==="empty"){
            o6.draw();
            pos[6]="filledO";
            hasMoved = true;
        }
        else if(move===6 && pos[6]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        else if(move===7 && pos[7]==="empty"){
            o7.draw();
            pos[7]="filledO";
            hasMoved = true;
        }
        else if(move===7 && pos[7]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        else if(move===8 && pos[8]==="empty"){
            o8.draw();
            pos[8]="filledO";
            hasMoved = true;
        }
        else if(move===8 && pos[8]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        else if(move===9 && pos[9]==="empty"){
            o9.draw();
            pos[9]="filledO";
            hasMoved = true;
        }  
        else if(move===9 && pos[9]!=="empty"){
            move = round(random(0.5,9.49999));
        }
        else{
            break;  
        }
        }
        }
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
    this.btnXSpeed = config.btnXSpeed || 0;
    this.btnYSpeed = config.btnYSpeed || 0;
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

Button.prototype.draw = function() {
    fill(64, 59, 64);
    rect(this.x-(this.width/2), this.y, this.width, this.height, 3);
    fill(0, 0, 0);
    textSize(22);
    textAlign(CENTER, CENTER);
    textFont(createFont("Trebuchet MS Bold"));
    text(this.label, this.x, this.y+this.height/2);
    this.x = this.x - this.btnXSpeed;
    this.y = this.y - this.btnYSpeed;
   
    if(this.x === 300) {
        this.btnXSpeed = 0;
    }
    if(this.y === 525) {
        this.btnYSpeed = 0;
    }
};


var btn1 = new Button({
    x: -105,
    y: 450,
    label: "Local Game",
    btnXSpeed: -9,
    onClick: function() {
        modeOp = true;
    }
});

var btn2 = new Button({
    x:705,
    y:525,
    label: "Vs Computer",
    btnXSpeed: 9,
    onClick: function(){
        difOp = true;
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
        for(var i = 1; i<pos.length; i++) {
            pos[i] = "empty";
        }
        canPlace = true;
        difOp=false;
        modeOp=false;
        myTurn = true;
        gameOver=false;
    }
});

var btn5 = new Button({
    x:185,
    y:525,
    label:"Easy",
    onClick: function(){
        gameMode = 2;
        AIdif="easy";
        background(130,36,36);
        drawBoard();
        for(var i = 1; i<pos.length; i++) {
            pos[i] = "empty";
        }
        AIdif="easy";
        canPlace = true;
        myTurn = true;
        gameOver=false;
    }
});

var btn6 = new Button({
    x:415,
    y:525,
    label:"Hard",
    onClick: function(){
        gameMode = 2;
        background(130,36,36);
        drawBoard();
        for(var i = 1; i<pos.length; i++) {
            pos[i] = "empty";
        }
        AIdif="hard";
        canPlace=true;
        myTurn = true;
        gameOver=false;
    }
});

var btn7 = new Button({
    x:185,
    y:450,
    label:"Normal",
    onClick: function(){
        gameMode = 1;
        background(130,36,36);
        drawBoard();
        for(var i = 1; i<pos.length; i++) {
            pos[i] = "empty";
        }
        canPlace=true;
        myTurn = true;
        gameOver=false;
    }
});

var btn8 = new Button({
    x:415,
    y:450,
    label:"Ultimate",
    onClick: function(){
        gameMode = 3;
        background(130,36,36);
        drawUltimateBoard();
        for(var i = 1; i<pos.length; i++) {
            pos[i] = "empty";
        }
        canPlace=true;
        myTurn = true;
        gameOver = false;
    }
});


mouseClicked = function(){
if(gameMode === 0){
    if(difOp === false && modeOp === false) {
        btn1.handleMouseClick();
        btn2.handleMouseClick();
        
    }
    else if(difOp === true) {
        btn5.handleMouseClick();
        btn6.handleMouseClick();
    }
    else if(modeOp === true) {
        btn7.handleMouseClick();
        btn8.handleMouseClick();
    }
}
else if(gameMode === 1){
    checkWin();
    if(myTurn === true && canPlace === true){
    for(var i = 1; i < pos.length; i++) {
        if(pos[i] === "empty") {
            xs[i].handleMouseClick();
        }
    }
}
else if(myTurn === false && canPlace === true){
    for(var i = 1; i < pos.length; i++) {
        if(pos[i] === "empty") {
            os[i].handleMouseClick();
        }
    }
}
    btn4.handleMouseClick();
}
else if(gameMode === 2) {
    btn4.handleMouseClick();
    if(myTurn===true && canPlace===true){
    for(var i = 1; i < pos.length; i++) {
        if(pos[i] === "empty") {
            xs[i].handleMouseClick();
        }
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
   btn4.handleMouseClick();
   strokeWeight(5);
   if(myTurn === true) {
   for(var i = 1; i<=9; i++) {
       for(var n = 1; n<=9; n++){
        ultimateXs[n + (i-1)*9].ultimateHMC(i, n, "x");
       }
    }
   }
   else if(myTurn === false) {
    for(var i = 1; i<=9; i++) {
        for(var n = 1; n<=9; n++) {
            
        ultimateOs[n + (i-1)*9].ultimateHMC(i, n, "o");
        }
    }
   }
   checkWin();
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
        textFont(createFont("Trebuchet MS Bold"));
        textSize(74);
        fill(0);
        textAlign(CENTER, CENTER);
        text("TIC-TAC-TOE", 300, 138);
        //btn3.draw();
        if(difOp === false && modeOp === false){
            btn1.draw();
            btn2.draw();
        }
        else if(difOp === true){
            btn5.draw();
            btn6.draw();
            btn1.draw();
        }
        else if(modeOp === true){
            btn7.draw();
            btn8.draw();
            btn2.draw();
        }
        }
        else if(gameMode === 1){
            strokeWeight(3);
            btn4.draw();
            strokeWeight(10);
        }
        else if(gameMode === 2){
            strokeWeight(3);
            btn4.draw();
            strokeWeight(10);
        }
        else if(gameMode === 3){
            strokeWeight(3);
            btn4.draw();
            strokeWeight(10);
        }
   
};
draw = function() {
drawMenu();
};
