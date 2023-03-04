<script>
  import { fade } from "svelte/transition";
</script>

<!-- <div out:fade in:fade class="fixed inset-0 w-full h-full bg-black opacity-60  overflow-auto z-10" /> -->

<div in:fade={{ delay: 300 }} class=" py-6 sm:py-8 lg:py-12 relative z-20">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="">
      <div class="flex flex-wrap w-full text-white py-6 px-10 relative mb-4">
        <div class="text-center relative z-10 w-full">
          La Semillas De La Tierra ‘La Semillas De La Tierra’ is a short film directed by <a target="_blank" rel="noreferrer" href="https://geraldarkensteijn.com/">Gerard Arkensteijn</a> about a man trying
          to connect with his recently deceased father. Nisham was the sound designer and composer for the whole film. Recording the voice over, treating the audio, designing the SFX, composing the music,
          mixing and mastering was done within Kerberos.and.Styx.Studios. Except of course the audio he received along with the footage.
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-6">
      <div class="group h-36 sm:h-96 flex items-end rounded-lg overflow-hidden relative p-4">
        <iframe
          class=" object-cover object-center absolute inset-0 "
          title=""
          src="https://player.vimeo.com/video/690982222?h=4f8710bf6c&title=0&byline=0&portrait=0"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen />
      </div>

      <div class="group h-36 sm:h-96  flex items-end rounded-lg overflow-hidden relative p-4">
        <iframe
          class=" object-cover object-center absolute inset-0 "
          title=""
          src="https://player.vimeo.com/video/787999282?h=a2e8522b45&title=0&byline=0&portrait=0"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen />
      </div>
    </div>
  </div>
</div>

<style>
  a {
    color: gray;
  }
</style>
