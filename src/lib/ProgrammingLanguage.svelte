<script lang="ts">
  import TextButton from "./TextButton.svelte";

  export let level: number;
</script>

<div class="wrapper">
  <p
    class:high={level == 4}
    class:good={level == 3}
    class:medium={level == 2}
    class:low={level == 1}
  >
    <TextButton>
      <slot />
    </TextButton>
  </p>
</div>

<style>
  p {
    margin: 0;
    color: var(--text-color);
    width: fit-content;
  }
  .high {
    color: var(--high-color);
  }
  .good {
    color: var(--good-color);
  }
  .medium {
    color: var(--medium-color);
  }
  .low {
    color: var(--low-color);
  }

  .wrapper {
    display: inline-block;
    width: fit-content;
  }
</style>
