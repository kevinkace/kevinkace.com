<script>
    import { links } from "$lib/data/common";

    import Github from "$lib/icons/animated/github.svg?raw";
    import Twitter from "$lib/icons/animated/twitter.svg?raw";
    import LinkedIn from "$lib/icons/animated/linkedin.svg?raw";
    import Instagram from "$lib/icons/animated/instagram.svg?raw";
    import CodePen from "$lib/icons/animated/codepen.svg?raw";

    const icons = {
        Github,
        Twitter,
        LinkedIn,
        Instagram,
        CodePen
    };
</script>

<footer class='footer'>
    <nav data-noprint>
        {#each links as { href, label }}
            <a
                {href}
                target="_blank"
                rel="noopener noreferrer"
                class="floatOff"
            >
                {@html icons[label]}
                <span>{label}</span>
            </a>
        {/each}
    </nav>
</footer>

<style lang="scss">
    @import "$lib/css/breakpoints.scss";

    .footer {
        margin: 3em 0;

        font-size: 0.5em;

        @media screen and (min-width: $bpMobile) {
            font-size: unset;
        }

        nav {
            display: flex;
            justify-content: space-between;
        }

        span {
            display: none;

            @media screen and (min-width: $bpMobile) {
                display: inline;
            }
        }

        a {
            display: flex;
            align-items: center;

            color: var(--color-text);
            text-decoration: none;
        }

        :global(svg) {
            margin-right: 0.6em;
            fill: var(--color-dark);
            overflow: visible;
        }
    }

    .floatOff {
        display: block;
        padding: 1em;

        span {
            transition: transform 200ms;
        }

        &:hover span {
            transform: translateX(1em);
        }

        :global(svg) {
            transition: transform 200ms;
        }

        :global(.main) {
            pointer-events: none;
            transition: fill 200ms;
        }

        &:hover :global(svg)  {
            transform: scale(1.3);
        }

        &:hover :global(.main) {
            fill: #fffb;
            stroke: #333;
            stroke-width: 1px;

            animation: pulse infinite 1.5s;
        }

        :global(use) {
            transform-origin: 50% 50%;
        }

        :global(g) {
            pointer-events: none;
            z-index: -1;
        }

        :global(g.rainbow use) {
            opacity: 0;
            animation: rainbowA 800ms ease-in infinite reverse;
            animation-name: unset;
            transform: translate(2em, -1em) scale(2);
            mix-blend-mode: multiply;

            &:nth-child(2) {
                transform: translate(-1em, 2em) scale(2);
                fill: #c3ce1b;
                animation-delay: 100ms;
            }
            &:nth-child(3) {
                transform: translate(-1em, -2em) scale(2);
                fill: #67ce1b;
                animation-delay: 200ms;
            }
            &:nth-child(4) {
                transform: translate(1.8em, 0.8em) scale(2);
                fill: #e954be;
                animation-delay: 300ms;
            }
            &:nth-child(5) {
                transform: translate(-1.5em, 0.5em) scale(2);
                fill: #631bce;
                animation-delay: 400ms;
            }
            &:nth-child(6) {
                transform: translate(1em, 2em) scale(2);
                fill: #1bbcce;
                animation-delay: 500ms;
            }
            &:nth-child(7) {
                transform: translate(0.2em, -1.5em) scale(2);
                fill: #f98926;
                animation-delay: 600ms;
            }
        }

        &:hover :global(g.rainbow use) {
            animation-name: rainbowA;
        }

        :global(g.radiate use) {
            opacity: 0;
            fill: #fff;
            mix-blend-mode: color-burn;

            animation: 2s infinite linear;

            &:nth-child(2) {
                animation-delay: 1s;
            }
        }

        &:hover :global(g.radiate use) {
            animation-name: radiateA;
        }
    }

    @keyframes pulse {
        50% {
            transform: scale(1.1);
        }
    }

    @keyframes radiateA {
        0% {
            opacity: 1;
        }
        90% {
            opacity: 0;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes rainbowA {
        100% {
            transform: translate(0, 0);
            opacity: 0.7;
            fill: unset;
        }
    }
</style>
