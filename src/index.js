import { calculatorState } from './core/calculator.js';
import { appendDigit, clearAll, handleOperation } from './display/display.js';

const screen = document.querySelector('.screen-result');
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', event => {
  const button = event.target;
  if (!button) return;

  if (button.classList.contains('digit')) {
    const digit = button.textContent;
    appendDigit(digit);
  }

  if (
    button.classList.contains('orange') &&
    !button.classList.contains('equals')
  ) {
    const operation = button.textContent;
    handleOperation(operation);
  }
  screen.textContent = calculatorState.currentValue;
});

const mAllClear = document.querySelector('.m-all-clear');
mAllClear.addEventListener('click', () => {
  clearAll();
});
