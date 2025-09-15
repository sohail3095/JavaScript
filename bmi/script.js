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
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    // show result
    if (bmi <= 18.6) {
      result.innerHTML = `  <span>Hi ${userName} Your BMI is ${bmi} and you are under weight</span>`;
    } else if (bmi <= 24.9) {
      result.innerHTML = `  <span>Hi ${userName} Your BMI is ${bmi} and you are normal weight</span>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `  <span>Hi ${userName} Your BMI is ${bmi} and you are Overweight</span>`;
    }
  }
});
