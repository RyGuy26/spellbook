const form = document.querySelector('form')

const addToSpells = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const spellName = f.spellName.value
  const potionName = f.potionName.value
  var spells = document.createTextNode(spellName);
  var potions = document.createTextNode(potionName);
  const spellsDiv = document.querySelector('#spells')
  let a = buildListFromSpan(spells,potions)

   spellsDiv.appendChild(a)
  f.reset()
}
function buildListFromSpan(spells,potions){
  const spanSpell= document.createElement("span")
  const spanPotion= document.createElement("span")
  spanSpell.setAttribute("class","spells")
  spanPotion.setAttribute("class","potions")
  spanSpell.appendChild(spells)
  spanPotion.appendChild(potions)
  return buildList(spanSpell,spanPotion)
}
function buildList(spanspell,spanPotion){
  const listitem = document.createElement("li")
  listitem.appendChild(spanspell)
  listitem.appendChild(spanPotion)
  return listitem
 }
form.addEventListener('submit', addToSpells)