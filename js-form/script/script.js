const form = document.getElementById("regForm");

// select input
const fname = document.querySelector("#firstname");
const lname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const dob = document.querySelector("#dob");
const country = document.querySelector("#country");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
const addressCount = document.querySelector("#addressCount");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

// Error
const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const emailError = document.getElementById("emailError");
const dobError = document.getElementById("dobError");
const countryError = document.getElementById("countryError");
const phoneError = document.getElementById("phoneError");
const addressError = document.getElementById("addressError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Username validation
  if (fname.value.trim() === "") {
    fnameError.textContent = "Empty field";
  } else if (fname.value.length < 3) {
    fnameError.textContent = "Please fill min 3 letter";
  } else {
    fnameError.textContent = "";
  }
  // lastname validation
  if (lname.value.trim() === "") {
    lnameError.textContent = "Empty field";
  } else if (lname.value.length < 3) {
    lnameError.textContent = "Please fill min 3 letter";
  } else {
    lnameError.textContent = "";
  }
  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "empty email";
  } else if (!emailPattern.test(email.value)) {
    emailError.textContent = "pleas enter valid input";
  } else {
    emailError.textContent = "";
  }
  // DOB Validation
  if (dob.value === "") {
    dobError.textContent = "Please select your date of birth";
  } else {
    dobError.textContent = "";
  }
  // DOB Country
  const countryValue = country.value;
  if (countryValue === "country") {
    countryError.textContent = "please select the country";
  } else {
    countryError.textContent = "";
  }
  // phone Validation
  const phonePattern = /^[0-9]{10}$/;
  if (phone.value === "") {
    phoneError.textContent = "Phone number is required";
  } else if (isNaN(phone.value)) {
    phoneError.textContent = "Please enter only numbers";
  } else if (!phonePattern.test(phone.value)) {
    phoneError.textContent = "Please enter a valid 10-digit number";
  } else {
    phoneError.textContent = "";
  }
  // Address Validation

  if (address.value === "") {
    addressError.textContent = "Address number is required ";
  } else {
    addressError.textContent = "";
  }
  // check password match
  password.value !== cpassword.value ? (passwordError.textContent = "password not match") : (passwordError.textContent = "");
});

let maxChars = address.getAttribute("maxlength");
address.addEventListener("input", () => {
  let addressValue = address.value.trim();
  let remaining = maxChars - addressValue.length;
  addressCount.textContent = remaining + " characters remaining";
  console.log(addressValue.length);
});

//password visible
let visible = document.querySelector("#visible");
let cvisible = document.querySelector("#cvisible");

visible.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    visible.classList.add("fa-eye-slash");
    visible.classList.remove("fa-eye");
  } else {
    password.type = "password";
    visible.classList.add("fa-eye");
    visible.classList.remove("fa-eye-slash");
  }
});

cvisible.addEventListener("click", () => {
  if (cpassword.type == "password") {
    cpassword.type = "text";
    cvisible.classList.add("fa-eye-slash");
    cvisible.classList.remove("fa-eye");
  } else {
    cpassword.type = "password";
    cvisible.classList.add("fa-eye");
    cvisible.classList.remove("fa-eye-slash");
  }
});

let minLength = document.querySelector("#minLength");
let number = document.querySelector("#number");
password.addEventListener("input", () => {
  if (password.value.length >= 8) {
    minLength.classList.add("valid");
  } else if (password.value.length < 8) {
    minLength.classList.remove("valid");
  } else {
    minLength.classList.remove("invalid");
  }

  const cLetter = /[A-Z]/.test(password.value);
  if (cLetter) {
    capitalLetter.classList.add("valid");
  } else {
    capitalLetter.classList.remove("valid");
  }

  const cnumber = /\d/.test(password.value);
  if (cnumber) {
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
  }

  const cspecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password.value);
  if (cspecialChar) {
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
  }
});
