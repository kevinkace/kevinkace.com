<script>
    import { page } from "$app/stores";
    import { title } from "$lib/data/common";

    $:noHeader = $page.route.id === "/resume";

    /**
     * split a string into an array of characters with animation delay
     * @param {string} str
     * @returns {Char[]}
     */
    function splitByLineBreaks(str) {
        return str.split("").map((char, idx) => ({
            char,
            idx,
            animationDelay: `${Math.random() * 0.5 + 0.1}s`,
        }));
    }

    let chars = splitByLineBreaks(title);
</script>

{#if !noHeader}
    <header class="header">
        <div class="fixed">
            <h1 class="logotype">
                <a href="/">
                    {#each chars as { char, idx, animationDelay }}
                        {#if char === " "}
                            <br />
                        {:else}
                            <span
                                style="animation-delay: {animationDelay}"
                                data-char={`${char}-${idx}`}
                            >
                                {char}
                            </span>
                        {/if}
                    {/each}
                </a>
            </h1>
        </div>
    </header>
{/if}

<style lang="scss">
    @use "src/lib/css/layouts.scss";
    @import "src/lib/css/breakpoints.scss";

    .header {
        margin: 1em 0 2.5em;
        padding: 0;

        box-shadow:
            0 -10px 2em rgba(255, 255, 255, 0.12),
            0 10px 8em rgba(255, 255, 255, 0.03);
        background: rgba(0, 0, 0, 0.2);

        overflow: hidden;
        max-height: 0;

        animation: 400ms ease-out 300ms forwards open;
        transform-origin: 50% 0;
    }

    /* tighten up around "o" */
    [data-char=r-10],
    [data-char=o-11] {
        letter-spacing: -0.05em;
    }

    @keyframes open {
        100% {
            max-height: 200px;
        }
    }

    .logotype {
        margin: 0;
        padding: 0.5em 0;

        color: var(--color-dark);
        text-shadow: 1px 1px 0 var(--color-highlight), 0 0 10px #000;

        text-transform: uppercase;
        font: normal 15vw/0.81 var(--font-title);

        @media screen and (min-width: $bpMobile) {
            font-size: 4.242rem;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        span {
            display: inline-block;
            transform: translateY(-5em);
            animation: 500ms forwards drop;
        }
    }

    @keyframes drop {
        100% {
            transform: translateY(0);
        }
    }

    .fixed {
        @extend .fixed;
    }

</style>