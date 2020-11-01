function createBoxes(count){
  let boxes = []

  for (let i = 0; i < count; i++) {
    boxes[i] = new Box(i)
    boxes[i].addBox()
  }

  return boxes
}