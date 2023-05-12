(() => {
	const refs = {
		bodyEl: document.querySelector("body"),
		openModalBtns: document.querySelectorAll("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openModalBtns.forEach((btn) =>
		btn.addEventListener("click", toggleModal)
	);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
		refs.bodyEl.classList.toggle("no-scroll");
	}
})();
