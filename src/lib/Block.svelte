<script lang="ts">
  import { onMount } from "svelte";

    onMount(() => {

    });
</script>



<div class="block-wrapper">
    <div class="block">
        <slot></slot>
    </div>
</div>



<style>

    .block-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 7px;
    }

    .block{
        width: 100%;
        height: 100%;
        border-radius: 15px;
        box-shadow: 0 0px 10px var(--shadow-color);

        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.1);

        transition: all 0.5s ease-in-out;

        display: flex;
        justify-content: left;
        align-items: end;

        cursor: pointer;

        padding: 20px;
    }

    .block:hover{
        background: rgba(255, 255, 255, 0.01);
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
</style>
