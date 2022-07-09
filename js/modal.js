const form = document.querySelector(".form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

function handleSubmit(e) {
  e.preventDefault();
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  form.reset();
}

form.addEventListener("submit", handleSubmit);
