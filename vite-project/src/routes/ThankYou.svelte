<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { push } from "svelte-spa-router";
  import Nav from "../routes/Navbar.svelte";

  let delayInMilliseconds = 30000;
  onMount(() => {
    setTimeout(() => {
      push("/");
    }, delayInMilliseconds);
  });
</script>

<div class="fixed inset-0  bg-black opacity-60 overflow-auto" />

<div class="fixed w-full z-10  overflow-auto">
  <div in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="px-10">
    <Nav />
  </div>
  <section in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="text-gray-600 body-font mt-40">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-justify xl:w-1/2 lg:w-3/4 w-full mx-auto ">
        <h1>Thank you for reaching out!</h1>
        <p>Your message has been delivered.</p>
        <p>Redirecting shortly.</p>
      </div>
    </div>
  </section>
</div>

<style>
  p {
    color: white;
  }
  a {
    color: lightskyblue;
  }
</style>
