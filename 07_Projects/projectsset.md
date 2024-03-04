#Projects related to DOM
##Project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution code 
##Project 1
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "white"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "blue"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "yellow"){
      body.style.backgroundColor = e.target.id;
    }

  });
});
```

##project 2 

```javascript

const form = document.querySelector('form')
//if you try to get and parse the height and weight at this point of the code then empty value would be submitted in the form variable
form.addEventListener('submit', function(e){
  e.preventDefault()
// when you will get and parse the height and weight at this point then it will be considered after hitting on calculate button as we have taken addEventListener as submit
  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector('#results')

  if(height == '' || height <0 || isNaN(height)){
      results.innerHTML = `Please enter a valid height ${height}`
  }

  else if(weight == '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please enter a valid weight ${weight}`
  }

  else{
    const BMI = (weight/((height * height )/10000)).toFixed(2)

    results.innerHTML = `<span>${BMI}</span>`;
  }
})
```

```javascript
const clock = document.getElementById('clock')
//const clock = document.querySelector('clock')



setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)

```

###project4

```javascript
let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault(); //to stop the value to pick
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  //validates the guess
  //check if the guess < 1
  //check if the guess > 100

if(isNaN(guess)){
  alert(`Please enter a valid guess, ${guess}`);
}else if(guess <1 || guess > 100){
  alert(`Please enter a valid guess, ${guess}`);
}else{
  prevGuess.push(guess);
  if(numGuess === 11){
    displayGuess(guess);
    displayMessage(`Game Over. Random number was ${randomNumber}`);
    endGame();
  }
  else{
    displayGuess(guess);
    checkGuess(guess);

  }
}
}

function checkGuess(guess){
//prints msg if the validated guess is valid or not
//check if the random number == the guessed number
//if so then display you won using the displayGuess function
//else inform if the random number is low or high than the guesssed number
  if(guess === randomNumber){
  displayMessage(`You guessed right, ${randomNumber}`);
  endGame();
  }else if(guess < randomNumber){
  displayMessage(`Number is too low`);
  }else if(guess > randomNumber){
  displayMessage(`Number is too high`);
}
}

function displayGuess(guess){
  //will empty the user guess from the box for the next guess
  //reduces the count of remaining guesses
  //updates the previous guess array
  //will interact with DOM
  //will add the guess to the innerHTML

  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`;

}

function displayMessage(message){
  lowOrHi.innerHTML =`<h2>${message}</h2>`;
}

function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id ="newGame"> Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();

}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML=`${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })

}
```

##change color project 6

```javascript

//generate a random color

const randomColor = function(){
  const hex ='0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random()*10)];
  }
  return color
};
let intervalID;
const startChangingColor = function(){
  if(!intervalID){
    intervalID = setInterval(changeBgColor, 1000)}
    function changeBgColor(){
      document.body.style.backgroundColor = randomColor();}
};

const stopChangingColor = function(){

    clearInterval(intervalID)
    intervalID = null;

}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)


```


###project 5
```javascript
console.log('Project 5');
const insert = document.querySelector('#insert')
console.log(insert)

window.addEventListener('keydown', function(e){
    insert.innerHTML = `
      <div class="color">
        <table>
        <tr>
          <th>key</th>
          <th>key code</th>
          <th>code</th>
        </tr>
        <tr>
          <th>${e.key === " ", "Space"}</th>
          <th>${e.keyCode}</th>
          <th>${e.code}</th>
        </tr>
        </table>
      </div>
    `
})
```
