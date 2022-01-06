document.querySelector(".form__btn").addEventListener("click",e=>{

	const email = document.querySelector(".form__email-input");
	const msgError = document.querySelector(".form__email-text_error");

	let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

	if (!emailRegex.test(email.value)) {
		e.preventDefault()

		msgError.classList.add("form__email-text_error--active");
		email.classList.add("form__email-input--error")

	} else {
		msgError.classList.remove("form__email-text_error--active");
		email.classList.remove("form__email-input--error")
	}
})