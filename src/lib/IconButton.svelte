<script lang="ts">
    import Icon from "@iconify/svelte";
  import { FollowerMode, followerMode } from "../sharedData";

    export let icon: string;
    export let href: string;

    let underline: HTMLDivElement;

    function click(){
        window.open(href, "_blank");
    }

    function keypress(e: KeyboardEvent){
        if(e.key == "Enter"){
            window.open(href, "_blank");
        }
    }

    function mouseEnter(){
        followerMode.set(FollowerMode.READ_MORE);

        // apply animation
        underline.animate([
            {width: "0%"},
            {width: "100%"}
        ], {
            duration: 300,
            fill: "forwards"
        });
    }

    function mouseLeave(){
        followerMode.set(FollowerMode.INVERTED);

        // apply animation
        underline.animate([
            {width: "100%"},
            {width: "0%"}
        ], {
            duration: 300,
            fill: "forwards"
        });
    }
</script>



<div class="wrapper" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave} on:click={click} on:keypress={keypress} role="button" tabindex={0}>
    <Icon icon={icon} class="icon"/>

    <div class="underline" bind:this={underline}></div>
</div>



<style>
    .underline{
        height: 0.2rem;

        background: var(--text-color);

        /* invert */
        mix-blend-mode: difference;

        position: absolute;
        bottom: -5px;
        left: 0;
    }

    .wrapper{
        position: relative;

        display: flex;
        align-items: center;

        transition: 0.3s ease-out;
    }

    .wrapper:hover{
        cursor: pointer;

        color: var(--text-color-hover);
    }

    @keyframes underline-appear{
        from{
            width: 0;
        }

        to{
            width: 100%;
        }
    }


</style>