<script>
    import { page } from '$src/stores';
</script>

<footer>
    <p>Page made by jedn</p>

    {#if $page == "home"}
        <a href="/admin">Admin</a>
    {:else if $page == "admin"}
        <a href="/">Home</a>
    {:else if $page == "login"}
        <a href="/">Home</a>
    {/if}

</footer>

<style lang="scss">
    @use '../styles/vars' as v;

    footer {
        max-width: 640px;
        width: 100%;
        padding: 0.5rem;
        margin: 0 auto;

        background-color: v.$darkblue;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
    }

    p, a {
        color: v.$white;
    }
</style>
