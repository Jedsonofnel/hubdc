<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let what = "";
    export let loc = "";
    export let when = "";
    let errors = [];

    function validate() {
        errors = []
        if (what == "") { errors.push("'What' cannot be empty") }
        if (loc == "") { errors.push("'Location' cannot be empty") }
        if (when == "") { errors.push("'When' cannot be empty") }

        dispatch('submit', {
            what,
            loc,
            when,
            errors,
        });
    }
</script>

<form autocomplete="off" on:submit|preventDefault={validate}>
  <fieldset>
    <label for="what">What</label>
    <input type="text" name="what" placeholder="What" bind:value={what}>

    <label for="loc">Location</label>
    <input type="text" name="loc" placeholder="Location" bind:value={loc}>

    <label for="when">When</label>
    <input type="text" name="when" placeholder="When" bind:value={when}>

    <button type="submit">Submit</button>
  </fieldset>
</form>
