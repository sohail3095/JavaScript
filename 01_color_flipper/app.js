const colors = ["green", "red", "blue", "pink", "Yellow", "liteblue", "orange", "darkcyan", "gray", "rgba(133,122,200)", "#f15025"];

let mainContainer = document.querySelector("main");
let button = document.querySelector("#btn");
let color = document.querySelector(".color");

button.addEventListener("click", () => {
  let randomColorValue = Math.floor(Math.random() * 11);
  let colorValue = colors[randomColorValue];
  mainContainer.style.backgroundColor = `${colorValue}`;
  color.innerText = `${colorValue}`;
  console.log(randomColorValue);
});
