import {levelCreator} from './helpers/gameHelper'
import Health from '../js/components/health/health'
import {$} from './helpers/commonHelper'
import {checkGameOver} from './helpers/gameHelper'
import config from '../config.json'
import {mainSound} from './sounds'

import '../sass/main.sass'

function createGame() {
  const health = new Health(3)

  const {lvl1} = config 

  $('#start-game_button').addEventListener('click', () => {
    $('#start-game').style.display = 'none'
    levelCreator(lvl1.numLevel, lvl1.countBoxes, lvl1.sizeBoxes, lvl1.speedBoxes)
    mainSound.play()
  })

  $('#game-over_button').addEventListener('click', () => {
    location.reload()
  })

  $('#container').addEventListener('click', () => {
    health.decrement()
    $('#health').textContent = 'HEALTH: ' + health.get()
    checkGameOver(health.get())
  })
}

createGame()
















