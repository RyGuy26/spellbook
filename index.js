const button = document.querySelector('button')
const form = document.querySelector('form')
const input = document.getElementById("input")
const sayContents = function(ev) {
 ev.preventDefault()
  const spells = document.querySelector('#spells')
  spells.textContent = input.value
  input.value=""
}


form.addEventListener('submit', sayContents) 
