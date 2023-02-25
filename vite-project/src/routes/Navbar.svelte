<script>
  let isDropdownVisible = false;

  function toggleDropdown() {
    isDropdownVisible = !isDropdownVisible;
  }

  let open;
</script>

<nav class="">
  <ul>
    <li><a href="#/"> <img class="" src={"/LOGO/Kerberos_and_Styx_Logo_Site.png"} width="450" height="auto" alt="logo" /> </a></li>
  </ul>
  <ul>
    <li><a href="#/">Home</a></li>
    <li><a href="#/About">About</a></li>
    <li><a href="#/Music">Music</a></li>

    <li class="">
      <!-- <div class="relative inline-block text-left ">
        <button on:click={toggleDropdown}> Projects </button>
        <div class={`   ${isDropdownVisible ? "" : "hidden"}`}>
          <div class="dropdown-content absolute">
            <a href="#/Film" class="block py-2 text-gray-800"> Film </a>
            <a href="#/Commercial" class="block py-2 text-gray-800"> Commercial </a>
          </div>
        </div>
      </div> -->

      <div class="dropdown">
        <button class="hover:underline">Projects</button>
        <div class="dropdown-content">
          <a href="#/Film" class="block py-2 text-gray-800 float-left"> Film </a>
          <a href="#/Commercial" class="block py-2 text-gray-800 float-left"> Commercial </a>
        </div>
      </div>
    </li>

    <li><a href="#/Contact">Contact</a></li>
  </ul>
</nav>

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
    text-decoration: underline;
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
