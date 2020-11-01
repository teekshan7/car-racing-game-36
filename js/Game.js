class Game{
constructor(){

}
    getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on("value",function(data){gameState=data.val()})

    }
    update(state){
    database.ref('/').update({gameState:state})
    }



    start(){
    if (gameState===0)
    player=new Player()
    player.getCount();
    form=new Form()
    form.display() 
    }


    play(){
    console.log("beforePlay")
    form.hide()
    textSize(30)
    text("GAME START",120,100)
    Player.getPlayerInfo()
    if (allPlayers!=undefined){
    console.log("insidePlay")
    var displayPosition=130
    displayPosition+=20
    textSize(20)
    for (var plr in allPlayers){
    if (plr==="player"+player.index){
     fill("red")
    }
    else{
    fill("black")
    }
    text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
    }
    }
    if (keyIsDown(UP_ARROW)){
        player.distance+=10
        player.update()
    }
    }
    
    }