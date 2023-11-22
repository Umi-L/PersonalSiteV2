<script lang="ts">
    export let percentage: number;
</script>




<div class="bar-wrapper">
    <div class="bar" style="height: {percentage}%;"></div>
</div>




<style>

    .bar{
        width: 100%;
        height: 0%;

        background: var(--text-color);

        transition: 0.1s ease-out;
    }

    .bar-wrapper{
        width: 0.5rem;
        height: 100%;

        position: absolute;
        top: 0;
        right: 0;

        z-index: 1000;
    }
</style>