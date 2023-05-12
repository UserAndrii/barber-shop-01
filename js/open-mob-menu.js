(() => {
	const refs = {
		openMobMenuBtn: document.querySelector(".mob-menu__open-btn"),
		closeMobMenuBtn: document.querySelector(".mob-menu__close-btn"),
		backdropEl: document.querySelector(".backdrop"),
		bodyEl: document.querySelector("body"),
	};

	refs.openMobMenuBtn.addEventListener("click", toggleMenu);
	refs.closeMobMenuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.backdropEl.classList.toggle("is-hidden");
		refs.bodyEl.classList.toggle("no-scroll");
	}
})();
