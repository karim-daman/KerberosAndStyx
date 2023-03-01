<script>
  import Nav from "../routes/Navbar.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="fixed inset-0  bg-black opacity-60 overflow-auto" />

<div class="fixed w-full z-10 h-full backdrop-blur-sm overflow-auto">
  <div in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="px-10">
    <Nav />
  </div>

  <section in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="text-gray-600 body-font mt-40">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center xl:w-3/4 lg:w-3/4 w-full mx-auto ">
        <p class="leading-loose">
          Kerberos.and.Styx.Studios is a sound design and music production studio where experimentation is the key. Experimentation into the unknown roots for creativity and space for evolution.
          Kerberos.and.Styx.Studios (KSS) was founded and is operated by musician and sound designer Nisham Olakara. KSS specialises in original music and sound design for sonic branding,
          documentaries, film and art installations. KSS also designs custom sounds for companies that design and build software, apps or devices. That requires sound or music to enhance the user
          experience. If you’re curious to know more, collaborate or just have tea, please visit the <a href="#/Contact">contact page</a> to leave a word.
        </p>
      </div>
    </div>
  </section>
</div>

<style>
  p {
    color: white;
  }
  a {
    color: gray;
  }
</style>
