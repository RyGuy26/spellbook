const form = document.querySelector('form')

const addToSpells = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const spellName = f.spellName.value
  const levelName = f.levelName.value
  var spells = document.createTextNode(spellName);
  var levels = document.createTextNode(levelName);
  const spellsDiv = document.querySelector('#spells')
  let a = buildListFromSpan(spells,levels)

   spellsDiv.appendChild(a)
  f.reset()
}
function buildListFromSpan(spells,levels){
  const spanSpell= document.createElement("span")
  const spanLevel= document.createElement("span")
  spanSpell.setAttribute("class","spells")
  spanLevel.setAttribute("class","levels")
  spanSpell.appendChild(spells)
  spanLevel.appendChild(levels)
  return buildList(spanSpell,spanLevel)
}
function buildList(spanspell,spanLevel){
  const listitem = document.createElement("li")
  listitem.appendChild(spanspell)
  listitem.appendChild(spanLevel)
  return listitem
 }
form.addEventListener('submit', addToSpells)