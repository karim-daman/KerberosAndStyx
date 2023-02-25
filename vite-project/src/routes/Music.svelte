<!-- Submerge: https://kerberosandstyx.bandcamp.com/track/submerge 
Noisefloor: https://kerberosandstyx.bandcamp.com/track/noisefloor 
The Triangle: https://kerberosandstyx.bandcamp.com/track/the-triangle-2
Vortices: https://kerberosandstyx.bandcamp.com/track/vortices-2 
The Color of Water (Underwater Version) https://kerberosandstyx.bandcamp.com/track/the-color-of-water-underwater-version
Plastic:https://kerberosandstyx.bandcamp.com/track/plastic 
The Cooler of Water: https://kerberosandstyx.bandcamp.com/track/the-color-of-water 
Vortices(Single):https://kerberosandstyx.bandcamp.com/track/vortices -->
<script>
  import Nav from "../routes/Navbar.svelte";

  let iframeUrl_1 = "https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=e99708/tracklist=false/track=2316725636/transparent=true/";
  let iframeUrl_2 = "https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=e99708/tracklist=false/track=3882548653/transparent=true/";
  let iframeUrl_3 = "https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=e99708/tracklist=false/track=3211549944/transparent=true/";
  let iframeUrl_4 = "https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=e99708/tracklist=false/track=2180957520/transparent=true/";
  let iframeUrl_5 = "https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=e99708/tracklist=false/track=3008122936/transparent=true/";
  let iframeUrl_6 = "https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=e99708/tracklist=false/track=986333134/transparent=true/";
  let iframeUrl_7 = "https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=333333/linkcol=e99708/tracklist=false/track=2970280733/transparent=true/";
  let iframeUrl_8 = "https://bandcamp.com/EmbeddedPlayer/track=3950534310/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/";
</script>

<div class="fixed inset-0 bg-black opacity-60 overflow-auto" />

<div class="fixed w-full z-10 ">
  <div class="px-10">
    <Nav />
  </div>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/2">
          <!--  -->
          <iframe
            style="border: 0; width: 600px; height: 400px;"
            src="https://bandcamp.com/EmbeddedPlayer/album=876119262/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
            seamless><a href="https://kerberosandstyx.bandcamp.com/album/vortices-ep">Vortices (EP) by Kerberos.and.Styx</a></iframe>
        </div>
        <div class="p-4 lg:w-1/2">
          <!--  -->
          <iframe
            style="border: 0; width: 100%; height: 120px;"
            src="https://bandcamp.com/EmbeddedPlayer/track=3950534310/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
            seamless><a href="https://kerberosandstyx.bandcamp.com/track/vortices">Vortices by kerberos.and.styx</a></iframe>
        </div>
      </div>
    </div>
  </section>
</div>
