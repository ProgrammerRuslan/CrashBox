import {$} from '../../helpers/commonHelper'
import Box from './box'
import Score from '../../components/score/score'
import {boxCounter ,checkLevelEnd, endGame} from '../../helpers/gameHelper'
import con from '../../../config.json' 

const score = new Score()

function boxHandler(e, boxes, i) {
  e.stopPropagation()

  boxes[i].box.style.display = 'none'
  boxCounter.increment()
  score.increment()

  $('#score').textContent = 'SCORE: ' + score.get()

  checkLevelEnd(boxes, con.lvl2.numLevel, con.lvl2.countBoxes, con.lvl2.sizeBoxes, con.lvl2.speedBoxes)
  checkLevelEnd(boxes, con.lvl3.numLevel, con.lvl3.countBoxes, con.lvl3.sizeBoxes, con.lvl3.speedBoxes)
  checkLevelEnd(boxes, con.lvl4.numLevel, con.lvl4.countBoxes, con.lvl4.sizeBoxes, con.lvl4.speedBoxes)
  endGame(boxes, con.endGame)
}

export function createBoxes(count, size){
  let boxes = []
  
  for (let i = 0; i < count; i++) {
    boxes[i] = new Box(size)
    
    boxes[i].box.addEventListener('click', e => boxHandler(e, boxes, i))
  }

  return boxes
}





