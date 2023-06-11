<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let isShowing = true;
  function close() {
    dispatch("closed", isShowing);
  }
</script>

<header>
  <nav>
    <a on:click={close} class="logo--link" href="#hero">Jarle.dev</a>
    <ul class={!isShowing ? "show" : "hide"}>
      <li><a on:click={close} href="#hero">Home</a></li>
      <li><a on:click={close} href="#projects">Projects</a></li>
      <li><a on:click={close} href="#contact">Contact</a></li>
      <li><a on:click={close} href="#about">About</a></li>
    </ul>
    <button on:click type="button" class="hamburger--open"
      ><svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.329681 2.05885V0.588257H13.627V2.05885H0.329681ZM0.329681 5.73532H13.627V4.26473H0.329681V5.73532ZM0.329681 9.41179H13.627V7.9412H0.329681V9.41179Z"
          fill="#1C1B1F"
        />
      </svg>
    </button>
  </nav>
</header>

<style>
  .hamburger--open {
    display: none;
  }

  * {
    font-family: "Source Code Pro", monospace;
  }

  header {
    position: fixed;
    width: 100%;
  }

  button {
    border: none;
    background: none;
    margin-right: 10px;
    position: absolute;
    right: 0;
    z-index: 3;
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

  .show {
    display: flex;
  }

  .hide {
    display: none;
  }

  ul {
    display: none;
    display: none;
    list-style: none;
    gap: 20px;
    justify-content: flex-end;
    padding: 20px;
    align-items: center;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #273549;
  }

  a:hover {
    background-color: white;
  }
  header {
    background-color: #e5d75c;
  }

  @media (max-width: 400px) {
    .hamburger--open {
      display: block;
    }
    ul {
      position: absolute;
      flex-direction: column;
      top: 6%;
      background: #9cccf9;
      height: 50vh;
      align-items: center;
      justify-content: center;
      z-index: 0;
      width: 88vw;
    }

    header {
      height: 42px;
      display: grid;
      padding: 5px;
    }

    .show {
      display: none;
    }
    .hide {
      display: flex;
    }
  }
</style>
