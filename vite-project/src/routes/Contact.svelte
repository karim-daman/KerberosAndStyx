<script>
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

<!--
  Same fix as About: the min-h-[100dvh] outer wrapper + inner overflow-y-auto
  combination prevented scrolling because the inner container could always
  grow to fit its content. Now content sits directly in the scrollable layer
  provided by App.svelte. On mobile (where the form stacks into a single
  column and becomes taller than the viewport) the layer scrolls as expected.
  pb-20 gives clearance above the fixed video controls bar.
-->
<div in:fade={{ delay: 300 }} class="py-4 sm:py-6 lg:py-8 pb-20 w-full">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
      <!-- Left column — contact info -->
      <div class="flex flex-col justify-center items-center sm:items-start">
        <div class="flex flex-col text-xs md:text-base justify-center w-full">
          <div class="lg:w-2/3">
            <p class="mt-1 text-white">If you're curious and want to know more, collaborate or just have tea, leave a word!</p>
          </div>

          <div class="lg:w-2/3 mt-4 space-y-3">
            <!-- Email -->
            <div class="leading-relaxed text-white flex items-center gap-2">
              <span class="whitespace-nowrap text-sm sm:text-base">Email</span>
              <code class="blur-sm hover:blur-none text-blue-800 truncate text-xs sm:text-sm">
                <a href="mailto:kerberos.and.styx@gmail.com">kerberos.and.styx@gmail.com</a>
              </code>
              <button class="rounded-sm w-6 h-6 flex items-center justify-center active:scale-95 flex-shrink-0" on:click={copyEmail} aria-label="Copy email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                </svg>
              </button>
            </div>

            <!-- Tel -->
            <div class="leading-relaxed text-white flex items-center gap-2">
              <span class="whitespace-nowrap text-sm sm:text-base">Tel</span>
              <code class="blur-sm hover:blur-none text-blue-800 truncate text-xs sm:text-sm">+31 (0) 6 44 01 73 66</code>
              <button class="rounded-sm w-6 h-6 flex items-center justify-center active:scale-95 flex-shrink-0" on:click={copyTel} aria-label="Copy phone number">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                </svg>
              </button>
            </div>

            <!-- Linktree -->
            <div class="flex items-center pt-1">
              <a target="_blank" rel="noreferrer" class="text-white flex-shrink-0" href="https://linktr.ee/Kerberosandstyx">
                <svg
                  class="rounded-sm bg-gray-700 opacity-60"
                  height="20"
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
              <p class="text-white mx-2 text-sm">linktree</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right column — contact form -->
      <form action="https://formsubmit.co/03c1e16980307ba5d7cbdc84a4094088" method="POST" class="flex items-center">
        <input type="hidden" name="_next" value="https://www.kerberosandstyx.com/#/ThankYou" />
        <input type="hidden" name="_subject" value={"Name: " + name + ", Company: " + company + ", Profession: " + profession} />
        <input type="hidden" name="_captcha" value="false" />

        <div class="flex flex-col w-full space-y-3">
          <div class="w-full">
            <label for="name" class="leading-7 text-sm text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              class="w-full bg-black opacity-80 bg-opacity-90 rounded focus:ring-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <div class="flex flex-col sm:flex-row gap-2">
            <div class="w-full sm:w-1/2">
              <label for="profession" class="leading-7 text-sm text-white">Profession</label>
              <input
                type="text"
                id="profession"
                name="profession"
                placeholder="(Optional)"
                class="w-full bg-black opacity-80 bg-opacity-90 rounded focus:ring-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div class="w-full sm:w-1/2">
              <label for="company" class="leading-7 text-sm text-white">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="(Optional)"
                class="w-full bg-black opacity-80 bg-opacity-90 rounded focus:ring-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>

          <div class="w-full">
            <label for="Email" class="leading-7 text-sm text-white">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Your Email"
              class="w-full bg-black opacity-80 bg-opacity-90 rounded focus:ring-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <div class="w-full">
            <label for="message" class="leading-7 text-sm text-white">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message.."
              class="w-full bg-black opacity-80 bg-opacity-90 rounded focus:ring-2 h-24 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
          </div>

          <div class="w-full">
            <button type="submit" class="w-full text-white bg-green-800 active:scale-[98%] border-0 py-2 px-8 focus:outline-none active:bg-green-700 rounded text-lg"> Send </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  ::placeholder {
    color: white;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: white;
  }

  ::-ms-input-placeholder {
    color: white;
  }
</style>
