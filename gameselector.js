//Setting up main game for tic tac toe
var newX;
var newY;
var gameMode = 0;
var myTurn = true;
var canPlace = true;
var Draw = true;
var difOp = false;
var modeOp = false;
var tutorialOp = false;
var nextMove = 0;
var hasMoved;
var AIdif;
var currentBoard = 5;

//variables for Rock Paper Scissors
var mypick;
var upick;
var myscore = 0;
var uscore = 0;
var Rock = getImage("cute/Rock");
var gamemode = 1;

//variables to define checkers + board
var color1 = color(0, 0, 0);
var color2 = color(31, 31, 31);
var color3 = color(168, 0, 0);
var color4 = color(20, 20, 20);
var color5 = color(122, 0, 0);
var color6 = color(82, 0, 0);
var selectColor = 300;
var dir = "down";
var checkerSize = 62.5;

//variables for rendering board
var row = 0;
var column = 0;
var iterations = 0;
var lightIterations = 0;
var mode = 0;
var Size = 200;
var mouseSize = 50;
var reset = true;
var selected = null;
var selectedColumn = null;
var selectedRow = null;
var selectedColor = null;
var selectedRank = null;
var turn = "black";

//variables for rules
var arrowPos = 70;
var rateSpread = 2;

//gamemode
var Game = 0;

var pos = ["filler","empty","empty","empty","empty","empty","empty","empty","empty","empty"];

//holds all of the x objects in ultimate mode
var ultimateXs = ["filler", "_"];

//holds all of the y objects in ultimate mode
var ultimateOs = ["filler", "_"];

//holds weather a certain spot is filled in ultimate mode
var ultimatePos = [["filler"]];

//holds location data for all posible x's and y's
var ultimateCords = [["filler"]];

//gameboards
var board = [[["D", 0, 0, 37.5, 37.5, "light"], ["_", 75, 0, null, null, "dark"], ["D", 150, 0, 187.5, 37.5, "light"], ["_", 225, 0, null, null, "dark"], ["D", 300, 0, 337.5, 37.5, "light"], ["_", 375, 0, null, null, "dark"], ["D", 450, 0, 487.5, 37.5, "light"], ["_", 525, 0, null, null, "dark"]], [["_", 0, 75, null, null, "dark"], ["D", 75, 75, 112.5, 112.5, "light"], ["_", 150, 75, null, null, "dark"], ["D", 225, 75, 262.5, 112.5, "light"], ["_", 300, 75, null, null, "dark"], ["D", 375, 75, 412.5, 112.5, "light"], ["_", 450, 75, null, null, "dark"], ["D", 525, 75, 562.5, 112.5, "light"]], [["D", 0, 150, 37.5, 187.5, "light"], ["_", 75, 150, null, null, "dark"], ["D", 150, 150, 187.5, 187.5, "light"], ["_", 225, 150, null, null, "dark"], ["D", 300, 150, 337.5, 187.5, "light"], ["_", 375, 150, null, null, "dark"], ["D", 450, 150, 487.5, 187.5, "light"], ["_", 525, 150, null, null, "dark"]], [["_", 0, 225, null, null, "dark"], ["_", 75, 225, 112.5, 262.5, "light"], ["_", 150, 225, null, null, "dark"], ["_", 225, 225, 262.5, 262.5, "light"], ["_", 300, 225, null, null, "dark"], ["_", 375, 225, 412.5, 262.5, "light"], ["_", 450, 225, null, null, "dark"], ["_", 525, 225, 562.5, 262.5, "light"]], [["_", 0, 300, 37.5, 337.5, "light"], ["_", 75, 300, null, null, "dark"], ["_", 150, 300, 187.5, 337.5, "light"], ["_", 225, 300, null, null, "dark"], ["_", 300, 300, 337.5, 337.5, "light"], ["_", 375, 300, 412.5, 337.5, "dark"], ["_", 450, 300, 487.5, 337.5, "light"], ["_", 525, 300, null, null, "dark"]], [["_", 0, 375, null, null, "dark"], ["L", 75, 375, 112.5, 412.5, "light"], ["_", 150, 375, null, null, "dark"], ["L", 225, 375, 262.5, 412.5, "light"], ["_", 300, 375, null, null, "dark"], ["L", 375, 375, 412.5, 412.5, "light"], ["_", 450, 375, null, null, "dark"], ["L", 525, 375, 562.5, 412.5, "light"]], [["L", 0, 450, 37.5, 487.5, "light"], ["_", 75, 450, null, null, "dark"], ["L", 150, 450, 187.5, 487.5, "light"], ["_", 225, 450, null, null, "dark"], ["L", 300, 450, 337.5, 487.5, "light"], ["_", 375, 450, null, null, "dark"], ["L", 450, 450, 487.5, 487.5, "light"], ["_", 525, 450, null, null, "dark"]], [["_", 0, 525, null, null, "dark"], ["L", 75, 525, 112.5, 562.5, "light"], ["_", 150, 525, null, null, "dark"], ["L", 225, 525, 262.5, 562.5, "light"], ["_", 300, 525, null, null, "dark"], ["L", 375, 525, 412.5, 562.5, "light"], ["_", 450, 525, null, null, "dark"], ["L", 525, 525, 562.5, 562.5, "light"]]];

var udrawRock = function () {
    image(Rock,125,115);
};

var drawRock = function () {
    image(Rock,375,115);
};

var udrawPaper = function () {
    var paperX = 175;
    var paperY = 230;
    noStroke();
    fill(230, 200, 140);
    rect(paperX-53,paperY-34,103,65);
    fill(210, 180, 120);
    rect(paperX-52,paperY-33,102,64);
    fill(190, 160, 100);
    rect(paperX-51,paperY-32,101,63);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    rect(paperX-50,paperY-31,100,62);
    noStroke();
};

var drawPaper = function () {
    var paperX = 425;
    var paperY = 230;
    noStroke();
    fill(230, 200, 140);
    rect(paperX-53,paperY-34,103,65);
    fill(210, 180, 120);
    rect(paperX-52,paperY-33,102,64);
    fill(190, 160, 100);
    rect(paperX-51,paperY-32,101,63);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    rect(paperX-50,paperY-31,100,62);
    noStroke();
    fill(222, 222, 222);
};

var udrawScissors = function () {
    var scissorsX = 175;
    var scissorsY = 230;
    stroke(0, 0, 0);
    fill(168, 168, 168);
    triangle(scissorsX+28,scissorsY+26,scissorsX-30,scissorsY-50,scissorsX+17,scissorsY+34);
    triangle(scissorsX-29,scissorsY+26,scissorsX+30,scissorsY-50,scissorsX-17,scissorsY+34);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    ellipse(scissorsX,scissorsY-4,5,5);
    strokeWeight(4);
    fill(250,220,160);
    ellipse(scissorsX+-20,scissorsY+26,17,17);
    ellipse(scissorsX+20,scissorsY+26,17,17);
    strokeWeight(1);
};

