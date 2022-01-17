<!-- redirects to login page if "authed" (set in hooks.js) is false -->
<script context="module">
    export const load = async ({ fetch }) => {
        const res = await fetch('/auth', {
            method: 'GET',
            credentials: 'include',
        });

        if (!res.ok) {
            return {
                status: 302,
                redirect: "/login",
            };
        } else {
            return {};
        }
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
            const res = await fetch("https://hubdc-api.herokuapp.com/events");

            if (!res.ok) {
                throw (await res.json()).errors;
            } else {
                return await res.json();
            }
        } catch(errors) {
            throw errors;
        }
    };

    const getEvent = async(id) => {
        try {
            const res = await fetch(`/event/${id}`);

            if (!res.ok) {
                throw (await res.text()).errors;
            } else {
                selectedEvent = await res.json();
            }
        } catch(errors) {
            throw errors;
        }
    };

    const clearEvent = () => {
        wipeMessages()
        selectedEvent = undefined;
    }

    const createEvent = async ({ detail: { what, loc, when} }) => {
        wipeMessages()
        eventErrors = [];
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
                throw (await res.json()).errors;
            } else {
                const event = await res.json();
                eventMessages[eventMessages.length] = `Event ${event.id} created`;
                events = indexEvents();
            }
        } catch(errors) {
            eventErrors = errors;
        }
    };

    const updateEvent = async ({ detail: { what, loc, when } }) => {
        wipeMessages();
        eventErrors = [];
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
                throw (await res.json()).errors;
            } else {
                const event = await res.json();
                eventMessages[eventMessages.length] = `Event ${event.id} updated`;
                events = indexEvents();
            }
        } catch(errors) {
            eventErrors = errors;
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
                throw (await res.json()).errors;
            } else {
                eventMessages[eventMessages.length] = 'Event Deleted!';
                events = indexEvents();
                clearEvent();
            }
        } catch (errors) {
            eventErrors = errors;
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
        <div class="template-bubble">
            <p>loading events</p>
        </div>
    {:then events}
        <div class="bubble">
            <ul class="event-list">
                {#each events as event}
                    <li class="event">
                        <p class="event-details">
                            <span class="event-what">({event.id}) {event.what}:</span>
                            <span class="event-time">
                                <span class="material-icons">schedule</span>
                                {event.when}
                            </span>
                        </p>
                        <button on:click={getEvent(event.id)}>View</button>
                    </li>
                {/each}
            </ul>
        </div>
    {:catch errors}
        <p>Error fetching resources: {errors[0].message}</p>
    {/await}
</section>

<section>
    {#if !selectedEvent}
        <h3>New Event</h3>
        <EventForm on:submit={createEvent}/>
    {:else}
        <div class="selected-event-title">
            <h3>
                Update Event {selectedEvent.id}:
            </h3>
            <button on:click={clearEvent}>Clear</button>
        </div>
        <EventForm {...selectedEvent} on:submit={updateEvent}/>
    {/if}

    {#if eventErrors.length != 0}
        <div class="event-errors">
            {#each eventErrors as error}
                <p class="error">{error.message}</p>
            {/each}
        </div>
    {/if}

    {#if eventMessages != 0}
        <div class="event-messages">
            {#each eventMessages as msg}
                <p class="msg">{msg}</p>
            {/each}
        </div>
    {/if}

    {#if selectedEvent}
        <div class="selected-event-title">
            <h3>
                Viewing Event {selectedEvent.id}:
            </h3>
            <button on:click={clearEvent}>Clear</button>
        </div>

        <div class="bubble viewing-event">
            <div class="viewing-event-opts">
                <h4>Details:</h4>
                <button on:click={deleteEvent} class="delete-button">DELETE</button>
            </div>

            <div class="viewing-event-details">
                <p>
                    <span class="detail">What:</span> {selectedEvent.what}
                </p>
                <p>
                    <span class="detail">Location:</span> {selectedEvent.loc}
                </p>
                <p>
                    <span class="detail">When:</span> {selectedEvent.when}
                </p>
            </div>
        </div>
    {/if}
</section>

<style lang="scss">
    @use '../lib/styles/vars' as v;
    @use '../lib/styles/reusables';

    .bubble {
        width: 100%;
    }

    .event-list {
        width: 100%;
        overflow-y: auto;
        max-height: 15rem;

        display: flex;
        flex-direction: column;
        flex: 0 0 100%;
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

    .event-details {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .event-time {
        color: grey;
        display: flex;
        align-items: center;
    }

    .event-what {
        margin-right: 0.5rem;
    }

    button {
        font-family: v.$sans;
        font-size: 1rem;
        color: v.$white;
        text-decoration: none;

        background-color: v.$darkblue;
        border: none;
        padding: 0.25rem 0.5rem;
        margin: 0 0.5rem;
        border-radius: 0.5rem;

        &:hover, &:active {
            background-color: v.$turquoise;
            text-decoration: underline;
            cursor: pointer;
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
        text-decoration: underline;
        text-decoration-thickness: 0.2rem;
        text-decoration-color: v.$turquoise;

        margin: 0;
    }

    section > h3 {
        margin: 0 0 1rem 0;
    }

    .selected-event-title {
        display: flex;
        align-items: center;
        margin: 0 0 1rem 0;
    }

    .viewing-event-opts {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-right: 0.5rem;
    }

    h4 {
        margin: 0;
        }

    .viewing-event {
        font-family: v.$sans;
        font-size: 1.25rem;
        color: v.$black;

        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
    }

    .detail {
        font-weight: bold;
        margin-right: 0.5rem;
    }

    .viewing-event-details {
        border-left: 0.2rem solid grey;
        padding-left: 0.5rem;
    }

    .delete-button {
        margin: 0;
        width: 100%;
    }

    .event-errors {
        background-color: v.$red;
        margin: 0 0 1rem 0;
        padding: 0.5rem;
        border-radius: 0.5rem;
        width: auto;
    }

    .error {
        font-family: v.$sans;
        font-size: 1.2rem;
        color: v.$white;
        margin: 0;
    }

    .event-messages {
        background-color: v.$green;
        margin: 1rem 0;
        padding: 0.5rem;
        border-radius: 0.5rem;
        width: auto;
    }

    .msg {
        font-family: v.$sans;
        font-size: 1.2rem;
        color: v.$white;
        margin: 0;
    }
</style>
