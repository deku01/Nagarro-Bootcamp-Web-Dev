const inp = document.getElementById('addItem');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

function addTodoList() {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = inp.value;
        // span.classList.add('text');
        
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'delete';

        const editBtn = document.createElement('button');
        editBtn.textContent ='edit';

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
       
        inp.value = "";
}

/**** It's call addTodoList function & Add Todo Item when clicked on + button ****/
btn.addEventListener('click', (e) => {
    if(inp.value !==""){
        addTodoList();
    }
});

/**** It's call addTodoList function & Add Todo Item when enter button is pressed ****/
inp.addEventListener('keydown', (e)=> {
    if(e.key === 'Enter' && inp.value !==""){
        addTodoList();
    }
})

list.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if(button.textContent === 'delete') {
        ul.removeChild(li);
      } else if(button.textContent === 'edit') {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
      } else if(button.textContent === 'save') {
        const input = li.firstElementChild;
        const span = document.createElement('span');
        if(input.value!=""){
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'edit';
        }
      }
    }
  });