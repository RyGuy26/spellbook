const form = document.querySelector('form')

const addToSpells = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const spellName = f.spellName.value
  const spellsDiv = document.querySelector('#spells')
  var points = document.createElement("li");
  var node = document.createTextNode(spellName);
  points.appendChild(node);
  spellsDiv.appendChild(points);

  const potionName = f.potionName.value
  const potionDiv = document.querySelector('#potions')
  var points = document.createElement("li");
  var node = document.createTextNode(potionName);
  points.appendChild(node);
  potionDiv.appendChild(points);
  f.reset()
}
const addToPotions = function(ev) {
  const potionName = f.potionName.value
  const potionDiv = document.querySelector('#potions')
  var points = document.createElement("li");
  var node = document.createTextNode(potionName);
  points.appendChild(node);
  potionDiv.appendChild(points);
  f.reset()
}

form.addEventListener('submit', addToPotions)
form.addEventListener('submit', addToSpells)