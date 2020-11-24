export default class Health {
  constructor(healthCount){
    this.health = healthCount
  }

  decrement() {
    this.health = this.health - 1
  }

  get() {
    return this.health
  }
}

