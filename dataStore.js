const emailInput = document.getElementById('contact-email');
const nameInput = document.getElementById('user-name');
const textArea = document.getElementById('msg');

function holdChanges() {
  const formData = {
    uName: nameInput.value,
    uEmail: emailInput.value,
    uComment: textArea.value,
  };

  localStorage.setItem('form', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObj = JSON.parse(getFormValue);
    nameInput.value = formObj.uName;
    emailInput.value = formObj.uEmail;
    textArea.value = formObj.uComment;
  }
});
nameInput.onchange = holdChanges;
emailInput.onchange = holdChanges;
textArea.onchange = holdChanges;
