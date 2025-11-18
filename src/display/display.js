import { calculatorState } from '../core/calculator.js';

const screen = document.querySelector('.screen-result');

export function updateDisplay() {
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

export const handleOperation = operation => {
  const current = calculatorState.currentValue;
  const operations = ['+', '-', '×', '÷'];
  const hasLastOperation = operations.includes(current[current.length - 1]);
  if (hasLastOperation) {
    calculatorState.currentValue =
      calculatorState.currentValue.slice(0, -1) + operation;
  } else {
    calculatorState.currentValue += operation;
  }
  calculatorState.operation = operation;
  updateDisplay();
};
