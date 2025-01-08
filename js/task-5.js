function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.body.classList.add(`body-class`)
const colorBody = document.querySelector(`.body-class`);
const colorButton = document.querySelector(`.change-color`);
const colorSpan = document.querySelector(`.color`);
colorButton.addEventListener(`click`, () => {
 let colorNew = `${getRandomHexColor()}`
  colorBody.style.background = colorNew;
  colorSpan.style.background = colorNew;
});