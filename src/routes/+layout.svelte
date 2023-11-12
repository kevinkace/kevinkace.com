<script>
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";

    import '$lib/css/global.scss';
</script>

<Header />
<div class="content">
    <main>
        <slot />
    </main>
    <Footer />
</div>

<style lang="scss">
    @import "$lib/css/layouts.scss";


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
        @extend .fixed;

        opacity: 0;

        animation: 600ms forwards 500ms fadeIn;
    }

    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }

</style>