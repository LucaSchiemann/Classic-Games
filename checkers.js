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

//gameboards
var board = [[["D", 0, 0, 37.5, 37.5, "light"], ["_", 75, 0, null, null, "dark"], ["D", 150, 0, 187.5, 37.5, "light"], ["_", 225, 0, null, null, "dark"], ["D", 300, 0, 337.5, 37.5, "light"], ["_", 375, 0, null, null, "dark"], ["D", 450, 0, 487.5, 37.5, "light"], ["_", 525, 0, null, null, "dark"]], [["_", 0, 75, null, null, "dark"], ["D", 75, 75, 112.5, 112.5, "light"], ["_", 150, 75, null, null, "dark"], ["D", 225, 75, 262.5, 112.5, "light"], ["_", 300, 75, null, null, "dark"], ["D", 375, 75, 412.5, 112.5, "light"], ["_", 450, 75, null, null, "dark"], ["D", 525, 75, 562.5, 112.5, "light"]], [["D", 0, 150, 37.5, 187.5, "light"], ["_", 75, 150, null, null, "dark"], ["D", 150, 150, 187.5, 187.5, "light"], ["_", 225, 150, null, null, "dark"], ["D", 300, 150, 337.5, 187.5, "light"], ["_", 375, 150, null, null, "dark"], ["D", 450, 150, 487.5, 187.5, "light"], ["_", 525, 150, null, null, "dark"]], [["_", 0, 225, null, null, "dark"], ["_", 75, 225, 112.5, 262.5, "light"], ["_", 150, 225, null, null, "dark"], ["_", 225, 225, 262.5, 262.5, "light"], ["_", 300, 225, null, null, "dark"], ["_", 375, 225, 412.5, 262.5, "light"], ["_", 450, 225, null, null, "dark"], ["_", 525, 225, 562.5, 262.5, "light"]], [["_", 0, 300, 37.5, 337.5, "light"], ["_", 75, 300, null, null, "dark"], ["_", 150, 300, 187.5, 337.5, "light"], ["_", 225, 300, null, null, "dark"], ["_", 300, 300, 337.5, 337.5, "light"], ["_", 375, 300, 412.5, 337.5, "dark"], ["_", 450, 300, 487.5, 337.5, "light"], ["_", 525, 300, null, null, "dark"]], [["_", 0, 375, null, null, "dark"], ["L", 75, 375, 112.5, 412.5, "light"], ["_", 150, 375, null, null, "dark"], ["L", 225, 375, 262.5, 412.5, "light"], ["_", 300, 375, null, null, "dark"], ["L", 375, 375, 412.5, 412.5, "light"], ["_", 450, 375, null, null, "dark"], ["L", 525, 375, 562.5, 412.5, "light"]], [["L", 0, 450, 37.5, 487.5, "light"], ["_", 75, 450, null, null, "dark"], ["L", 150, 450, 187.5, 487.5, "light"], ["_", 225, 450, null, null, "dark"], ["L", 300, 450, 337.5, 487.5, "light"], ["_", 375, 450, null, null, "dark"], ["L", 450, 450, 487.5, 487.5, "light"], ["_", 525, 450, null, null, "dark"]], [["_", 0, 525, null, null, "dark"], ["L", 75, 525, 112.5, 562.5, "light"], ["_", 150, 525, null, null, "dark"], ["L", 225, 525, 262.5, 562.5, "light"], ["_", 300, 525, null, null, "dark"], ["L", 375, 525, 412.5, 562.5, "light"], ["_", 450, 525, null, null, "dark"], ["L", 525, 525, 562.5, 562.5, "light"]]];

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
    
    fill(255, 246, 127);
    textSize(10);
    text("Backspace for menu!", 5, 10);
};

//menu
var menu = function(){
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
    
    
};

//running the app
draw = function(){
    if (mode===0){
        menu(); 
    }
    else if (mode===1){
        game();
    }
    else if (mode===2){
        rules();
    }
};

//menu exit
keyTyped = function(){
    if(mode === 1 && key.code === 8){
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
};

//moving pieces and buttons
mouseClicked = function(){
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
                    else if(board[l][i][0] === "L" && selected === true && selectedColor === "black" && selectedRank === 1 && l < 8 && i < 8 && (board[l][i] === board[selectedColumn+1][selectedRow+1] || board[l][i] === board[selectedColumn+1][selectedRow-1]) && (board[selectedColumn+2][selectedRow+2][0] === "_" || board[selectedColumn+2][selectedRow-2][0] === "_") && turn === "black"){
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
                    
                    else if(board[l][i][0] === "D" && selected === true && selectedColor === "red" && selectedRank === 1 && l < 8 && i < 8 && (board[l][i] === board[selectedColumn-1][selectedRow+1] || board[l][i] === board[selectedColumn-1][selectedRow-1]) && (board[selectedColumn-2][selectedRow+2][0] === "_" || board[selectedColumn-2][selectedRow-2][0] === "_") && turn === "red"){
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
                    
                    //takes checker king
                    else if(board[l][i][0] === "L" && selected === true && selectedColor === "black" && l < 8 && i < 8 && (board[l][i] === board[selectedColumn+1][selectedRow+1] || board[l][i] === board[selectedColumn+1][selectedRow-1] || board[l][i] === board[selectedColumn-1][selectedRow-1] || board[l][i] === board[selectedColumn-1][selectedRow+1]) && (board[selectedColumn+2][selectedRow+2][0] === "_" || board[selectedColumn+2][selectedRow-2][0] === "_" || board[selectedColumn-2][selectedRow+2][0] === "_" || board[selectedColumn-2][selectedRow-2][0] === "_") && turn === "black"){
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
                    
                    else if(board[l][i][0] === "D" && selected === true && selectedColor === "red" && l < 8 && i < 8 && (board[l][i] === board[selectedColumn+1][selectedRow+1] || board[l][i] === board[selectedColumn+1][selectedRow-1] || board[l][i] === board[selectedColumn-1][selectedRow-1] || board[l][i] === board[selectedColumn-1][selectedRow+1]) && (board[selectedColumn+2][selectedRow+2][0] === "_" || board[selectedColumn+2][selectedRow-2][0] === "_" || board[selectedColumn-2][selectedRow+2][0] === "_" || board[selectedColumn-2][selectedRow-2][0] === "_") && turn === "red"){
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
};
