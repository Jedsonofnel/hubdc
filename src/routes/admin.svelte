<!-- redirects to login page if "authed" (set in hooks.js) is false -->
<script context="module">
    export const load = async ({ session }) => {
        if (!session?.authed) {
            return {
                status: 302,
                redirect: "/login",
            };
        }
        return {};
    }
</script>

<script>
    import { onMount } from 'svelte';
    import { page } from '$src/stores';
    import EventForm from '$lib/components/event_form.svelte';

    onMount(() => {
        $page = "admin";
    })

    const indexEvents = async () => {
        const res = await fetch("http://www.api.hubdc.info/events");
        const events = await res.json();

        if (res.ok) {
            return events;
        } else {
            throw new Error("ERROR!");
        }
    };

    const createEvent = async ({ detail: { what, loc, when } }) => {
        try {
            const res = await fetch("/events", {
                method: 'POST',
                body: JSON.stringify({ what, loc, when }),
                credentials: 'include',
            });
            console.log(await res.text())
        } catch(err) {
            console.log(err)
        }
    };

    let events = indexEvents();
</script>

<h2>ADMIN</h2>

{#await events}
    <p>loading events</p>
{:then events}
    <ul>
    {#each events as event}
       <li>{event.what}: {event.when}</li>
    {/each}
    </ul>
{/await}

<h3>New Event</h3>
<EventForm on:submit={createEvent}/>
