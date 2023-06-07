<script>
  import Button from "./button.svelte";
  import Header from "./header.svelte";
  import Card from "./card.svelte";
  import CardList from "./cardList.svelte";
  import ContactInfo from "./contactinfo.svelte";
  import Form from "./form.svelte";

  function styleChange(project) {
    const headerText = document.querySelectorAll("h1,h2");
    const main = document.querySelector("main");
    if (project === "rainyDays") {
      headerText.forEach((header) => {
        header.style.color = "white";
        header.style.fontFamily = "'Noto Serif'";
        header.style.backgroundColor = " rgb(0 0 0 / 19%)";
      });
    }
  }
</script>

<Header />
<main>
  <section class="hero--section">
    <div class="text--container">
      <div>
        <p class="big--text center">HELLO!</p>
        <p class="small--text center">I'm</p>
        <p class="hero--name center">Jarle</p>

        <p class="small--text center">A</p>
        <h1>Frontend developer</h1>
        <p class="hero--desc">
          I thrive on expanding my skill set, staying up-to-date and exploring
          new technologies that push the boundaries of what's possible.
        </p>
      </div>
      <Button message="Projects" />
    </div>
  </section>
  <section class="projects--section">
    <svg
      class="svg--arrow"
      width="274"
      height="259"
      viewBox="0 0 274 259"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M123.919 253.081C131.143 260.306 142.857 260.306 150.081 253.081L267.815 135.348C275.039 128.124 275.039 116.41 267.815 109.185C260.59 101.961 248.877 101.961 241.652 109.185L137 213.837L32.3482 109.185C25.1235 101.961 13.4099 101.961 6.18524 109.185C-1.03946 116.41 -1.03946 128.124 6.18524 135.348L123.919 253.081ZM118.5 0L118.5 240H155.5V0L118.5 0Z"
        fill="#E2E55C"
        fill-opacity="0.12"
      />
    </svg>
    <h2 id="projects">Projects</h2>
    <CardList>
      <Card
        siteUrl="https://reliable-kashata-528c36.netlify.app/index.html?fbclid=IwAR2EjC3LsaS-0tNUGU0ePLmCrcArbGafMxSesHHc4kOWasJTj5wCvihM0YE/"
        projectType="Blog"
        projectDesc="This is my year one exam project on Noroff. The brief said to make a blog using wordpress as a headless cms."
        title="The Synthethic Scribe"
        imgURL="src/assets/aboutAi.jpg"
      />
      <Card
        siteUrl="https://lively-sawine-3262d2.netlify.app/"
        projectType="Ecommerce"
        projectDesc="This was my crosscourse assignment, the brief said to make a ecommerce site selling jackets for a fictional brand called RainyDays"
        title="Rainydays"
        imgURL="src/assets/rainyDaysss.jpg"
      />
      <Card
        siteUrl="https://sweet-gumption-216664.netlify.app/index.html?fbclid=IwAR1uBTurQsIklQe4oCAFu5WtCqP1l4Ugj0rkib2UK-vXZXeppgIAy6gTeU0"
        projectType="Text heavy"
        projectDesc="This was my crosscourse assignment, the brief said to make a ecommerce site selling jackets for a fictional brand called RainyDays"
        title="CSM"
        imgURL="src/assets/CSM.jpg"
      />
    </CardList>
  </section>
  <section class="contact--section">
    <h2 class="h2--contact">Contact me</h2>
    <ContactInfo />
    <Form />
    <div />
  </section>
  <section class="about--section">
    <div>
      <h1>About</h1>
      <p />
    </div>
    <img src="src/assets/portrait.jpg" alt="" />
  </section>
</main>
<footer />

<style>
  .button--container {
    display: flex;
  }

  .big--text {
    font-size: 4rem;
    font-weight: bold;
    color: #e2e55c;
  }

  .text--container {
    display: flex;
    flex-direction: column;
  }

  .hero--section {
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: space-evenly;
  }

  .hero--desc {
    color: #9cccf9;
    max-width: 500px;
  }
  .projects--section {
    background: #3e566c;
    background: #24323f;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .contact--section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #273549;
    color: white;
  }
  .center {
    text-align: center;
  }

  .about--section {
    background-color: #24323f;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .svg--arrow {
    width: 25%;
    transform: translateY(-47%);
    flex-basis: 100%;
  }

  img {
    height: 203px;
    object-fit: cover;
    border-radius: 21px;
    border: 3px solid black;
    margin: 10px;
  }

  .img--card {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 21px;
    border: 3px solid black;
    margin: 10px;
  }

  .small--text {
    color: #e2e55c;
    font-size: 1rem;
  }
  .hero--name {
    color: #e2e55c;
    font-size: 2.2rem;
  }

  h1,
  h2 {
    color: #e2e55c;
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
    flex-basis: 100%;
    text-align: center;
  }

  .h2--contact {
    margin: 80px;
  }
  main {
    background-color: #273549;
    height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: "Source Code Pro", monospace;
  }

  body {
    margin: 0;
  }
</style>
