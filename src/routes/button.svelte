<script>
  export let IsAlternate = false;
  export let message;
  export let link;
  export let isSmall = false;
</script>

<a
  href={link}
  class="{IsAlternate ? 'btn btn--alternate' : 'btn'}{isSmall ? ' small' : ' '}"
>
  {message}</a
>

<style>
  .btn {
    padding: 20px 43px;
    text-decoration: none;
    background-color: #e5d75c;
    color: #273549;
    border-radius: 7px;
    transition: transform 600ms ease-in-out;
    display: block;
    width: fit-content;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .btn:hover {
    transform: translateY(5px);
    transition: transform 200ms ease-in-out;
  }

  .btn--alternate {
    background-color: initial;
    border: 3px #e2e55c solid;
    color: white;
  }

  .small {
    padding: 7px;
    width: 118px;
    margin-top: 10px;
  }
</style>
