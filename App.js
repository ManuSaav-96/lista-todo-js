/*
|======================|
|it building the routes|
|======================|
*/

// cambio-modo
const btnDark = document.querySelector('.btn-dark-mode')

btnDark.addEventListener('click', () => {
    console.log('click')
    document.body.classList.toggle('dark-mode');

    if(document.body.className === 'dark-mode') {
        btnDark.innerHTML = `
        <i class="far fa-sun"></i>
        `
    }
    else {
        btnDark.innerHTML = `
        <i class="far fa-moon"></i>
        `
    }
})

// DOM
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos')
// Json
const todos = JSON.parse(localStorage.getItem('todos'))
// conditional
if(todos) {
    todos.forEach(todo => addTodo(todo))
}
// events 
form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})
// functions
function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li');
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLs()
        })
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLs()
        })

        todosUL.appendChild(todoEl)
        input.value = ''
        updateLs()
    }
}

// update the page whit the informations
function updateLs(){
    todosEl = document.querySelectorAll('li')
    
    const todos = []
    todosEl.forEach(todoEl => {
        todos.push({
            text: completed.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}