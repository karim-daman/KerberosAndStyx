<script>
  import Nav from "../routes/Navbar.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="fixed inset-0  bg-black opacity-60" />

<div class="fixed w-full z-10 h-full backdrop-blur-sm">
  <div in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="px-10">
    <Nav />
  </div>

  <section in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto mt-28 ">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/2">
          <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
              title=""
              src="https://player.vimeo.com/video/690981857?h=f2f356c183&title=0&byline=0&portrait=0"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen />
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>

          <h1 class="text-white">
            <a href="https://vimeo.com/690981857">EXPO 2022 SFX by Kerberos.and.Styx</a> from <a href="https://vimeo.com/kerberosandstyx">Nisham Olakara</a> on <a href="https://vimeo.com">Vimeo</a>.
          </h1>
        </div>
        <div class="p-4 lg:w-1/2">
          <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
              title=""
              src="https://player.vimeo.com/video/788003496?h=d4009a1361&title=0&byline=0&portrait=0"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen />
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>

          <h1 class="text-white"><a href="https://vimeo.com/788003496">OXAGON</a> from <a href="https://vimeo.com/user86296543">Nisham Olakara</a> on <a href="https://vimeo.com">Vimeo</a>.</h1>
        </div>
      </div>
    </div>
  </section>
</div>
