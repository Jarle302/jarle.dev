<script>
    import { onMount } from 'svelte';
  import Button from "./button.svelte";
  import Header from "./header.svelte";
  import CardList from "./cardList.svelte";
  import ContactInfo from "./contactinfo.svelte";
  import Form from "./form.svelte";
  import Card from "./test.svelte"
  let isShowing = true

</script>

<Header isShowing={isShowing} on:click={(()=> {isShowing = !isShowing;console.log(isShowing)})} />
<main>
  <section id="hero" class="hero--section">
    <div class="text--container">
      <div>
        <p class="hero--desc p--bigger">I'm <strong>Jarle</strong> a</p>
        <h1>Frontend developer</h1>
        <h2 class="hero--h2">Simplifying complexity</h2>
        <p class="hero--desc">
          I thrive on crafting intuitive user experiences, making the complex as
          simple as i can for my users
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
       githubUrl="https://github.com/Noroff-FEU-Assignments/project-exam-1-Jarle302"
        projectType="Blog"
        projectDesc="This is my year one exam project on Noroff. The brief said to make a blog using wordpress as a headless cms."
        title="The Synthethic Scribe"
        imgURL="aboutAi.jpg"
      />
      <Card
        siteUrl="https://lively-sawine-3262d2.netlify.app/"
        githubUrl="https://github.com/Jarle302/CA-html-CSS"
        projectType="Ecommerce"
        projectDesc="This was my crosscourse assignment, the brief said to make a ecommerce site selling jackets for a fictional brand called RainyDays"
        title="Rainydays"
        imgURL="rainyDaysss.jpg"
      />
      <Card
        siteUrl="https://sweet-gumption-216664.netlify.app/index.html?fbclid=IwAR1uBTurQsIklQe4oCAFu5WtCqP1l4Ugj0rkib2UK-vXZXeppgIAy6gTeU0"
        githubUrl="https://github.com/Jarle302/Noroff-sp1-Jarle"
        projectType="Text heavy"
        projectDesc="This was my semester project, that task was to make a website for a childrens science museum"
        title="CSM"
        imgURL="CSM.jpg"
        />
    </CardList>
  </section>
  <section id="contact" class="contact--section">
    <h2 class="h2--contact">Contact me</h2>
    <ContactInfo />
    <Form />
  </section>
  <section id="about" class="about--section">
    <h2 class="about--h2">About</h2>
    <div>
      <p class="about--p">
        I'm a former teacher turned frontend developer. It all started when i
        needed to learn to code to teach it to my pupils, i got instantly
        hooked, and decided there and then that eventhough i love teaching this
        is what i want to do with my life. I love learning new things, problem
        solve, and the feeling of finnaly solving a problem, both for myself and
        for other people. The more i learn the more i realize that code is a
        tool to help people, all people. So my focus is shifting more and more
        towards making code that first and foremost helps my users with their
        tasks rather than add more complexity.
      </p>
    </div>
    <img src="portrait.jpg" alt="" />
  </section>
</main>
<footer />

<style>
  .button--container {
    display: flex;
  }

  .p--bigger {
    font-size: 1.2rem;
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

  #projects {
    text-align: center;
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
    padding-bottom: 60px;
  }
  .center,
  .h2--contact {
    text-align: center;
  }

  .about--section {
    background-color: #24323f;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .about--h2 {
    text-align: center;
    margin: 20px 0;
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

  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 3rem;
    flex-basis: 100%;
  }
  h1,
  h2,
  h3 {
    font-family: "Oswald", sans-serif;
    color: #e2e55c;
    text-transform: uppercase;
  }

  .about--p {
    color: #9cccf9;
    max-width: 700px;
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

@media screen and (max-width:600px){
  h1{font-size:2rem;
  }h2{font-size:1.3rem}

  .hero--name{
    font-size:1rem;
  }

}

</style>
