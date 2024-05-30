let login = document.querySelector(".usignin");
let signup_link = document.querySelector(".signup_link");

let signup = document.querySelector(".usignup");
let login_link = document.querySelector(".login_link");

signup_link.addEventListener("click", (e) => {
  e.preventDefault();
  login.classList.add("deactive");
  login.classList.remove("active");
  signup.classList.toggle("deactive");
});

login_link.addEventListener("click", () => {
  signup.classList.add("deactive");
  signup.classList.remove("active");
  login.classList.toggle("deactive");
});
