var div = document.getElementById('changingDiv')
function reset() {
  div.style.backgroundColor = "red"
  div.style.height = "100px"
  div.style.width = "100px"
}
function bigger() {
  div.style.backgroundColor = "blue"
  div.style.height = "200px"
  div.style.width = "200px"
  window.setTimeout(reset, 3000)
}
reset()
div.addEventListener("click", bigger)