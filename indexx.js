// const todoForm = document.getElementsByTagName('form');
// console.log(todoForm)

const todoForm = document.getElementById('todos-form')

const todos = [];
//todoForm.addEventListener() seerve para uvir evento de elementos HTML sempre que foram  emitidas
todoForm.addEventListener(  'submit', function(evento) {

 //cansela o comportamento padrão de um formulario que seria o recarregamento 
 //da oaginá tentado fazer o envio    
    evento.preventDefault();

 //cancelar a propogacao de evento que foi emitida para os elementos pai,   
// stopPropagation() evita que outros evemntos seja emitidos 
    evento.stopPropagation();
    const todoInput = document.querySelector('input#todo');

    todos.push(todoInput.value);
    todoInput.value = '';
    console.log(todos)
    rederizarTodos();
})


function rederizarTodos(){
    const todoslistSection = document.querySelector('#todos-list', '#todo-card');
    todoslistSection.nnerHTML = ""
    for (let tarefa of todos){
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

        const divCardBody = document.createElement('div');
        divCard.classList.add('card-boby','d-flex', 'align-items-center')
        const  pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text',  'flex-grow-1', 'text-truncate')

        pTodoText.innerText = tarefa

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        btnDelete.classList.addEventListener('click', ()=>{
            //decobrir indice do elemento dentro do array 

            const index = todos.indexOf(tarefa)
            todos.aplice(index, 1)
            rederizarTodos()
        })


        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        //appendChild serve para colocar novos elemento HTML dentro do outro 
        btnDelete.appendChild(spanIcon)
        divCardBody.append(pTodoText, btnDelete)
        divCard.appendChild(divCardBody)
        todoslistSection.appendChild(divCard)
        // console.log(tarefa)
    
    }
}