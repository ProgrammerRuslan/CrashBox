import {createBoxes} from './components/box/boxHelper'

import '../css/main.css'

let boxes = createBoxes(10, 50)

setInterval(() => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].move()
  }
}, 30)









