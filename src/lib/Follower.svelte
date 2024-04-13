<script lang="ts">
    import {onMount} from "svelte";
    import {convertRemToPixels} from "../utils";
    import {FollowerMode, followerMode} from "../sharedData";

    let mode: FollowerMode = FollowerMode.INVERTED;
    followerMode.subscribe((value) => {
        console.log(value);
        mode = value;
    });

    let follower: HTMLDivElement;

    let followerSize = 4;
    let hidden = true;

    onMount(async () => {
        window.addEventListener("mousemove", (e) => {

            let sizePx = convertRemToPixels(followerSize);

            let finalPosition = {
                x: e.clientX - sizePx / 2,
                y: e.clientY - sizePx / 2,
            };

            const keyframes = {
                transform: `translate(${finalPosition.x}px, ${finalPosition.y}px)`,
            };

            follower.animate(keyframes, {
                duration: 500,
                fill: "forwards",
            });
        });

        document.documentElement.addEventListener("mouseleave", () => {
            hidden = true;
        });

        document.documentElement.addEventListener("mouseenter", (e) => {
            hidden = false;

            let sizePx = convertRemToPixels(followerSize);

            let finalPosition = {
                x: e.clientX - sizePx / 2,
                y: e.clientY - sizePx / 2,
            };

            const keyframes = {
                transform: `translate(${finalPosition.x}px, ${finalPosition.y}px)`,
            };

            follower.animate(keyframes, {
                duration: 0,
                fill: "forwards",
            });
        });

        // on touch
        window.addEventListener("touchmove", (e) => {
            hidden = true;
        });
    });
</script>

<div
        class="follower invert"
        bind:this={follower}
        class:hidden={hidden ||
    mode == FollowerMode.READ_MORE ||
    mode == FollowerMode.HIDDEN}
></div>

<style>
    .follower {
        position: fixed;
        top: 0;
        left: 0;

        z-index: 9999;

        width: 4rem;
        height: 4rem;

        pointer-events: none;
    }

    .invert {
        background-color: var(--text-color);
        border-radius: 50%;

        /* filter: invert(1); */
        mix-blend-mode: difference;

        transition: 0.2s ease-in-out;
    }

    .hidden {
        opacity: 0;

        transition: opacity 0.2s ease-in-out;
    }
</style>
