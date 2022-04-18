<script lang="ts">
  import Todo from "./Todo.svelte";
  import Todos from "./module/Todos";

  const todos = new Todos();

  console.log(todos.todos);
</script>

<main id="wrap">
  <div class="content">
    <h1 class="title">Todo list</h1>
    <ul class="todos">
      {#each todos.todos as todo (todo.id)}
        <Todo {todo} {todos} />
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
    padding: 0 1rem;
  }
</style>

