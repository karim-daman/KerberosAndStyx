<script>
  import Nav from "../routes/Navbar.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="fixed inset-0 bg-black opacity-60 overflow-auto" />

<div class="fixed w-full z-10 h-full backdrop-blur-sm  overflow-auto">
  <div in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="px-10">
    <Nav />
  </div>

  <section in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="text-gray-600 body-font sm:overflow-auto">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/2 ">
          <iframe
            title=""
            style="border: 0; width: 100%; height: 120px;"
            src="https://bandcamp.com/EmbeddedPlayer/track=3950534310/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
            seamless><a href="https://kerberosandstyx.bandcamp.com/track/vortices">Vortices by kerberos.and.styx</a></iframe>
        </div>
        <div class="p-4 lg:w-1/2">
          <p class="text-white ">
            Vortices was the first single that Kerberos.and.Styx first released among many of his creations. This single was followed by the EP in the same year. Vortices was dedicated to all the
            water in the world due to the inspiration and creative force that lies within it. Most of the tracks in the album were recorded, produced, mixed and mastered by Nisham in his studio in
            Amsterdam, Netherlands. His fascination for water was the place where he found comfort and inspiration to compose the album.
          </p>
        </div>
      </div>
      <br />
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/2 ">
          <iframe
            id="my-iframe"
            title="Vortices (EP) by Kerberos.and.Styx"
            style="border: 0; width: 600px; height: 300px;"
            src="https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=2ebd35/artwork=small/transparent=true/"
            seamless>
            <a href="https://kerberosandstyx.bandcamp.com/album/vortices-ep">Vortices (EP) by Kerberos.and.Styx</a>
          </iframe>
        </div>
        <div class="p-4 lg:w-1/2">
          <p class="text-white ">
            The album was composed using a number of field recordings, modular synthesisers, tape machines and synths. Creating an immersively, eerie and obscure sentiment representing the sounds of
            the deep waters. The track that got the most impressions were both versions of his generative music composition “The Color of Water”. Taking you on a watery nostalgia warping, whistling,
            warbling and reverberating through space.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  p {
    text-align: left;
  }
</style>
