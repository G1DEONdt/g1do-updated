import { Todo } from "./todo"

export function Project () {
    this.project = [];

    this.addTodo = (todo) => {
        this.project.push(todo);
    }

    this.removeTodo = (todoId) => {
        this.project.splice(this.project, todoId);
    }
}