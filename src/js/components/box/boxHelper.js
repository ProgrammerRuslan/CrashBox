import Box from './box'

let score = 0
function createBoxes(count, size){
  let boxes = []
  for (let i = 0; i < count; i++) {
    boxes[i] = new Box(size)
    boxes[i].box.addEventListener("click", () => {
      event.stopPropagation()
      boxes[i].box.style.display = 'none'
      score++
      document.querySelector('.score').innerHTML = 'SCORE: ' + score
    })
  }

  return boxes
}



export {createBoxes, score}
