<script lang="ts">
  import { FollowerMode, aboutVisible, followerMode } from "../sharedData";

  function onClick() {
    aboutVisible.set(true);
  }

  function onKeyPress(event: KeyboardEvent) {
    if (event.key == "Enter") {
      onClick();
    }
  }

  function mouseenter() {
    followerMode.set(FollowerMode.READ_MORE);
  }

  function mouseleave() {
    followerMode.set(FollowerMode.INVERTED);
  }
</script>

<div
  class="name"
  role="button"
  on:click={onClick}
  on:keypress={onKeyPress}
  tabindex={1}
  on:mouseenter={mouseenter}
  on:mouseleave={mouseleave}
>
  Julian
  <div class="underline"></div>
</div>

<style>
  .name {
    color: var(--text-color);

    padding: 0;

    position: relative;

    transition: 0.3s ease-out;

    pointer-events: all;
    user-select: none;

    font-weight: 700;
  }

  .name:hover {
    cursor: pointer;

    color: var(--text-color-hover);
  }

  .name:hover .underline {
    background: var(--text-color-hover);

    height: 100%;
  }

  .underline {
    height: 0.5rem;

    background: var(--text-color);

    /* invert */
    mix-blend-mode: difference;

    position: absolute;
    bottom: 0;
    left: 0;

    animation: underline-appear 1s ease-in-out forwards 2.5s;

    transition: 0.5s ease-out;

    pointer-events: none;
    user-select: none;
  }

  @keyframes underline-appear {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }
</style>
