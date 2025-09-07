const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let color = document.querySelector(".color");
let btn = document.querySelector("#btn");

const randomHexcolor = () => {
  return Math.floor(Math.random() * hex.length);
};
btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomHexcolor()];
  }
  document.body.style.backgroundColor = hexColor;
  color.innerText = hexColor;
});
