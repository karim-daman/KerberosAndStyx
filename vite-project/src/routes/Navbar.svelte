<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { location } from "svelte-spa-router";

  let isReady = false;
  let isHome = $location == "/" ? true : false;

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
        <li><a href="#/"> <img class="" src={"/LOGO/Kerberos_and_Styx_Logo_Site.png"} width="450" height="auto" alt="logo" /> </a></li>
      </ul>
      <ul>
        <li><a href="#/" class="">Home</a></li>
        <li><a href="#/About" class="">About</a></li>
        <li><a href="#/Music" class="">Music</a></li>

        <li class="">
          <div class="dropdown">
            <button class="">Projects</button>
            <div class="dropdown-content">
              <a href="#/Film" class="block py-2 text-gray-800 float-left"> Film </a>
              <a href="#/Commercial" class="block py-2 text-gray-800 float-left"> Commercial </a>
            </div>
          </div>
        </li>

        <li><a href="#/Contact">Contact</a></li>
      </ul>
    </nav>
  {/if}
{:else}
  <nav out:fade={{ delay: 300 }} class=" m-6">
    <ul>
      <li><a href="#/"> <img class="" src={"/LOGO/Kerberos_and_Styx_Logo_Site.png"} width="450" height="auto" alt="logo" /> </a></li>
    </ul>
    <ul>
      <li class="hover:shadow-xl"><a href="#/">Home</a></li>
      <li class="hover:shadow-xl"><a href="#/About">About</a></li>
      <li class="hover:shadow-xl"><a href="#/Music">Music</a></li>

      <li class="">
        <div class="dropdown">
          <button class="">Projects</button>
          <div class="dropdown-content">
            <a href="#/Film" class="block py-2 text-gray-800 float-left"> Film </a>
            <a href="#/Commercial" class="block py-2 text-gray-800 float-left"> Commercial </a>
          </div>
        </div>
      </li>

      <li><a href="#/Contact">Contact</a></li>
    </ul>
  </nav>
{/if}

<style>
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
