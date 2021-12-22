<script>
  export let events;
</script>

<section>
  {#if events.length != 0}
    <h2>upcoming:</h2>
  {/if}

  {#each events as event}
    <div>
      <h3>{event.what}</h3>
      <p>Date: 15/05/2004</p>
    </div>
  {/each}
</section>

<style lang="scss">
  @use './styles/infoboxes';
</style>
