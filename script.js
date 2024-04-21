"use strict";

let form = document.getElementById("login");
let visIcons = document.querySelectorAll(".icons");
let password1 = document.getElementById("password-input");
let password2 = document.getElementById("password-input2");
let email = document.getElementById("email-input");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = {};

  let username = document.getElementById("username-input").value;

  if (username === "") {
    errors.username = "Username cannot be empty";
  }

  let email = document.getElementById("email-input").value;
  if (email === "") {
    errors.email = "Email can not be empty";
  }

  let password = document.getElementById("password-input").value;

  if (password === "") {
    errors.password = "Password cannot be empty";
  }

  let passowrdRep = document.getElementById("password-input2").value;

  if (password != passowrdRep) {
    errors.password2 = "Passwords do not match";
  }

  let gender = false;
  this.querySelectorAll(".choosegender").forEach((e) => {
    if (e.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Select gender";
  }

  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You have to agree";
  }

  this.querySelectorAll(".error-text").forEach((el) => {
    el.innerHTML = " ";
  });

  for (let item in errors) {
    let errorElement = document.getElementById("error-" + item);

    if (errorElement) {
      errorElement.innerText = errors[item];
    }
  }

  if ((Object.keys(errors).length = 0)) {
    this.submit;
  }
});

visIcons.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.classList.contains("fa-eye")) {
      el.classList.replace("fa-eye", "fa-eye-slash");
      password2.type = "text";
      password1.type = "text";
    } else {
      password2.type = "password";
      password1.type = "password";
      el.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});

function emailValidation() {
  let emailValue = document.getElementById("email-input").value;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailError = document.getElementById("error-email");

  if (emailValue.match(emailPattern)) {
    emailError.innerText = "Your Email is Valid";
    emailError.style.color = "green";
  } else {
    emailError.innerText = "Your Email is Invalid";
    emailError.style.color = "red";
  }

  if (emailValue === "") {
    emailError.innerText = "";
  }
}

email.addEventListener("keyup", emailValidation);
