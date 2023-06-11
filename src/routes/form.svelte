<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let form = { email: "", message: "" };

  function passForm() {
    dispatch("formSubmit", form);
  }
</script>

<form>
  <label for="your-email">your-email</label>
  <input
    bind:value={form.email}
    type="email"
    name="your-email"
    id="your-email"
  />
  <label for="your-message">your-message</label>
  <textarea
    bind:value={form.message}
    name="your-message"
    id="your-message"
    cols="30"
    rows="10"
  />
  <button on:click={passForm}>Send</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }

  button {
    padding: 10px;
    text-decoration: none;
    background-color: #e5d75c;
    color: #273549;
    border-radius: 7px;
    transition: transform 600ms ease-in-out;
    display: block;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    box-sizing: border-box;
    width: 50%;
  }
</style>
