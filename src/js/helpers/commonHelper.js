export function getRandomInt(min, max) {
  return Math.floor((Math.random() * Math.floor(max - min)) + min)
}

export function $(el){
  return document.querySelector(el)
}




