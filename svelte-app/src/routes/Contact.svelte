<div class="overlay">
  <h1>Contact</h1>
  <main>
    <form class="content">
      <label>Nome</label>
      <input type="text" value={"$user.name"} />
      <label>E-mail</label>
      <input type="text" value={"$user.email"} />
      <label>Telefone</label>
      <input type="text" value={"$user.phone"} />
      <button>Submit</button>
    </form>
  </main>
</div>

<style>
  label {
    color: white;
  }
  form {
    width: 50%;
  }
  .content {
    margin: auto;
    display: grid;
    grid-template-columns: 30% 80%;
    grid-column-gap: 10px;
  }

  h1,
  p {
    color: white;
    padding: 10px;
  }

  main {
    margin: auto;
    width: 50%;
    padding: 50px;
    line-height: 2;
  }

  .overlay {
    position: fixed;
    top: 10;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
