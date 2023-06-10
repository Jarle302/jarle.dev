<script>
  export let isShowing = true
</script>

<header>
  <nav>
    <a class="logo--link" href="#hero">Jarle.dev</a>
    <ul class={!isShowing?"show":"hide"} >
      <li><a href="#hero">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul>
    <button on:click type="button" class="hamburger--open"><i class="fa-solid fa-bars"></i></button>
  </nav>
</header>

<style>
  .hamburger--open{display:none;}

*{
  font-family: "Source Code Pro", monospace;
}

header{
  position:fixed;
  width:100%;

}

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1px;

  }

  .logo--link {
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    box-sizing: border-box;
    margin-left: 7px;
    color: #242a3f;
    font-size: 1.2rem;
  }

  .show{
    display: flex;
   
  }

  .hide{
    display:none;
  }

  ul {
    display:flex;
    list-style: none;
    gap: 20px;
    justify-content: flex-end;
    padding: 20px;
    align-items: center;
    margin: 0;
  }

  a {
    text-decoration: none;
    color:#273549;
  }
  header {
    background-color: #e5d75c;
  }


  @media (max-width: 400px){
    .hamburger--open{display:block;}
ul{
  display:none
}

.show{
    display: flex;
    position: absolute;
    flex-direction: column;
    left: 24%;
    top: 6%;
    background: #9cccf9;
    height: 50vh;
    align-items: center;
    justify-content: center;
    padding: 74px;

  }

  }
</style>
