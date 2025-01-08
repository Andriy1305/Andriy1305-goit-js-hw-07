
const nameForm = document.querySelector(`.login-form`);
nameForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData   = {
        [nameForm.elements.email.name]: nameForm.elements.email.value.trim(),
        [nameForm.elements.password.name]: nameForm.elements.password.value.trim(),
    };
    if (nameForm.elements.email.value === ``|| nameForm.elements.password.value === ``) {
          alert ('All form fields must be filled in')
    }
            console.log(formData)
    nameForm.reset()
});