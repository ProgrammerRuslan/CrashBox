import { getRandomInt } from '../../helper'
import { back } from '../health-item/healthItem'

export default class Box {
  constructor(size){
    this.x = getRandomInt(1, back.offsetWidth - size)
    this.y = getRandomInt(1, back.offsetHeight - size)
    this.speedX = getRandomInt(3,6)
    this.speedY = getRandomInt(3,6)
    this.size = size + 'px'
    this.addBox()
  }
  
  addBox() {
    this.box = document.createElement('div')
    this.box.className = 'box'
    this.box.style.left = this.x + 'px'
    this.box.style.top = this.y + 'px'
    this.box.style.width = this.size
    this.box.style.height = this.size
    back.append(this.box)
  }
  
  move(){
    let widthElement = parseInt(this.size)
  
    let left = this.box.style.left
    left = parseInt(left)

    if (widthElement + left > back.offsetWidth  || left < 0){
      this.speedX = -this.speedX
    }

    left = left + this.speedX 
    this.box.style.left = left + 'px'

    let top = this.box.style.top
    top = parseInt(top)

    if (widthElement + top > back.offsetHeight  || top < 0){
      this.speedY = -this.speedY
    }
    
    top = top + this.speedY
    this.box.style.top = top + 'px'
  }
}

