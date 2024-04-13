<script lang="ts">
    import {onMount} from "svelte";
    import Border from "./lib/Border.svelte";
    import Content from "./lib/Content.svelte";
    import ScrollPercent from "./lib/ScrollPercent.svelte";
    import Follower from "./lib/Follower.svelte";
    import ScrollBar from "./lib/ScrollBar.svelte";
    import LanguageToggle from "./lib/LanguageToggle.svelte";
    import {FollowerMode, Language, followerMode, language, aboutVisible} from "./sharedData";
    import ColorSwitch from "./lib/DarkModeSwitch.svelte";
    import AboutPage from "./lib/AboutPage.svelte";

    let contentTranslation = {
        x: 0,
        y: 0,
    };

    let contentPanTranslation = {
        x: 0,
        y: 0,
    };

    let percentageScrolled = 0;

    let blocksContainer: HTMLElement;
    let content: HTMLDivElement;

    let scrollingDown: boolean = false;

    let currentFollowerMode = FollowerMode.INVERTED;

    let aboutPageVisible = false;
    aboutVisible.subscribe((value) => {
        aboutPageVisible = value;
    });

    followerMode.subscribe((value) => {
        currentFollowerMode = value;
    });

    onMount(() => {
        window.addEventListener("popstate", () => {
            if (aboutPageVisible) {
                aboutVisible.set(false);
                history.pushState(null, null, window.location.pathname);
            } else {
                history.back();
            }

            history.pushState(null, null, window.location.pathname);
        });
    });

    function panBackground(event: MouseEvent) {

        if (content == null) {
            return;
        }

        const factor = 0.03;

        const x = event.clientX - window.innerWidth / 2;
        const y = event.clientY - window.innerHeight / 2;

        let percentageX = x / window.innerWidth;
        let percentageY = y / window.innerHeight;

        percentageX *= factor;
        percentageY *= factor;

        contentPanTranslation.x = percentageX * window.innerWidth;
        contentPanTranslation.y = percentageY * window.innerHeight;

        applyTranslation();
    }

    function applyTranslation() {

        // get height of content
        let contentHeight = content.getBoundingClientRect().height;

        // get percentage of content scrolled
        percentageScrolled =
            (-contentTranslation.y / (contentHeight - window.innerHeight)) * 100;

        // if percentage is greater than 100, set to 100
        if (percentageScrolled > 100) {
            contentTranslation.y = -contentHeight + window.innerHeight;

            percentageScrolled = 100;
        }

        let finalTranslation = {
            x: contentTranslation.x + contentPanTranslation.x,
            y: contentTranslation.y + contentPanTranslation.y,
        };

        const keyframes = {
            transform: `translate(${finalTranslation.x}px, ${finalTranslation.y}px)`,
        };
        const keyframesBackground = {
            backgroundPosition: `${finalTranslation.x}px ${finalTranslation.y}px`,
        };

        content.animate(keyframes, {
            duration: 1000,
            fill: "forwards",
        });

        document.body.animate(keyframesBackground, {
            duration: 1000,
            fill: "forwards",
        });
    }

    function onWheel(event: WheelEvent) {
        scroll(event.deltaY / 2);
    }

    let startTouchY = 0;

    function onTouchStart(event: TouchEvent) {
        startTouchY = event.touches[0].clientY;
    }

    function onTouchMove(event: TouchEvent) {
        const delta = event.touches[0].clientY - startTouchY;
        scroll(-delta * 2);
        startTouchY = event.touches[0].clientY;

        event.preventDefault();
    }

    function onTouchEnd(event: TouchEvent) {
        startTouchY = 0;
    }

    function scroll(delta: number) {
        contentTranslation.y -= delta;

        // if scrolling down
        if (delta >= 0) {
            scrollingDown = true;
        } else {
            scrollingDown = false;
        }

        // check for bounds
        if (contentTranslation.y > 0) {
            contentTranslation.y = 0;
        }

        applyTranslation();
    }

    onMount(() => {
    });
</script>

<main class="main" on:mousemove={panBackground} bind:this={blocksContainer}>
    <Follower/>

    {#if !aboutPageVisible}
        <Border/>
        <ScrollBar percentage={percentageScrolled}/>

        <div class="topbar">
            <!-- <div class:disappear-on-scroll={scrollingDown || (currentFollowerMode == FollowerMode.READ_MORE)} class="can-disappear">
                    <ColorSwitch/>
                    <LanguageToggle/>
                </div> -->

            <ScrollPercent percentage={percentageScrolled}/>
        </div>

        <div
                class="content"
                bind:this={content}
                on:wheel={onWheel}
                on:touchmove={onTouchMove}
                on:touchstart={onTouchStart}
                on:touchend={onTouchEnd}
        >
            <Content/>
        </div>
    {:else}
        <AboutPage/>
    {/if}
</main>

<style>
    .disappear-on-scroll {
        opacity: 0;
        pointer-events: none;
    }

    .can-disappear {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 2rem;
        transition: opacity 0.3s ease-out;
    }

    .main {
        width: 100%;
        height: 100%;
    }

    .content {
        position: absolute;
        width: 100%;
    }

    .topbar {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 5rem;

        gap: 2rem;

        display: flex;
        justify-content: end;
        align-items: center;

        z-index: 1000;

        padding: 0 2rem;
    }
</style>
