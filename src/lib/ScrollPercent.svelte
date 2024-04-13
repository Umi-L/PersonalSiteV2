<script lang="ts">
  export let percentage: number;

  function getPercentString(percent: number) {
    let string = Math.trunc(percent) + "%";

    // add leading whitespace to get 4 characters
    while (string.length < 4) {
      string = "\xa0" + string;
    }

    return string;
  }
</script>

<p class="number">
  {getPercentString(percentage)}
</p>

<style>
  .number {
    font-size: 1.5em;

    padding: 0;
    margin: 0;

    pointer-events: none;
  }
</style>

