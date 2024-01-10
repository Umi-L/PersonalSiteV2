<script lang="ts">
  import { aboutVisible } from "../sharedData";
  import Block from "./Block.svelte";
  import IconButton from "./IconButton.svelte";
  import ProgrammingLanguage from "./ProgrammingLanguage.svelte";

  let visible = false;
  let hasBeenVisible = false;

  aboutVisible.subscribe((value) => {
    visible = value;
    if (visible) hasBeenVisible = true;

    console.log("visible: " + visible);
  });

  function close() {
    aboutVisible.set(false);
  }
</script>

<div class="popover" class:visible class:hidden={!visible && hasBeenVisible}>
  <div class="body">
    <div class="bar">
      <IconButton icon="ph:x" showUnderline={false} callback={close} />
    </div>
    <div class="sub-wrapper">
      <h1 class="about-label">About Me</h1>
      <p class="about-aside">
        Hey there!
        <br />
        <br />
        I'm a student programmer based in Canada. I have experience with
        <ProgrammingLanguage level={4}>C#</ProgrammingLanguage>,
        <ProgrammingLanguage level={4}>Java</ProgrammingLanguage>,
        <ProgrammingLanguage level={4}>TypeScript</ProgrammingLanguage>,
        <ProgrammingLanguage level={3}>GLSL</ProgrammingLanguage>
        <ProgrammingLanguage level={3}>JavaScript</ProgrammingLanguage>,
        <ProgrammingLanguage level={3}>Svelte</ProgrammingLanguage>,
        <ProgrammingLanguage level={3}>Python</ProgrammingLanguage>,
        <ProgrammingLanguage level={3}>Kotlin</ProgrammingLanguage>,
        <ProgrammingLanguage level={3}>Lua</ProgrammingLanguage>,
        <ProgrammingLanguage level={2}>C/C++</ProgrammingLanguage>,
        <ProgrammingLanguage level={2}>Go</ProgrammingLanguage>.
        <br />
        <br />
        (Proficiency: <ProgrammingLanguage level={4}
          >Very High</ProgrammingLanguage
        >,
        <ProgrammingLanguage level={3}>High</ProgrammingLanguage>,
        <ProgrammingLanguage level={2}>Moderate</ProgrammingLanguage>,
        <ProgrammingLanguage level={1}>Low</ProgrammingLanguage>)
        <br />
        <br />
        As a hobby I work on game development projects using Unity, Godot, and most
        recently my own engine.
        <br />
        <br />
        Want to chat? You can find me at
      </p>
    </div>
  </div>
</div>

<style>
  .visible {
    animation: popover-appear 1s ease-out forwards;
    pointer-events: all !important;
    user-select: all !important;
    visibility: visible !important;
  }

  .hidden {
    animation: popover-disappear 0.5s ease-out forwards;
    pointer-events: none !important;
    user-select: none !important;
    visibility: visible !important;
  }

  .about-aside {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 1rem;
    margin-right: 1rem;
    color: var(--text-color);
    user-select: none;
  }

  .popover {
    visibility: hidden;

    position: fixed;
    left: 0;
    bottom: 0dvw;

    display: flex;
    justify-content: center;
    align-items: center;

    user-select: none;
    pointer-events: none;

    width: 100dvw;
    /* height: 100dvh; */

    z-index: 9000;
  }

  .body {
    background-color: var(--background-color);
    width: 100%;
    height: 100%;

    border: 1px solid var(--foreground-color);

    box-shadow: 0 0 10px 0 var(--box-shadow-color);
    overflow-y: auto;
  }

  .sub-wrapper {
    padding: 1dvw;
    display: flex;
    flex-direction: row;
  }

  .bar {
    width: 100%;
    height: 2rem;

    display: flex;
    justify-content: end;
  }

  .about-label {
    color: var(--text-color);
    font-size: 5rem;
    font-weight: 700;

    /* make text vertical */
    writing-mode: vertical-rl;

    user-select: none;
    margin: 0;
    padding: 0;
  }

  @keyframes popover-appear {
    from {
      /* opacity: 0; */
      height: 0dvh;
    }

    to {
      /* opacity: 1; */
      height: 100dvh;
    }
  }

  @keyframes popover-disappear {
    from {
      /* opacity: 1; */
      height: 100dvh;
    }
    to {
      /* opacity: 0; */
      height: 0dvh;
    }
  }
</style>
