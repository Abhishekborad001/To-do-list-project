let todoList = [];

displayItems();

function addTodo() {
  const inputElement = document.querySelector("#todo-input");
  const dateElement = document.querySelector("#todo-date");

  const todoItem = inputElement.value.trim();
  const todoDate = dateElement.value;

  if (todoItem === "" || todoDate === "") {
    alert("Please enter both a todo and a date.");
    return;
  }

  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  const containerElement = document.querySelector(".todo-container");
  containerElement.innerHTML = ""; // Clear old items

  todoList.forEach((todo, index) => {
    const row = document.createElement("div");
    row.className = "todo-row";

    const itemSpan = document.createElement("span");
    itemSpan.textContent = todo.item;

    const dateSpan = document.createElement("span");
    dateSpan.textContent = todo.dueDate;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn-delete";
    deleteButton.onclick = () => {
      todoList.splice(index, 1);
      displayItems();
    };

    row.appendChild(itemSpan);
    row.appendChild(dateSpan);
    row.appendChild(deleteButton);

    containerElement.appendChild(row);
  });
}