var drawScissors = function () {
    var scissorsX = 425;
    var scissorsY = 230;
    stroke(0, 0, 0);
    fill(168, 168, 168);
    triangle(scissorsX+29,scissorsY+26,scissorsX-30,scissorsY-50,scissorsX+17,scissorsY+34);
    triangle(scissorsX-29,scissorsY+26,scissorsX+30,scissorsY-50,scissorsX-17,scissorsY+34);
    stroke(240, 240, 240);
    line(scissorsX+30,scissorsY+-50,scissorsX+-16,scissorsY+12);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    ellipse(scissorsX,scissorsY-4,5,5);
    strokeWeight(4);
    fill(252, 218, 159);
    ellipse(scissorsX+24,scissorsY+26,17,17);
    ellipse(scissorsX-24,scissorsY+26,17,17);
    strokeWeight(1);
};

var winscreen = function(winstate){
    textSize(50);
    fill(252, 218, 159);
    noStroke();
    rect(0, 0, 400, 100);
    fill(0, 0, 0);
    if(winstate === "tie"){
        text("It's a tie!", 200, 100);
    }
    else if(winstate === "player"){
        text("You win!", 200, 100);
        myscore += 1;
    }
    else if(winstate === "ai"){
        text("Computer wins!", 110, 100);
        uscore += 1;
    }
};

var menuRPS = function() {
    background(252, 218, 159);
    textAlign(TOP, BASELINE);
    fill(48, 48, 48);
    textSize(50);
    textFont(createFont("Trebuchet MS Bold"));
    text("Rock,", 235, 100);
    text("Paper,", 230, 200);
    text("Scissors", 210, 300);
    stroke(0, 0, 0);
    strokeWeight(5);
    fill(112, 112, 112);
    rect(150, 422.5, 300, 100);
    fill(0, 0, 0);
    text("Play", 250, 485);
    //arrows
    fill(224, 224, 224);
    strokeWeight(5);
    var buttonY = 475;
    var buttonX = 15;
    triangle(buttonX, buttonY, buttonX+70, buttonY+50, buttonX+70, buttonY-50);
    triangle(600-buttonX, buttonY, 600-(buttonX+70), buttonY+50, 600-(buttonX+70), buttonY-50);
};

var gameRPS = function() { 
    background(252, 218, 159);
    
    //score
    fill(0, 0, 0);
    textSize(25);
    stroke(0, 0, 0);
    text("You: " + myscore, 137.5, 150);
    text("Computer: " + uscore, 350, 150);
    textSize(50);
    text("Click an Icon to Play!", 75, 100);
    mypick = null;
    upick = null;
    
    //paper bottom
    var paperX = 525;
    var paperY = 525;
    noStroke();
    fill(255, 255, 255);
    strokeWeight(1);
    stroke(0, 0, 0);
    rect(paperX-50,paperY-31,100,62);
    noStroke();
    
    //scissors bottom
    var scissorsX = 300;
    var scissorsY = 535;
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(168, 168, 168);
    triangle(scissorsX+28,scissorsY+26,scissorsX-30,scissorsY-50,scissorsX+17,scissorsY+34);
    triangle(scissorsX-29,scissorsY+26,scissorsX+30,scissorsY-50,scissorsX-17,scissorsY+34);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    ellipse(scissorsX,scissorsY-4,5,5);
    strokeWeight(4);
    fill(250,220,160);
    ellipse(scissorsX+-20,scissorsY+26,17,17);
    ellipse(scissorsX+20,scissorsY+26,17,17);
    strokeWeight(1);
    
    //rock bottom
    var rockX = 60;
    var rockY = 525;
    image(Rock,rockX-40,rockY-110);
};

//playing the game
var game = function(){
    //resets each frame
    if (reset === true){
        background(255, 255, 255);
        reset = false;
    }
    
    //checking to see what to render
    while (row < 8){
        //left to right
        if (column < 8){
            if (board[row][column][5] === "light"){
                fill(color3);
                noStroke();
                rect(board[row][column][1], board[row][column][2], 75, 75);
            }
            
            else if (board[row][column][5] === "dark"){
                fill(color4);
                noStroke();
                rect(board[row][column][1], board[row][column][2], 75, 75);
            }
            
            if (board[row][column][0] === "D"){
                noStroke();
                fill(color1);
                ellipse(board[row][column][3], board[row][column][4], checkerSize, checkerSize);
                noFill();
                strokeWeight(4);
                stroke(color2);
                ellipse(board[row][column][3], board[row][column][4], checkerSize/1.2,checkerSize/1.2);
            }
            
            else if (board[row][column][0] === "L"){
                noStroke();
                fill(color5);
                ellipse(board[row][column][3], board[row][column][4], checkerSize, checkerSize);
                noFill();
                strokeWeight(4);
                stroke(color6);
                ellipse(board[row][column][3], board[row][column][4], checkerSize/1.2,checkerSize/1.2);
            }
            
            else if (board[row][column][0] === "DK"){
                noStroke();
                fill(color1);
                ellipse(board[row][column][3], board[row][column][4], checkerSize, checkerSize);
                noFill();
                strokeWeight(4);
                stroke(color2);
                ellipse(board[row][column][3], board[row][column][4], checkerSize/1.2,checkerSize/1.2);
                line(board[row][column][3] - 5, board[row][column][4] - 10, board[row][column][3] - 5, board[row][column][4] + 10);
                line(board[row][column][3] + 5, board[row][column][4] - 10, board[row][column][3] - 5, board[row][column][4] + 5);
                line(board[row][column][3] + 5, board[row][column][4] + 10, board[row][column][3] - 5, board[row][column][4]);
            }
            
            else if (board[row][column][0] === "LK"){
                noStroke();
                fill(color5);
                ellipse(board[row][column][3], board[row][column][4], checkerSize, checkerSize);
                noFill();
                strokeWeight(4);
                stroke(color6);
                ellipse(board[row][column][3], board[row][column][4], checkerSize/1.2,checkerSize/1.2);
                line(board[row][column][3] - 5, board[row][column][4] - 10, board[row][column][3] - 5, board[row][column][4] + 10);
                line(board[row][column][3] + 5, board[row][column][4] - 10, board[row][column][3] - 5, board[row][column][4] + 5);
                line(board[row][column][3] + 5, board[row][column][4] + 10, board[row][column][3] - 5, board[row][column][4]);
            }
            
            else{
                //dont render a checker
            }
            
            column += 1;
        }
        
        //goes down one and starts at front of row again
        else{
            row += 1;
            column = 0;
        }
    }
    
    //selected highlight
    if(selected === true){
        noFill();
        strokeWeight(3);
        stroke(180, 180, 60, selectColor);
        ellipse(board[selectedColumn][selectedRow][3], board[selectedColumn][selectedRow][4], checkerSize + 3, checkerSize + 3);
    }
    
    if(selectColor>0 && dir === "down"){
        selectColor -= 5;
    }
    
    else if(selectColor<300 && dir === "up"){
        selectColor += 5;
    }
    
    else if(selectColor === 0 && dir === "down"){
        dir = "up";
    }
    
    else if(selectColor === 300 && dir === "up"){
        dir = "down";
    }
    
    //resets for next frame
    if (row === 8){
        row = 0;
        column = 0;
        reset = true;
    }
    
    var newLength = board.length + 1;
    
    for(var a = 0; a<board.length; a++){
        for(var w = 0; w<board[a].length; w++){
            if(board[a][w][0] === "D" && a === 7){
                board[a][w][0] = "DK";
            }
            else if(board[a][w][0] === "L" && a === 0){
                board[a][w][0] = "LK";
            }
        }
    }
};

