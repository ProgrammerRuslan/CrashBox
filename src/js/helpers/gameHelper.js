import {$} from './commonHelper'
import {createBoxes} from '../components/box/boxHelper'

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
