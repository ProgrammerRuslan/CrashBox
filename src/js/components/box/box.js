import {$, getRandomInt} from '../../helpers/commonHelper'

export default class Box {
  constructor(size){
    this.x = getRandomInt(1, $('#container').offsetWidth - size)
    this.y = getRandomInt(1, $('#container').offsetHeight - size)
    this.speedX = getRandomInt(3,6)
    this.speedY = getRandomInt(3,6)
    this.size = size + 'px'
    this.createBox()
  }

  createBox() {
    this.box = document.createElement('div')
    this.box.className = 'box'
    this.box.style.left = this.x + 'px'
    this.box.style.top = this.y + 'px'
    this.box.style.width = this.size
    this.box.style.height = this.size
    $('#container').append(this.box)
  }
  
  moveX(){
    let widthElement = parseInt(this.size)

    let left = this.box.style.left
    left = parseInt(left)

    if (widthElement + left > $('#container').offsetWidth || left < 0) {
      this.speedX = -this.speedX
    }

    left = left + this.speedX
    this.box.style.left = left + 'px'
  }

  moveY(){
    let widthElement = parseInt(this.size)

    let top = this.box.style.top
    top = parseInt(top)

    if (widthElement + top > $('#container').offsetHeight || top < 0) {
      this.speedY = -this.speedY
    }

    top = top + this.speedY
    this.box.style.top = top + 'px'
  }
  
  move() {
    this.moveX()
    this.moveY()
  }
}

