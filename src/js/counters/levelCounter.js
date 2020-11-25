export default class LevelCounter {
  constructor() {
    this.level = 2
  }

  increment() {
    this.level = this.level + 1
  }

  get() {
    return this.level
  }
}