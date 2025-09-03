let taskInput = document.querySelector("#task");
let todoBody = document.querySelector(".todoBody");
let addTaskBtn = document.querySelector(".addTask");
let ul = document.createElement("ul");
todoBody.append(ul);

addTaskBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let div = document.createElement("div");
  let deleteBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  let saveBtn = document.createElement("button");
  let doneBtn = document.createElement("button");
  let editInput = document.createElement("input");
  deleteBtn.innerText = "X";
  editBtn.innerText = "Edit";
  doneBtn.innerText = "Done";
  deleteBtn.classList.add("deleteBtn");
  editBtn.classList.add("editBtn");
  ul.append(li);
  li.append(span);
  span.innerText = `${taskInput.value}`;
  li.append(div);
  div.append(editBtn);
  div.append(deleteBtn);
  div.append(doneBtn);
  taskInput.value = "";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  editBtn.addEventListener("click", () => {
    editInput.value = span.innerText;
    saveBtn.innerText = "Save";
    editInput.type = "text";
    editInput.id = "editInput";
    li.prepend(editInput);
    div.prepend(saveBtn);
    editBtn.remove();
    span.remove();
  });
  saveBtn.addEventListener("click", () => {
    span.innerText = `${editInput.value}`;
    li.prepend(span);
    div.prepend(editBtn);
    saveBtn.remove();
    editInput.remove();
  });
  doneBtn.addEventListener("click", () => {
    span.style.textDecoration = "line-through";
    saveBtn.remove();
    editBtn.remove();
  });
});
