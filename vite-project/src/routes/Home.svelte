<script>
  import { fade } from "svelte/transition";
  import Nav from "../routes/Navbar.svelte";
</script>

<div class="fixed inset-0   overflow-auto" />

<div class="fixed w-full z-10  overflow-auto">
  <div in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="px-10">
    <Nav />
  </div>
  <section in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="text-gray-600 body-font mt-40" />
</div>
