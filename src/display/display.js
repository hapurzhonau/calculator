import { calculatorState } from '../core/calculator.js';

export function updateDisplay() {
  const screen = document.querySelector('.screen-result');
  screen.textContent = calculatorState.currentValue;
}

export function clearAll() {
  calculatorState.currentValue = '0';
  calculatorState.previousValue = null;
  calculatorState.operation = null;
  updateDisplay();
}

export function appendDigit(digit) {
  if (digit === '.') {
    if (calculatorState.currentValue.includes('.')) {
      return;
    }
    calculatorState.currentValue += '.';
    updateDisplay();
    return;
  }
  if (calculatorState.currentValue === '0') {
    calculatorState.currentValue = digit;
  } else {
    calculatorState.currentValue += digit;
  }
  updateDisplay();
}
