import {$} from '../../helpers/commonHelper'
import Box from './box'
import Score from '../../components/score/score'
import {boxCounter ,checkLevelEnd, endGame} from '../../helpers/gameHelper'

const score = new Score()

function boxHandler(e, boxes, i) {
  e.stopPropagation()

  boxes[i].box.style.display = 'none'
  boxCounter.increment()
  score.increment()

  $('#score').textContent = 'SCORE: ' + score.get()

  checkLevelEnd(boxes, 2, 8, 80, 30)
  checkLevelEnd(boxes, 3, 10, 50, 20)
  checkLevelEnd(boxes, 4, 12, 45, 15)
  endGame(boxes, 5)
}

export function createBoxes(count, size){
  let boxes = []
  
  for (let i = 0; i < count; i++) {
    boxes[i] = new Box(size)
    
    boxes[i].box.addEventListener('click', e => boxHandler(e, boxes, i))
  }

  return boxes
}





