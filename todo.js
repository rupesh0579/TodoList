const todoForm = document.querySelector(".submit");
const todoInput = document.querySelector(".todo-text");
const todoList = document.querySelector(".todo-list");


todoForm.addEventListener("click", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    // console.log(newLi)
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