class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
    }
    hideDetails(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement('h1')
        title.html("Car Racing Game")
        title.position(130,10)
        this.input.position(130,75)
        this.button.position(180,110);
        this.greeting.position(130,200)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount+1 
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
        })

        
    }
}