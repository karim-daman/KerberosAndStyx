<script>
  import Nav from "../routes/Navbar.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="fixed inset-0 bg-black opacity-60 overflow-auto" />

<div class="fixed w-full z-10 h-full backdrop-blur-sm">
  <div in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="px-10">
    <Nav />
  </div>

  <section in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/2 ">
          <iframe
            id="my-iframe"
            title="Vortices (EP) by Kerberos.and.Styx"
            style="border: 0; width: 600px; height: 400px;"
            src="https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=2ebd35/artwork=small/transparent=true/"
            seamless>
            <a href="https://kerberosandstyx.bandcamp.com/album/vortices-ep">Vortices (EP) by Kerberos.and.Styx</a>
          </iframe>
        </div>
        <div class="p-4 lg:w-1/2">
          <iframe
            title=""
            style="border: 0; width: 100%; height: 120px;"
            src="https://bandcamp.com/EmbeddedPlayer/track=3950534310/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
            seamless><a href="https://kerberosandstyx.bandcamp.com/track/vortices">Vortices by kerberos.and.styx</a></iframe>
        </div>
      </div>
    </div>
  </section>
</div>
