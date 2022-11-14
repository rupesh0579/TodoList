const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
// console.log(todoInput);
// console.log(todoList)

// todoForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(todoInput.value);
//     todoInput.value = "";
// });


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    console.log(newLi)
    const newLiInnerHtml = `
          <span class="text">${newTodoText}</span>
          <div class="todo-buttons">
                    <i class="fa-solid fa-trash"></i>
                </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";

});

todoList.addEventListener("click", (e) => {
    (e.target.classList.contains("remove"))
    const targetedLi = e.target.parentNode.parentNode;
    // console.log(targetedLi);
    targetedLi.remove();


})