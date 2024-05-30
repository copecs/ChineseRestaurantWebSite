const wheel = document.querySelector('.wheel');
const startButton = document.querySelector('.butt');
const display = document.querySelector('.display');

let deg = 0;
let zoneSize = 45; // deg

const symbolSegments = {
  1: "You won 50%",
  2: "More luck next time!",
  3: "You won 5%",
  4: "You won 10%",
  5: "More luck next time!",
  6: "You won 10%",
  7: "You won 5%",
  8: "More luck next time!",
}


const handleWin = (actualDeg) => {
  const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
  display.innerHTML = symbolSegments[winningSymbolNr];
}

startButton.addEventListener('click', function handleClick() {
  display.innerHTML = "-";
  startButton.style.pointerEvents = 'none';
  deg = Math.floor(5000 + Math.random() * 5000);
  wheel.style.transition = 'all 10s ease-out';
  wheel.style.transform = `rotate(${deg}deg)`;
  wheel.classList.add('blur');
  startButton.removeEventListener('click', handleClick);
});

wheel.addEventListener('transitionend', () => {
  wheel.classList.remove('blur');
  wheel.style.transition = 'none';
  const actualDeg = deg % 360;
  wheel.style.transform = `rotate(${actualDeg}deg)`;
  handleWin(actualDeg);
});
