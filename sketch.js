var db, gs = 0;
var game, player, form, pc;

function setup(){
    createCanvas(500,500);
    
    db = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
}


