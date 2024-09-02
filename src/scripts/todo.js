export function Todo (id, name, description, dueDate, notes) {
    this.id = id;
    this.name = name;
    this.description = description; 
    this.dueDate = dueDate;
    this.notes = notes;

    this.editTodo = (name, description, dueDate, notes) => {
        this.name = name;
        this.description = description; 
        this.dueDate = dueDate;
        this.notes = notes;
    };

    this.setId = (id) => {
        this.id = id;
    };

    this.getId = () => {
        return this.id;
    }
}