//menu
var menu = function(){
    background(38, 0, 0);
    textAlign(TOP, BASELINE);
    
    //vignette effect
    iterations = 0;
    lightIterations = 0;
    Size = 750;
    mouseSize = 50;
    while(iterations<200){
        noStroke();
        fill(122, 0, 0, iterations);
        ellipse(300, 300, Size, Size);
        Size-=3;
        iterations+=0.1;
    }
    
    //shadows
    fill(0, 0, 0, 70);
    textFont(createFont("Trebuchet MS Bold"));
    textSize(70);
    text("CHECKERS:", 115-((mouseX-300)/5), 175-((mouseY-200)/10));
    textSize(50);
    text("THE GAME", 175-((mouseX-300)/10), 240-((mouseY-200)/10));
    
    //title
    fill(209, 209, 209);
    textFont(createFont("Trebuchet MS Bold"));
    textSize(75);
    text("CHECKERS:", 115, 175);
    textSize(55);
    text("THE GAME", 165, 230);
    
    //play button
    stroke(0, 0, 0);
    strokeWeight(5);
    fill(64, 59, 64);
    rect(200, 350, 200, 100, 3);
    fill(0, 0, 0);
    text("Play", 245, 415);
    
    //rules button
    stroke(0, 0, 0);
    strokeWeight(5);
    fill(64, 59, 64);
    rect(200, 475, 200, 65, 3);
    fill(0, 0, 0);
    textSize(25);
    text("How To Play", 230, 515);
    
    //buttons
    fill(224, 224, 224);
    var buttonY = 475;
    var buttonX = 15;
    triangle(buttonX, buttonY, buttonX+70, buttonY+50, buttonX+70, buttonY-50);
    triangle(600-buttonX, buttonY, 600-(buttonX+70), buttonY+50, 600-(buttonX+70), buttonY-50);
};

//rules
var rules = function(){
    background(38, 0, 0);
    
    //vignette effect
    iterations = 0;
    lightIterations = 0;
    Size = 750;
    mouseSize = 50;
    while(iterations<200){
        noStroke();
        fill(122, 0, 0, iterations);
        ellipse(300, 300, Size, Size);
        Size-=3;
        iterations+=0.1;
    }
    
    //panels
    fill(255, 255, 255, 75);
    strokeWeight(10);
    stroke(0, 0, 0);
    for(var runs = 0; runs<3; runs+=1){
        for(var runs2 = 0; runs2<2; runs2+=1){
            fill(255, 255, 255, 75);
            strokeWeight(10);
            stroke(0, 0, 0);
            rect(25+(runs*200), 25+(runs2*275), 150, 150, 20);
            //top left
            if (runs === 0 && runs2 === 0){
                //checker
                noStroke();
                fill(color5);
                ellipse(70, 70, checkerSize, checkerSize);
                noFill();
                strokeWeight(4);
                stroke(color6);
                ellipse(70, 70, checkerSize/1.2,checkerSize/1.2);
                
                //arrow
                stroke(255, 255, 255);
                strokeWeight(10);
                line(70, 70, arrowPos, arrowPos);
                noStroke();
                fill(255, 255, 255);
                triangle(arrowPos + 10, arrowPos - 10, arrowPos - 10, arrowPos + 10, arrowPos + 10, arrowPos + 10);
                
                //rule
                textSize(12.5);
                textAlign(CENTER, TOP);
                text("Click on any open space in front of and diagonal to a checker to move to it.", 15, 215, 175, 200);
            }
            //top center
            else if (runs === 1 && runs2 === 0){
                //checkers
                noStroke();
                fill(color5);
                ellipse(270, 70, checkerSize, checkerSize);
                noFill();
                strokeWeight(4);
                stroke(color6);
                ellipse(270, 70, checkerSize/1.2,checkerSize/1.2);
                noStroke();
                fill(color1);
                ellipse(330, 130, checkerSize, checkerSize);
                noFill();
                strokeWeight(4);
                stroke(color4);
                ellipse(330, 130, checkerSize/1.2,checkerSize/1.2);
                
                //arrow
                stroke(255, 255, 255);
                strokeWeight(10);
                line(270, 70, arrowPos + 200, arrowPos);
                noStroke();
                fill(255, 255, 255);
                triangle(arrowPos + 210, arrowPos - 10, arrowPos + 190, arrowPos + 10, arrowPos + 210, arrowPos + 10);
                
                //rule
                textSize(12.5);
                textAlign(CENTER, TOP);
                text("Click on a diagonal checker with an open space behind it to jump it and proceed forward.", 215, 210, 175, 200);
            }
            //top right
            else if (runs === 2 && runs2 === 0){
                //checker
                noStroke();
                fill(color5);
                ellipse(500, 100, checkerSize, checkerSize);
                noFill();
                strokeWeight(4);
                stroke(color6);
                ellipse(500, 100, checkerSize/1.2,checkerSize/1.2);
                line(495, 90, 495, 110);
                line(505, 90, 495, 100);
                line(505, 110, 495, 100);
                
                //rule
                fill(255, 255, 255);
                textSize(12.5);
                textAlign(CENTER, TOP);
                text("Reach the opposite end of the board to king a checker (kings can move both forwards and backwards).", 415, 210, 175, 200);
            }
            //bottom left
            else if (runs === 0 && runs2 === 1){
                //trophy
                stroke(214, 178, 0);
                strokeWeight(5);
                fill(255, 255, 255, 0);
                ellipse(79, 358, 20, 20);
                ellipse(121, 358, 20, 20);
                noStroke();
                fill(70, 25, 0);
                rect(80, 402, 40, 20, 10);
                stroke(214, 178, 0);
                strokeWeight(10);
                line(100, 355, 100, 400);
                noStroke();
                fill(255, 215, 0);
                arc(100, 345, 50, 80, 0, 180);
                stroke(240, 196, 0);
                strokeWeight(5);
                line(87, 355, 111, 355);
                
                //rule
                fill(255, 255, 255);
                textSize(12.5);
                textAlign(CENTER, TOP);
                text("The last player with checkers remaining wins!", 15, 490, 175, 200);
            }
            //bottom center
            else if (runs === 1 && runs2 === 1){
                //checker
                noStroke();
                fill(color1);
                ellipse(300, 395, checkerSize, checkerSize);
                noFill();
                strokeWeight(4);
                stroke(color4);
                ellipse(300, 395, checkerSize/1.2,checkerSize/1.2);
                
                //1
                fill(255, 255, 255);
                textSize(150);
                textAlign(CENTER, TOP);
                text("1", 292.5, 285);
                
                //rule
                fill(255, 255, 255);
                textSize(12.5);
                textAlign(CENTER, TOP);
                text("Black moves first.", 215, 495, 175, 200);
            }
            //bottom right
            else if (runs === 2 && runs2 === 1){
                //exit sign
                fill(0, 0, 0);
                strokeWeight(7);
                line(465, 330, 465, 420);
                line(535, 330, 535, 420);
                line(467, 329, 533, 329);
                ellipse(505, 355, 12, 12);
                line(504, 370, 490, 370);
                line(490, 371, 483, 382);
                line(505, 371, 515, 380);
                line(515, 380, 525, 380);
                line(510, 420, 499, 390);
                line(494, 405, 495, 390);
                line(480, 405, 493, 405);
                strokeWeight(15);
                line(503, 375, 499, 390);
                
                //rule
                fill(255, 255, 255);
                textSize(12.5);
                textAlign(CENTER, TOP);
                text("Press backspace to return to the menu.", 415, 490, 175, 200);
            }
        }
    }
    
    //moving arrow
    if (arrowPos < 140){
        arrowPos += rateSpread;
        rateSpread = rateSpread / 1.025;
    }
    else if (arrowPos >= 140){
        arrowPos = 70;
        rateSpread = 2;
    }
    
    textAlign(TOP, BASELINE);
};

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
        
        if (this.isMouseInside("ultimate") && empty === true && XO === "x" && i === currentBoard) {
            this.draw();
            ultimatePos[i][n] = "filledX";
            currentBoard = n;
        }
        
        else if(this.isMouseInside("ultimate") && empty === true && XO === "o" && i === currentBoard) {
            this.draw();
            ultimatePos[i][n] = "filledO";
            currentBoard = n;
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
        background(130, 36, 36);
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
        if(gameMode !==3){
        line(pos1X,pos1Y,newX,newY);
        }else if(gameMode === 3) {
            line(pos1X, pos1Y, pos2X, pos2Y);
        }
        canPlace = false;
        gameOver = true;
    };
    
