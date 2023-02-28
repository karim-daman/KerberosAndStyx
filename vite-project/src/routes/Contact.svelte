<script>
  import Nav from "../routes/Navbar.svelte";
  import { fade } from "svelte/transition";

  let name, company, profession;
</script>

<div class="fixed inset-0 bg-black opacity-60" />

<div class="fixed w-full z-10 h-full backdrop-blur-sm">
  <div in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="px-10">
    <Nav />
  </div>

  <section in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="text-gray-600 body-font relative mt-20 ">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="xl:w-1/3 md:w-1/2 p-4 mt-28 ">
        <div class="p-6 rounded-lg ">
          <p class="mt-1 text-left">For quotes, inquiries, and questions that may arise please contact me.</p>
          <br /><br />
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs float-left ">
            EMAIL <a class="text-indigo-500 leading-relaxed  blur-sm hover:blur-none ">kerberos.and.styx@gmail.com</a>
          </h2>
          <br />
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs float-left ">Tel <a class="leading-relaxed blur-sm hover:blur-none ">+31 (0) 6 44 01 73 66</a></h2>
          <br /><br />

          <span class="inline-flex sm:ml-auto sm:mt-0  justify-center sm:justify-start ">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/kerberos.and.styx.studios" class="text-gray-500">
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                image-rendering="optimizeQuality"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                viewBox="17006.82 17511.1 8157.800000000003 8157.800000000003"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
                ><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="21085.72" x2="21085.72" y1="18249.39" y2="25150.62"
                  ><stop offset="0" stop-color="#00b2ff" /><stop offset="1" stop-color="#006aff" /></linearGradient
                ><circle cx="21085.72" cy="21590" fill="#fff" r="4078.9" /><path
                  d="M21085.72 18309.17c1811.95 0 3280.83 1468.88 3280.83 3280.83s-1468.88 3280.83-3280.83 3280.83-3280.83-1468.88-3280.83-3280.83 1468.88-3280.83 3280.83-3280.83z"
                  fill="url(#a)" /><path
                  d="M21512.01 24843.29v-2534.17h714.43l94.7-891.91h-809.13l1.2-446.44c0-232.63 22.1-357.22 356.24-357.22h446.68v-892.06h-714.59c-858.35 0-1160.42 432.65-1160.42 1160.34v535.45h-535.07v891.99h535.07v2498.09c208.45 41.53 423.95 63.47 644.6 63.47a3310.9 3310.9 0 0 0 426.29-27.54z"
                  fill="#fff"
                  fill-rule="nonzero" /></svg>
            </a>

            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/kerberos.and.styx.studios/" class=" text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 2499.899999999999 2500"
                ><defs
                  ><radialGradient id="a" cx="332.14" cy="2511.81" r="3263.54" gradientUnits="userSpaceOnUse"
                    ><stop offset=".09" stop-color="#fa8f21" /><stop offset=".78" stop-color="#d82d7e" /></radialGradient
                  ><radialGradient id="b" cx="1516.14" cy="2623.81" r="2572.12" gradientUnits="userSpaceOnUse"
                    ><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0" /><stop offset="1" stop-color="#8c3aaa" /></radialGradient
                  ></defs
                ><path
                  d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
                  fill="url(#a)" /><path
                  d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
                  fill="url(#b)" /></svg>
            </a>

            <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/4SKLQWzR24jqYsdac54g7J?si=w38lYKUVSuWZONgfPKXQkg&dl_branch=1&nd=1">
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2931 2931" height="14"
                ><style>
                  .st0 {
                    fill: #2ebd59;
                  }
                </style><path
                  class="st0"
                  d="M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6c-26.3 43.2-82.6 56.7-125.6 30.4-344.1-210.3-777.3-257.8-1287.4-141.3-49.2 11.3-98.2-19.5-109.4-68.7-11.3-49.2 19.4-98.2 68.7-109.4C1242.1 1697.1 1721 1752 2107.3 1988c43 26.5 56.7 82.6 30.3 125.6zm179.3-398.9c-33.1 53.8-103.5 70.6-157.2 37.6-393.8-242.1-994.4-312.2-1460.3-170.8-60.4 18.3-124.2-15.8-142.6-76.1-18.2-60.4 15.9-124.1 76.2-142.5 532.2-161.5 1193.9-83.3 1646.2 194.7 53.8 33.1 70.8 103.4 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5-72.4 22-149-18.9-170.9-91.3-21.9-72.4 18.9-149 91.4-171 517.7-157.1 1378.2-126.8 1922 196 65.1 38.7 86.5 122.8 47.9 187.8-38.5 65.2-122.8 86.7-187.8 48z" /></svg>
            </a>

            <a target="_blank" rel="noreferrer" href="https://music.apple.com/nl/artist/kerberos-and-styx/1589294408?l=en">
              <svg height="14" viewBox="-10.297 .021 960.248 228.95" fill="white" xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="m397.772 226.063v-154.575h-1.007l-62.179 154.575h-23.736l-62.327-154.575h-.996v154.575h-29.161v-210.027h37.023l66.757 167.374h1.144l66.608-167.362h37.172v210.027h-29.298zm190.541 0h-29.596v-25.905h-.71c-8.296 18.339-23.587 28.664-46.602 28.664-32.731 0-52.76-21.681-52.76-56.756v-99.124h30.878v93.01c0 23.285 10.873 35.797 32.16 35.797 22.317 0 35.753-15.717 35.753-39.585v-89.222h30.866v153.121zm84.622-155.892c35.02 0 57.75 19.805 58.756 48.034h-29.023c-1.717-14.836-12.44-24.154-29.733-24.154-16.732 0-27.88 8.288-27.88 20.525 0 9.605 6.867 16.141 23.153 19.93l24.446 5.678c30.74 7.28 42.46 19.507 42.46 41.623 0 27.955-25.59 47.164-61.035 47.164-37.595 0-60.199-18.774-63.048-47.885h30.591c2.861 16.004 13.585 23.868 32.457 23.868 18.575 0 30.02-7.864 30.02-20.376 0-9.902-5.574-15.718-22.02-19.507l-24.446-5.815c-28.588-6.697-42.745-20.674-42.745-42.928 0-27.371 23.45-46.157 58.047-46.157zm83.602-37.685c0-10.05 8.012-18.052 17.865-18.052 9.866 0 17.74 8.013 17.74 18.052 0 9.89-7.874 18.042-17.74 18.042-4.948-.041-9.163-1.821-12.645-5.34-3.482-3.517-5.218-7.752-5.208-12.702zm2.427 40.456h30.877v153.121h-30.877zm161.243 52.693c-3.147-16.302-15.153-29.26-35.307-29.26-23.873 0-39.598 20.227-39.598 53.116 0 33.633 15.862 53.14 39.884 53.14 18.998 0 31.45-10.624 35.02-28.39h29.745c-3.284 32.602-28.874 54.73-65.04 54.73-43.031 0-71.047-29.992-71.047-79.468 0-48.618 28.016-79.332 70.762-79.332 38.74 0 62.327 25.334 65.04 55.464h-29.448zm-796.282-89.108c-7.988 9.547-20.657 17.126-33.338 16.004-1.66-12.913 4.692-26.673 11.857-35.087 7.976-9.844 21.756-16.85 33.052-17.423 1.384 13.485-3.846 26.673-11.56 36.518zm11.433 18.534c7.142.56 27.753 2.793 40.949 22.666-1.099.847-24.457 14.561-24.182 43.386.274 34.457 29.675 45.927 29.95 46.213-.275.847-4.658 16.244-15.381 32.19-9.35 14.012-18.964 27.727-34.357 28.013-14.844.274-19.8-8.964-36.829-8.964-17.04 0-22.546 8.678-36.554 9.238-14.844.55-26.094-14.847-35.444-28.847-19.25-28.276-33.807-79.79-14.02-114.51 9.614-17.354 27.204-28.275 46.168-28.561 14.569-.263 28.04 9.81 36.829 9.81 8.8 0 24.457-11.756 42.871-10.646z"
                  fill-rule="evenodd" /></svg>
            </a>
          </span>
        </div>
      </div>

      <div class="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="float-lefttext-gray-900 text-lg mb-1 font-medium title-font">Leave a Message</h2>

        <div class="container">
          <form action="https://formsubmit.co/03c1e16980307ba5d7cbdc84a4094088" method="POST">
            <input type="hidden" name="_next" value="http://127.0.0.1:5173/#/ThankYou" />
            <input type="hidden" name="_subject" value={"Name: " + name + ", Company: " + company + ", Profession: " + profession} />
            <input type="hidden" name="_captcha" value="false" />
            <div class="relative mb-4">
              <label for="name" class="float-left leading-7 text-sm text-gray-600">Name</label>
              <input
                required
                placeholder="Your name (optional)"
                type="name"
                id="name"
                name="name"
                bind:value={name}
                class="form-control w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="float-left leading-7 text-sm text-gray-600">Company</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="(optional)"
                      class="w-full bg-opacity-50 rounded border 500 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="float-left leading-7 text-sm text-gray-600">Profession</label>
                    <input
                      type="Profession"
                      id="Profession"
                      name="Profession"
                      placeholder="(optional)"
                      class="w-full bg-opacity-50 rounded border 500 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
              </div>

              <label for="name" class="float-left leading-7 text-sm text-gray-600">Email*</label>
              <input
                required
                placeholder="Your name"
                type="name"
                id="name"
                name="name"
                class="form-control w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

              <div class="relative mb-4">
                <label for="message" class="float-left leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="10"
                  required
                  id="message"
                  name="message"
                  class="form-control w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
              </div>
              <button type="submit" class="text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg w-full">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  p {
    color: grey;
  }

  a {
    margin-right: 10px;
  }

  h2,
  label {
    color: white;
  }

  textarea {
    resize: vertical; /* user can resize vertically, but width is fixed */
  }
</style>
