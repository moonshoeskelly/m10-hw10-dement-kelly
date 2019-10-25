// It is always helpful to use comments in your code!

const boilingTemp = 212;
const freezingTemp = 32;
let waterTemp = 85;

//Immediately print boiling temp to boiling-temp span

document.getElementById('boiling-temp').innerHTML = boilingTemp;

//Immediately print freezing temp to freezing-temp span

document.getElementById('freezing-temp').innerHTML = freezingTemp;

//Immediately print water temp to water-temp span

document.getElementById('water-temp').innerHTML = waterTemp;



//Delay 3 seconds, remove hide class and add show class to correct Section

const tempBoil = document.getElementById('boiling');
const tempFreeze = document.getElementById('frozen');
const tempGood = document.getElementById('good-temp');

setTimeout (() => {

  //above 212, hide and show to boiling ID
  if (waterTemp >= 212) {
    tempBoil.classList.remove('hdie');
    tempBoil.classList.add('show');
  }

  //below 32, hide and show to frozen ID
  else if (waterTemp <= 32) {
    tempFreeze.classList.remove('hdie');
    tempFreeze.classList.add('show');
  }

  //in between 32 and 212, hide and show to good-temp ID
  else {
    tempGood.classList.remove('hdie');
    tempGood.classList.add('show');
  }
}, 3000);
