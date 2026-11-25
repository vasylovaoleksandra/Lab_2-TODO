
const classNames={
    TODO_ITEM:'todo-container',
    TODO_CHECKBOX:'todo-checkbox',
    TODO_TEXT:'todo-text',
    TODO_DELETE:'todo-delete',
}
const list=document.getElementById('todo-list')
const itemCountSpan=document.getElementById('item-count')
const uncheckedCountSpan=document.getElementById('unchecked-count')

// Оновлення лічильників
function updateCounts(){
    itemCountSpan.textContent=list.children.length
    uncheckedCountSpan.textContent=list.querySelectorAll('input:not(:checked)').length
}

function newTodo(){
    const text=prompt('Enter new TODO:')
    if(!text||!text.trim()) return

    const item=document.createElement('li')
    item.className=classNames.TODO_ITEM

    const checkbox=document.createElement('input')
    checkbox.type='checkbox'
    checkbox.className=classNames.TODO_CHECKBOX

    const todoText=document.createElement('span')
    todoText.className=classNames.TODO_TEXT
    todoText.textContent=text.trim()

    const deleteButton=document.createElement('button')
    deleteButton.className=classNames.TODO_DELETE
    deleteButton.textContent='Delete'

    checkbox.addEventListener('change',()=>{
        todoText.style.textDecoration=checkbox.checked?'line-through':'none'
        updateCounts()
    })

    deleteButton.addEventListener('click',()=>{
        item.remove()
        updateCounts()
    })

    item.append(checkbox,todoText,deleteButton)
    list.appendChild(item)
    updateCounts()
}
