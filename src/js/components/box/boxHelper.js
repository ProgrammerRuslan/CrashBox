import {$} from '../../helpers/commonHelper'
import Box from './box'
import Score from '../../components/score/score'
import {boxCounter, levelCreator, checkLevelEnd, checkEndGame} from '../../helpers/gameHelper'
import config from '../../../config.json' 
import {crashBoxSound} from '../../sounds'
import Level from '../level/level'

const score = new Score()
const level = new Level()

function boxHandler(e, boxes, i) {
  e.stopPropagation()

  crashBoxSound.play()

  boxes[i].box.style.display = 'none'
  
  boxCounter.increment()
  score.increment()

  $('#score').textContent = 'SCORE: ' + score.get()

  if(checkLevelEnd(boxes)){
    level.increment()
    
    if( !checkEndGame(level.get()) ){
      const {numLevel, countBoxes, sizeBoxes, speedBoxes} = config['lvl' + level.get()]
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





