import { createCommand } from './command';
import { calculatorState } from './calculator';
import { add } from '../operations/add.js';
import { subtract } from '../operations/subtract.js';
import { multiply } from '../operations/multiply.js';
import { divide } from '../operations/divide.js';

function makeCommand(operationFunction) {
  let previousValue = null;

  return createCommand(
    (a, b) => {
      previousValue = calculatorState.currentValue;
      const result = operationFunction(a, b);
      calculatorState.currentValue = result;
      return result;
    },
    () => {
      calculatorState.currentValue = previousValue;
      return previousValue;
    }
  );
}

export const addCommand = makeCommand(add);
export const subtractCommand = makeCommand(subtract);
export const multiplyCommand = makeCommand(multiply);
export const divideCommand = makeCommand(divide);
