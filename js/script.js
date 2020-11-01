width = screen.width - 6 // ширина  
height = screen.height - 120 // высота
console.log(height)
console.log(width);
class Box {
    constructor(id){
        this.id = id
        this.name = 'box' + id
        this.x = getRandomInt(1, width - 53)
        this.y = getRandomInt(1, height - 53)
        this.speedX = getRandomInt(3,6)
        this.speedY = getRandomInt(3,6)
    }
    
    addBox() {
        this.name = document.createElement('div')
        this.name.id = this.id
        this.name.className = 'box'
        this.name.style.left = this.x + 'px'
        this.name.style.top = this.y + 'px'
        document.body.append(this.name)
        console.log(this.speedX);
        console.log(this.speedY);
    }
    
    move(){
        let widthElement = this.name.offsetWidth

        let left = this.name.style.left
        left = parseInt(left)

        if (widthElement + left > width || left < 0)
            this.speedX = -this.speedX
        left = left + this.speedX 
        this.name.style.left = left + 'px'

        let top = this.name.style.top
        top = parseInt(top)

        if (widthElement + top > height || top < 0)
            this.speedY = -this.speedY
        top = top + this.speedY
        this.name.style.top = top + 'px'
    }
}
function getRandomInt(min, max) {
    return Math.floor((Math.random() * Math.floor(max - min)) + min);
}

let box = []
for (let i = 0; i < 1; i++) {
    box[i] = new Box(i)
    box[i].addBox()
}

console.log(box);

let a = document.querySelectorAll('.box')
setInterval(() => {
    for (let i = 0; i < box.length; i++) {
        box[i].move()
        
    }
}, 10)









