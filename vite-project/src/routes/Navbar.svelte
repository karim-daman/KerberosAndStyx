<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { location } from "svelte-spa-router";

  let isReady = false;
  let isHome = $location == "/" ? true : false;

  let isMenuOpen = false;

  onMount(() => {
    const delayInMilliseconds = 3000;
    setTimeout(() => {
      isReady = true;
    }, delayInMilliseconds);
  });
</script>

{#if isHome}
  {#if isReady}
    <nav in:fade={{ delay: 300 }} class=" m-6">
      <ul>
        <li class="active:scale-95"><a href="#/"> <img class="" src={"/LOGO/Kerberos_and_Styx_Logo_Site.png"} width="450" height="auto" alt="logo" /> </a></li>
      </ul>
      <ul>
        <li class="active:scale-95"><a href="#/" class="">Home</a></li>
        <li class="active:scale-95"><a href="#/Music" class="">Music</a></li>
        <li>
          <div class="dropdown">
            <button class="">Projects</button>
            <div class="dropdown-content">
              <a href="#/Film" class="block py-2 text-gray-800 float-left active:scale-95"> Film </a>
              <a href="#/Commercial" class="block py-2 text-gray-800 float-left active:scale-95"> Commercial </a>
            </div>
          </div>
        </li>
        <li class="active:scale-95"><a href="#/About">About</a></li>
        <li class="active:scale-95"><a href="#/Contact" class="">Contact</a></li>
      </ul>
    </nav>
  {/if}
{:else}
  <nav out:fade={{ delay: 300 }} class=" m-6">
    <ul>
      <li class="active:scale-95"><a href="#/"> <img src={"/LOGO/Kerberos_and_Styx_Logo_Site.png"} width="450" height="auto" alt="logo" /> </a></li>
    </ul>
    <ul>
      <li class="active:scale-95"><a href="#/">Home</a></li>
      <li class="active:scale-95"><a href="#/Music">Music</a></li>
      <li>
        <div class="dropdown">
          <button class="">Projects</button>
          <div class="dropdown-content">
            <a href="#/Film" class="block py-2 text-gray-800 float-left active:scale-95"> Film </a>
            <a href="#/Commercial" class="block py-2 text-gray-800 float-left active:scale-95"> Commercial </a>
          </div>
        </div>
      </li>
      <li class="active:scale-95"><a href="#/About">About</a></li>
      <li class="active:scale-95"><a href="#/Contact">Contact</a></li>
    </ul>
  </nav>
{/if}

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 10px;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #b48a00;
  }

  /*  */

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 100px;
    z-index: 1;
  }

  .dropdown:hover {
    color: #b48a00;
  }

  .dropdown-content a {
    display: block;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
