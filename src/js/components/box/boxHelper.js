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
      if (score == 5) {
        levelCreator(2, 8, 80, 30)
      }
      if (score == 13) {
        levelCreator(3, 10, 50, 20)
      }
      if (score == 23) {
        document.querySelector('.game-over_text').innerHTML = 'YOU WIN'
        document.querySelector('.game-over').style.display = 'flex'
      }  
    })
  }

  return boxes
}

export function levelCreator(numberLevel, count, size, speed) {
  document.querySelector('.number-level_text').innerHTML = 'LEVEL ' + numberLevel
  document.querySelector('.number-level').style.display = 'flex'

  setTimeout(function boxes() {
    document.querySelector('.number-level').style.display = 'none'
  }, 2000)

  let boxes = createBoxes(count, size)

  setInterval(() => {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].move()
    }
  }, speed)
  return boxes
} 




