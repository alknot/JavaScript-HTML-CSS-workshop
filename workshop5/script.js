const levelform = document.getElementById('levelform');
const levelSelect = document.getElementById('level-select');
const user_input = document.getElementById('user-input');
const time = document.getElementById('time');
const score = document.getElementById('score');
const level_button = document.getElementById('level-button');
const gameContainer = document.getElementById('gameover_container');
const word = document.getElementById('word');


const words = {
  easy: ['apple', 'banana', 'grape', 'orange', 'peach'],
  medium: ['strawberry', 'blueberry', 'pineapple', 'kiwi', 'mango'],
  hard: ['pomegranate', 'watermelon', 'cantaloupe', 'papaya', 'dragonfruit']
};
let currentWord = '';

let timer = 20; // Set initial time in seconds
let scoreCount = 0;

const timeInterval = setInterval(updateTime, 1000);

function updateTime() {
    timer--;
    time.innerHTML = `Time: ${timer}`;
    if (timer <= 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function getRandomWord(level) {
  console.log("getRandomWord called with level:", level);
  const wordList = words[level];
  console.log("Available words for level:", wordList);
  return wordList[Math.floor(Math.random() * wordList.length)];
}
    


function displayWord() {
  console.log("displayWord called");
  currentWord = getRandomWord(levelSelect.value);
  word.innerHTML = currentWord;
}

displayWord();

user_input.addEventListener('input', function() {

  console.log("User input changed:", user_input.value);
  if (user_input.value === currentWord) {
    console.log("Correct word entered");
    scoreCount++;
    score.innerHTML = `Score: ${scoreCount}`;
    user_input.value = '';
    displayWord();
  }
});

function gameOver(){
  clearInterval(timeInterval);
  gameContainer.style.display = 'flex';
  gameContainer.innerHTML = `<h2>Game Over</h2><p>Your score is: ${scoreCount}</p>
  <button id="restart-button">Restart</button>`;

  document.getElementById('restart-button').addEventListener('click', function() {
    location.reload();
  });
}





