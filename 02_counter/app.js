let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    count > 0 ? (value.style.color = "green") : "";
    count < 0 ? (value.style.color = "red") : "";
    count == 0 ? (value.style.color = "#102a42") : "";
    value.textContent = count;
  });
});
