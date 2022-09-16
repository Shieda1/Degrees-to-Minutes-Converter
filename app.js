// https://www.omnicalculator.com/conversion/degrees-to-minutes

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const minutesRadio = document.getElementById('minutesRadio');
const degreesRadio = document.getElementById('degreesRadio');

let minutes;
let degrees = v; 

// labels of the inpust
const variable = document.getElementById('variable');

minutesRadio.addEventListener('click', function() {
  variable.textContent = 'Degrees';
  degrees = v;
  result.textContent = '';
});

degreesRadio.addEventListener('click', function() {
  variable.textContent = 'Minutes';
  minutes = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(minutesRadio.checked)
    result.textContent = `Minutes = ${computeminutes().toFixed(5)}`;

  else if(degreesRadio.checked)
    result.textContent = `Degrees = ${computedegrees().toFixed(5)}`;
})

// calculation

function computeminutes() {
  return Number(degrees.value) * 60;
}

function computedegrees() {
  return Number(minutes.value) / 60;
}