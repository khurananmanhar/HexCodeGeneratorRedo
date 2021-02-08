let hex = document.getElementById('hex')
function colour(){
  let randomColour = (Math.floor(Math.random()* 16777216)).toString(16)
  document.body.style.backgroundColor = "#" + randomColour
  hex.innerText = "#" + randomColour
  document.body.style.transition = "all 2s";
}
  