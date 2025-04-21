background(252, 218, 159);

var iscore;
var uscore;

var rockX = 60;
var rockY = 351;
var Rock = getImage("cute/Rock");
image(Rock,rockX-40,rockY-110);

var udrawRock = function () {
    noStroke();
    fill(252, 218, 159);
    rect(0,25,199,249);
    image(Rock,50,40);
};

var drawRock = function () {
    noStroke();
    fill(252, 218, 159);
    rect(201,25,200,249);
    image(Rock,250,40);
};

var paperX = 200;
var paperY = 350;
fill(255, 255, 255);
stroke(0, 0, 0);
rect(paperX-50,paperY-31,100,62);
noStroke();

var udrawPaper = function () {
    noStroke();
    fill(252, 218, 159);
    rect(0,25,199,249);
    var paperX = 100;
    var paperY = 150;
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
    noStroke();
    fill(252, 218, 159);
    rect(201,25,200,249);
    var paperX = 300;
    var paperY = 150;
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

var scissorsX = 330;
var scissorsY = 358;
    fill(168, 168, 168);
    triangle(scissorsX+30,scissorsY+25,scissorsX-30,scissorsY-45,scissorsX+17,scissorsY+34);
    triangle(scissorsX-29,scissorsY+26,scissorsX+30,scissorsY-50,scissorsX-17,scissorsY+34);
fill(255, 0, 255);
stroke(0, 0, 0);
line(scissorsX+30,scissorsY+-50,scissorsX+-28,scissorsY+22);
line(scissorsX+30,scissorsY+-49,scissorsX+-17,scissorsY+31);
line(scissorsX+-32,scissorsY+-51,scissorsX+26,scissorsY+20);
line(scissorsX+-32,scissorsY+-50,scissorsX+21,scissorsY+35);
fill(0, 0, 0);
ellipse(scissorsX,scissorsY-5,5,5);
strokeWeight(4);
fill(250, 220, 160);
ellipse(scissorsX+26,scissorsY+26,17,17);
ellipse(scissorsX-24,scissorsY+26,17,17);
strokeWeight(1);

var udrawScissors = function () {
    noStroke();
    fill(250, 220, 160);
    rect(0,25,199,249);
    var scissorsX = 100;
    var scissorsY = 165;
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
    noStroke();
    fill(250, 220, 160);
    rect(201,25,200,249);
    var scissorsX = 300;
    var scissorsY = 165;
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

var mousePressed = function() {
    if(mouseIsPressed && mouseX > 0 && mouseX < 133 && mouseY > 275 && mouseY < 400) {
        udrawRock();
        var number = random(0, 1);
        if (number >= 0 && number < 0.4) {
            drawRock();  
        } else if (number >= 0.333 && number < 0.666) {
            drawPaper();
        } else {
           
            drawScissors();
        }
    }
    if(mouseIsPressed && mouseX > 133 && mouseX < 266 && mouseY > 275 && mouseY < 400)
{        
        udrawPaper();
        var number = random(0, 1);
        if (number >= 0 && number < 0.333) {
            drawRock();
        } else if (number >= 0.333 && number < 0.666) {
            drawPaper();
        } else {
            drawScissors();
        }
    }
        if(mouseIsPressed && mouseX > 266 && mouseX < 399 && mouseY > 275 && mouseY < 400)
{        
        udrawScissors();
        var number = random(0, 1);
        if (number >= 0 && number < 0.333) {
            drawRock();
        } else if (number >= 0.333 && number < 0.666) {
            drawPaper();
        } else {
            drawScissors();
        }
    }
};

