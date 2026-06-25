<script>
  import { onMount } from "svelte";
  import { location } from "svelte-spa-router";
  import { fade } from "svelte/transition";

  let navBarOpen = false;
  let dropDownOpen = false;
  let isReady = false;
  let innerWidth = 0;

  function toggleMenu() {
    navBarOpen = !navBarOpen;
  }

  function unselect() {
    navBarOpen = false;
  }

  function handleResize() {
    innerWidth = window.innerWidth;
  }

  onMount(() => {
    // Set initial width
    innerWidth = window.innerWidth;

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Initial load delay
    const delayInMilliseconds = 4000;
    setTimeout(() => {
      isReady = true;
    }, delayInMilliseconds);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

{#if isReady}
  <nav in:fade={{ delay: 300 }} class="relative z-50 w-full px-2 sm:px-4 py-2 sm:py-4 text-gray-700">
    <div class="flex flex-wrap items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center flex-shrink-0">
        <a href="#/">
          <img
            class="h-auto"
            src={innerWidth > 1000 ? "/LOGO/Kerberos_and_Styx_Logo_Site.png" : "/LOGO/Kerberos_and_Styx_Logo_short_Website.png"}
            width={innerWidth > 1000 ? "400" : innerWidth > 640 ? "150" : "100"}
            alt="logo" />
        </a>
      </div>

      <!-- Hamburger Menu Button -->
      <button
        class="md:hidden text-white hover:text-[#b48a22] focus:outline-none focus:ring-2 focus:ring-[#b48a22] rounded p-2"
        on:click={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={navBarOpen}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if navBarOpen}
            <!-- X icon -->
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          {:else}
            <!-- Hamburger icon -->
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>

      <!-- Navigation Menu -->
      <div
        class="transition-all duration-300 ease-in-out w-full md:w-auto {navBarOpen
          ? 'block max-h-screen opacity-100'
          : 'hidden max-h-0 opacity-0'} md:flex md:items-center md:max-h-screen md:opacity-100"
        id="menu">
        <ul class="pt-4 text-left text-sm sm:text-base md:flex md:justify-between md:pt-0 md:space-x-1 lg:space-x-2">
          <li>
            <a
              class="hover:text-[#b48a22] md:p-2 lg:p-4 py-2 px-2 block {$location === '/' ? 'text-[#b48a00]' : 'text-white'} active:scale-95 transition-colors duration-200"
              on:click={unselect}
              href="#/">
              Home
            </a>
          </li>
          <li>
            <a
              class="hover:text-[#b48a22] md:p-2 lg:p-4 py-2 px-2 block {$location === '/Music' ? 'text-[#b48a00]' : 'text-white'} active:scale-95 transition-colors duration-200"
              on:click={unselect}
              href="#/Music">
              Music
            </a>
          </li>
          <li>
            <a
              class="hover:text-[#b48a22] md:p-2 lg:p-4 py-2 px-2 block {$location === '/Projects' ? 'text-[#b48a00]' : 'text-white'} active:scale-95 transition-colors duration-200"
              on:click={unselect}
              href="#/Projects">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#/About"
              class="hover:text-[#b48a22] md:p-2 lg:p-4 py-2 px-2 block {$location === '/About' ? 'text-[#b48a00]' : 'text-white'} active:scale-95 transition-colors duration-200"
              on:click={unselect}>
              About
            </a>
          </li>
          <!-- <li>
            <a
              href="#/Contact"
              class="hover:text-[#b48a22] md:p-2 lg:p-4 py-2 px-2 block {$location === '/Contact' ? 'text-[#b48a00]' : 'text-white'} active:scale-95 transition-colors duration-200"
              on:click={unselect}>
              Contact
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
{/if}
