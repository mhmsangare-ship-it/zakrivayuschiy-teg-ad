const saveButton = document.querySelector('.save-button');
const saveDialog = document.querySelector('.dialog');
const closeButton = document.querySelector('.dialog__button');

saveButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  saveDialog.showModal();
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  saveDialog.close();
});
