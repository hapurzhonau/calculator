import { calculatorState } from './core/calculator.js';
import { appendDigit, clearAll } from './display/display.js';

const screen = document.querySelector('.screen-result');
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', event => {
  const button = event.target;
  if (button.classList.contains('digit')) {
    const digit = button.textContent;
    appendDigit(digit);
  }
  screen.textContent = calculatorState.currentValue;
});

const mAllClear = document.querySelector('.m-all-clear');
mAllClear.addEventListener('click', () => {
  clearAll();
});
