<script>
  import Nav from "../routes/Navbar.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="fixed inset-0 bg-black opacity-60 overflow-auto" />

<div class="fixed w-full z-10 h-full backdrop-blur-sm overflow-auto">
  <div in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="px-10">
    <Nav />
  </div>
  <section in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="text-gray-600 body-font ">
    <div class="container px-5 py-24 mx-auto mt-28">
      <p class="text-white text-left">
        La Semillas De La Tierra ‘La Semillas De La Tierra’ is a short film directed by <a href="https://geraldarkensteijn.com/">Gerard Arkensteijn</a> about a man trying to connect with his recently deceased
        father. Nisham was the sound designer and composer for the whole film. Recording the voice over, treating the audio, designing the SFX, composing the music, mixing and mastering was done within
        Kerberos.and.Styx.Studios. Except of course the audio he received along with the footage.
      </p>

      <br />

      <div class="flex flex-wrap -m-4 ">
        <div class="p-4 lg:w-1/2 md:w-full">
          <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
              title=""
              src="https://player.vimeo.com/video/787999282?h=a2e8522b45&title=0&byline=0&portrait=0"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen />
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>

          <!-- <h1 class="text-white">
            <a href="https://vimeo.com/787999282">La Semillas de la Tierra (TEASER)</a> from <a href="https://vimeo.com/user86296543">Nisham Olakara</a> on <a href="https://vimeo.com">Vimeo</a>.
          </h1> -->
        </div>
        <div class="p-4 lg:w-1/2 md:w-full">
          <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
              title=""
              src="https://player.vimeo.com/video/690982222?h=4f8710bf6c&title=0&byline=0&portrait=0"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen />
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>

          <!-- <h1 class="text-white">
            <a href="https://vimeo.com/690982222">Film Score for &quot;Las Semillas de la Tierra&quot;</a> from <a href="https://vimeo.com/kerberosandstyx">Nisham Olakara</a> on
            <a href="https://vimeo.com">Vimeo</a>.
          </h1> -->
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  a {
    color: gray;
  }
</style>
