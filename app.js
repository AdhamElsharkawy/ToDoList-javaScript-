const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

//add todo

const generateTemplate = (todo)=>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
         <span>${todo}</span>
         <i class="far fa-trash-alt delete"></i>
    </li>`;
    todos.innerHTML+=html;
}

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo =addForm.add.value.trim();
    console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
})

//delete todos
todos.addEventListener('click',e =>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// search todo 


const filterTodos = (typed)=>{
   Array.from(todos.children)
   .filter(todo=>!todo.textContent.toLowerCase().includes(typed))
   .forEach(todo => todo.classList.add('filtered'));

   Array.from(todos.children)
   .filter(todo=> todo.textContent.toLowerCase().includes(typed))
   .forEach(todo => todo.classList.remove('filtered'));
}



search.addEventListener('keyup',()=>{
   const typed = search.value.trim().toLowerCase();
   filterTodos(typed);
});