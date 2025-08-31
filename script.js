// ------------------------------
// NAV MENU TOGGLE (for mobile)
// ------------------------------
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');
});

// ------------------------------
// BMI CALCULATOR
// ------------------------------
function calculateBMI() {
  const heightInput = document.getElementById('height').value;
  const weightInput = document.getElementById('weight').value;
  const result = document.getElementById('bmi-result');

  if (heightInput && weightInput) {
    const heightInMeters = heightInput / 100;
    const bmi = weightInput / (heightInMeters * heightInMeters);
    let category = '';

    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    result.textContent = `Your BMI is ${bmi.toFixed(1)} — ${category}`;
  } else {
    result.textContent = 'Please enter both height and weight.';
  }
}