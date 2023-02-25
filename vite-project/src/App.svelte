<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";

  let video;

  let volume = 0.75;
  let muted = true;
  let paused = true;

  function handleMute() {
    if (muted) muted = false;
    else muted = true;
  }

  function handlePlay() {
    if (paused) paused = false;
    else paused = true;
  }

  function handleVolumeChange(event) {
    volume = event.target.value;
    video.volume = volume;
  }
</script>

<main>
  <Router {routes} />

  <video bind:this={video} id="background-video" bind:paused onloadstart="this.volume=0.1" autoplay loop bind:muted>
    <track kind="captions" />
    <source src={"./source_vp9.webm"} type="video/webm;codec=vp9" />
    <source src={"./source_264.mp4"} type="video/mp4" />
  </video>

  <div id="video-controls" class="z-50  w-full relative flex  group">
    <button on:click={handleMute} class="">
      {#if muted}
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      {/if}
    </button>

    <input class="hidden group-hover:block" type="range" min="0" max="1" step="0.01" value={volume} on:input={handleVolumeChange} />

    <button on:click={handlePlay} class=" absolute right-0 pr-5">
      {#if paused}
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
      {/if}
    </button>

    <!-- <div class=" w-10 group bg-green-500">
      <button class="text-white hidden group-hover:block">Hello</button>
    </div> -->
  </div>
</main>

<style>
  button,
  input {
    margin: 0 10px;
  }

  #video-controls {
    position: fixed;
    bottom: 0;
  }
  #background-video {
    position: fixed;
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
