<script lang="ts">
  import Todos from "./module/Todos";
  import { TodoType } from "./types/Todo";
  export let todo: TodoType;
  export let todos: Todos;
  let date = new Date(todo.createAt);
  const a = () => {
    todos.toggle(todo.id);
  };
</script>

<li on:click={a} style:text-decoration={todo.toggle ? "line-through" : ""}>
  <div>{todo.todo}</div>
  <div>{`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`}</div>
</li>

<style>
  li {
    cursor: pointer;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 1rem;
    font-size: 1.2rem;
    text-decoration-thickness: 0.15rem;
  }
</style>
