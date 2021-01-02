class Player {
    constructor() {

    }
    getCount(){
        db.ref("playerCount").on("value", function (data){
            pc = data.val();
        })
    }
    updateCount(count){
        db.ref("/").update({
            playerCount: count
        })
    }
    update(name){
        var playerIndex = "player" + pc;
        db.ref(playerIndex).set({
            name: name
        })
    }
}