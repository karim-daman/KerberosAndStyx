<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Nav from "./routes/Nav.svelte";
  import PauseFilled from "carbon-icons-svelte/lib/PauseFilled.svelte";
  import PlayFilledAlt from "carbon-icons-svelte/lib/PlayFilledAlt.svelte";

  let video;
  let isPlaying = true;
  let volume = 0.05;

  function togglePlay() {
    if (isPlaying) video.pause();
    else video.play();
    isPlaying = !isPlaying;
  }

  function handleVolumeChange(event) {
    volume = event.target.value;
    video.volume = volume;
  }
</script>

<main>
  <Nav />
  <Router {routes} />
  <video bind:this={video} id="background-video" onloadstart="this.volume=0.05" autoplay loop>
    <track kind="captions" />
    <!-- <source src={"./Uncloud Rndr Portfolio.mov"} type="video/mp4" /> -->
    <source src={"./source_vp9.webm"} type="video/webm;codec=vp9" />
    <source src={"./source_264.mp4"} type="video/mp4" />
  </video>

  <div id="video-controls">
    {#if isPlaying}
      <button id="controls" on:click={togglePlay}> <PauseFilled fill="white" size={32} /></button>
    {:else}
      <button id="controls" on:click={togglePlay}> <PlayFilledAlt fill="white" size={32} /></button>
    {/if}

    <input type="range" min="0" max="1" step="0.01" value={volume} on:input={handleVolumeChange} />
  </div>
</main>

<style>
  button,
  input {
    margin: 0 10px;
  }
  #controls {
    background: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
  }
  #video-controls {
    position: absolute;
    bottom: 0;
  }
  #background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  @font-face {
    font-family: "My Custom Font";
    src: url("/Font/Next-Mono-Thin.otf") format("opentype");
  }

  main {
    font-family: "My Custom Font", sans-serif;
  }
</style>
