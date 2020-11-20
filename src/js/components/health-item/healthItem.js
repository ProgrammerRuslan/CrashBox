
let gameOverLayout = document.querySelector('.game-over')
let back = document.querySelector('.back')
back.style.height = screen.height + 'px'

let health = 3
back.addEventListener("click", () => {
    health--
    document.querySelector('.health').innerHTML = 'HEALTH: ' + health
    gameOver()
})

function gameOver(){
    if(health < 0){
        document.querySelector('.health').innerHTML = 'HEALTH: ' + 0
        gameOverLayout.style.display = 'flex'
    }
}

export {back}