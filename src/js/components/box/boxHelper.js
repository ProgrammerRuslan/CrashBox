import {$} from '../../helpers/commonHelper'
import Box from './box'
import Score from '../../components/score/score'
import {boxCounter, levelCounter, levelCreator, checkLevelEnd, checkEndGame} from '../../helpers/gameHelper'
import config from '../../../config.json' 
import {crashBoxSound} from '../../sounds'

const score = new Score()

function boxHandler(e, boxes, i) {
  e.stopPropagation()

  crashBoxSound.play()

  boxes[i].box.style.display = 'none'
  
  boxCounter.increment()
  score.increment()

  $('#score').textContent = 'SCORE: ' + score.get()

  if(checkLevelEnd(boxes)){
    levelCounter.increment()
    
    if( !checkEndGame(levelCounter.get()) ){
      const {numLevel, countBoxes, sizeBoxes, speedBoxes} = config['lvl' + levelCounter.get()]
      levelCreator(numLevel, countBoxes, sizeBoxes, speedBoxes)
    }
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





