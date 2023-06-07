<script>
  let projectName;
  let imgUrl;
  let imgAlt;

 
</script>

<div>
  <h3>{projectName}</h3>
  <img src={imgUrl} alt={imgAlt} />
  <button on:click={styleChange(projectName)}> Change Style</button>
</div>

<style></style>
