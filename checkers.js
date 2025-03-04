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
var reset = true;
var selected = null;
var selectedColumn = null;
var selectedRow = null;
var selectedColor = null;
var turn = "black";


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
};

mouseClicked = function(){
    //checks which tile is clicked
    for(var l = 0; l<board.length; l++){
        for(var i = 0; i<board[l].length; i++){
            if(mouseX<=board[l][i][1] + 75 && mouseX>=board[l][i][1] && mouseY<=board[l][i][2] + 75 && mouseY>=board[l][i][2] && board[l][i][5] === "light"){
                //moves into empty spaces
                if(board[l][i][0] === "_" && selected === true && selectedColor === "black" && board[l][i] === board[selectedColumn+1][selectedRow+1] && turn === "black"){
                    board[l][i][0] = "D";
                    board[selectedColumn][selectedRow][0] = "_";
                    selected = false;
                    selectedColumn = null;
                    selectedRow = null;
                    turn = "red";
                }
                
                else if(board[l][i][0] === "_" && selected === true && selectedColor === "black" && board[l][i] === board[selectedColumn+1][selectedRow-1] && turn === "black"){
                    board[l][i][0] = "D";
                    board[selectedColumn][selectedRow][0] = "_";
                    selected = false;
                    selectedColumn = null;
                    selectedRow = null;
                    turn = "red";
                }
                
                else if(board[l][i][0] === "_" && selected === true && selectedColor === "red" && board[l][i] === board[selectedColumn-1][selectedRow+1] && turn === "red"){
                    board[l][i][0] = "L";
                    board[selectedColumn][selectedRow][0] = "_";
                    selected = false;
                    selectedColumn = null;
                    selectedRow = null;
                    turn = "black";
                }
                
                else if(board[l][i][0] === "_" && selected === true && selectedColor === "red" && board[l][i] === board[selectedColumn-1][selectedRow-1]  && turn === "red"){
                    board[l][i][0] = "L";
                    board[selectedColumn][selectedRow][0] = "_";
                    selected = false;
                    selectedColumn = null;
                    selectedRow = null;
                    turn = "black";
                }
                
                //takes checker
                else if(board[l][i][0] === "L" && selected === true && selectedColor === "black" && board[l][i] === board[selectedColumn+1][selectedRow+1] && board[selectedColumn+2][selectedRow+2][0] === "_" && turn === "black"){
                    board[selectedColumn+2][selectedRow+2][0] = "D";
                    board[selectedColumn][selectedRow][0] = "_";
                    board[selectedColumn+1][selectedRow+1][0] = "_";
                    selected = false;
                    selectedColumn = null;
                    selectedRow = null;
                    turn = "red";
                }
                
                else if(board[l][i][0] === "L" && selected === true && selectedColor === "black" && board[l][i] === board[selectedColumn+1][selectedRow-1] && board[selectedColumn+2][selectedRow-2][0] === "_" && turn === "black"){
                    board[selectedColumn+2][selectedRow-2][0] = "D";
                    board[selectedColumn][selectedRow][0] = "_";
                    board[selectedColumn+1][selectedRow-1][0] = "_";
                    selected = false;
                    selectedColumn = null;
                    selectedRow = null;
                    turn = "red";
                }
                
                else if(board[l][i][0] === "D" && selected === true && selectedColor === "red" && board[l][i] === board[selectedColumn-1][selectedRow+1] && board[selectedColumn-2][selectedRow+2][0] === "_"  && turn === "red"){
                    board[selectedColumn-2][selectedRow+2][0] = "L";
                    board[selectedColumn][selectedRow][0] = "_";
                    board[selectedColumn-1][selectedRow+1][0] = "_";
                    selected = false;
                    selectedColumn = null;
                    selectedRow = null;
                    turn = "black";
                }
                
                else if(board[l][i][0] === "D" && selected === true && selectedColor === "red" && board[l][i] === board[selectedColumn-1][selectedRow-1] && board[selectedColumn-2][selectedRow-2][0] === "_"  && turn === "red"){
                    board[selectedColumn-2][selectedRow-2][0] = "L";
                    board[selectedColumn][selectedRow][0] = "_";
                    board[selectedColumn-1][selectedRow-1][0] = "_";
                    selected = false;
                    selectedColumn = null;
                    selectedRow = null;
                    turn = "black";
                }
                
                //selects checker
                else if(board[l][i][0] === "D" && turn === "black"){
                    selected = true;
                    selectedColumn = l;
                    selectedRow = i;
                    selectedColor = "black";
                }
                
                else if(board[l][i][0] === "L" && turn === "red"){
                    selected = true;
                    selectedColumn = l;
                    selectedRow = i;
                    selectedColor = "red";
                }
            }
        }
    }
};
