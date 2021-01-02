class Game {
    constructor() {

    }
    getGameState(){
        db.ref('gameState').on('value', function (data){
            gs = data.val();
        })
    }
    updateGameState(state){
        db.ref('/').update({
            gameState: state
        })
    }
    start(){
        if (gs === 0){
            form = new Form();
            player = new Player();
            player.getCount();
            form.display();
        }
    }
}