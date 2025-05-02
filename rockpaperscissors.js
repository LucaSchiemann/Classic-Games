var mypick;
var upick;
var myscore = 0;
var uscore = 0;
var Rock = getImage("cute/Rock");
var gamemode = 1;

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

var menu = function() {
    background(252, 218, 159);
    fill(48, 48, 48);
    textSize(50);
    textFont(createFont("Trebuchet MS Bold"));
    text("Rock,", 235, 100);
    text("Paper,", 230, 200);
    text("Scissors", 210, 300);
    stroke(0, 0, 0);
    strokeWeight(5);
    fill(112, 112, 112);
    rect(150, 400, 300, 100);
    fill(0, 0, 0);
    text("Play", 250, 465);
};

var game = function() { 
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

menu();
    
var keyTyped = function() {
    print(key);
    if (key.code === 8){
        menu();
        gamemode = 1;
        myscore = 0;
        uscore = 0;
    }
};

var mousePressed = function() {
    if (gamemode === 1 && mouseX > 150 && mouseX < 450 && mouseY > 400 && mouseY < 500){
        game();
        gamemode = 2;
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
};
