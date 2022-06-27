/* This variable (idGenerated) becomes the new todo id everytime a new Todo is created and then it's incremented so that each todo can be acessed by a different id to delete it or to toggle classes.*/
let idGenarated = 1 

todoInput.addEventListener(`keypress`, e => {
  if (e.key === `Enter`) {
    addTodoToHtml(todoInput.value)
    idGenarated++
  }
})

function addTodoToHtml(todoText) {
  if (todoText !== ``) {
    const todosDiv = document.querySelector(`.todos`)
    const newTodo = document.createElement(`div`)
    newTodo.innerHTML = `
    <div class="card active" id="card${idGenarated}">
      <div>
        <input type="checkbox" onclick="toggleCompletedClass("${idGenarated}")/>
        <p class="todo_text">${todoText}</p>
      </div>

      <button><img src="./assets/svgs/icon-cross.svg" alt="" /></button>
    </div>
  `
    todosDiv.appendChild(newTodo)
    todoInput.value = ``
  }
}

function toggleCompletedClass(cardId) {
  const card = document.querySelector(`#${cardId}`)
  card.classList.toggle(`active`)
  card.classList.toggle(`completed`)
}
