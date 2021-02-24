function rollDice () {
  const randomFace = Math.floor(1 + 6 * Math.random())
  const face = document.getElementById('face')
  face.classList.add('face' + randomFace)
  for (let i = 0; i < randomFace; i++) {
    face.innerHTML = face.innerHTML + '<div class="dot"></div>'
  }
}

function clearDots () {
  const face = document.getElementById('face')
  const dots = document.querySelectorAll('.dot')
  for (let i = 0; i < dots.length; i++) {
    dots[i].remove()
  }
  for (let i = 1; i < 7; i++) {
    face.classList.remove('face' + i)
  }
}

function addHistory () {
/* Función que genera el historial de tiradas cogiendo el innerHTML de History y añadiendo un <p>
  con la última tirada que se realizó. Necesita saber cuál es el número random que se generó.
  Eso puede hacerse contando los dots que hay
*/
  const dots = document.querySelectorAll('.dot')
  const historyList = document.querySelector('.history')
  historyList.innerHTML = `${historyList.innerHTML}<p class ="history-roll">${dots.length}</p>`
}
function updateScroll () {
  const historial = document.querySelector('.history')
  historial.scrollTop = historial.scrollHeight
}

function newRoll () {
  clearDots()
  rollDice()
  addHistory()
  updateScroll()
}

const rollButton = document.getElementById('rollButton')
rollButton.addEventListener('click', newRoll)
