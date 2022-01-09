<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let what = "";
    export let loc = "";
    export let when = "";

    function submit() {
        dispatch('submit', {
            what,
            loc,
            when,
        });
    }
</script>

<form autocomplete="off" on:submit|preventDefault={submit}>
  <fieldset>
    <div class="event-detail">
        <label for="what">What:</label>
        <input type="text" name="what" placeholder="What" bind:value={what}>
    </div>

    <div class="event-detail">
        <label for="loc">Location:</label>
        <input type="text" name="loc" placeholder="Location" bind:value={loc}>
    </div>

    <div class="event-detail">
        <label for="when">When:</label>
        <input type="text" name="when" placeholder="When" bind:value={when}>
    </div>

    <button type="submit">Submit</button>
  </fieldset>
</form>

<style lang="scss">
    @use '../styles/vars' as v;

    form {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    fieldset {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;
        margin: 0;

        border: none;
    }

    .event-detail {
        width: 100%;
    }

    .event-detail {
        display: flex;
        margin-bottom: 0.5rem;
    }

    label {
        background-color: v.$darkblue;
        padding: 0.25rem 0.5rem;
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;

        color: v.$white;
        font-family: v.$sans;
        font-size: 1.25rem;
    }

    input[type="text"] {
        width: 100%;
        padding: 0 0.25rem;
        border-left: none;
        border: solid v.$darkblue 0.2rem;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;

        font-family: v.$sans;
        font-size: 1.25rem;

        &:active, &:focus {
            outline: v.$turquoise 0.2rem solid;
        }
    }

    button {
        background-color: v.$darkblue;
        padding: 0.25rem 0.5rem;
        margin-bottom: 1rem;
        border: none;
        border-radius: 0.5rem;

        color: v.$white;
        font-family: v.$sans;
        font-size: 1.25rem;
        font-weight: bold;

        &:hover, &:active {
            background-color: v.$turquoise;
            text-decoration: underline;
            cursor: pointer;
        }
    }
</style>
