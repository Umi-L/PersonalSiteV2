<script lang="ts">
    export let enabled = true;
    export let onClick: () => void;

    function onKeyPress(e: KeyboardEvent){
        if (e.key == "Enter"){
            onClick();
        }
    }
</script>




<div class="text-wrapper" class:disabled={!enabled} on:click={onClick} role="button" on:keypress={onKeyPress} tabindex={1}>
    <slot></slot>
    <div class="underline"></div>
</div>




<style>

    .disabled{
        color: var(--text-color-disabled);

        transition: 0.2s ease-in-out;
    }

    .text-wrapper{
        position: relative;
        display: inline-block;

        cursor: pointer;
    }

    .underline{
        position: absolute;
        bottom: 0;
        left: 0;

        width: 0%;
        height: 0.3rem;

        background: var(--text-color);

        transition: 0.1s ease-out;
    }

    .text-wrapper:hover .underline{
        width: 100%;
    }

</style>