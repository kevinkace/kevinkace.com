<script>
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";

    import '../global.css';
</script>

<Header />
<div class="content global-fixed">
    <main>
        <slot />
    </main>
    <Footer />
</div>

<style lang="postcss">
    @custom-media --mq-mobile  screen and (min-width: 28em);
    @custom-media --mq-tabled  screen and (min-width: 31.25em);
    @custom-media --mq-desktop screen and (min-width: 60em);


    /* .videoBg {
        position: fixed;
        top: 0;
        left: 0;
        min-height: 100%;
        min-width: 100%;

        height: auto;
        width: auto;

        z-index: -1;
    } */

    .content {
        opacity: 0;

        animation: 600ms forwards 500ms FadeIn;
    }

    @keyframes FadeIn {
        100% {
            opacity: 1;
        }
    }

</style>