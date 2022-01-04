<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let what = "test";
    let loc = "test";
    let when = "test";

    function validate() {
        // if valid
        // TODO test if any are empty and throw error if that is the case
        dispatch('submit', {
            what,
            loc,
            when,
        });
    }
</script>

<form on:submit|preventDefault={validate}>
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
