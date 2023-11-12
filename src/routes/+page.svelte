<script>
    import Cv from '$lib/components/cv.svelte';

    /** @type {import('./$types').PageData}*/
    export let data;
</script>

<p class='overview'>
    I’m a full-stack web developer, specializing in front-end. I love building great things with brilliant people. I'm obsessed with user experience, performance, and maintainable code.
</p>

<Cv cv={data.cv} />

<!--<Link to={"/resume"} class='button'>Full resume</Link> -->


<style lang='scss'>
    @import '$lib/css/breakpoints';
    @import '$lib/css/buttons';

    .overview {
        font-size: 1.2em;
        line-height: 1.4;

        @media screen and (min-width: $bpMobile) {
            font-size: 1.3em;
        }
    }

    .resume {
        h1 {
            border-bottom: solid 1px #fff3;

            + p {
                margin-bottom: 2em;
            }
        }

        p {
            margin-bottom: 2em
        }
    }

    .links {
        margin: 1em 0 0;
        display: flex;
        align-items: center;
        font-size: 0.9em;

        > * {
            margin-right: 1em;
            display: flex;

            align-items: center;

            &:not(:last-child):after {
                content: "|";
                position: relative;
                left: 0.55em;
                color: var(--color-text);
            }
        }

        svg {
            margin-right: 0.4em;
            width: 1em;
            fill: currentColor;
        }
    }

    .button {
        @extend .gradientButton;
    }

    @media print {
        body {
            background: white;
            color: black;

            h1, h2, h3 {
                color: black;
            }

            a {
                color: hsla(336, 94%, 40%, 1);
            }
        }


        [data-noprint] {
            display: none !important;
        }
    }

</style>