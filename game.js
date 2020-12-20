class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref('Gamestate');
        gamestateref.on("value",function(data){
            gamestate = data.val();
        })

        
    }
    update(state){
        database.ref('/').update({
            Gamestate : state
        })
    }
    async start(){
        if(gamestate === 0){
            player = new Player()
            var playercountref = await database.ref('playerCount').once("value");
            if(playercountref.exists()){
                playerCount = playercountref.val();
                player.getCount();
            }
            form = new Form();
            form.display()
        }
    }
    play(){
        form.hideDetails();
        textSize(30);
        text("Game Start",120,100);
        Player.GetPlayerInfo();
        if(allPlayers!==undefined){
            var displayposition = 130
            for(var plr in allPlayers){
                if(plr=== "Player" + player.index){
                    fill("red"); 
                    
                }
                else fill("black");
                displayposition +=20
                textSize(15);
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayposition);
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50
            player.update();
        }
    }
}