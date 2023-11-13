<script>
    import { page } from '$app/stores';

    import Header from '$lib/components/header.svelte';
    import Footer from '$lib/components/footer.svelte';

    import '$lib/css/global.scss';

    import { pageTitle } from '$lib/helpers/pageTitle';


    import { title, desc } from '$lib/data/common';


    $:meta = Object.assign({ title, desc, img : "/og-img.png" }, $page.data.meta || {});
</script>

<svelte:head>
    <title>{pageTitle(title, meta.title)}</title>

    <meta property="og:title" content={ pageTitle(title, meta.title) } />
    <meta property="og:description" content={meta.desc } />
    <meta property="og:image" content={meta.img } />
</svelte:head>

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