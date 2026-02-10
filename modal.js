(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
        tabBtns: document.querySelectorAll('.tab-btn'),
        formContainers: document.querySelectorAll('.form-container')
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        document.body.classList.toggle('no-scroll');
    }

    refs.tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            refs.tabBtns.forEach(tab => tab.classList.remove('active'));
            refs.formContainers.forEach(container => container.classList.remove('active'));
            
            btn.classList.add('active');
            document.querySelector(`[data-form="${targetTab}"]`).classList.add('active');
        });
    });
})();