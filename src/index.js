const screen = document.querySelector('.screen-result');
const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', event => {
  if (event.target.classList.contains('digit')) {
    screen.textContent += event.target.textContent;
  }
});
