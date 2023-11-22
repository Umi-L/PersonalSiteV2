<script lang="ts">
  import { FollowerMode, projectDescription, followerMode } from "../sharedData";
  import Follower from "./Follower.svelte";

    let currentFollowerMode = FollowerMode.INVERTED;
    followerMode.subscribe((value) => {
        currentFollowerMode = value;
    });

    let currentDescription = "";
    projectDescription.subscribe((value) => {
        currentDescription = value;
    });
</script>



<div class="wrapper">
    <p class:hidden={currentFollowerMode != FollowerMode.READ_MORE}>
        {currentDescription}
    </p>
</div>



<style>
    .wrapper{
        position: fixed;

        width: 80%;
        height: 5rem;

        left: 50%;
        transform: translateX(-50%);

        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;

        z-index: 1000;
    }

    .hidden{
        opacity: 0;
        pointer-events: none;
    }

    p{
        font-size: 1.5rem;
        font-weight: 400;
        color: var(--text-color);

        padding: 10px;

        margin: 0;

        text-shadow: 1px 1px 5px var(--shadow-color);

        text-align: justify;

        text-overflow: ellipsis;

        transition: all 0.3s ease-out;
    }
</style>
