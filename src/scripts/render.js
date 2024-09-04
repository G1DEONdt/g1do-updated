const container = document.querySelector('.todo-container');

export function renderTodo(project) {
    for (let item in project.project) {
        // Create Elements
        const todo = document.createElement('div');
        const check = document.createElement('button');
        const content = document.createElement('div');
        const title = document.createElement('h3');
        const due = document.createElement('p');
        const deleteButton = document.createElement('button');


        // Add classes
        todo.classList.add('todo');
        check.classList.add('check');
        content.classList.add('todo-content');
        deleteButton.classList.add('delete');

        // Fill elements
        title.innerText = project.project[item].name;
        due.innerText = project.project[item].dueDate;

        // Append elements
        todo.appendChild(check);
        todo.appendChild(content);

        content.appendChild(title);
        content.appendChild(due);

        todo.appendChild(deleteButton);

        container.appendChild(todo);
    }
}