<script>
  import { fade } from "svelte/transition";
</script>

<!-- <div out:fade in:fade class="fixed inset-0 w-full h-full bg-black opacity-60  overflow-auto z-10" /> -->

<div in:fade={{ delay: 300 }} class=" py-6 sm:py-8 lg:py-12 relative z-20">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="mb-10 md:mb-16">
      <div class="flex flex-wrap w-full text-white py-6 px-10 relative mb-4">
        <div class="text-center relative z-10 w-full">
          KSS has been involved in some of the most influential campaigns in the middle east along with <a target="_blank" rel="noreferrer" href="https://whatif.ae/">What if Creative Studio</a> since
          the beginning of 2022. These projects included sound design of effects, <a target="_blank" rel="noreferrer" href="https://vimeo.com/788013794">composition</a> , field recording,
          <a target="_blank" rel="noreferrer" href="https://vimeo.com/788009574">voice over repair</a>
          and
          <a
            target="_blank"
            rel="noreferrer"
            href="https://soundcloud.com/nisham-olakara/unclean-audio?si=b4cbe5e1cdfd46f88b0a93f8b8608c51&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">treating</a> , mixing and mastering.
          Some of the projects KSS was and is included in are Expo 2022, Oxagon, Neom and more.
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-6">
      <div class="group h-36  sm:h-96  flex items-end rounded-lg overflow-hidden relative p-4">
        <iframe
          title=""
          src="https://player.vimeo.com/video/788003496?h=d4009a1361&title=0&byline=0&portrait=0"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen />
      </div>

      <div class="group h-36  sm:h-96  flex items-end rounded-lg overflow-hidden relative p-4">
        <iframe
          title=""
          src="https://player.vimeo.com/video/690981857?h=f2f356c183&title=0&byline=0&portrait=0"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen />
      </div>
    </div>

    <div class="mb-10 md:mb-16">
      <div class="flex flex-wrap w-full text-white py-6 px-10 relative mb-4">
        <div class="text-center relative z-10 w-full">
          In 2022, KSS has delivered more than 40 hours of high quality audio. Including an eight hour long
          <a
            href="https://soundcloud.com/nisham-olakara/3d-ambisonic-audiobook-the-rise-of-the-drake-ch-7-chase-gets-made-sc?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
            rel="noreferrer">audio book with ambisonic sound effects and music</a
          >.
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  a {
    color: gray;
  }
</style>
