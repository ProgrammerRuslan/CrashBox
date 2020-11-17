import Box from './box'

function createBoxes(count){
  let boxes = []
  let score = 0
  for (let i = 0; i < count; i++) {
    boxes[i] = new Box(i)
    boxes[i].addBox()
    console.log(boxes[i])
    boxes[i].name.addEventListener("click", () => {
      boxes[i].name.style.display = 'none'
      score++
      document.querySelector('.score').innerHTML = 'SCORE: ' + score
    })
  }

  return boxes
}



export {createBoxes}
