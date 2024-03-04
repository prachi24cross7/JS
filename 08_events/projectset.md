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