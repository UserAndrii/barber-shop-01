const onlineFormEl = document.querySelector(".online__form");
const sendBtn = document.querySelector(".online__button");

onlineFormEl.addEventListener("submit", (event) => {
	event.preventDefault();
	const targetEl = event.target.elements;

	const data = {
		name: targetEl.name.value,
		number: targetEl.tel.value,
		message: targetEl.mess.value,
    };
    if (data.name !== "" && data.number !== "" && data.message !== "") {
        console.log(data);
        onlineFormEl.reset();
    }
});