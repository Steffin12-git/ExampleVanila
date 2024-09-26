const input_text = document.getElementById('todoInput');
const add_button = document.getElementById('addTodoBtn');
const added_text = document.getElementById('todoContent');

add_button.addEventListener('click', add_task)
input_text.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        add_task();
        e.preventDefault();  
    }
})

function add_task(){
    const text_input = input_text.value.trim();
    if(text_input != ''){
        const listItem = document.createElement('li');
        listItem.className = 'added_text';
        listItem.textContent = text_input;

        const button_delete = document.createElement('button');
        button_delete.className = 'delete_btn';
        button_delete.textContent = 'Delete';
        button_delete.onclick = function(){
            listItem.remove();
        }
        listItem.appendChild(button_delete);
        added_text.appendChild(listItem);
        input_text.value = '';

    }
}
