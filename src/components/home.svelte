<script>
  import Greeting from './greeting.svelte';
  import Arrow from './arrow.svelte';
  import Faq from './faq.svelte';
  import Upcoming from './upcoming.svelte';
</script>

<div>
  <Greeting/>
  <Arrow/>
  <Upcoming/>
  <Faq/>
</div>

<style>
  div {
    max-width: 640px;
    margin: 0 auto;
  }
</style>
