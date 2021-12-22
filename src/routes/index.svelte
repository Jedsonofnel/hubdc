<script context="module">
  export async function load({ fetch }) {
    const url = 'http://www.api.hubdc.info/events/upcoming';
    const errorEvent = [];

    try {
      const res =  await fetch(url);
      const events = await res.json();
      return { props: { events } };
    } catch (e) {
      console.error(e);
      const events = errorEvent
      return { props: { events } };
    }
  }
</script>

<script>
  import Greeting from '../components/greeting.svelte';
  import Arrow from '../components/arrow.svelte';
  import Faq from '../components/faq.svelte';
  import Upcoming from '../components/upcoming.svelte';

  export let events;
</script>

<div>
  <Greeting/>
  <Arrow/>
  <Upcoming events={events} />
  <Faq/>
</div>

<style>
  div {
    max-width: 640px;
    margin: 0 auto;
  }
</style>
