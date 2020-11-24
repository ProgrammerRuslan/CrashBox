import {levelCreator} from './components/box/boxHelper'
import '../sass/main.sass'


document.querySelector('.start-game_button').addEventListener('click', () => {
  document.querySelector('.start-game').style.display = 'none'
  levelCreator(1, 5, 100, 40)
})

document.querySelector('.game-over_button').addEventListener('click', () => {
  location.reload()
})










