const todo = document.getElementById("todo");
const AddBtn = document.getElementById("addBtn");
const result = document.getElementById("todoList");

AddBtn.addEventListener("click", () => {
  const task = todo.value.trim(); 

  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "10px";

  delBtn.addEventListener("click", () => {
    result.removeChild(li); 
  });
  li.appendChild(delBtn);
  result.appendChild(li);

  todo.value = ""; 

});