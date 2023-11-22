<script lang="ts">
    import { onMount } from "svelte";
    import { FollowerMode, darkMode, followerMode } from "../sharedData";

    function mouseEnter(){
        followerMode.set(FollowerMode.READ_MORE);
    }

    function mouseLeave(){
        followerMode.set(FollowerMode.INVERTED);
    }

    let dark = false;
    darkMode.subscribe((value) => {
        dark = value;
    });

    function toggle(){
        darkMode.set(!dark);

        console.log("toggled");
    }

    function keyPress(event: KeyboardEvent){
        if(event.key == "Enter"){
            toggle();
        }
    }

</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="switch" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave} on:click={toggle} tabIndex={1} on:keypress={keyPress}>
    <div class="handle-wrapper" class:dark-mode={dark} class:light-mode={!dark}>
        <div class="handle"></div>
    </div>
</div>



<style>
    .switch{
        width: 4rem;
        height: 2rem;

        background: var(--foreground-color);

        border-radius: 1rem;
        /* border: 3px solid var(--background-color); */

        position: relative;

        cursor: pointer;

        transition: 0.3s ease-out;

        box-shadow: 0px 0px 10px var(--box-shadow-color);
    }

    .switch:hover{
        scale: 1.05;
    }

    .dark-mode{
        left: 0%;
    }

    .light-mode{
        left: 50%;
    }

    .handle-wrapper{
        height: 100%;
        aspect-ratio: 1/1;

        transition: 0.3s cubic-bezier(.53,.74,.7,.92);

        position: absolute;
        top: 50%;

        transform: translate(0, -50%);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .handle{

        background: var(--text-color);

        border-radius: 50%;
        border: 3px solid var(--text-color);

        width: 65%;
        height: 65%;


    }
</style>