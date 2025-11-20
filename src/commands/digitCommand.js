import { calculatorState } from '../core/calculator.js';
import { createCommand } from '../core/command.js';
import { appendDigit, updateDisplay } from '../display/display.js';

export function digitCommand(digit) {
  let previousState = null;
  return createCommand(
    () => {
      previousState = {
        currentValue: calculatorState.currentValue,
        previousValue: calculatorState.previousValue,
        operation: calculatorState.operation,
        shouldResetScreen: calculatorState.shouldResetScreen,
      };
      appendDigit(digit);
    },
    () => {
      if (previousState !== null) {
        calculatorState.currentValue = previousState.currentValue;
        calculatorState.previousValue = previousState.previousValue;
        calculatorState.operation = previousState.operation;
        calculatorState.shouldResetScreen = previousState.shouldResetScreen;
        updateDisplay();
      }
    }
  );
}
