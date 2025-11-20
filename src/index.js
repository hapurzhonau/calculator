import { digitCommand } from './commands/digitCommand.js';
import { operationCommand } from './commands/operationCommand.js';
import { clearAll } from './display/display.js';

const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', event => {
  const button = event.target;
  if (!button) return;

  if (button.classList.contains('digit')) {
    const command = digitCommand(button.textContent);
    command.execute();
  }

  if (button.classList.contains('orange')) {
    const command = operationCommand(button.textContent);
    command.execute();
  }

  if (button.classList.contains('m-all-clear')) clearAll();
});
