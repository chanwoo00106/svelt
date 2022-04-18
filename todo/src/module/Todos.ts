import { TodoType } from "../types/Todo";
class Todos {
  todos: TodoType[] = [
    {
      id: 1,
      todo: "hello",
      createAt: new Date(),
      toggle: true,
    },
  ];
  sequence: number = 1;

  create(todo: string): TodoType {
    const newTodo = {
      todo,
      createAt: new Date(),
      id: ++this.sequence,
      toggle: false,
    };

    this.todos.push(newTodo);

    return newTodo;
  }

  toggle(id: number): void {
    this.todos.forEach((i) => {
      if (i.id === id) {
        i.toggle = !i.toggle;
        return;
      }
    });
  }

  delete(id: number): void {
    this.todos = this.todos.filter((i) => i.id !== id);
  }
}

export default Todos;
