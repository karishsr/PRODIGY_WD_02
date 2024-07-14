let timer;
let elapsedTime = 0;
let isRunning = false;
let laps = [];

const display = document.getElementById('display');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('laps');

function formatTime(time) {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
    elapsedTime += 1;
    display.textContent = formatTime(elapsedTime);
}

startPauseBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startPauseBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        startPauseBtn.textContent = 'Pause';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    laps = [];
    display.textContent = '00:00:00';
    lapsList.innerHTML = '';
    startPauseBtn.textContent = 'Start';
    isRunning = false;
});

lapBtn.addEventListener('click', () => {
    if (isRunning) {
        laps.push(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${laps.length}: ${formatTime(elapsedTime)}`;
        lapsList.appendChild(lapItem);
    }
});