<script lang="ts">
  import { Todo } from "./types/Todo";

  class Todos {
    todos: Todo[] = [
      {
        id: 1,
        todo: "hello",
        createAt: new Date(),
        toggle: false,
      },
    ];
    sequence: number = 1;

    create(todo: string): Todo {
      const newTodo = {
        todo,
        createAt: new Date(),
        id: ++this.sequence,
        toggle: false,
      };

      this.todos.push(newTodo);

      return newTodo;
    }

    delete(id: number): void {
      this.todos = this.todos.filter((i) => i.id !== id);
    }
  }

  const todos = new Todos();

  console.log(todos.todos);
</script>

<main id="wrap">
  <div class="content">
    <h1 class="title">Todo list</h1>
    <ul class="todos">
      {#each todos.todos as todo (todo.id)}
        <li>{todo.todo}</li>
      {/each}
    </ul>
  </div>
</main>

<style>
  #wrap {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f2f6;
  }

  .content {
    max-width: 30rem;
    width: 80%;
    max-height: 40rem;
    height: 80%;
    background: #dfe4ea;
    border-radius: 1rem;
  }

  .title {
    text-align: center;
  }
  .todos {
    list-style: none;
  }
</style>

