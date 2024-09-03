import { Project } from './scripts/project';
import { renderTodo } from './scripts/render';
import { Todo } from './scripts/todo';
import './style.css';



const addTodoButton = document.querySelector('.add-todo');

const project1 = new Project();

addTodoButton.addEventListener("click", () => {
    const title = prompt("Enter todo title: ");
    const description = prompt("Enter todo description: ");
    const duedate = prompt("Enter todo duedate: ");
    const notes = prompt("Enter todo notes: ");

    const todo = new Todo(1, title, description, duedate, notes);
    console.log(todo);
    project1.addTodo(todo);

    console.log(project1.project);

    renderTodo(project1);
})
