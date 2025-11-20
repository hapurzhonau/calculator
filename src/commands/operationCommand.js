import { createCommand } from '../core/command.js';
import { handleOperation, updateDisplay } from '../display/display.js';
import { calculatorState } from '../core/calculator.js';

export function operationCommand(operation) {
  let previousState = null;

  return createCommand(
    () => {
      previousState = { ...calculatorState };
      handleOperation(operation);
    },
    () => {
      if (previousState) {
        Object.assign(calculatorState, previousState);
        updateDisplay();
      }
    }
  );
}
