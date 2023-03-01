<script>
  import Nav from "../routes/Navbar.svelte";
  import { fade } from "svelte/transition";

  let name, company, profession;

  let tel = "+31 (0) 6 44 01 73 66";
  let email = "kerberos.and.styx@gmail.com";

  function copyTel() {
    navigator.clipboard.writeText(tel);
  }

  function copyEmail() {
    navigator.clipboard.writeText(email);
  }
</script>

<div class="fixed inset-0 bg-black opacity-60 overflow-auto" />

<div class="fixed w-full z-10 h-full backdrop-blur-sm overflow-auto">
  <div in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="px-10">
    <Nav />
  </div>

  <section in:fade={{ delay: 300 }} out:fade={{ delay: 100 }} class="text-gray-600 body-font relative mt-20 ">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
      <div class="xl:w-1/3 md:w-1/2 p-4 mt-16 ml-24 -mr-52">
        <div class="p-6 rounded-lg ">
          <br /><br />
          <p class="mt-1 text-left text-white">If you’re curious and want to know more, collaborate or just have tea, leave a word!</p>

          <br />

          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs float-left ">
            Email <a class="text-indigo-500 leading-relaxed  blur-sm hover:blur-none ">kerberos.and.styx@gmail.com</a>

            <button class=" rounded-sm active:scale-90" on:click={copyEmail}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
            </button>
          </h2>
          <br />
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs float-left ">
            Tel
            <a id="tel" class="leading-relaxed blur-sm hover:blur-none ">+31 (0) 6 44 01 73 66</a>

            <button class=" rounded-sm active:scale-90 " on:click={copyTel}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
            </button>
          </h2>
          <br /><br /><br />
          <div class=" flex ">
            <a class="text-white " href="https://linktr.ee/Kerberosandstyx">
              <svg
                class="rounded-sm bg-gray-700 opacity-60 "
                height="24"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 711.6 500.3"
                style="enable-background:new 0 0 711.6 500.3;"
                xml:space="preserve">
                <style type="text/css">
                  .st0 {
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                    fill: #43e660;
                  }
                </style>
                <g id="layer1" transform="translate(-34.813623,-47.365765)" inkscape:groupmode="layer" inkscape:label="Layer 1">
                  <g id="g46" transform="matrix(0.26458333,0,0,0.26458333,-15.67531,43.64805)">
                    <g id="g18" transform="matrix(0.857143,0,0,0.857143,8,306)">
                      <path id="path993" class="st0" d="M1666.4,1043.3h236.4v531.3h-236.4V1043.3" />
                      <path
                        id="path991"
                        class="st0"
                        d="M1119.8,499.4h401.7l-286-270.7l157.6-160.6l272.1,278.3V-49.6h236.4v395.9l272-278.3
                   l157.6,160.6l-286,270.7H2447v223.9h-404.3l287.3,278.3l-157.6,156.9l-390.3-390.9l-390.3,390.9l-157.6-156.9l287.3-278.3h-404.2
                   V499.4H1119.8" />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <p class="text-white mx-2">linktree</p>
          </div>
        </div>
      </div>

      <div class="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
        <!-- <h2 class="float-lefttext-gray-900 text-lg mb-1 font-medium title-font">Leave a Message</h2> -->

        <div class="container">
          <form action="https://formsubmit.co/03c1e16980307ba5d7cbdc84a4094088" method="POST">
            <input type="hidden" name="_next" value="http://127.0.0.1:5173/#/ThankYou" />
            <input type="hidden" name="_subject" value={"Name: " + name + ", Company: " + company + ", Profession: " + profession} />
            <input type="hidden" name="_captcha" value="false" />
            <div class="relative mb-4">
              <label for="name" class="float-left leading-7 text-sm text-gray-600">Name</label>
              <input
                placeholder="Your name (optional)"
                type="name"
                id="name"
                name="name"
                bind:value={name}
                class="form-control w-full bg-black bg-opacity-30  rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="float-left leading-7 text-sm text-gray-600">Company</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="(optional)"
                      class="w-full text-white bg-black bg-opacity-30 rounded border 500 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                      class="w-full bg-black bg-opacity-30 rounded border 500 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                class="form-control w-full bg-black bg-opacity-30  rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

              <div class="relative mb-4">
                <label for="message" class="float-left leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="10"
                  required
                  id="message"
                  name="message"
                  class="form-control bg-black bg-opacity-30 w-full  rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
              </div>
              <button type="submit" class="text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg w-full active:scale-95">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  a {
    /* margin-right: 10px; */
  }

  h2,
  label {
    color: white;
  }

  textarea {
    resize: vertical; /* user can resize vertically, but width is fixed */
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white;
  }

  input,
  select,
  textarea {
    color: #ffffff;
  }

  textarea:focus,
  input:focus {
    color: #ffffff;
  }
</style>
