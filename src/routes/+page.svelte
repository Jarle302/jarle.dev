<script>
  import Button from "./button.svelte";
  import Header from "./header.svelte";
  import CardList from "./cardList.svelte";
  import ContactInfo from "./contactinfo.svelte";
  import Form from "./form.svelte";
  import Card from "./test.svelte";
  let isShowing = false;
  function resize() {
    let width = window.innerWidth;
    if (width <= 400) {
      isShowing = false;
    }
  }

  function handleForm(e) {
    let formData = new FormData();
    formData.append("your-email", e.detail.email);
    formData.append("your-message", e.detail.message);
    console.log(e.detail);

    fetch(
      `https://jarletollaksen.com/wp-json/contact-form-7/v1/contact-forms/163/feedback`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            btoa(`jarlehtollaksen2@live.no:ucDh SmYW mQRt HCIW WtpO tYCd`),
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
</script>

<svelte:window on:resize={resize} />
<Header
  {isShowing}
  on:click={() => {
    isShowing = !isShowing;
  }}
  on:closed={(e) => {
    let width = window.innerWidth;
    if (width <= 400) {
      isShowing = !e.detail;
    }
  }}
/>
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
      <Button link="#projects" message="Projects" />
    </div>
  </section>
  <section class="projects--section">
    <h2 id="projects">Projects</h2>
    <CardList>
      <Card
        siteUrl="https://reliable-kashata-528c36.netlify.app/index.html?fbclid=IwAR2EjC3LsaS-0tNUGU0ePLmCrcArbGafMxSesHHc4kOWasJTj5wCvihM0YE/"
        githubUrl="https://github.com/Noroff-FEU-Assignments/project-exam-1-Jarle302"
        projectType="Blog"
        projectDesc="This is my year one exam project on Noroff. The brief said to make a blog using wordpress as a headless cms."
        title="The Synthethic Scribe"
        imgURL="aboutAi.jpg"
        imgAlt="Screenshot of a blog webpage"
      />
      <Card
        siteUrl="https://lively-sawine-3262d2.netlify.app/"
        githubUrl="https://github.com/Jarle302/CA-html-CSS"
        projectType="Ecommerce"
        projectDesc="This was my crosscourse assignment, the brief said to make a ecommerce site selling jackets for a fictional brand called RainyDays"
        title="Rainydays"
        imgURL="rainyDaysss.jpg"
        imgAlt="Screenshot of a ecommerce webpage"
      />
      <Card
        siteUrl="https://sweet-gumption-216664.netlify.app/index.html?fbclid=IwAR1uBTurQsIklQe4oCAFu5WtCqP1l4Ugj0rkib2UK-vXZXeppgIAy6gTeU0"
        githubUrl="https://github.com/Jarle302/Noroff-sp1-Jarle"
        projectType="Text heavy"
        projectDesc="This was my semester project, that task was to make a website for a childrens science museum"
        title="CSM"
        imgURL="CSM.jpg"
        imgAlt="Screenshot of a the community science museum webpage"
      />
    </CardList>
  </section>
  <section id="contact" class="contact--section">
    <h2 class="h2--contact">Contact me</h2>
    <ContactInfo />
    <Form on:formSubmit={handleForm} />
  </section>
  <section id="about" class="about--section">
    <h2 class="about--h2">About</h2>
    <div>
      <p class="about--p">
        I'm a former teacher who transitioned into a <strong
          >front-end developer</strong
        >
        role. My journey into coding began when I needed to learn it in order to
        teach it to my students. Instantly, I became captivated by coding and realized
        that it was my true passion. While I loved teaching, I knew that coding was
        what I wanted to pursue as a career.
      </p>
      <p class="about--p">
        What I enjoy most about coding is the
        <em>continuous learning process</em>,
        <em>problem-solving</em>, and the satisfaction of finding solutions.
        It's incredibly rewarding to overcome challenges, not only for myself
        but also for others.
      </p>
      <p class="about--p">
        I've come to understand that code is a
        <strong>powerful tool</strong>
        that can positively impact people's lives. As a result, my focus has shifted
        towards creating code that prioritizes helping users with their tasks, rather
        than adding unnecessary complexity.
      </p>
      <p class="about--p">
        I embrace the opportunity to learn new things and apply my skills to
        develop solutions that make a difference for others. Coding has become
        my way of making a
        <strong>meaningful impact</strong> in the world, and I'm thrilled to continue
        this journey of growth and contribution.
      </p>
    </div>
    <img src="portrait.jpg" alt="" />
  </section>
</main>
<footer />

<style>
  .p--bigger {
    font-size: 1.2rem;
  }

  .text--container {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  img {
    height: 203px;
    object-fit: cover;
    border-radius: 21px;
    border: 3px solid black;
    margin: 10px;
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
    line-height: 1.5;
    margin: 10px;
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
  :global(body) {
    margin: 0;
  }

  @media screen and (max-width: 700px) {
    section {
      padding: 0 20px;
    }

    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.3rem;
    }

    .hero--name {
      font-size: 1rem;
    }
  }
</style>
