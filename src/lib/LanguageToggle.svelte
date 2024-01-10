<script lang="ts">
  import {
    FollowerMode,
    Language,
    followerMode,
    language,
  } from "../sharedData";
  import TextButton from "./TextButton.svelte";

  let currentLanguage = Language.EN;

  language.subscribe((value) => {
    currentLanguage = value;
  });

  function mouseEnter() {
    followerMode.set(FollowerMode.HIDDEN);
  }

  function mouseLeave() {
    followerMode.set(FollowerMode.INVERTED);
  }
</script>

<p class="text" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
  <TextButton
    enabled={currentLanguage == Language.EN}
    onClick={() => {
      language.set(Language.EN);
    }}>EN</TextButton
  > | <TextButton
    enabled={currentLanguage == Language.FR}
    onClick={() => {
      language.set(Language.FR);
    }}>FR</TextButton
  >
</p>

<style>
  .text {
    font-size: 1.5rem;

    padding: 0;
    margin: 0;

    text-shadow: 1px 1px 5px var(--shadow-color);
  }
</style>

