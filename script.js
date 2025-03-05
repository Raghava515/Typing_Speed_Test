let startTime, interval;
const testSentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is a powerful programming language for web development.",
    "Practice makes a man perfect, so keep coding every day.",
    "Artificial Intelligence is changing the world rapidly.",
    "Typing speed is an important skill for programmers and writers."
];

const textContainer = document.getElementById("text-container");
const inputBox = document.getElementById("input-box");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

let currentSentence = "";


function loadNewSentence() {
    currentSentence = testSentences[Math.floor(Math.random() * testSentences.length)];
    textContainer.innerText = currentSentence;
}

function startTimer() {
    startTime = new Date().getTime();
    interval = setInterval(() => {
        let elapsed = Math.floor((new Date().getTime() - startTime) / 1000);
        timeDisplay.innerText = elapsed;
    }, 1000);
}


function calculateSpeed() {
    if (!startTime) startTimer();

    let typedText = inputBox.value;
    let wordsTyped = typedText.trim().split(/\s+/).length;
    let elapsedTime = (new Date().getTime() - startTime) / 60000;
    let wpm = Math.floor(wordsTyped / elapsedTime) || 0;
    wpmDisplay.innerText = wpm;

    
    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentSentence[i]) correctChars++;
    }
    let accuracy = ((correctChars / typedText.length) * 100).toFixed(2);
    accuracyDisplay.innerText = typedText.length ? accuracy : "100";
}


function resetTest() {
    clearInterval(interval);
    startTime = null;
    inputBox.value = "";
    timeDisplay.innerText = "0";
    wpmDisplay.innerText = "0";
    accuracyDisplay.innerText = "100";
    loadNewSentence();
}
loadNewSentence();
