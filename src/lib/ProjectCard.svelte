<script lang="ts">
    import { onMount } from "svelte";
    import { FollowerMode, followerMode } from "../sharedData";

    export let name: string;
    export let image: string;
    export let description: string;
    export let href: string;

    export let gridRow: string;
    export let gridColumn: string;

    let hoveringBlock = false;

    function mouseEnter(){
        followerMode.set(FollowerMode.READ_MORE);
        hoveringBlock = true;
    }

    function mouseLeave(){
        followerMode.set(FollowerMode.INVERTED);
        hoveringBlock = false;
    }

    function click(){
        window.open(href, "_blank");
    }

    function keypress(e: KeyboardEvent){
        if(e.key == "Enter"){
            window.open(href, "_blank");
        }
    }
</script>



<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="block-wrapper" style={`grid-row: ${gridRow}; grid-column: ${gridColumn};`} class:hovering-block={hoveringBlock}>
    <div class="block" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave} on:click={click}  role="button" on:keypress={keypress} tabindex={1}>
        <img src={image} alt={name} class="image" />

        <h1 class="label">{name}</h1>

        <div class="description-wrapper">
            <div class="description">
                <h3 class="header">{name}</h3>
                <p class="description-text">{description}</p>
            </div>
        </div>
    </div>
</div>



<style>

    .hovering-block{
        padding: 0 !important;
    }

    .header{
        font-size: 2rem;
        font-weight: 400;
        color: var(--text-color);

        padding: 10px;

        margin: 0;

        text-shadow: 1px 1px 5px var(--shadow-color);
    }

    .description-text{
        font-size: 1.5rem;
        font-weight: 400;
        color: var(--text-color);

        padding: 10px;

        margin: 0;

        text-shadow: 1px 1px 5px var(--shadow-color);

        text-align: justify;

        text-overflow: ellipsis;

    }

    .description-wrapper{
        position: absolute;
        
        display: flex;

        bottom: 0%;
        left: 0;

        width: 100%;
        display: block;
        height: 0;
        overflow: hidden;

        /*  */

        transition: all 0.3s ease-out;

        justify-content: center;
        align-items: center;
    }

    .description{

        width: 100%;
        height: 100%;

        /* background: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.1); */

        background-color: var(--foreground-color);

        box-shadow: 0 0px 20px var(--box-shadow-color);
        border-radius: 20px;

        z-index: 10;

        overflow: hidden;

        padding-bottom: 1.5rem;
    }

    /* .block:hover .label{
        opacity: 0;

        transition: all 0.3s ease-in-out;
    } */

    .image{
        user-select: none;

        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
    }

    .label{
        user-select: none;

        position: absolute;
        bottom: 0;
        left: 0;

        font-size: 1.5rem;
        font-weight: 400;
        color: var(--text-color);

        padding: 10px;

        margin: 0;

        text-shadow: 1px 1px 5px var(--shadow-color);
    }

    .block-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 1rem;

        width: 100%;
        height: 100%;

        overflow: hidden;

        z-index: 5;

        transition: all 0.3s ease-out;
    }

    .block{
        width: 100%;
        height: 100%;
        border-radius: 15px;
        box-shadow: 0 0px 10px var(--box-shadow-color);

        overflow: hidden;

        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.1);

        transition: all 0.3s ease-in-out;

        display: flex;
        justify-content: left;
        align-items: end;

        cursor: pointer;
    }

    .block:hover{
        background: rgba(255, 255, 255, 0.01);
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
</style>
