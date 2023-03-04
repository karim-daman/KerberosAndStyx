<script>
  import { onMount } from "svelte";
  import { location } from "svelte-spa-router";
  import { fade } from "svelte/transition";
  let navBarOpen = true;
  let dropDownOpen = false;
  let size = "";

  function toggleNavbar() {
    navBarOpen = !navBarOpen;
  }

  function toggleDropDown() {
    dropDownOpen = !dropDownOpen;
  }

  function unselect() {
    // dropDownOpen = false;
    navBarOpen = true;
  }

  let isReady = false;
  // let isHome = $location == "/" ? true : false;

  onMount(() => {
    const delayInMilliseconds = 3000;
    setTimeout(() => {
      isReady = true;
    }, delayInMilliseconds);
  });
</script>

{#if isReady}
  <nav in:fade={{ delay: 300 }} class=" flex flex-wrap items-center justify-between w-full py-4md:py-0 px-4 text-lg text-gray-700 relative z-50 pt-4">
    <div>
      <a href="#/">
        <img class="h-auto" src={innerWidth > 1000 ? "/LOGO/Kerberos_and_Styx_Logo_Site.png" : "/LOGO/Kerberos_and_Styx_Logo_short_Website.png"} width={innerWidth > 1000 ? "400" : "100"} alt="logo" />
      </a>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" on:click={toggleNavbar} class="h-6 w-6 cursor-pointer md:hidden block text-white" fill="white" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>

    <div class=" transition ease-out duration-100 {navBarOpen ? 'hidden' : 'block'}  w-full md:flex md:items-center md:w-auto " id="menu">
      <ul class="text-left pt-4 text-base  md:flex md:justify-between md:pt-0">
        <li class="">
          <a class="hover:text-[#b48a22] md:p-4 py-2 block {$location == '/' ? 'text-[#b48a00]' : 'text-white'} active:scale-95 " on:click={unselect} href="#/">Home</a>
        </li>
        <li class="">
          <a class="hover:text-[#b48a22] md:p-4 py-2 block {$location == '/Music' ? 'text-[#b48a00]' : 'text-white'} active:scale-95 " on:click={unselect} href="#/Music">Music</a>
        </li>

        <li class="">
          <div class="hover:text-[#b48a22] relative inline-block ">
            <button class="md:p-4 py-2  active:scale-95 active: text-white flex " on:click={toggleDropDown}
              >Projects

              {#if dropDownOpen}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 pt-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 pt-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              {/if}
            </button>
            <div class="absolute {dropDownOpen ? 'block' : 'hidden'}  rounded-md  {innerWidth > 760 ? '' : 'ml-32 -mt-10'}    ">
              <a href="#/Film" class=" hover:text-[#b48a22] block px-4 py-1  {$location == '/Film' ? 'text-[#b48a00]' : 'text-white'} " on:click={unselect}>Film</a>
              <a href="#/Commercial" class=" hover:text-[#b48a22] block px-4 py-1  {$location == '/Commercial' ? 'text-[#b48a00]' : 'text-white'} " on:click={unselect}>Commercial</a>
            </div>
          </div>
        </li>

        <!-- <li>
        <div class="dropdown">
          <button class="" on:click={toggleDropDown}>Projects</button>
          <div class="dropdown-content">
            <a href="#/Film" class="block py-2 text-gray-800 float-left active:scale-95"> Film </a>
            <a href="#/Commercial" class="block py-2 text-gray-800 float-left active:scale-95"> Commercial </a>
          </div>
        </div>
      </li> -->

        <li class="">
          <a href="#/About" class=" hover:text-[#b48a22] md:p-4 py-2 block {$location == '/About' ? 'text-[#b48a00]' : 'text-white'} active:scale-95 " on:click={unselect}>About</a>
        </li>
        <li class="">
          <a href="#/Contact" class=" hover:text-[#b48a22] md:p-4 py-2 block {$location == '/Contact' ? 'text-[#b48a00]' : 'text-white'} active:scale-95 " on:click={unselect}>Contact</a>
        </li>
      </ul>
    </div>
  </nav>
{/if}

<style>
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
