<script lang="ts">
  let value: string = "";
  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log(value);
  };
</script>

<main id="wrap">
  <div class="content">
    <h1 class="title">Todo list</h1>
    <form on:submit={onSubmit}>
      <input type="text" bind:value />
    </form>
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
    background: #e2e2e2;
    border-radius: 1rem;
  }
  .title {
    text-align: center;
  }
</style>
