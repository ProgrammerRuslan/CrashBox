import Box from './box'
import {levelCreator} from '../../index'

let score = 0
export function createBoxes(count, size){
  let boxes = []
  for (let i = 0; i < count; i++) {
    boxes[i] = new Box(size)
    boxes[i].box.addEventListener("click", () => {
      event.stopPropagation()
      boxes[i].box.style.display = 'none'
      score++
      document.querySelector('.score').innerHTML = 'SCORE: ' + score
      if (score == 5) {
        levelCreator(2, 8, 80, 30)
      }
      if (score == 13) {
        levelCreator(3, 10, 50, 20)
      }
      if (score == 23) {
        document.querySelector('.game-over_text').innerHTML = 'YOU WIN'
        document.querySelector('.game-over').style.display = 'flex'
      }  
    })
  }

  return boxes
}




