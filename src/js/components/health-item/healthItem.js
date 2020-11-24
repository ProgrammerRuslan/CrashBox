
let gameOverLayout = document.querySelector('.game-over')
export let back = document.querySelector('.back')
console.log(back.offsetHeight);

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

