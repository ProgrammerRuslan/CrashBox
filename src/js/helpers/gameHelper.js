import {$} from './commonHelper'
import {createBoxes} from '../components/box/boxHelper'
import BoxCounter from '../components/box/boxCouneter'
import config from '../../config.json' 

export const boxCounter = new BoxCounter()

export function checkGameOver(health){
  if(health < 1){
    $('#health').textContent = 'HEALTH: ' + 0
    $('#game-over').style.display = 'flex'
  }
}

export function levelCreator(numLevel, countBoxes, sizeBoxes, speedBoxes) {
  boxCounter.set(0)

  $('#number-level_text').textContent = 'LEVEL ' + numLevel
  $('#number-level').style.display = 'flex'

  const boxes = createBoxes(countBoxes, sizeBoxes)
  
  setTimeout(_ => $('#number-level').style.display = 'none', 2000)

  setInterval(_ => boxes.forEach(el => el.move()), speedBoxes)
} 

export function checkLevelEnd(boxes) {
  return boxCounter.get() == boxes.length ? true : false
}

export function checkEndGame(numLevel) {
  if (numLevel == Object.keys(config).length + 1) {
    $('#game-over_text').innerHTML = 'YOU WIN'
    $('#game-over').style.display = 'flex'
    return true
  }
  return false
}