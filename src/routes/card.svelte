<script>
  import Button from "./button.svelte";
  export let imgURL;
  export let imgAlt;
  export let projectDesc;
  export let title;
  export let projectType;
  export let siteUrl;
  export let githubUrl;
</script>

<div class="card">
  <div>
    <p class="type">{projectType}</p>
    <h3>{title}</h3>
  </div>
  <img src={imgURL} alt={imgAlt} />
  <p class="desc">{projectDesc}</p>
  <div class="button--container">
    <Button isSmall="true" width="20px" message="Live Site" link={siteUrl} />
    <Button
      isSmall="true"
      IsAlternate="true"
      message="Github"
      link={githubUrl}
    />
  </div>
</div>

<style>
  * {
    margin: 0;
    padding: 0;
    border: none;
  }
  .button--container {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    color: #e5d75c;
  }

  .card {
    padding: 14px 11px;
    margin-block: 20px;
    color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    width: 256px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .type {
    color: #9cccf9;
    line-height: 0.3;
    font-size: 0.7rem;
  }

  .desc {
    color: #9cccf9;
    height: 124px;
    overflow: hidden;
  }

  img {
    margin: 7px 0;
    height: 215px;
    border-radius: 12px;
    width: 257px;
    object-fit: cover;
  }
</style>
