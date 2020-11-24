import {levelCreator} from './components/box/boxHelper'
import '../sass/main.sass'


document.getElementById("start-game_button").addEventListener('click', () => {
  document.getElementById("start-game").style.display = 'none'
  levelCreator(1, 5, 100, 40)
})

document.getElementById('game-over_button').addEventListener('click', () => {
  location.reload()
})










