## project 2 solution 
```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === ''|| height < 0 || isNaN(height)){
    result.innerHTML = `please enter valid height ${height}`;
  }else if(weight === ''|| weight < 0 || isNaN(weight)){
    result.innerHTML = `please enter valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)

    result.innerHTML = `<span>${bmi}</span>`
  }


})


```

## project 3 

```javascript
const clock = document.getElementById('clock');



setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);
```


## project 4
```javascript
let  randomNumber = parseInt(Math.random()*100+1)



const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter valid number')
  }else if(guess < 1){
    alert('please enter number more then one')
  }else if(guess > 100){
    alert('please enter number less then 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
    displayGuess(guess)
    displayMessage(`Game over. Random no was ${randomNumber}`)
    endGame() 
    }else{
      displayGuess(guess)
      checkGUess(guess)
    }
  }
}

function checkGUess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
  }else if(guess < randomNumber){
    displayMessage(`Number is Too low`)
  }else if (guess > randomNumber){
    displayMessage(`Number is TOO High`)
  }
}
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess ++;
  remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput = ''
  userInput.setAttribute('disable', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100+1)
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}  `
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
```
