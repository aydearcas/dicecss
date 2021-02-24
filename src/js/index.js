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

function newRoll () {
  clearDots()
  rollDice()
}

const rollButton = document.getElementById('rollButton')
rollButton.addEventListener('click', newRoll)
