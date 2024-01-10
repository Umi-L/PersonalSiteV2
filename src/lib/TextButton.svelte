<script lang="ts">
  import { onMount } from "svelte";
  import { FollowerMode, followerMode } from "../sharedData";

  export let enabled = true;
  export let onClick: () => void;

  let text: HTMLDivElement;

  let color: string;

  onMount(() => {
    // get the text color attribute
    color = getComputedStyle(text).getPropertyValue("color");

    console.log(color);
  });

  function onKeyPress(e: KeyboardEvent) {
    if (e.key == "Enter") {
      onClick();
    }
  }

  function mouseEnter() {
    followerMode.set(FollowerMode.READ_MORE);
  }

  function mouseLeave() {
    followerMode.set(FollowerMode.INVERTED);
  }
</script>

<div
  class="text-wrapper"
  class:disabled={!enabled}
  on:click={onClick}
  role="button"
  on:keypress={onKeyPress}
  tabindex={1}
  bind:this={text}
  on:mouseenter={mouseEnter}
  on:mouseleave={mouseLeave}
>
  <slot />
  <div class="underline" style={`background-color: ${color}`}></div>
</div>

<style>
  .disabled {
    color: var(--text-color-disabled);

    transition: 0.2s ease-in-out;
  }

  .text-wrapper {
    position: relative;
    display: inline-block;

    cursor: pointer;
  }

  .underline {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 0%;
    height: 0.3rem;

    background: var(--text-color);

    transition: 0.1s ease-out;
  }

  .text-wrapper:hover .underline {
    width: 100%;
  }
</style>
