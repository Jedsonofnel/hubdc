<script>
    import Greeting from '$lib/components/greeting.svelte';
    import Arrow from '$lib/components/arrow.svelte';
    import Faq from '$lib/components/faq.svelte';
    import Upcoming from '$lib/components/upcoming.svelte';
    import Us from '$lib/components/us.svelte';

    import { onMount } from 'svelte';
    import { page } from '$src/stores';
    onMount(() => {
        $page = "home";
    })
</script>

<Greeting/>
<Arrow/>
<Upcoming/>
<Us/>
<Faq/>
