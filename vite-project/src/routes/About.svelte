<script>
  import { fade } from "svelte/transition";
</script>

<!--
  The outer min-h-[100dvh] wrapper and inner overflow-y-auto are removed.
  Previously, min-h allowed the container to grow with its content, which
  prevented the inner overflow-y-auto from ever activating — so scrolling
  never happened. Content now flows at its natural height inside the
  scrollable layer provided by App.svelte, which handles all overflow.
  pb-20 gives clearance above the fixed video controls bar.
-->
<div in:fade={{ delay: 300 }} class="py-4 sm:py-6 lg:py-8 px-4 pb-20">
  <div class="max-w-screen-lg mx-auto">
    <div class="text-white">
      <h1 class="text-2xl sm:text-3xl font-bold mb-6">About</h1>

      <div class="space-y-6">
        <p class="text-sm sm:text-base leading-relaxed">
          Kerberos.and.Styx.Studios is a sound design and music production studio where experimentation is the key. Experimentation into the unknown roots for creativity and space for evolution.
          Kerberos.and.Styx.Studios (KSS) was founded and is operated by musician and sound designer Nisham Olakara. KSS specialises in original music and sound design for sonic branding,
          documentaries, film and art installations. KSS also designs custom sounds for companies that design and build software, apps or devices. That requires sound or music to enhance the user
          experience. If you're curious to know more, collaborate or just have tea, please visit the <a href="#/Contact">contact page</a> to leave a word.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  a {
    color: gray;
  }
</style>
