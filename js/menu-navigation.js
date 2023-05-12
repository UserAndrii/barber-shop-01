const menuLinks = document.querySelectorAll("[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener("click", openMenuLinkClick);
	});

	function openMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

			const mobMenu = document.querySelector(".backdrop");
			mobMenu.classList.add("is-hidden");
			const bodyEl = document.querySelector("body");
			bodyEl.classList.remove("no-scroll");

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}
	}
}
