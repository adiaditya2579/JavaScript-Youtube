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