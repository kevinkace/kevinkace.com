<script>
    import BackIcon from '$lib/icons/back.svg?raw';
    import DownloadIcon from '$lib/icons/download.svg?raw';

    /** @type {import('./$types').PageData}*/
    export let data;
</script>

<div class='links' data-noprint>
    <a href="/" class="back afterBar">{@html BackIcon}home</a>
    <span>download:</span>
    <a href="/kevin-a-cameron-resume.md">{@html DownloadIcon}markdown</a>
    <a href="/kevin-a-cameron-resume.pdf">{@html DownloadIcon}pdf</a>
</div>

<div class="resume">
    {@html data.resume.html}
</div>

<style lang="scss">
    @use "src/lib/css/buttons";
    @import "src/lib/css/breakpoints";

    .overview {
        font-size: 1.2em;
        line-height: 1.4;

        @media (min-width: $bpMobile) {
            font-size: 1.3em;
        }
    }

    .resume {
        :global(h1) {
            border-bottom: solid 1px #fff3;

            :global(+ p) {
                margin-bottom: 2em;
            }
        }

        :global(p) {
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
        }

        .afterBar {

            &::after {
                content: "|";
                position: relative;
                left: 0.55em;
                color: var(--color-text);
            }
        }

        :global(svg) {
            margin-right: 0.4em;
            width: 1em;
            fill: currentColor;
        }
    }

    .button {
        @extend .gradientButton;
    }

</style>
