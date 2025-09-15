const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.querySelector("#name").value;
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const bmi = weight / (height * height);
  const result = document.querySelector("#result");
  
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show result
    result.innerHTML = `  <span>Hi ${userName} Your BMI is ${bmi}</span>`;
  }
});
