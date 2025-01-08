const inputName = document.querySelector(`#name-input`);
const spanText = document.querySelector(`#name-output`);
inputName.addEventListener(`input`, () => {
    const fieldValue = inputName.value.trim();
    spanText.textContent = fieldValue;
    if (fieldValue === "") {
    spanText.textContent = `Anonymous`;
        return;
    }
    //spanText.textContent = fieldValue;

})