<script>
    const showSole = false;

    export let cv;
</script>

<div class="cv">
    <h2>Created & contributions</h2>

    <ul>
        {#each cv as {label, sole, href, desc }, idx}
            <li style:animation-delay={`${idx *70 +800}ms`}>
                <h3>
                    <a {href} class="gradient">
                        {label}
                        {#if showSole && sole}
                            <sup>*</sup>
                        {/if}
                    </a>
                </h3>
                <p>{@html desc}</p>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    @use 'src/lib/css/buttons';

    .cv {
        margin-bottom: 3em;
        overflow: hidden;

        ul {
            margin: 1.5rem 0 1.5rem;
        }

        li {
            margin-bottom: 1.5em;

            opacity: 0;
            transform: translateX(25vw);

            animation: 200ms forwards SlideIn;

            p {
                margin-top: 0;
            }
        }

        h3 {
            margin-bottom: 0;
        }
    }

    .gradient {
        // composes: gradientText from "../button.css";
        @extend .gradientText;

        display: inline-block;
        margin-bottom: 0.3em;

        font-weight: bold;
        font-size: 1.2em;
        text-decoration: none;
    }

    @keyframes SlideIn {
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .small {
        font-size: 0.8em;
    }

</style>
