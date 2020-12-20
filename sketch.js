var gamestate = 0;
var playerCount = 0;
var database 
var form
var player
var game 
var allPlayers
function setup(){  
    database = firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
    
}


function draw(){
    if(playerCount===4){
        game.update(1);
    }  
    if(gamestate===1){
        clear();
        game.play();
    } 
}

