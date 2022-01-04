<script>
    import { goto } from "$app/navigation";
    import { page } from '$src/stores';
    import { onMount } from 'svelte';
    import LoginForm from "$lib/components/login_form.svelte";

    let loginError;

    const handleSubmit = async ({detail: {username, password}}) => {
        loginError = undefined;
        const res = await fetch('/auth', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
        });

        if (!res.ok) {
            loginError = (await res.json()).message;
            return;
        }

        goto("/admin")
    }

    onMount(() => {
        $page = "login";
    });
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<h1>Admin Login</h1>
<p>(just for committee members)</p>

{#if loginError}
    <p>{loginError}</p>
{/if}

<LoginForm on:submit={handleSubmit}></LoginForm>
