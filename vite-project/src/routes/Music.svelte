<script>
  import { fade } from "svelte/transition";
</script>

<!--
  The outer <div class="flex min-h-[100dvh]"> is removed. Previously it
  was used to vertically center the embeds, but min-h on the container
  means it can grow to any height — so overflow-y on the inner div had
  nothing to trigger against and scrolling never worked.

  Content now flows at its natural height inside the scrollable layer
  from App.svelte. On desktop the embeds fit comfortably; on mobile they
  stack into a single column (~700–900px total) and the page scrolls
  normally. pb-20 clears the fixed video controls bar at the bottom.

  The in:fade transition is now on the outermost element.
-->
<div in:fade={{ delay: 300 }} class="py-4 sm:py-6 lg:py-8 pb-20 w-full">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    <!-- First release row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 m-2">
      <div class="w-full overflow-hidden order-1 sm:order-1">
        <div style="max-width: 700px; margin: 0 auto;">
          <div style="left: 0; width: 100%; height: 120px; position: relative;">
            <iframe
              title="Vortices Track"
              src="https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=3950534310/transparent=true/"
              style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"
              allowfullscreen
              loading="lazy" />
          </div>
        </div>
      </div>

      <div class="flex items-center order-2 sm:order-2">
        <p class="text-white text-sm sm:text-base">
          Vortices was the first single that Kerberos.and.Styx first released among many of his creations. This single was followed by the EP in the same year. Vortices was dedicated to all the water
          in the world due to the inspiration and creative force that lies within it. Most of the tracks in the album were recorded, produced, mixed and mastered by Nisham in his studio in Amsterdam,
          Netherlands. His fascination for water was the place where he found comfort and inspiration to compose the album.
        </p>
      </div>
    </div>

    <br />

    <!-- Second release row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 m-2">
      <div class="w-full overflow-hidden order-3 sm:order-1">
        <div style="max-width: 700px; margin: 0 auto;">
          <div style="left: 0; width: 100%; height: 241px; position: relative;">
            <iframe
              title="Album Player"
              src="https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=2ebd35/artwork=small/transparent=true/"
              style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"
              allowfullscreen
              loading="lazy" />
          </div>
        </div>
      </div>

      <div class="flex items-center order-4 sm:order-2">
        <p class="text-white text-sm sm:text-base">
          The album was composed using a number of field recordings, modular synthesisers, tape machines and synths. Creating an immersively, eerie and obscure sentiment representing the sounds of the
          deep waters. The track that got the most impressions were both versions of his generative music composition "The Color of Water". Taking you on a watery nostalgia warping, whistling,
          warbling and reverberating through space.
        </p>
      </div>
    </div>
  </div>
</div>
