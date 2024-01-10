<script lang="ts">
</script>

<div class="wrapper">
  <div class="top border"></div>
  <div class="bottom border"></div>
  <div class="left border"></div>
  <div class="right border"></div>
</div>

<style>
  .top {
    top: 0%;
    left: 0%;

    width: 100%;
    height: var(--border-size);

    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      var(--border-color) 100%
    );
  }

  .bottom {
    bottom: 0%;
    left: 0%;

    width: 100%;
    height: var(--border-size);

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      var(--border-color) 100%
    );
  }

  .left {
    top: 0%;
    left: 0%;

    width: var(--border-size);
    height: 100%;

    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      var(--border-color) 100%
    );
  }

  .right {
    top: 0%;
    right: 0%;

    width: var(--border-size);
    height: 100%;

    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      var(--border-color) 100%
    );
  }

  .border {
    position: absolute;
  }

  .wrapper {
    width: 100%;
    height: 100%;

    position: fixed;

    overflow: hidden;

    pointer-events: none;
  }
</style>
