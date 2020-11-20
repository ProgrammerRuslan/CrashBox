import { getRandomInt } from '../../helper'
import { back } from '../health-item/healthItem'

export default class Box {
  constructor(id, size){
    this.id = id
    this.name = 'box' + id
    this.x = getRandomInt(1, screen.width - size - 10)
    this.y = getRandomInt(1, screen.height - size - 145)
    this.speedX = getRandomInt(3,6)
    this.speedY = getRandomInt(3,6)
    this.size = size + 'px'
  }
  
  addBox() {
    this.name = document.createElement('div')
    this.name.id = this.id
    this.name.className = 'box'
    this.name.style.left = this.x + 'px'
    this.name.style.top = this.y + 'px'
    this.name.style.width = this.size
    this.name.style.height = this.size
    back.append(this.name)
  }
  
  move(){
    let widthElement = parseInt(this.size)
  
    let left = this.name.style.left
    left = parseInt(left)

    if (widthElement + left > screen.width - 10 || left < 0){
      this.speedX = -this.speedX
    }

    left = left + this.speedX 
    this.name.style.left = left + 'px'

    let top = this.name.style.top
    top = parseInt(top)

    if (widthElement + top > screen.height - 145 || top < 0){
      this.speedY = -this.speedY
    }
    
    top = top + this.speedY
    this.name.style.top = top + 'px'
  }
}

