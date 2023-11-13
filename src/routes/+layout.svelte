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
    @use "src/lib/css/layouts.scss";

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