function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector(`#nested`).querySelector(`.target`)
}
function increaseRankBy(n) {
  var list = document.querySelectorAll(`.ranked-list`)
  for (let i = 0; i<list.length; i++) {
    list[i].innerHTML = parseInt(list[i]) + 1;
  }
  return list
}
function deepestChild() {
  var temp = document.querySelector(`div#grand-node`) 
  console.log(`first: ` + temp.querySelectorAll(`div`).length)
  var len = parseInt(temp.querySelectorAll(`div`).length)

  console.log(len + `next: ` + temp.querySelectorAll(`div`)[3].innerHTML)
  return temp.querySelectorAll(`div`)[3]
  
}