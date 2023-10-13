function drawOnScreen(gridSize) {
  const screen = document.querySelector('.innerContainer');
  let square = screen.querySelectorAll('div');
  square.forEach(div=> div.remove());
  screen.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  screen.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
 
  let amount = gridSize * gridSize;
  
  for (let i = 0; i < amount; i++){
      let square = document.createElement('div');
      square.addEventListener('mouseover', colorOfSquares());
      square.style.backgroundColor = 'lightgrey';
      screen.insertAdjacentElement('beforeend', square);
  }
}

drawOnScreen(16);

function changeScreenSize(input) {
    if(input >= 2 && input <= 100){
       drawOnScreen(input);
    } else {
        console.log('Enter a number between 2 and 100');
    }
}

function clearScreen() {
    const screen = document.querySelector('.innerContainer');
    let square = screen.querySelectorAll('div');
    square.forEach(div=> div.remove());
}

function colorOfSquares() {
  this.style.backgroundColor = 'black';
}