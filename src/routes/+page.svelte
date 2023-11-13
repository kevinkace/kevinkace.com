<script>
    import Cv from '$lib/components/cv.svelte';

    /** @type {import('./$types').LayoutData}*/
    export let data;
</script>

<p class='overview'>
    I’m a full-stack web developer, specializing in front-end. I love building great things with brilliant people. I'm obsessed with user experience, performance, and maintainable code.
</p>

<Cv cv={data.cv} />

<a href=/resume class='button'>Full resume</a>

<style lang='scss'>
    @use 'src/lib/css/buttons';
    @import 'src/lib/css/breakpoints';

    .overview {
        font-size: 1.2em;
        line-height: 1.4;

        @media screen and (min-width: $bpMobile) {
            font-size: 1.3em;
        }
    }

    .button {
        @extend .gradientButton;
    }
</style>