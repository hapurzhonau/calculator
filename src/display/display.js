import { calculate, calculatorState } from '../core/calculator.js';

export const screen = document.querySelector('.screen-result');
export const OPERATIONS = new Set(['+', '-', '×', '÷']);

export function updateDisplay() {
  screen.textContent = calculatorState.currentValue;
}

export function clearAll() {
  calculatorState.currentValue = '0';
  calculatorState.previousValue = null;
  calculatorState.operation = null;
  calculatorState.shouldResetScreen = false;
  updateDisplay();
}

export function appendDigit(digit) {
  if (calculatorState.shouldResetScreen) {
    if (digit === '.') {
      calculatorState.currentValue = '0.';
    } else {
      calculatorState.currentValue = digit;
    }
    calculatorState.shouldResetScreen = false;
  } else {
    const current = calculatorState.currentValue;
    const lastNumber = getLastNumber(current);

    if (digit === '.') {
      if (lastNumber.includes('.')) return;
      calculatorState.currentValue += '.';
    } else if (digit === '0' && lastNumber === '0') {
      return;
    } else if (current === '0') {
      calculatorState.currentValue = digit;
    } else {
      calculatorState.currentValue += digit;
    }
  }
  updateDisplay();
}

export function handleOperation(operation) {
  if (calculatorState.operation && calculatorState.previousValue !== null) {
    const result = calculate();
    calculatorState.currentValue = result.toString();
    calculatorState.previousValue = result;
  } else {
    calculatorState.previousValue = parseFloat(calculatorState.currentValue);
  }
  calculatorState.operation = operation;
  calculatorState.shouldResetScreen = true;
  updateDisplay();
}

function getLastNumber(expression) {
  const parts = expression.split(/[+\-×÷]/);
  return parts[parts.length - 1];
}
