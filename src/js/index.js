import {levelCreator} from './helpers/gameHelper'
import Health from '../js/components/health/health'
import {$} from './helpers/commonHelper'
import {checkGameOver} from './helpers/gameHelper'

import '../sass/main.sass'

function createGame() {
  const health = new Health(3)

  $('#start-game_button').addEventListener('click', () => {
    $('#start-game').style.display = 'none'
    levelCreator(1, 5, 100, 40)
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
















