<script>
    import { goto } from "$app/navigation";
    import { page } from '$src/stores';
    import { onMount } from 'svelte';
    import LoginForm from "$lib/components/login_form.svelte";

    let loginErrors = []

    const handleLogin = async ({ detail: { username, password, errors } }) => {
        loginErrors = errors
        if (loginErrors.length != 0) { return; }
        try {
            const res = await fetch('/auth', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include',
            });

            if (!res.ok) {
                loginErrors[loginErrors.length] = await res.text();
                return;
            } else {
                await fetch('/auth', {
                    credentials: 'include',
                });
                goto("/admin");
            }
        } catch(error) {
            loginErrors[loginErrors.length + 1] = error
        }
    }

    onMount(() => {
        $page = "login";
    });
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<h2>Admin Login</h2>
<p class="warning">(Just for committee members)</p>

<section>
    <LoginForm on:submit={handleLogin}></LoginForm>

    <div class="login-errors">
        {#each loginErrors as error}
            <p class="error">{error}</p>
        {/each}
    </div>
</section>

<style lang="scss">
    @use '../lib/styles/reusables';
    @use '../lib/styles/vars' as v;

    .warning {
        font-family: v.$sans;
        font-size: 1.2rem;
    }

    .login-errors {
        background-color: v.$red;
        margin-top: 2rem;
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
</style>
