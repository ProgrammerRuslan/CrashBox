export default class LevelCounter {
  constructor() {
    this.level = 1
  }

  increment() {
    this.level = this.level + 1
  }

  get() {
    return this.level
  }
}