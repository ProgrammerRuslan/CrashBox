import Box from './box'

function createBoxes(count){
  let boxes = []

  for (let i = 0; i < count; i++) {
    boxes[i] = new Box(i)
    boxes[i].addBox()
  }

  return boxes
}

function deleteBoxes(){
  let boxes = document.querySelectorAll('.box')
  let score = 0
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
      boxes[i].style.display = 'none'
      score++
      document.querySelector('.score').innerHTML = 'SCORE: ' + score
    }
  }
}

export {createBoxes}
export {deleteBoxes}