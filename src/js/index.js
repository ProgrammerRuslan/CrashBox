import {createBoxes} from './components/box/boxHelper'

import '../sass/main.sass'

export function levelCreator(numberLevel, count, size, speed){
  document.querySelector('.number-level_text').innerHTML = 'LEVEL ' + numberLevel
  document.querySelector('.number-level').style.display = 'flex'

  setTimeout(function boxes(){
    document.querySelector('.number-level').style.display = 'none'
  }, 2000)

  let boxes = createBoxes(count, size)

  setInterval(() => {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].move()
    }
  }, speed)
  return boxes
} 


document.querySelector('.start-game_button').addEventListener('click', () => {
  document.querySelector('.start-game').style.display = 'none'
  levelCreator(1, 5, 100, 40)
})

document.querySelector('.game-over_button').addEventListener('click', () => {
  location.reload()
})










