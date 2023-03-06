const stopwatch = document.querySelector('.stopwatch');
const display = stopwatch.querySelector('.display');
const startBtn = stopwatch.querySelector('.start');
const stopBtn = stopwatch.querySelector('.stop');
const resetBtn = stopwatch.querySelector('.reset');

let startTime;
let elapsedTime = 0;
let intervalId;

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms - minutes * 60000) / 1000);
  const milliseconds = ms % 1000;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

function tick() {
  const now = Date.now();
  elapsedTime = now - startTime;
  display.textContent = formatTime(elapsedTime);
}

function start() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(tick, 10);
  startBtn.disabled = true;
}

function stop() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}

function reset() {
  clearInterval(intervalId);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
  startBtn.disabled = false;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