var ultimateWinScreen = function(pos1X, pos1Y, pos2X, pos2Y, player, posnum) {
        strokeWeight(10);
        if(pos[posnum] === 'empty'){
            if(player === 'x') {
                line(pos1X, pos1Y, pos2X, pos2Y);
                line(pos2X, pos1Y, pos1X, pos2Y);
                pos[posnum] = 'filledX';
            }
            else if(player === 'o') {
                noFill();
                ellipse((pos1X+pos2X)/2, (pos1Y+pos2Y)/2, pos2X-pos1X, pos2X-pos1X);
                pos[posnum] =  'filledO';
        }
        }
    };
    
var checkWin = function() {
    if(pos[1]==="filledX" && pos[2]==="filledX" && pos[3]==="filledX"){
        if(Draw===true){
        newX = 75;
        newY = 150;
        Draw = false;
        }
       
        winScreen(75, 150, 525, 150, 'x');
    }
    
    else if(pos[4]==="filledX" && pos[5]==="filledX" && pos[6]==="filledX"){
        if(Draw===true){
        newX = 75;
        newY = 300;
        Draw = false;
        }
       
        winScreen(75, 300, 525, 300, 'x');
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
        for(var i = 1; i < 10; i++){
            var player = 'x'; 
            
            if(ultimatePos[i][1]==="filledX" && ultimatePos[i][2]==="filledX" && ultimatePos[i][3]==="filledX"){
        if(Draw===true){
        newX = 75;
        newY = 150;
        Draw = false;
        }
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player,i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][4]==="filledX" && ultimatePos[i][5]==="filledX" && ultimatePos[i][6]==="filledX"){
        if(Draw===true){
        newX = 75;
        newY = 300;
        Draw = false;
        }
      if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][7]==="filledX" && ultimatePos[i][8]==="filledX" && ultimatePos[i][9]==="filledX"){
        if(Draw===true){
        newX = 75;
        newY = 450;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][1]==="filledX" && ultimatePos[i][4]==="filledX" && ultimatePos[i][7]==="filledX"){
        if(Draw===true){
        newX = 150;
        newY = 75;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][2]==="filledX" && ultimatePos[i][5]==="filledX" && ultimatePos[i][8]==="filledX"){
        if(Draw===true){
        newX = 300;
        newY = 75;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][3]==="filledX" && ultimatePos[i][6]==="filledX" && ultimatePos[i][9]==="filledX"){
        if(Draw===true){
        newX = 450;
        newY = 75;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][1]==="filledX" && ultimatePos[i][5]==="filledX" && ultimatePos[i][9]==="filledX"){
        if(Draw===true){
        newX = 75;
        newY = 75;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][3]==="filledX" && ultimatePos[i][5]==="filledX" && ultimatePos[i][7]==="filledX"){
        if(Draw===true){
        newX = 75;
        newY = 525;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    //for o winning
    player = 'o';
    
    if(ultimatePos[i][1]==="filledO" && ultimatePos[i][2]==="filledO" && ultimatePos[i][3]==="filledO"){
        if(Draw===true){
        newX = 75;
        newY = 150;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][4]==="filledO" && ultimatePos[i][5]==="filledO" && ultimatePos[i][6]==="filledO"){
        if(Draw===true){
        newX = 75;
        newY = 300;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][7]==="filledO" && ultimatePos[i][8]==="filledO" && ultimatePos[i][9]==="filledO"){
        if(Draw===true){
        newX = 75;
        newY = 450;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][1]==="filledO" && ultimatePos[i][4]==="filledO" && ultimatePos[i][7]==="filledO"){
        if(Draw===true){
        newX = 150;
        newY = 75;
        Draw = false;
        }
       
    if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
        
    }
    
    else if(ultimatePos[i][2]==="filledO" && ultimatePos[i][5]==="filledO" && ultimatePos[i][8]==="filledO"){
        if(Draw===true){
        newX = 300;
        newY = 75;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][3]==="filledO" && ultimatePos[i][6]==="filledO" && ultimatePos[i][9]==="filledO"){
        if(Draw===true){
        newX = 450;
        newY = 75;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][1]==="filledO" && ultimatePos[i][5]==="filledO" && ultimatePos[i][9]==="filledO"){
        if(Draw===true){
        newX = 75;
        newY = 75;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    
    else if(ultimatePos[i][3]==="filledO" && ultimatePos[i][5]==="filledO" && ultimatePos[i][7]==="filledO"){
        if(Draw===true){
        newX = 75;
        newY = 525;
        Draw = false;
        }
       
        if(i<=3) {
           ultimateWinScreen(100+(150*(i-1)), 100, 200+(150*(i-1)), 200, player, i); 
        }else if(i>3 && i<=6) {
            ultimateWinScreen(100+(150*(i-4)), 250, 200+(150*(i-4)), 350, player, i);
        }else if(i>6 && i<=9) {
            ultimateWinScreen(100+(150*(i-7)), 400, 200+(150*(i-7)), 500, player, i);
        }
    }
    else{
        hasMoved = true;
        
    }
    }
    };
    
//creating AI
    
var AI = function(difficulty){
        if(difficulty==="easy"){
            var move = round(random(0.5,9.49999));
            hasMoved = false;
            while(hasMoved === false) {
                if(pos[move] === "empty") {
                    os[move].draw();
                    pos[move] = "filledO";
                    hasMoved = true;
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
        return mouseX > this.x - this.width / 2&&
               mouseX < (this.x + this.width / 2) &&
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
        width: 200,
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
            currentBoard = 5;
            
            ultimatePos = [["filler"]];
            for(var i = 0; i < 9; i++) {
                ultimatePos.push(["filler", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]);
    }
        }
    });
    
var btn5 = new Button({
        x:195,
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
        x:405,
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
        x:195,
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
        x:405,
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
    
var btn9 = new Button({
        x:300,
        y:375,
        label:"Tutorial",
        onClick: function() {
            gameMode = 4;
        }
    });
    
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
                //arrows
                fill(224, 224, 224);
                strokeWeight(5);
                var buttonY = 475;
                var buttonX = 15;
                triangle(buttonX, buttonY, buttonX+70, buttonY+50, buttonX+70, buttonY-50);
                triangle(600-buttonX, buttonY, 600-(buttonX+70), buttonY+50, 600-(buttonX+70), buttonY-50);
                //btn3.draw();
                if(difOp === false && modeOp === false){
                    btn1.draw();
                    btn2.draw();
                    btn9.draw();
                }
                else if(difOp === true){
                    btn5.draw();
                    btn6.draw();
                    btn1.draw();
                    btn9.draw();
                }
                else if(modeOp === true){
                    btn7.draw();
                    btn8.draw();
                    btn2.draw();
                    btn9.draw();
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
                noStroke();
                fill(64, 64, 64);
                stroke(0, 0, 0);
                strokeWeight(10);
            }
    };
    
draw = function() {
    if (Game === 0){
        drawMenu();
    }
    else if(Game === 1){
        if (mode===0){
            menu(); 
        }
        else if (mode===1){
            game();
        }
        else if (mode===2){
            rules();
        }
    }
};

//menu exit
keyTyped = function(){
    if(key.code === 8 && Game === 1){
        mode = 0;
        row = 0;
        column = 0;
        reset = true;
        selected = null;
        selectedColumn = null;
        selectedRow = null;
        selectedColor = null;
        turn = "black";
        board = [[["D", 0, 0, 37.5, 37.5, "light"], ["_", 75, 0, null, null, "dark"], ["D", 150, 0, 187.5, 37.5, "light"], ["_", 225, 0, null, null, "dark"], ["D", 300, 0, 337.5, 37.5, "light"], ["_", 375, 0, null, null, "dark"], ["D", 450, 0, 487.5, 37.5, "light"], ["_", 525, 0, null, null, "dark"]], [["_", 0, 75, null, null, "dark"], ["D", 75, 75, 112.5, 112.5, "light"], ["_", 150, 75, null, null, "dark"], ["D", 225, 75, 262.5, 112.5, "light"], ["_", 300, 75, null, null, "dark"], ["D", 375, 75, 412.5, 112.5, "light"], ["_", 450, 75, null, null, "dark"], ["D", 525, 75, 562.5, 112.5, "light"]], [["D", 0, 150, 37.5, 187.5, "light"], ["_", 75, 150, null, null, "dark"], ["D", 150, 150, 187.5, 187.5, "light"], ["_", 225, 150, null, null, "dark"], ["D", 300, 150, 337.5, 187.5, "light"], ["_", 375, 150, null, null, "dark"], ["D", 450, 150, 487.5, 187.5, "light"], ["_", 525, 150, null, null, "dark"]], [["_", 0, 225, null, null, "dark"], ["_", 75, 225, 112.5, 262.5, "light"], ["_", 150, 225, null, null, "dark"], ["_", 225, 225, 262.5, 262.5, "light"], ["_", 300, 225, null, null, "dark"], ["_", 375, 225, 412.5, 262.5, "light"], ["_", 450, 225, null, null, "dark"], ["_", 525, 225, 562.5, 262.5, "light"]], [["_", 0, 300, 37.5, 337.5, "light"], ["_", 75, 300, null, null, "dark"], ["_", 150, 300, 187.5, 337.5, "light"], ["_", 225, 300, null, null, "dark"], ["_", 300, 300, 337.5, 337.5, "light"], ["_", 375, 300, 412.5, 337.5, "dark"], ["_", 450, 300, 487.5, 337.5, "light"], ["_", 525, 300, null, null, "dark"]], [["_", 0, 375, null, null, "dark"], ["L", 75, 375, 112.5, 412.5, "light"], ["_", 150, 375, null, null, "dark"], ["L", 225, 375, 262.5, 412.5, "light"], ["_", 300, 375, null, null, "dark"], ["L", 375, 375, 412.5, 412.5, "light"], ["_", 450, 375, null, null, "dark"], ["L", 525, 375, 562.5, 412.5, "light"]], [["L", 0, 450, 37.5, 487.5, "light"], ["_", 75, 450, null, null, "dark"], ["L", 150, 450, 187.5, 487.5, "light"], ["_", 225, 450, null, null, "dark"], ["L", 300, 450, 337.5, 487.5, "light"], ["_", 375, 450, null, null, "dark"], ["L", 450, 450, 487.5, 487.5, "light"], ["_", 525, 450, null, null, "dark"]], [["_", 0, 525, null, null, "dark"], ["L", 75, 525, 112.5, 562.5, "light"], ["_", 150, 525, null, null, "dark"], ["L", 225, 525, 262.5, 562.5, "light"], ["_", 300, 525, null, null, "dark"], ["L", 375, 525, 412.5, 562.5, "light"], ["_", 450, 525, null, null, "dark"], ["L", 525, 525, 562.5, 562.5, "light"]]];
    }
    
    else if (key.code === 8 && Game === 2){
        menuRPS();
        gamemode = 1;
        myscore = 0;
        uscore = 0;
    }
};
    
mouseClicked = function(){
    if (Game === 0){
            if(gameMode === 0){
                if(difOp === false && modeOp === false) {
                    btn1.handleMouseClick();
                    btn2.handleMouseClick();
                    btn9.handleMouseClick();
                }
                else if(difOp === true) {
                    btn5.handleMouseClick();
                    btn6.handleMouseClick();
                }
                else if(modeOp === true) {
                    btn7.handleMouseClick();
                    btn8.handleMouseClick();
                }
                if(mouseX < 85 && mouseX > 15 && mouseY < 525 && mouseY > 425){
                    Game = 2;
                    menuRPS();
                }
                else if(mouseX > 515 && mouseX < 585 && mouseY < 525 && mouseY > 425){
                    Game = 1;
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
            else if(gameMode === 4) {
            background(130,36,36);
            }
        }
     
    else if (Game === 1){  
        if(mouseX < 85 && mouseX > 15 && mouseY < 525 && mouseY > 425 && mode === 0){
            Game = 0;
        }
        else if(mouseX > 515 && mouseX < 585 && mouseY < 525 && mouseY > 425 && mode === 0){
            Game = 2;
            menuRPS();
        }
        
        //buttons
        if(mode === 0 && mouseX >= 200 && mouseX <= 400 && mouseY <= 450 && mouseY >= 350){
            mode = 1;
        }
        else if(mode === 0 && mouseX >= 200 && mouseX <= 400 && mouseY <= 540 && mouseY >= 475){
            mode = 2;
        }
         
        //game
        else{
            //checks which tile is clicked
            for(var l = 0; l<board.length; l++){
                for(var i = 0; i<board[l].length; i++){
                    if(mouseX<=board[l][i][1] + 75 && mouseX>=board[l][i][1] && mouseY<=board[l][i][2] + 75 && mouseY>=board[l][i][2] && board[l][i][5] === "light"){
                        //moves into empty spaces
                        if(board[l][i][0] === "_" && selected === true && selectedColor === "black" && selectedRank === 1 && (board[l][i] === board[selectedColumn+1][selectedRow+1] || board[l][i] === board[selectedColumn+1][selectedRow-1]) && turn === "black"){
                            board[l][i][0] = "D";
                            board[selectedColumn][selectedRow][0] = "_";
                            selected = false;
                            selectedColumn = null;
                            selectedRow = null;
                            turn = "red";
                        }
                        
                        else if(board[l][i][0] === "_" && selected === true && selectedColor === "red" && selectedRank === 1 && (board[l][i] === board[selectedColumn-1][selectedRow+1] || board[l][i] === board[selectedColumn-1][selectedRow-1]) && turn === "red"){
                            board[l][i][0] = "L";
                            board[selectedColumn][selectedRow][0] = "_";
                            selected = false;
                            selectedColumn = null;
                            selectedRow = null;
                            turn = "black";
                        }
                        
                        else if(board[l][i][0] === "_" && selected === true && selectedColor === "black" && selectedRank === 2 && selectedColumn < 7 && (board[l][i] === board[selectedColumn+1][selectedRow+1] || board[l][i] === board[selectedColumn+1][selectedRow-1] || board[l][i] === board[selectedColumn-1][selectedRow+1] || board[l][i] === board[selectedColumn-1][selectedRow-1]) && turn === "black"){
                            board[l][i][0] = "DK";
                            board[selectedColumn][selectedRow][0] = "_";
                            selected = false;
                            selectedColumn = null;
                            selectedRow = null;
                            turn = "red";
                        }
                        
                        else if(board[l][i][0] === "_" && selected === true && selectedColor === "black" && selectedRank === 2 && selectedColumn === 7 && (board[l][i] === board[selectedColumn-1][selectedRow+1] || board[l][i] === board[selectedColumn-1][selectedRow-1]) && turn === "black"){
                            board[l][i][0] = "DK";
                            board[selectedColumn][selectedRow][0] = "_";
                            selected = false;
                            selectedColumn = null;
                            selectedRow = null;
                            turn = "red";
                        }
                        
                        else if(board[l][i][0] === "_" && selected === true && selectedColor === "red" && selectedRank === 2 && ((board[l][i] === board[selectedColumn+1][selectedRow+1] || board[l][i] === board[selectedColumn+1][selectedRow-1]) || (board[l][i] === board[selectedColumn-1][selectedRow+1] || board[l][i] === board[selectedColumn-1][selectedRow-1])) && turn === "red"){
                            board[l][i][0] = "LK";
                            board[selectedColumn][selectedRow][0] = "_";
                            selected = false;
                            selectedColumn = null;
                            selectedRow = null;
                            turn = "black";
                        }
                        
                        //takes checker non-king
                        else if(board[l][i][0] === "L" && selected === true && selectedColor === "black" && selectedRank === 1 && selectedRow < 7 && (board[l][i] === board[selectedColumn+1][selectedRow+1] || board[l][i] === board[selectedColumn+1][selectedRow-1]) && (board[selectedColumn+2][selectedRow+2][0] === "_" || board[selectedColumn+2][selectedRow-2][0] === "_") && turn === "black"){
                            if(board[l][i] === board[selectedColumn+1][selectedRow+1] && board[selectedColumn+2][selectedRow+2][0] === "_"){
                                board[selectedColumn+2][selectedRow+2][0] = "D";
                                board[selectedColumn+1][selectedRow+1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn+2;
                                var newPosY = selectedRow+2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "red";
                                while((board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "D";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "D";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                            else if(board[l][i] === board[selectedColumn+1][selectedRow-1] && board[selectedColumn+2][selectedRow-2][0] === "_"){
                                board[selectedColumn+2][selectedRow-2][0] = "D";
                                board[selectedColumn+1][selectedRow-1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn+2;
                                var newPosY = selectedRow-2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "red";
                                while((board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "D";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "D";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                        }
                        else if(board[l][i][0] === "L" && selected === true && selectedColor === "black" && selectedRank === 1 && selectedRow === 7 && board[l][i] === board[selectedColumn+1][selectedRow-1] && board[selectedColumn+2][selectedRow-2][0] === "_" && turn === "black"){
                            if(board[l][i] === board[selectedColumn+1][selectedRow-1] && board[selectedColumn+2][selectedRow-2][0] === "_"){
                                board[selectedColumn+2][selectedRow-2][0] = "D";
                                board[selectedColumn+1][selectedRow-1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn+2;
                                var newPosY = selectedRow-2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "red";
                                while((board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "D";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "D";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                        }
                        
                        else if(board[l][i][0] === "D" && selected === true && selectedColor === "red" && selectedRank === 1 && selectedRow < 7 && (board[l][i] === board[selectedColumn-1][selectedRow+1] || board[l][i] === board[selectedColumn-1][selectedRow-1]) && (board[selectedColumn-2][selectedRow+2][0] === "_" || board[selectedColumn-2][selectedRow-2][0] === "_") && turn === "red"){
                            //println("here");
                            if(board[l][i] === board[selectedColumn-1][selectedRow+1] && board[selectedColumn-2][selectedRow+2][0] === "_"){
                                board[selectedColumn-2][selectedRow+2][0] = "L";
                                board[selectedColumn-1][selectedRow+1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn-2;
                                var newPosY = selectedRow+2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "black";
                                while((board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "L";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "L";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                           else if(board[l][i] === board[selectedColumn-1][selectedRow-1] && board[selectedColumn-2][selectedRow-2][0] === "_"){
                                board[selectedColumn-2][selectedRow-2][0] = "L";
                                board[selectedColumn-1][selectedRow-1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn-2;
                                var newPosY = selectedRow-2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "black";
                                while((board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "L";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "L";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                        }
                        else if(board[l][i][0] === "D" && selected === true && selectedColor === "red" && selectedRank === 1 && selectedRow === 7 && board[l][i] === board[selectedColumn-1][selectedRow-1] && board[selectedColumn-2][selectedRow-2][0] === "_" && turn === "red"){
                            if(board[l][i] === board[selectedColumn-1][selectedRow-1] && board[selectedColumn-2][selectedRow-2][0] === "_"){
                                board[selectedColumn-2][selectedRow-2][0] = "L";
                                board[selectedColumn-1][selectedRow-1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn-2;
                                var newPosY = selectedRow-2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "black";
                                while((board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "L";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "L";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                        }
                        
                        //takes checker king
                        else if(board[l][i][0] === "L" && selected === true && selectedColor === "black" && (board[l][i] === board[selectedColumn+1][selectedRow+1] || board[l][i] === board[selectedColumn+1][selectedRow-1] || board[l][i] === board[selectedColumn-1][selectedRow-1] || board[l][i] === board[selectedColumn-1][selectedRow+1]) && (board[selectedColumn+2][selectedRow+2][0] === "_" || board[selectedColumn+2][selectedRow-2][0] === "_" || board[selectedColumn-2][selectedRow+2][0] === "_" || board[selectedColumn-2][selectedRow-2][0] === "_") && turn === "black"){
                            if(board[l][i] === board[selectedColumn+1][selectedRow+1] && board[selectedColumn+2][selectedRow+2][0] === "_"){
                                board[selectedColumn+2][selectedRow+2][0] = "DK";
                                board[selectedColumn+1][selectedRow+1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn+2;
                                var newPosY = selectedRow+2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "red";
                                while((board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_") || (board[newPosX-1][newPosY+1][0] === "L" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "L" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                    else if(board[newPosX-1][newPosY+1][0] === "L" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "L" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                            else if(board[l][i] === board[selectedColumn+1][selectedRow-1] && board[selectedColumn+2][selectedRow-2][0] === "_"){
                                board[selectedColumn+2][selectedRow-2][0] = "DK";
                                board[selectedColumn+1][selectedRow-1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn+2;
                                var newPosY = selectedRow-2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "red";
                                while((board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_") || (board[newPosX-1][newPosY+1][0] === "L" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "L" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                    else if(board[newPosX-1][newPosY+1][0] === "L" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "L" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                            if(board[l][i] === board[selectedColumn-1][selectedRow+1] && board[selectedColumn-2][selectedRow+2][0] === "_"){
                                board[selectedColumn-2][selectedRow+2][0] = "DK";
                                board[selectedColumn-1][selectedRow+1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn-2;
                                var newPosY = selectedRow+2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "red";
                                while((board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_") || (board[newPosX-1][newPosY+1][0] === "L" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "L" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                    else if(board[newPosX-1][newPosY+1][0] === "L" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "L" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                            else if(board[l][i] === board[selectedColumn-1][selectedRow-1] && board[selectedColumn-2][selectedRow-2][0] === "_"){
                                board[selectedColumn-2][selectedRow-2][0] = "DK";
                                board[selectedColumn-1][selectedRow-1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn-2;
                                var newPosY = selectedRow-2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "red";
                                while((board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_") || (board[newPosX-1][newPosY+1][0] === "L" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "L" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "L" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "L" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                    else if(board[newPosX-1][newPosY+1][0] === "L" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "L" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "DK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                        }
                        
                        else if(board[l][i][0] === "D" && selected === true && selectedColor === "red" && (board[l][i] === board[selectedColumn+1][selectedRow+1] || board[l][i] === board[selectedColumn+1][selectedRow-1] || board[l][i] === board[selectedColumn-1][selectedRow-1] || board[l][i] === board[selectedColumn-1][selectedRow+1]) && (board[selectedColumn+2][selectedRow+2][0] === "_" || board[selectedColumn+2][selectedRow-2][0] === "_" || board[selectedColumn-2][selectedRow+2][0] === "_" || board[selectedColumn-2][selectedRow-2][0] === "_") && turn === "red"){
                            if(board[l][i] === board[selectedColumn+1][selectedRow+1] && board[selectedColumn+2][selectedRow+2][0] === "_"){
                                board[selectedColumn+2][selectedRow+2][0] = "RK";
                                board[selectedColumn+1][selectedRow+1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn+2;
                                var newPosY = selectedRow+2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "black";
                                while((board[newPosX+1][newPosY+1][0] === "D" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "D" && board[newPosX+2][newPosY-2][0] === "_") || (board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "D" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "D" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                    else if(board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                            else if(board[l][i] === board[selectedColumn+1][selectedRow-1] && board[selectedColumn+2][selectedRow-2][0] === "_"){
                                board[selectedColumn+2][selectedRow-2][0] = "LK";
                                board[selectedColumn+1][selectedRow-1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn+2;
                                var newPosY = selectedRow-2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "black";
                                while((board[newPosX+1][newPosY+1][0] === "D" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "D" && board[newPosX+2][newPosY-2][0] === "_") || (board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "D" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "D" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                    else if(board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                            if(board[l][i] === board[selectedColumn-1][selectedRow+1] && board[selectedColumn-2][selectedRow+2][0] === "_"){
                                board[selectedColumn-2][selectedRow+2][0] = "LK";
                                board[selectedColumn-1][selectedRow+1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn-2;
                                var newPosY = selectedRow+2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "black";
                                while((board[newPosX+1][newPosY+1][0] === "D" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "D" && board[newPosX+2][newPosY-2][0] === "_") || (board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "D" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "D" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                    else if(board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                            else if(board[l][i] === board[selectedColumn-1][selectedRow-1] && board[selectedColumn-2][selectedRow-2][0] === "_"){
                                board[selectedColumn-2][selectedRow-2][0] = "LK";
                                board[selectedColumn-1][selectedRow-1][0] = "_";
                                board[selectedColumn][selectedRow][0] = "_";
                                var newPosX = selectedColumn-2;
                                var newPosY = selectedRow-2;
                                selected = false;
                                selectedColumn = null;
                                selectedRow = null;
                                turn = "black";
                                while((board[newPosX+1][newPosY+1][0] === "D" && board[newPosX+2][newPosY+2][0] === "_") || (board[newPosX+1][newPosY-1][0] === "D" && board[newPosX+2][newPosY-2][0] === "_") || (board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_") || (board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_")){
                                    if(board[newPosX+1][newPosY+1][0] === "D" && board[newPosX+2][newPosY+2][0] === "_"){
                                        board[newPosX+1][newPosY+1][0] = "_";
                                        board[newPosX+2][newPosY+2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX+1][newPosY-1][0] === "D" && board[newPosX+2][newPosY-2][0] === "_"){
                                        board[newPosX+1][newPosY-1][0] = "_";
                                        board[newPosX+2][newPosY-2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX += 2;
                                        newPosY -= 2;
                                    }
                                    else if(board[newPosX-1][newPosY+1][0] === "D" && board[newPosX-2][newPosY+2][0] === "_"){
                                        board[newPosX-1][newPosY+1][0] = "_";
                                        board[newPosX-2][newPosY+2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY += 2;
                                    }
                                    else if(board[newPosX-1][newPosY-1][0] === "D" && board[newPosX-2][newPosY-2][0] === "_"){
                                        board[newPosX-1][newPosY-1][0] = "_";
                                        board[newPosX-2][newPosY-2][0] = "LK";
                                        board[newPosX][newPosY][0] = "_";
                                        newPosX -= 2;
                                        newPosY -= 2;
                                    }
                                }
                            }
                        }
                        
                        //selects checker
                        else if(board[l][i][0] === "D" && turn === "black"){
                            selected = true;
                            selectedColumn = l;
                            selectedRow = i;
                            selectedColor = "black";
                            selectedRank = 1;
                        }
                        
                        else if(board[l][i][0] === "L" && turn === "red"){
                            selected = true;
                            selectedColumn = l;
                            selectedRow = i;
                            selectedColor = "red";
                            selectedRank = 1;
                        }
                        else if(board[l][i][0] === "DK" && turn === "black"){
                            selected = true;
                            selectedColumn = l;
                            selectedRow = i;
                            selectedColor = "black";
                            selectedRank = 2;
                        }
                        else if(board[l][i][0] === "LK" && turn === "red"){
                            selected = true;
                            selectedColumn = l;
                            selectedRow = i;
                            selectedColor = "red";
                            selectedRank = 2;
                        }
                    }
                    
                }
            }
}
    }
    
    else if (Game === 2){
        if (gamemode === 1 && mouseX > 150 && mouseX < 450 && mouseY > 422.5 && mouseY < 522.5){
        gameRPS();
        gamemode = 2;
    }
        if(gamemode === 1 && mouseX < 85 && mouseX > 15 && mouseY < 525 && mouseY > 425){
            Game = 1;
        }
        else if(mouseX > 515 && mouseX < 585 && mouseY < 525 && mouseY > 425){
            Game = 0;
        }
    
        else if (gamemode === 2){
        if(mouseIsPressed && mouseX > 20 && mouseX < 115 && mouseY > 500 && mouseY < 570) {
            noStroke();
            fill(252, 218, 159);
            rect(0,25,600,300);
            udrawRock();
            mypick = "rock";
            var number = random(0, 1);
            if (number >= 0 && number < 0.4) {
                drawRock();
                upick = "rock";
            } else if (number >= 0.333 && number < 0.666) {
                drawPaper();
                upick = "paper";
            } else {
                drawScissors();
                upick = "scissors";
            }
        }
        else if(mouseIsPressed && mouseX > 470 && mouseX < 570 && mouseY > 500 && mouseY < 570) {
            noStroke();
            fill(252, 218, 159);
            rect(0,25,600,300);
            udrawPaper();
            mypick = "paper";
            var number = random(0, 1);
            if (number >= 0 && number < 0.333) {
                drawRock();
                upick = "rock";
            } else if (number >= 0.333 && number < 0.666) {
                drawPaper();
                upick = "paper";
            } else {
                drawScissors();
                upick = "scissors";
            }
        }
        else if(mouseIsPressed && mouseX > 270 && mouseX < 340 && mouseY > 500 && mouseY < 570)
    {        
            noStroke();
            fill(252, 218, 159);
            rect(0,25,600,300);
            udrawScissors();
            mypick = "scissors";
            var number = random(0, 1);
            if (number >= 0 && number < 0.333) {
                drawRock();
                upick = "rock";
            } else if (number >= 0.333 && number < 0.666) {
                drawPaper();
                upick = "paper";
            } else {
                drawScissors();
                upick = "scissors";
            }
        }
        if (mypick === "rock" && upick === "rock"){
            winscreen("tie");
        }
        else if (mypick === "rock" && upick === "paper"){
            winscreen("ai");
        }
        else if (mypick === "rock" && upick === "scissors"){
            winscreen("player");
        }
        else if (mypick === "paper" && upick === "rock"){
            winscreen("player");
        }
        else if (mypick === "paper" && upick === "paper"){
            winscreen("tie");
        }
        else if (mypick === "paper" && upick === "scissors"){
            winscreen("ai");
        }
        else if (mypick === "scissors" && upick === "rock"){
            winscreen("ai");
        }
        else if (mypick === "scissors" && upick === "paper"){
            winscreen("player");
        }
        else if (mypick === "scissors" && upick === "scissors"){
            winscreen("tie");
        }
        //score
        fill(0, 0, 0);
        textSize(25);
        stroke(0, 0, 0);
        text("You: " + myscore, 137.5, 150);
        text("Computer: " + uscore, 350, 150);
        mypick = null;
        upick = null;
    }
    }
};
