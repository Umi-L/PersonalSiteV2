<script lang="ts">
  import { onMount } from "svelte";
  import { typeText } from "../utils";
  import Block from "./Block.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import NameElement from "./NameElement.svelte";
  import duskImage from "../assets/dusk-example.png";
  import itSpreadsImage from "../assets/it-spreads.jpg";
  import pumpkinSpiceImage from "../assets/pumpkin-spice.png";
  import hueNXImage from "../assets/hue-nx.jpg";
  import sweatErShopImage from "../assets/SweaterShop.png";
  import sparkForgeImage from "../assets/SparkForge.png";
  import whisperingEchosImage from "../assets/WhisperingEchos.png";
  import adventAssemblyLineImage from "../assets/AdventAssemblyLine.png";
  import actualCalcImage from "../assets/actual-calc.png";
  import blindspotImage from "../assets/blindspot.png";

  import BottomBar from "./BottomBar.svelte";

  let titleText: HTMLHeadingElement;
  // let scrollDownText: HTMLParagraphElement;

  onMount(async () => {
    // type out the text
    typeText(titleText, 0, 1500);
    // typeText(scrollDownText, 1700, 1500);
  });
</script>

<div class="wrapper">
  <h1 class="title-wrapper" bind:this={titleText}>
    <h1 class="nowrap">Hi, I'm&nbsp;</h1>
    <NameElement />.
  </h1>

  <div class="projects">
<!--    <ProjectCard-->
<!--      name="Wisp Engine"-->
<!--      image={whisperingEchosImage}-->
<!--      gridRow="1/3"-->
<!--      gridColumn="2/4"-->
<!--      href={""}-->
<!--    />-->

    <ProjectCard
      name="Blindspot"
      image={blindspotImage}
      gridRow="1/3"
      gridColumn="2/4"
      href={"https://um1.itch.io/blindspot"}
    />

    <ProjectCard
      name="Advent Assembly Line"
      image={adventAssemblyLineImage}
      gridRow="5/6"
      gridColumn="1/2"
      href={"https://um1.itch.io/advent-assembly"}
    />

    <ProjectCard
      name="SparkForge"
      image={sparkForgeImage}
      gridRow="4/5"
      gridColumn="1/3"
      href={"https://github.com/Umi-L/SparkForge"}
    />

    <ProjectCard
      name="It Spreads"
      image={itSpreadsImage}
      gridRow="1/3"
      gridColumn="1/2"
      href={"https://um1.itch.io/it-spreads"}
    />
    <ProjectCard
      name="Pumpkin Spice"
      image={pumpkinSpiceImage}
      gridRow="3/5"
      gridColumn="3/4"
      href={"https://um1.itch.io/pumpkin-spice-post-jam"}
    />
    <ProjectCard
      name="Hue NX"
      image={hueNXImage}
      gridRow="3/4"
      gridColumn="1/3"
      href={"https://github.com/Umi-L/hue-nx"}
    />
    <ProjectCard
      name="Sweat-er Shop"
      image={sweatErShopImage}
      gridRow="6/7"
      gridColumn="3/4"
      href={"https://um1.itch.io/sweat-er-shop"}
    />
    <ProjectCard
      name="DuSK Example Project"
      image={duskImage}
      gridRow="5/6"
      gridColumn="2/5"
      href={"https://github.com/Umi-L/dusk-example-project"}
    />
    <ProjectCard
      name="Actual Calc"
      image={actualCalcImage}
      gridRow="6/7"
      gridColumn="1/3"
      href={"https://github.com/Umi-L/ActualCalc"}
    />
  </div>

  <div class="spacer" />

  <BottomBar />
</div>

<style>
  .spacer {
    height: 10rem;
  }

  .nowrap {
    white-space: nowrap;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
    color: var(--text-color);

    padding: 0;
    margin: 0;
  }

  .wrapper {
    display: grid;

    width: 100%;

    /* three columns */
    grid-template-columns: 1fr 1fr 1fr;

    /* two rows */
    grid-template-rows: 70dvh 30dvh;
  }

  @media screen and (orientation: landscape) {
      .projects{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

        padding: 10dvw;
      }
  }

  @media screen and (orientation: portrait) {
      .projects{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 5dvw;
      }
  }

  .projects {
    height: 250dvh;

    grid-column: 1 / 4;
    grid-row: 2 / 4;
  }

  .scroll-down {
    grid-column: 1 / 4;
    grid-row: 2 / 3;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 0;
    margin: 0;
  }

  .title-wrapper {
    grid-column: 1 / 4;
    grid-row: 1 / 2;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 0;
    margin: 0;

    flex-wrap: wrap;
    align-content: center;
  }

  h1 {
    font-size: 7rem;
    font-weight: 700;
    color: var(--text-color);
    margin: 0px;
  }
</style>
