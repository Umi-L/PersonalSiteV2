<script lang="ts">
    import {aboutVisible} from "../sharedData";
    import Block from "./Block.svelte";
    import IconButton from "./IconButton.svelte";
    import ProgrammingLanguage from "./ProgrammingLanguage.svelte";
    import TextButton from "./TextButton.svelte";

    let visible = false;

    aboutVisible.subscribe((value) => {
        visible = value;

        console.log("visible: " + visible);
    });

    function close() {
        aboutVisible.set(false);
    }
</script>

<div class="body">
    <div class="bar">
    </div>
    <div class="sub-wrapper">
        <h1 class="about-label">About Me</h1>
        <p class="about-aside">
            Hey there!
            <br/>
            <br/>
            I'm Julian, a student programmer based in Canada. I have experience with
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
            <br/>
            <br/>
            (Proficiency:
            <ProgrammingLanguage level={4}>Very High</ProgrammingLanguage>,
            <ProgrammingLanguage level={3}>High</ProgrammingLanguage>,
            <ProgrammingLanguage level={2}>Moderate</ProgrammingLanguage>,
            <ProgrammingLanguage level={1}>Low</ProgrammingLanguage>)
            <br/>
            <br/>
            I have experience with web development, game development, and systems programming.
            <br/>
            <br/>
            In my spare time I work on game development projects using Unity, Godot, and most
            recently my own engine.
        </p>
    </div>

    <div class="sub-wrapper">
        <TextButton onClick={()=>{aboutVisible.set(false)}}>
      <span class="text">
        Head Back?
      </span>
        </TextButton>
    </div>
</div>

<style>
    .text {
        font-size: 5rem;
        color: var(--text-color);
        user-select: none;
        font-weight: bold;
    }

    .sub-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
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
        height: 4rem;

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
