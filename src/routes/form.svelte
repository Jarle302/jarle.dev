<script>
</script>

<form action="">
  <label for="email">Email</label>
  <input type="text" name="email" id="email" />
  <label for="message">Message</label>
  <textarea name="message" id="message" cols="30" rows="10" />
  <button>Send</button>
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
