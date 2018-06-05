const button = document.querySelector('button')
const form = document.querySelector('form')
const input = document.getElementById("input")
const sayContents = function(ev) {
 ev.preventDefault()
  const heading = document.querySelector('#potions1')
  heading.textContent = input.value
}


form.addEventListener('submit', sayContents) 
