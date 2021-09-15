(() => {
  const refs = {
    openModalBNBtn: document.querySelector('[data-modal_buy-open]'),
    closeModalBNBtn: document.querySelector('[data-modal_buy-close]'),
    modal: document.querySelector('[data-modal_buy]'),
  };

  refs.openModalBNBtn.addEventListener('click', toggleModal);
  refs.closeModalBNBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
  document
  .querySelector('.js-speaker-form')
  .addEventListener('submit', e => {
      e.preventDefault();

      new FormData(e.currentTarget).forEach((value, name) =>
          console.log(`${name}: ${value}`),
    );
    e.currentTarget.reset();
  });
})();