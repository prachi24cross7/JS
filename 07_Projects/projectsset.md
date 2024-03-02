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

