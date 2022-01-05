<script>
    import { page } from '$src/stores';
</script>

<footer>
    <p>By jedn webdev.</p>

    {#if $page == "home"}
        <a href="/admin">
            <span class="material-icons">admin_panel_settings</span>Admin
        </a>
    {:else if $page == "admin" || $page == "login"}
        <a href="/">
            <span class="material-icons">home</span>Home
        </a>
    {/if}

</footer>

<style lang="scss">
    @use '../styles/vars' as v;

    footer {
        max-width: 640px;
        width: 100%;
        padding: 0.5rem;
        margin: 0 auto;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        background-color: v.$darkblue;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
    }

    p, a {
        color: v.$white;
        width: 50%;
        font-family: v.$sans;
        font-size: 1.3rem;
        margin: 0;
        padding: 0.5rem;
        text-align: center;
    }

    p {
        border-right: v.$white solid 0.15rem;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    span {
        margin-right: 0.5rem;
    }
</style>
