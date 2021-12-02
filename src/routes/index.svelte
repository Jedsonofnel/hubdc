<script context="module">
  export async function load({ fetch }) {
    const url = 'http://www.api.hubdc.info/events/upcoming';
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    if (res.status >= 200 && res.status <= 299) {
      const events = await res.json();
      console.log(events);
    } else {
      console.log(res.status, res.statusText);
    }
    return {
      props: { url }
    }
  }
</script>

<script>
  import Greeting from '../components/greeting.svelte';
  import Arrow from '../components/arrow.svelte';
  import Faq from '../components/faq.svelte';
  import Upcoming from '../components/upcoming.svelte';

  export let url;
  console.log("events:", url);
</script>

<div>
  <Greeting/>
  <Arrow/>
  <Upcoming events={url} />
  <Faq/>
</div>

<style>
  div {
    max-width: 640px;
    margin: 0 auto;
  }
</style>
