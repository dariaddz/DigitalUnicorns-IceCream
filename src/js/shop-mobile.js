(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-shop-mobile-open]'),
        // closeModalBtn: document.querySelector('[data-shop-close]'),
        closeModalBtn: document.querySelector('[data-shop-mobile-close]'),
        modal: document.querySelector('[data-shop-mobile]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();