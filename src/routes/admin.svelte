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

    let eventMessages = [];
    let eventErrors = [];
    let selectedEvent;

    const indexEvents = async () => {
        try {
            const res = await fetch("http://www.api.hubdc.info/events");

            if (!res.ok) {
                throw await res.text()
            } else {
                return await res.json()
            }
        } catch(error) {
            throw error;
        }
    };

    const getEvent = async(id) => {
        try {
            const res = await fetch(`/event/${id}`);

            if (!res.ok) {
                throw await res.text();
            } else {
                selectedEvent = await res.json();
            }
        } catch(error) {
            throw error;
        }
    };

    const clearEvent = () => {
        wipeMessages()
        selectedEvent = undefined;
    }

    const createEvent = async ({ detail: { what, loc, when, errors} }) => {
        wipeMessages()
        eventErrors = errors;
        if (eventErrors.length != 0) { return; }
        try {
            const res = await fetch("/events", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({ what, loc, when }),
                credentials: 'include',
            });

            if (!res.ok) {
                throw await res.text();
            } else {
                const event = await res.json();
                eventMessages[eventMessages.length] = `Event ${event.id} created`;
                events = indexEvents();
            }
        } catch(error) {
            eventErrors[eventErrors.length] = error;
        }
    };

    const updateEvent = async ({ detail: { what, loc, when, errors } }) => {
        wipeMessages()
        eventErrors = errors;
        if (eventErrors.length != 0) { return; }

        const id = selectedEvent.id
        try {
            const res = await fetch(`/event/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({ what, loc, when }),
                credentials: 'include',
            });

            if (!res.ok) {
                throw await res.text();
            } else {
                const event = await res.json();
                eventMessages[eventMessages.length] = `Event ${event.id} updated`;
                events = indexEvents();
            }
        } catch(error) {
            eventErrors[eventErrors.length] = error;
        }
    }

    const deleteEvent = async () => {
        const id = selectedEvent.id;
        try {
            const res = await fetch(`/event/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            if (!res.ok) {
                throw await res.text();
            } else {
                eventMessages[eventMessages.length] = 'Event Deleted!';
                events = indexEvents();
                clearEvent();
            }
        } catch (error) {
            eventErrors[eventErrors.length] = error;
        }
    }

    const wipeMessages = () => {
        eventMessages = [];
    }

    let events = indexEvents();
</script>

<h2>ADMIN</h2>

<section>
    <h3>Current Events</h3>
    {#await events}
        <div class="bubble">
            <p>loading events</p>
        </div>
    {:then events}
        <div class="bubble">
            <ul class="event-list">
                {#each events as event}
                    <li class="event">
                        <p>{event.id}: {event.what}: {event.when}</p>
                        <button on:click={getEvent(event.id)}>View</button>
                    </li>
                {/each}
            </ul>
        </div>
    {:catch error}
        <p>Error fetching resources: {error}</p>
    {/await}
</section>

{#if !selectedEvent}
    <h3>New Event</h3>
    <EventForm on:submit={createEvent}/>
{:else}
    <h3>
        Update Event {selectedEvent.id}
        <button on:click={clearEvent}>clear</button>
    </h3>
    <EventForm {...selectedEvent} on:submit={updateEvent}/>
{/if}

<h3>Event View</h3>
{#if selectedEvent}
    <p>
        Id: {selectedEvent.id} <br>
        What: {selectedEvent.what} <br>
        Location: {selectedEvent.loc} <br>
        When: {selectedEvent.when}
    </p>
    <button on:click={deleteEvent}>DELETE</button>
{:else}
    <p>No event selected</p>
{/if}

<h3>Errors:</h3>
<ul>
    {#each eventErrors as error}
        <li>{error}</li>
    {/each}
</ul>

<h3>Messages:</h3>
<ul>
    {#each eventMessages as msg}
        <li>{msg}</li>
    {/each}
</ul>

<style lang="scss">
    @use '../lib/styles/vars' as v;
    @use '../lib/styles/reusables';

    .event-list {
        width: 100%;
        overflow-y: auto;
        max-height: 15rem;
        padding: 0;
        margin: 0;
    }

    .event {
        list-style-type:none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.25rem;
        font-size: 1.2rem;
        font-family: v.$sans;
    }

    button {
        font-family: v.$sans;
        font-size: 1rem;
        color: v.$white;
        background-color: v.$darkblue;
        border: none;
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;

        &:hover {
            background-color: v.$turquoise;
            text-decoration: underline;
        }
    }

    p {
        margin: 0;
    }

    h3 {
        font-family: v.$sans;
        font-size: 1.5rem;
        font-weight: bold;
        color: v.$darkblue;
        margin: 1rem;
        text-decoration: underline;
        text-decoration-thickness: 0.2rem;
        text-decoration-color: v.$turquoise;
    }
</style>
