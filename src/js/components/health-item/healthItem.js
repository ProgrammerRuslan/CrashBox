export let back = document.getElementById('back')

let health = 3
back.addEventListener("click", () => {
    health--
    document.getElementById('health').innerHTML = 'HEALTH: ' + health
    gameOver()
})

function gameOver(){
    if(health < 1){
        document.getElementById('health').innerHTML = 'HEALTH: ' + 0
        document.getElementById('game-over').style.display = 'flex'
    }
}

