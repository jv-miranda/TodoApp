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
    const dragArea = document.querySelector(`.dragArea`)
    const newTodo = document.createElement(`div`)
    newTodo.classList.add(`card`, `active`)
    newTodo.id = `card${idGenarated}`
    newTodo.innerHTML = `
    <div class="card_content">
      <div>
        <input type="checkbox" class="filteredOnSortable" onclick="toggleCompletedClass('card${idGenarated}')"/>
        <p class="todo_text">${todoText}</p>
      </div>
      
      <button onclick="deleteTodo('card${idGenarated}')" class="filteredOnSortable">
        <img src="./assets/svgs/icon-cross.svg" alt="" />
      </button>
    </div>
    
    <div class="bottomLine"></div>
  `
    dragArea.appendChild(newTodo)
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
  todos.forEach(todo => {
    if (todo.classList.contains(`completed`)) {
      todo.remove()
    }
  })

  updateTodosCounter()
}

function filterTodos(HtmlClass) {
  const todos = document.querySelector(`.todos`)
  todos.classList.remove(`activeFilter`)
  todos.classList.remove(`completedFilter`)

  todos.classList.add(`${HtmlClass}`)
}

function addOnClass(buttonId) {
  const buttons = document.querySelectorAll(`.filter_button`)
  const button = document.querySelector(`#${buttonId}`)
  buttons.forEach(button => {
    button.classList.remove(`on`)
  })
  button.classList.add(`on`)
}
