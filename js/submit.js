const formEl = document.querySelector(".modal__form");
const submitBtn = document.querySelector(".modal__send-button");
const checkBoxEl = document.querySelector(".agreement__checkbox");
const modalEl = document.querySelector("[data-modal]");

checkBoxEl.addEventListener(
	"change",
	(event) => {
		submitBtn.disabled = !event.target.checked;
	},
	false
);

formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	const targetEl = event.target.elements;
	
    if (targetEl.checkbox.checked) {
		const data = {
			name: targetEl.name.value,
			number: targetEl.tel.value,
			email: targetEl.email.value,
			comment: targetEl.comment.value,
		};
		console.log(data);
		formEl.reset();
		modalEl.classList.toggle("is-hidden");
	}
});
