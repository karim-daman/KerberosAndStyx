<script>
  import Nav from "../routes/Navbar.svelte";
</script>

<div class="fixed inset-0 bg-black opacity-60  overflow-auto" />

<div class="fixed w-full z-10 h-full backdrop-blur-sm  overflow-auto">
  <div class="px-10">
    <Nav />
  </div>
  <section class="text-gray-600 body-font mt-40">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-justify xl:w-1/2 lg:w-3/4 w-full mx-auto ">
        <h1>404 Page Not Found.</h1>
      </div>
    </div>
  </section>
</div>
