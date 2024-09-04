import { Project } from './scripts/project';
import { renderTodo } from './scripts/render';
import { Todo } from './scripts/todo';
import './style.css';

const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".form");
const addTodoButton = document.querySelector('.add-todo');
const cancelButton = document.querySelector('.cancel');
const submitButton = document.querySelector(".submit");

const project1 = new Project();

addTodoButton.addEventListener("click", () => {
    formContainer.classList.add("active");
})

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    form.reset();
    formContainer.classList.remove("active");
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector('#date').value;
    const notes = document.querySelector('#notes').value;

    const todo = new Todo(1, title, description, date, notes);
    project1.addTodo(todo);

    form.reset();
    formContainer.classList.remove("active");

    renderTodo(project1);
})
