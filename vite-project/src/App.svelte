<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Navbar from "./routes/Navbar.svelte";
  import { location } from "svelte-spa-router";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  let video;
  let volume = 0.75;
  let muted = true;
  let paused = true;

  onMount(() => {
    paused = true;
  });

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

<div class="navFont">
  <Navbar />
</div>

{#if $location != "/"}
  <div out:fade in:fade class="fixed inset-0 w-full h-full backdrop-blur-sm overflow-auto z-10" />
  <div out:fade in:fade class="fixed inset-0 w-full h-full bg-black opacity-60 overflow-auto z-10" />
{/if}

<main class="">
  <Router {routes} />

  <video bind:this={video} id="background-video" bind:paused onloadstart="this.volume=0.1" playsinline autoplay loop bind:muted>
    <track kind="captions" />
    <source src={"./source_vp9.webm"} type="video/webm;codec=vp9" />
    <source src={"./source_264.mp4"} type="video/mp4" />
  </video>

  <div id="video-controls" class="z-20   w-full flex mb-2 ">
    <!--  {$location == '/' ? 'block' : 'hidden'} -->
    <div class="  group relative ">
      <button on:click={handleMute} class=" absolute bottom-0 left-0 ml-5">
        {#if muted}
          <div class="{$location == '/' ? '' : ' bg-slate-500'} opacity-40  rounded-full  p-1">
            <svg fill="#000000" class="w-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z" /></svg>
          </div>
        {:else}
          <div class="{$location == '/' ? '' : ' bg-slate-500'} opacity-40  rounded-full  p-1">
            <svg fill="#000000" class="w-5" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z" /></svg>
          </div>
        {/if}
      </button>
      <input class="hidden group-hover:block ml-12" type="range" min="0" max="1" step="0.01" value={volume} on:input={handleVolumeChange} />
    </div>

    <button on:click={handlePlay} class=" absolute bottom-0 right-0  mr-5  {$location == '/' ? 'block' : 'hidden'} ">
      {#if paused}
        <div class="{$location == '/' ? '' : ' bg-slate-500'} opacity-40  rounded-full  p-1">
          <svg fill="#000000" class="w-5" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" /></svg>
        </div>
      {:else}
        <div class="{$location == '/' ? '' : ' bg-slate-500'} opacity-40  rounded-full  p-1">
          <svg fill="#000000" class="w-5" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" /></svg>
        </div>
      {/if}
    </button>
  </div>
</main>

<style>
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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  @font-face {
    font-family: "My Custom Font";
    src: url("/Font/NHaasGroteskTXPro-65Md.otf") format("opentype");
  }

  main {
    font-family: "My Custom Font", sans-serif;
  }

  @font-face {
    font-family: "navFont";
    src: url("/Font/NEXT-Mono-Thin.otf") format("opentype");
  }

  .navFont {
    font-family: "navFont", sans-serif;
  }
</style>
