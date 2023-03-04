<script>
  import { fade } from "svelte/transition";
</script>

<div class="flex h-screen">
  <div in:fade={{ delay: 300 }} class=" py-6 sm:py-8 lg:py-12 relative z-20 m-auto">
    <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
      <div class="grid sm:grid-cols-2 gap-8 m-2">
        <div class=" md:h-auto overflow-hidden ">
          <div style="max-width: 700px;">
            <div style="left: 0; width: 100%; height: 120px; position: relative;">
              <iframe
                title=""
                src="https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=333333/linkcol=333333/tracklist=false/artwork=small/track=3950534310/transparent=true/"
                style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"
                allowfullscreen />
            </div>
          </div>
        </div>

        <p class="text-white">
          Vortices was the first single that Kerberos.and.Styx first released among many of his creations. This single was followed by the EP in the same year. Vortices was dedicated to all the water
          in the world due to the inspiration and creative force that lies within it. Most of the tracks in the album were recorded, produced, mixed and mastered by Nisham in his studio in Amsterdam,
          Netherlands. His fascination for water was the place where he found comfort and inspiration to compose the album.
        </p>
      </div>

      <br />

      <div class="grid sm:grid-cols-2 gap-8 m-2">
        <div class=" md:h-auto overflow-hidden ">
          <div style="max-width: 700px;">
            <div style="left: 0; width: 100%; height: 241px; position: relative;">
              <iframe
                title=""
                src="https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=333333/artwork=small/transparent=true/"
                style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"
                allowfullscreen />
            </div>
          </div>
        </div>

        <p class="text-white">
          The album was composed using a number of field recordings, modular synthesisers, tape machines and synths. Creating an immersively, eerie and obscure sentiment representing the sounds of the
          deep waters. The track that got the most impressions were both versions of his generative music composition “The Color of Water”. Taking you on a watery nostalgia warping, whistling,
          warbling and reverberating through space.
        </p>
      </div>
    </div>
  </div>
</div>
