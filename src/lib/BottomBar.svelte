<div class="bar">
    <div class="gradient-wrapper">
        <div class="gradient"></div>
    </div>
</div>



<style>
    .bar{

        --outline-size: 3px;

        width: calc(100% + 4rem);

        height: 7rem;

        background: var(--background-color);

        border-top: var(--outline-size) solid var(--text-color);

        position: absolute;
        left: -2rem;
        bottom: -1rem;

        z-index: 10;
    }

    .gradient-wrapper{
        width: 100%;
        height: 100%;

        position: relative;
    }

    .gradient{
        width: 100%;
        height: var(--border-size);
        position: absolute;

        bottom: calc(100% + var(--outline-size));

        z-index: 1;

        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, var(--border-color) 100%);
    }
</style>