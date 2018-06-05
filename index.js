const form = document.querySelector('form')

const addToSpells = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const spellName = f.spellName.value
  const spellsDiv = document.querySelector('#spells')
  var points = document.createElement("ul");
  var node = document.createTextNode(spellName);
  points.appendChild(node);
  spellsDiv.appendChild(points);
  f.reset()
}

form.addEventListener('submit', addToSpells)