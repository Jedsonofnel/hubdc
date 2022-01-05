<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let username = "";
    let password = "";
    let errors = [];

    function validate() {
        errors = []
        if (password == "") { errors.push("Password cannot be empty") }
        if (username == "") { errors.push("Username cannot be empty") }
        dispatch('submit', {
            username,
            password,
            errors,
        });
    }
</script>

<form autocomplete="off" on:submit|preventDefault={validate}>
  <fieldset>
    <label for="username">Username:</label>
    <input type="text" name="username" placeholder="Username" bind:value={username}>

    <label for="password">Password:</label>
    <input type="password" name="password" placeholder="Password" bind:value={password}>

    <button type="submit">Login</button>
  </fieldset>
</form>

<style lang="scss">
    @use '../styles/vars' as v;

    form {
        width: 100%;
        margin: 0;
    }

    fieldset {
        width: 100%;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    label {
        font-family: v.$sans;
        font-size: 1.3rem;
        font-weight: 600;
        color: v.$white;
        padding: 0.25rem 0.5rem;
        background-color: v.$darkblue;
        border-bottom: none;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
    }

    input  {
        font-family: v.$sans;
        font-size: 1.2rem;
        border: v.$darkblue 0.2rem solid;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        padding: 0.25rem 0.5rem;
        margin-bottom: 2rem;
        width: 100%;

        &:active, &:focus {
            outline: v.$turquoise 0.2rem solid;
        }
    }

    button {
        background-color: v.$darkblue;
        border: none;
        color: v.$white;
        font-family: v.$sans;
        font-size: 1.3rem;
        font-weight: 600;
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;

        &:hover, &:active {
            background-color: v.$turquoise;
            text-decoration: underline;
        }
    }
</style>
