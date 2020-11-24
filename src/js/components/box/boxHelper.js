import {$} from '../../helpers/commonHelper'
import {levelCreator} from '../../helpers/gameHelper'
import Box from './box'
import Score from '../../components/score/score'

const score = new Score()

function boxHandler(e, boxes, i) {
  e.stopPropagation()

  boxes[i].box.style.display = 'none'

  score.increment()

  $('#score').textContent = 'SCORE: ' + score.get()

  if (score.get() == 5) {
    levelCreator(2, 8, 80, 30)
  }

  if (score.get() == 13) {
    levelCreator(3, 10, 50, 20)
  }

  if (score.get() == 23) {
    $('#game-over_text').innerHTML = 'YOU WIN'
    $('#game-over').style.display = 'flex'
  } 
}

export function createBoxes(count, size){
  let boxes = []
  
  for (let i = 0; i < count; i++) {
    boxes[i] = new Box(size)
    
    boxes[i].box.addEventListener('click', e => boxHandler(e, boxes, i))
  }

  return boxes
}





