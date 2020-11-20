import {createBoxes, score} from './components/box/boxHelper'

import '../css/main.css'

function levelCreator(numberLevel, count, size, speed){
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
  let num
  let int1 = setInterval(() => {
    num = score
    if (num == 5){
      levelCreator(2, 8, 80, 30)
      clearInterval(int1)
    }
  }, 10)
  let int2 = setInterval(() => {
    num = score
    if (num == 13) {
      levelCreator(3, 10, 50, 20)
      clearInterval(int2)
    }
  }, 10)
  let int3 = setInterval(() => {
    num = score
    if (num == 23) {
      document.querySelector('.game-over_text').innerHTML = 'YOU WIN'
      document.querySelector('.game-over').style.display = 'flex'
      clearInterval(int3)
    }
  }, 10)
})

document.querySelector('.game-over_button').addEventListener('click', () => {
  location.reload()
})










