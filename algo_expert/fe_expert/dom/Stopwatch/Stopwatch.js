// Write your code here.
const startBtn = document.getElementById("start-button");
const stopBtn = document.getElementById("stop-button");
const resetBtn = document.getElementById("reset-button");
const timerText = document.getElementById("timer");

let intervalId = null;
let animationId = null;

// timer
let minutes = 0;
let seconds = 0;
let mills = 0;
let prevTime = 0;
let startTime = null;

function fillWithZero(element, padAmount = 3) {
    return `${element}`.padStart(padAmount, "0");
}


startBtn.addEventListener("click", () => {
    if (!startTime) {
        startTime = Date.now();
    }
    animationId = requestAnimationFrame(() => {
        intervalId = setInterval(() => {
            mills = Date.now() - startTime + prevTime;
            seconds = Math.floor(mills / 1000) % 60;
            minutes = Math.floor(Math.floor(mills / 1000) / 60);
            mills = mills%1000;
            timerText.textContent = `${fillWithZero(minutes, 2)}:${fillWithZero(seconds, 2)}:${fillWithZero(mills)}`;
        }, 10)
    })

    stopBtn.disabled = false;
    startBtn.disabled = true;
    resetBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    cancelAnimationFrame(animationId);
    prevTime = Date.now() - startTime;
    stopBtn.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = false;
})

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    cancelAnimationFrame(animationId);
    mills = 0;
    seconds = 0;
    minutes = 0;
    prevTime = 0;
    startTime = null;
    timerText.textContent = "00:00:000"
    stopBtn.disabled = true;
    resetBtn.disabled = true;
})