export default class BoxCounter {
  constructor() {
    this.box = 0
  }

  increment() {
    this.box = this.box + 1
  }

  get() {
    return this.box
  }

  set(boxCount) {
    this.box = boxCount
  }
}