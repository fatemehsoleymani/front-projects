let calculation = localStorage.getItem('calculation') || '';
showCalculation();
function updateCalculation(value) {
  calculation += value; 
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
  showCalculation();
}

function showCalculation() {
  document.querySelector('.js-show-calculation').innerHTML = calculation;
}
