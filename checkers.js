//variables to define checkers + board
var color1 = color(0, 0, 0);
var color2 = color(31, 31, 31);
var color3 = color(168, 0, 0);
var color4 = color(20, 20, 20);
var color5 = color(122, 0, 0);
var color6 = color(82, 0, 0);
var checkerSize = 62.5;

//variables for rendering board
var row = 0;
var column = 0;
var reset = true;
var darkCheckersX = [];
var lightCheckersX = [];
var emptySpacesX = [];
var darkCheckersY = [];
var lightCheckersY = [];
var emptySpacesY = [];
var selected = null;
var selectedColor = null;

//gameboards
var board = [[["D", 0, 0, 37.5, 37.5, "light"], ["_", 75, 0, null, null, "dark"], ["D", 150, 0, 187.5, 37.5, "light"], ["_", 225, 0, null, null, "dark"], ["D", 300, 0, 337.5, 37.5, "light"], ["_", 375, 0, null, null, "dark"], ["D", 450, 0, 487.5, 37.5, "light"], ["_", 525, 0, null, null, "dark"]], [["_", 0, 75, null, null, "dark"], ["D", 75, 75, 112.5, 112.5, "light"], ["_", 150, 75, null, null, "dark"], ["D", 225, 75, 262.5, 112.5, "light"], ["_", 300, 75, null, null, "dark"], ["D", 375, 75, 412.5, 112.5, "light"], ["_", 450, 75, null, null, "dark"], ["D", 525, 75, 562.5, 112.5, "light"]], [["D", 0, 150, 37.5, 187.5, "light"], ["_", 75, 150, null, null, "dark"], ["D", 150, 150, 187.5, 187.5, "light"], ["_", 225, 150, null, null, "dark"], ["D", 300, 150, 337.5, 187.5, "light"], ["_", 375, 150, null, null, "dark"], ["D", 450, 150, 487.5, 187.5, "light"], ["_", 525, 150, null, null, "dark"]], [["_", 0, 225, null, null, "dark"], ["_", 75, 225, 112.5, 262.5, "light"], ["_", 150, 225, null, null, "dark"], ["_", 225, 225, 262.5, 262.5, "light"], ["_", 300, 225, null, null, "dark"], ["_", 375, 225, 412.5, 262.5, "light"], ["_", 450, 225, null, null, "dark"], ["_", 525, 225, 562.5, 262.5, "light"]], [["_", 0, 300, 37.5, 337.5, "light"], ["_", 75, 300, null, null, "dark"], ["_", 150, 300, 187.5, 337.5, "light"], ["_", 225, 300, null, null, "dark"], ["_", 300, 300, 337.5, 337.5, "light"], ["_", 375, 300, 412.5, 337.5, "dark"], ["_", 450, 300, 487.5, 337.5, "light"], ["_", 525, 300, null, null, "dark"]], [["_", 0, 375, null, null, "dark"], ["L", 75, 375, 112.5, 412.5, "light"], ["_", 150, 375, null, null, "dark"], ["L", 225, 375, 262.5, 412.5, "light"], ["_", 300, 375, null, null, "dark"], ["L", 375, 375, 412.5, 412.5, "light"], ["_", 450, 375, null, null, "dark"], ["L", 525, 375, 562.5, 412.5, "light"]], [["L", 0, 450, 37.5, 487.5, "light"], ["_", 75, 450, null, null, "dark"], ["L", 150, 450, 187.5, 487.5, "light"], ["_", 225, 450, null, null, "dark"], ["L", 300, 450, 337.5, 487.5, "light"], ["_", 375, 450, null, null, "dark"], ["L", 450, 450, 487.5, 487.5, "light"], ["_", 525, 450, null, null, "dark"]], [["_", 0, 525, null, null, "dark"], ["L", 75, 525, 112.5, 562.5, "light"], ["_", 150, 525, null, null, "dark"], ["L", 225, 525, 262.5, 562.5, "light"], ["_", 300, 525, null, null, "dark"], ["L", 375, 525, 412.5, 562.5, "light"], ["_", 450, 525, null, null, "dark"], ["L", 525, 525, 562.5, 562.5, "light"]], ];

