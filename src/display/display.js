import { calculatorState } from '../core/calculator.js';

export const screen = document.querySelector('.screen-result');
export const OPERATIONS = new Set(['+', '-', '×', '÷']);

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
  const current = calculatorState.currentValue;
  const hasLastOperation = OPERATIONS.has(current[current.length - 1]);
  const lastNumber = getLastNumber(current);

  if (digit === '.') {
    if (lastNumber.includes('.')) return;
    if (hasLastOperation) calculatorState.currentValue += '0';
    calculatorState.currentValue += '.';
    updateDisplay();
    return;
  }
  if (digit == 0) if (lastNumber === '0') return;
  if (current === '0') calculatorState.currentValue = digit;
  else calculatorState.currentValue += digit;
  updateDisplay();

  function getLastNumber(expression) {
    const parts = expression.split(/[+\-×÷]/);
    return parts[parts.length - 1];
  }
}

export const handleOperation = operation => {
  const current = calculatorState.currentValue;
  const hasLastOperation = OPERATIONS.has(current[current.length - 1]);

  if (hasLastOperation) {
    calculatorState.currentValue = current.slice(0, -1) + operation;
  } else {
    calculatorState.currentValue += operation;
  }
  calculatorState.operation = operation;
  updateDisplay();
};
