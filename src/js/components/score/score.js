export default class Score {
  constructor(){
    this.score = 0
  }

  increment() {
    this.score = this.score + 1
  }

  get() {
    return this.score
  }
}
