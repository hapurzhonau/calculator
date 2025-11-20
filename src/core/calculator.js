export const calculatorState = {
  currentValue: '0',
  previousValue: null,
  operation: null,
  shouldResetScreen: true,
  memory: 0,
};
export function calculate() {
  if (
    calculatorState.currentValue !== null &&
    calculatorState.operation !== null
  )
    parseFloat(calculatorState.currentValue);
  const current = parseFloat(calculatorState.currentValue);
  let result;
  switch (calculatorState.operation) {
    case '+':
      result = calculatorState.previousValue + current;
      break;
    case '-':
      result = calculatorState.previousValue - current;
      break;
    case '×':
      result = calculatorState.previousValue * current;
      break;
    case '÷':
      result = calculatorState.previousValue / current;
      break;
    default:
      result = current;
  }
  return result;
}
