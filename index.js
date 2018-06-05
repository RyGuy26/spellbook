const button = document.querySelector('button')
const form = document.querySelector('input')
const input = document.querySelector('input'.textContent)
const sayContents = function() {
 
  const heading = document.querySelector('#potions1')
  heading.textContent = form.value
}


button.addEventListener('click', sayContents) 
form.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    
  
    if (event.keyCode === 13) {
      
      button.click();
    }
  });
