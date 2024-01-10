<script lang="ts">
  import Icon from "@iconify/svelte";
  import IconButton from "./IconButton.svelte";
</script>

<div class="bar">
  <div class="gradient-wrapper">
    <div class="gradient"></div>

    <div class="icons">
      <IconButton icon="mdi:github" href="https://github.com/Umi-L" />
      <IconButton
        icon="mdi:twitter"
        href="https://twitter.com/Julian_Ogradyy"
      />
      <IconButton icon="cib:itch-io" href="https://um1.itch.io/" />
      <IconButton icon="mdi:email" href="mailto:julianogrady07@gmail.com" />
    </div>
  </div>
</div>

<style>
  .bar {
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

  .icons {
    width: 100%;
    height: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 2rem;
  }

  .gradient-wrapper {
    width: 100%;
    height: 100%;

    position: relative;
  }

  .gradient {
    width: 100%;
    height: var(--border-size);
    position: absolute;

    bottom: calc(100% + var(--outline-size));

    z-index: 1;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      var(--border-color) 100%
    );
  }
</style>

