<script>
  import Greeting from '../components/greeting.svelte';
  import Arrow from '../components/arrow.svelte';
  import Faq from '../components/faq.svelte';
  import Upcoming from '../components/upcoming.svelte';
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
