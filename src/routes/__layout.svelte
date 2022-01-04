<script>
    import Footer from '$lib/components/footer.svelte';

    // Global stylesheet
    import '$lib/styles/global.scss';
</script>

<main>
    <slot></slot>
</main>

<Footer/>

<style>
    main {
        display: flex;
        max-width: 640px;
        padding: 0 5%;
        margin: 0 auto;

        flex-direction: column;
        align-items:center;
    }
</style>
