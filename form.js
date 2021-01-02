class Form {
    constructor() {

    }

    display(){
        var  title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
        var input = createInput("Name");
        var button = createButton("Click to start");
        var greeting = createElement("h3");

        input.position(130, 160);
        button.position(165, 200)

        button.mousePressed(function (){
            input.hide();
            button.hide();
            var name = input.value();
            pc++;
            player.update(name);
            player.updateCount(pc);

            greeting.html("Welcome " + name + "\n Waiting for other players to join...");
            greeting.position(50,160);
        })
    }
}