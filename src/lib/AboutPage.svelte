<script lang="ts">
    import { aboutVisible } from "../sharedData";
  import IconButton from "./IconButton.svelte";

    let visible = false;

    aboutVisible.subscribe((value) => {
        visible = value;

        console.log("visible: " + visible);
    });
</script>



<div class="popover" class:visible={visible}>
    <div class="body">
        <!-- <div class="bar">
            <IconButton icon="ph:x"/>
        </div> -->
        <div class="sub-wrapper">
            <h1 class="about-label">About Me</h1>
        </div>
    </div>
</div>



<style>

    .visible{
        animation: popover-appear 1s ease-out forwards;
        pointer-events: all !important;
        user-select: all !important;
        visibility: visible !important;
    }

    .popover{
        visibility: hidden;
        position: fixed;
        left: 0;
        bottom: 0dvw;

        display: flex;
        justify-content: center;
        align-items: center;

        user-select: none;
        pointer-events: none;

        width: 100dvw;
        /* height: 100dvh; */

        z-index: 9000;
    }

    .body{
        background-color: var(--background-color);
        width: 90%;
        height: 90%;

        border: 1px solid var(--foreground-color);

        box-shadow: 0 0 10px 0 var(--box-shadow-color);
    }

    .sub-wrapper{
        padding: 1dvw;
    }

    .bar{
        width: 100%;
        height: 2rem;
        background-color: var(--foreground-color);

        display: flex;
        justify-content: end;
    }

    .about-label{
        color: var(--text-color);
        font-size: 5rem;
        font-weight: 700;

        /* make text vertical */
        writing-mode: vertical-rl;

        margin: 0;
        padding: 0;
    }

    @keyframes popover-appear{
        from{
            /* opacity: 0; */
            height: 0dvh;
        }

        to{
            /* opacity: 1; */
            height: 100dvh;
        }
    }
</style>