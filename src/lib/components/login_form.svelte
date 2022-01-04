<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let username = "hubdc-admin"
    let password = "biblebadger"

    function validate() {
        // if valid
        // TODO test if username/password are empty and throw error if so
        dispatch('submit', {
            username,
            password,
        });
    }
</script>

<form on:submit|preventDefault={validate}>
  <fieldset>
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Username" bind:value={username}>

    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Password" bind:value={password}>

    <button type="submit">Login</button>
  </fieldset>
</form>
