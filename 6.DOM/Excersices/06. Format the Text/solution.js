function solve() {
  let inputElement = document.getElementById('input').value.split('.').filter(e => e!=='');
  let outputElement = document.getElementById('output');


while(inputElement.length > 0){
  let pElement = document.createElement('p');
  pElement.textContent = inputElement.splice(0, 3).join('. ') + '.';
  outputElement.appendChild(pElement);
  }

}
