const button = document.querySelector('button')
const form = document.querySelector('form')
const input = document.querySelector('input'.textContent)
const sayContents = function(ev) {
 ev.preventDefault()
  const heading = document.querySelector('#potions1')
  heading.textContent = form.value
}


form.addEventListener('submit', sayContents) 
