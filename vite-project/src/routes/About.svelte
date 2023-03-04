<script>
  import { fade } from "svelte/transition";
</script>

<!-- <div in:fade out:fade class="fixed inset-0 w-full h-full bg-black opacity-60 overflow-auto z-10" /> -->

<section in:fade={{ delay: 300 }} class="text-white body-font relative z-20 ">
  <div class="container mx-auto flex flex-col px-5 justify-center items-center  ">
    <div class="w-full md:w-2/3 flex flex-col items-center text-center mt-[20%] ">
      <p class="leading-loose m-auto">
        Kerberos.and.Styx.Studios is a sound design and music production studio where experimentation is the key. Experimentation into the unknown roots for creativity and space for evolution.
        Kerberos.and.Styx.Studios (KSS) was founded and is operated by musician and sound designer Nisham Olakara. KSS specialises in original music and sound design for sonic branding, documentaries,
        film and art installations. KSS also designs custom sounds for companies that design and build software, apps or devices. That requires sound or music to enhance the user experience. If you’re
        curious to know more, collaborate or just have tea, please visit the <a href="#/Contact">contact page</a> to leave a word.
      </p>
    </div>
  </div>
</section>

<style>
  a {
    color: gray;
  }
</style>
