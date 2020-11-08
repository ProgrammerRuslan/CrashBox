import {createBoxes} from './components/box/boxHelper'

let boxes = createBoxes(10)

setInterval(() => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].move()
  }
}, 10)