//checking to see what to render for the first time (onready function)
while (row < 8){
    //left to right
    if (column < 8){
        if (board[row][column][5] === "light"){
            fill(color3);
            noStroke();
            rect(board[row][column][1], board[row][column][2], 75, 75);
            if (board[row][column][0] === "_"){
                emptySpacesX.push(board[row][column][1]);
                emptySpacesY.push(board[row][column][2]);
            }
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
            darkCheckersX.push(board[row][column][3]);
            darkCheckersY.push(board[row][column][4]);
        }
        
        else if (board[row][column][0] === "L"){
            noStroke();
            fill(color5);
            ellipse(board[row][column][3], board[row][column][4], checkerSize, checkerSize);
            noFill();
            strokeWeight(4);
            stroke(color6);
            ellipse(board[row][column][3], board[row][column][4], checkerSize/1.2,checkerSize/1.2);
            lightCheckersX.push(board[row][column][3]);
            lightCheckersY.push(board[row][column][4]);
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

//playing the game
draw = function() {
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
    
    //resets for next frame
    if (row === 8){
        row = 0;
        column = 0;
        reset = true;
    }
};

mouseClicked = function(){
    //checks to see if a checker is selected
    for(var i = 0; i<emptySpacesX.length; i++){
        if(mouseX<=emptySpacesX[i] + 75 && mouseX>=emptySpacesX[i] && mouseY<=emptySpacesY[i] + 75 && mouseY>=emptySpacesY[i] && selected !== null){
            while (row < 8){
                //left to right
                if (column < 8){
                    if (board[row][column][1] === emptySpacesX[i] && board[row][column][2] === emptySpacesY[i]){
                        if (selectedColor === "black"){
                            board[row][column][0] = "D";
                            for(var d = 0; d<darkCheckersX.length; d++){
                                var column2 = 0;
                                var row2 = 0;
                                while (row2 < 8){
                                    if (column2 < 8){
                                        if(darkCheckersX[selected] === board[row2][column2][3] && darkCheckersY[selected] === board[row2][column2][4]){
                                            println(darkCheckersX[selected]);
                                            darkCheckersX[selected] = board[row][column][1];
                                            darkCheckersY[selected] = board[row][column][2];
                                            selected = null;
                                            selectedColor = null;
                                            board[row2][column2][0] = "_";
                                            println(emptySpacesX[i]);
                                            emptySpacesX[i] = board[row2][column2][1];
                                            emptySpacesY[i] = board[row2][column2][2];
                                            println(emptySpacesX[i]);
                                            println(darkCheckersX[selected]);
                                            println(darkCheckersX);
                                        }
                                        column2 += 1;
                                    }
                                    else{
                                        row2 += 1;
                                        column2 = 0;
                                    }
                                }
                            }
                        }
                        
                        else if (selectedColor === "red"){
                            board[row][column][0] = "L";
                            for(var l = 0; l<darkCheckersX.length; l++){
                                var column2 = 0;
                                var row2 = 0;
                                while (row2 < 8){
                                    if (column2 < 8){
                                        if(lightCheckersX[l] === board[row2][column2][3] && lightCheckersY[l] === board[row2][column2][4]){
                                            board[row2][column2][0] = "_";
                                            selected = null;
                                            selectedColor = null;
                                        }
                                        column2 += 1;
                                    }
                                    else{
                                        row2 += 1;
                                        column2 = 0;
                                    }
                                }
                            }
                        }
                        
                        selectedColor = null;
                        
                    }
                
                    column += 1;
                }
            
            //goes down one and starts at front of row again
                else{
                    row += 1;
                    column = 0;
                }
            }
        }
   }
   
   for(var i = 0; i<darkCheckersX.length; i++){
        if(mouseX<=darkCheckersX[i] + 37.5 && mouseX>=darkCheckersX[i] - 37.5 && mouseY<=darkCheckersY[i] + 37.5 && mouseY>= darkCheckersY[i] - 37.5){
            selected = i;
            selectedColor = "black";
        }
   }
   
   for(var i = 0; i<lightCheckersX.length; i++){
        if(mouseX<=lightCheckersX[i] + 37.5 && mouseX>=lightCheckersX[i] - 37.5 && mouseY<=lightCheckersY[i] + 37.5 && mouseY>= lightCheckersY[i] - 37.5){
            selected = i;
            selectedColor = "red";
        }
   }
};
