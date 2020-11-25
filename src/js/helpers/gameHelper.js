import {$} from './commonHelper'
import {createBoxes} from '../components/box/boxHelper'
import LevelCounter from '../counters/levelCounter'
import BoxCounter from '../counters/boxCouneter'

const levelCounter = new LevelCounter()
export const boxCounter = new BoxCounter()

export function checkGameOver(health){
  if(health < 1){
    $('#health').textContent = 'HEALTH: ' + 0
    $('#game-over').style.display = 'flex'
  }
}

export function levelCreator(numLevel, countBoxes, sizeBoxes, speedBoxes) {
  $('#number-level_text').textContent = 'LEVEL ' + numLevel
  $('#number-level').style.display = 'flex'

  const boxes = createBoxes(countBoxes, sizeBoxes)
  
  setTimeout(_ => $('#number-level').style.display = 'none', 2000)

  setInterval(_ => boxes.forEach(el => el.move()), speedBoxes)
} 

export function checkLevelEnd(arr, numLevel, countBoxes, sizeBoxes, speedBoxes) {
  if (boxCounter.get() == arr.length && levelCounter.get() == numLevel){
    levelCreator(numLevel, countBoxes, sizeBoxes, speedBoxes)
    levelCounter.increment()
    boxCounter.set(0)
  }
}

export function endGame(arr, numLevel) {
  if (boxCounter.get() == arr.length && levelCounter.get() == numLevel) {
    $('#game-over_text').innerHTML = 'YOU WIN'
    $('#game-over').style.display = 'flex'
  }
}