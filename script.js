const convertToFButton = document.getElementById('convertToF');
const convertToCButton = document.getElementById('convertToC');
const celsiusInput = document.getElementById('celsius');
const resultOutput = document.getElementById('result');

convertToFButton.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9/5) + 32;
    resultOutput.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  } else {
    resultOutput.textContent = 'Please enter a valid temperature.';
  }
});

convertToCButton.addEventListener('click', () => {
  const fahrenheit = parseFloat(celsiusInput.value);
  if (!isNaN(fahrenheit)) {
    const celsius = (fahrenheit - 32) * 5/9;
    resultOutput.textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
  } else {
    resultOutput.textContent = 'Please enter a valid temperature.';
  }
});
