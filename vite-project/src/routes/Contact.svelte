<script>
  import Nav from "../routes/Navbar.svelte";
</script>

<div class="fixed inset-0  bg-black opacity-60" />

<div class="fixed w-full z-10 ">
  <div class="px-10">
    <Nav />
  </div>

  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="float-lefttext-gray-900 text-lg mb-1 font-medium title-font">Leave a Message</h2>

        <div class="relative mb-4">
          <label for="email" class="float-left leading-7 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div class="relative mb-4">
          <label for="message" class="float-left leading-7 text-sm text-gray-600">Message</label>
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
        <button class="text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Send</button>
        <!-- <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> -->
      </div>
    </div>
  </section>
</div>

<style>
  p {
    color: grey;
  }

  h2,
  label {
    color: white;
  }
</style>
