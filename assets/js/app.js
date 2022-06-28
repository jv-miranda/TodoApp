let idGenarated = 1

function updateTodosCounter() {
  const todos = document.querySelectorAll(`.card`)
  let activeTodos = []
  for (let todo of todos) {
    if (todo.classList.contains(`active`)) {
      activeTodos.push(todo)
    }
  }
  const todosCounter = activeTodos.length
  counter.innerHTML = todosCounter
}

todoInput.addEventListener(`keypress`, e => {
  if (e.key === `Enter`) {
    addTodoToHtml(todoInput.value)
    idGenarated++
    updateTodosCounter()
  }
})

function addTodoToHtml(todoText) {
  if (todoText !== ``) {
    const todosDiv = document.querySelector(`.todos`)
    const newTodo = document.createElement(`div`)
    newTodo.classList.add(`card`, `active`)
    newTodo.id = `card${idGenarated}`
    newTodo.innerHTML = `
    <div>
      <input type="checkbox" onclick="toggleCompletedClass('card${idGenarated}')">
      <p class="todo_text">${todoText}</p>
    </div>
    <button onclick="deleteTodo('card${idGenarated}')"><img src="./assets/svgs/icon-cross.svg" alt=""></button>
  `
    todosDiv.appendChild(newTodo)
    todoInput.value = ``
  }
}

function toggleCompletedClass(cardId) {
  const card = document.querySelector(`#${cardId}`)
  card.classList.toggle(`active`)

  if (card.classList.contains(`completed`)) {
    card.classList.remove(`completed`)
    updateTodosCounter(`increment`)
  } else {
    card.classList.add(`completed`)
    updateTodosCounter(`decrement`)
  }

  updateTodosCounter()
}

function deleteTodo(cardId) {
  const card = document.querySelector(`#${cardId}`)
  card.remove()

  updateTodosCounter()
}

function clearCompletedTodos() {
  const todos = document.querySelectorAll(`.card`)
  for (let todo of todos) {
    if (todo.classList.contains(`completed`)) {
      todo.remove()
    }
  }

  updateTodosCounter()
}

function filterTodos(HtmlClass) {
  const todos = document.querySelectorAll(`.card`)
  for (let todo of todos) {
    if (!todo.classList.contains(`${HtmlClass}`)) {
      todo.style.display = `none`
    } else {
      todo.style.display = `flex`
    }
  }
}

function addOnClass(todoId) {
  allButton.classList.remove(`on`)
  activeButton.classList.remove(`on`)
  completedButton.classList.remove(`on`)

  todoId.classList.add(`on`)
}
