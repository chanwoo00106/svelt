<script>
  let name = "world";
  let value = "";

  let count = 0;

  function hello(e) {
    value = e.target.value;
  }
</script>

<main>
  <h1>hello world</h1>
  <h1>Hello {name.toUpperCase()}!</h1>
  <input type="text" {value} on:keypress={hello} />
  <div>{value}</div>
  <hr />
  <h2>{count}</h2>
  <div>
    <button on:click={() => count++}>+</button>
    <button on:click={() => count--}>-</button>
  </div>
</main>

<style>
</style>
