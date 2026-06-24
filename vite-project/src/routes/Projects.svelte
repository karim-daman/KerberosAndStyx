<script>
  import { fade } from "svelte/transition";

  // Initialize expanded state for descriptions
  let expandedDescriptions = {};

  const filmVideos = [
    {
      title: "iHostage",
      src: "https://www.youtube.com/embed/Dhg-3ME2L6M?si=8x08TCEUDRCrTQ4R",
      link: "https://youtu.be/Dhg-3ME2L6M?si=gHJDu0IFRKrQm1n4",
      description:
        "A study in high-tension cinematic suspense, the audio post-production for iHostage relies on a hyper-focused, tactile sonic atmosphere and pristine vocal clarity. The dialogue editing is engineered to isolate and enhance the raw emotional nuances of the performances, ensuring that every breath, hesitation, and whisper carries direct narrative weight. Complementing the voice track, the sound design rejects generic cinematic effects in favor of custom-built environmental textures and tension-building room tones. By stripping away acoustic clutter and carving out precise frequency pockets for both dialogue and atmosphere, the final mix drives the film's claustrophobic pacing and maintains a visceral state of unease.",
    },
    {
      title: "Am I Hawaiian Enough",
      src: "https://player.vimeo.com/video/960160804?h=0076f29c45",
      link: "https://vimeo.com/960160804?fl=ip&fe=ec",
      description:
        "Accolades: Official Selection: Nifty Film Festival (Opening Night Screening) | Winner: Kathy Reichgerdt Inspiration Award\n\nA poignant exploration of identity and the cultural dissolution caused by colonialism, the sonic identity for Am I Hawaiian Enough demands a delicate equilibrium between minimalist musical composition and raw, hyper-realistic sound design. The score is engineered to carry the heavy, generational emotional weight of the narrative, while the post-production audio focuses on absolute environmental authenticity. Every acoustic element from the organic texture of the background room tones to the degraded, low-fidelity treatment of the phone call recordings was meticulously processed to strip away digital artificiality. By prioritizing this level of sonic realism, the audio design anchors the viewer directly within the intimacy of the protagonist's perspective.",
    },
    {
      title: "Thirds",
      src: "https://player.vimeo.com/video/1111211519?h=fe42e08525",
      link: "https://vimeo.com/1111211519?fl=ip&fe=ec",
      description:
        "A striking audio-visual collaboration, the sonic framework for thirds serves as a fluid dialogue between experimental music composition and atmospheric sound design. Developed to complement Jonathan Pieterse's distinct visual pacing, the score translates the creative identity of artist SLUR into an immersive, multi-layered texture. The arrangement balances raw acoustic elements with precisely sculpted electronic motifs, carving out specific spatial dimensions within the mix. By prioritizing sonic contrast and seamless transitions, the final audio design drives the visual narrative's momentum, anchoring the project in a cohesive and avant-garde aesthetic.",
    },
    {
      title: "Monarch - La Semillas de la Tierra",
      src: "https://player.vimeo.com/video/787999282?h=a2e8522b45",
      link: "https://vimeo.com/787999282?fl=pl&fe=sh",
      description:
        "A profound cinematic exploration of grief and reconciliation, Monarch - Las Semillas de la Tierra follows a son's intimate journey to connect with his recently deceased father. To ground this delicate narrative, the entire audio architecture—from tracking the original voice-over and designing custom environmental textures to composing the score and executing the final master—was built with absolute narrative continuity. The musical arrangements employ a minimalist, emotionally resonant palette to navigate the quiet complexities of loss, while the post-production audio treats and enhances the location dialogue to maintain a raw, unpolished authenticity. By sculpting precise spatial and frequency dimensions for every sonic element, the final mix establishes an immersive, unified auditory environment that subtly deepens the film's poignant emotional arc.",
    },
    {
      title: "La Semillas De La Tierra",
      src: "https://player.vimeo.com/video/690982222?h=4f8710bf6c&title=0&byline=0&portrait=0",
      link: "https://vimeo.com/690982222",
      description: "Short film about a man trying to connect with his recently deceased father. Sound design, composition, mixing and mastering by Nisham.",
    },
  ];

  const commercialVideos = [
    {
      title: "Creative NL",
      src: "https://player.vimeo.com/video/1164640631?h=aa8c3c7bb0",
      link: "https://vimeo.com/1164640631",
      description:
        "A sleek, forward-facing corporate campaign representing the global footprint of the Dutch creative sector, the audio identity for CreativeNL blends high-energy pacing with immersive modern sound texturing. Engineered to amplify the brand's themes of cross-border innovation, sustainability, and collaborative design, the sound design rejects standard commercial stock formulas in favor of sharp electronic accents and highly clean tonal transitions. By accentuating the kinetic motion of the visual edit and establishing a high-end, contemporary sonic layer, the final audio architecture underscores the premium, avant-garde spirit of the CreativeNL platform without distracting from its central narrative.",
    },
    {
      title: "EXPO 2022",
      src: "https://player.vimeo.com/video/690981857?h=f2f356c183",
      link: "https://vimeo.com/690981857?fl=pl&fe=sh",
      description:
        "A large-scale installation engineered for a panoramic environment, the audio architecture for Expo 2022 translates a massive, wrapping visual canvas into a cohesive sonic reality. Handling the end-to-end audio pipeline including bespoke sound design, precise mixing, and final mastering. The soundscape is sculpted to match the unique physical scale of the exhibition. By mapping wide-angle directional transitions and establishing a deep, grounding acoustic foundation, the audio design seamlessly bridges the viewer's peripheral vision, ensuring a profound sense of scale, environmental immersion, and structural presence.",
    },
    {
      title: "Oxagon - Neom",
      src: "https://player.vimeo.com/video/788003496?badge=0&autopause=0&player_id=0&app_id=58479",
      link: "https://vimeo.com/788003496?share=copy&fl=cl&fe=ci",
      description:
        "A high-profile commercial showcase for a futuristic cognitive city, the audio architecture for Oxagon - Neom demands a sophisticated, high-tech aesthetic that mirrors cutting-edge industrial innovation. Handling the complete audio post-production pipeline, including intricate SFX design, clinical mixing, and final mastering—the soundscape translates themes of clean energy, advanced robotics, and automated logistics into a sharp, kinetic auditory reality. By balancing precise mechanical transients with deep, resonant sub-frequencies, the final mix establishes a premium, forward-looking sonic signature that underscores the massive scale and technological ambition of the Neom vision.",
    },
    {
      title: "MOHRE (Ministry of Human Resources and Emiratisation — UAE)",
      src: "https://player.vimeo.com/video/932435044?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      link: "https://vimeo.com/932435044?fl=pl&fe=sh",
      description:
        "Commissioned for a major governmental campaign, the audio architecture for MOHRE bridges large-scale institutional storytelling with intimate human warmth. Moving away from sterile corporate audio formulas, the project's sonic foundation is anchored by custom, organic recordings, specifically utilizing the delicate texture of a natural vocal hum. This human-centric acoustic element is precisely treated, layered, and mixed with polished cinematic soundscapes and environmental SFX. The final mix drives the narrative's pacing, establishing a profound sense of community, national progress, and authentic human connection that perfectly complements the premium weight of the ministry's vision.",
    },
  ];

  // Initialize all descriptions as collapsed
  [...filmVideos, ...commercialVideos].forEach((video) => {
    expandedDescriptions[video.title] = false;
  });

  function toggleDescription(title) {
    expandedDescriptions[title] = !expandedDescriptions[title];
    expandedDescriptions = { ...expandedDescriptions };
  }
</script>

<!--
  h-full fills the scrollable content layer in App.svelte exactly
  (viewport height minus navbar height). The flex-col layout then lets
  the header and footer stay fixed while #projects scrolls internally.
  z-20 and relative are removed — the parent content layer in App.svelte
  already establishes the correct stacking context.
-->
<div in:fade={{ delay: 300 }} class="h-full flex flex-col">
  <!-- Header — pinned at the top, does not scroll -->
  <div class="flex-shrink-0 py-4 sm:py-6 px-4">
    <div class="max-w-screen-2xl px-2 sm:px-4 md:px-8 mx-auto">
      <div class="flex flex-wrap w-full text-white relative">
        <div class="text-center relative z-10 w-full text-xs sm:text-sm md:text-base">
          KSS has been involved in some of the most influential campaigns in the middle east along with <a target="_blank" rel="noreferrer" href="https://whatif.ae/">What if Creative Studio</a>
          since the beginning of 2022. These projects included sound design of effects, <a target="_blank" rel="noreferrer" href="https://vimeo.com/788013794">composition</a>, field recording,
          <a target="_blank" rel="noreferrer" href="https://vimeo.com/788009574">voice over repair</a>
          and
          <a
            target="_blank"
            rel="noreferrer"
            href="https://soundcloud.com/nisham-olakara/unclean-audio?si=b4cbe5e1cdfd46f88b0a93f8b8608c51&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">treating</a
          >, mixing and mastering. Some of the projects KSS was and is included in are Expo 2022, Oxagon, Neom and more.
        </div>
      </div>
    </div>
  </div>

  <!--
    Scrollable video grid.
    flex-1 min-h-0 is the key combination: flex-1 makes this div grow to
    fill all remaining height inside the flex-col parent, and min-h-0
    overrides the browser default min-height:auto that would prevent it
    from shrinking below its content size (which would break scrolling).
  -->
  <div id="projects" class="flex-1 overflow-y-auto overflow-x-hidden px-2 sm:px-4 md:px-8 min-h-0">
    <div class="max-w-screen-2xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pb-20">
        <!-- Film column -->
        <div>
          <h2 class="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sticky top-0 bg-black bg-opacity-50 backdrop-blur-sm py-2 z-10">Film</h2>

          <div class="space-y-6 sm:space-y-8">
            {#each filmVideos as video}
              <div class="flex flex-col">
                <h3 class="text-white text-base sm:text-lg font-semibold mb-2">{video.title}</h3>

                <div class="relative mb-2 sm:mb-3">
                  <div class="text-gray-400 text-xs sm:text-sm overflow-hidden transition-all duration-300" style="max-height: {expandedDescriptions[video.title] ? '24rem' : '5rem'}">
                    <p class="whitespace-pre-line">{video.description}</p>
                  </div>
                  {#if video.description.length > 150}
                    <button class="text-gray-500 text-xs hover:text-gray-300 mt-1 focus:outline-none" on:click={() => toggleDescription(video.title)}>
                      {expandedDescriptions[video.title] ? "Show less ▲" : "Read more ▼"}
                    </button>
                  {/if}
                </div>

                <a href={video.link} target="_blank" rel="noreferrer" class="text-gray-500 text-xs sm:text-sm hover:text-gray-300 mb-2 sm:mb-3 inline-block">
                  {video.src.includes("youtube") ? "Watch on YouTube →" : "Watch on Vimeo →"}
                </a>

                <div class="w-full rounded-lg overflow-hidden relative" style="padding-bottom: 56.25%;">
                  <iframe class="absolute inset-0 w-full h-full" title={video.title} src={video.src} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Commercial column -->
        <div>
          <h2 class="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sticky top-0 bg-black bg-opacity-50 backdrop-blur-sm py-2 z-10">Commercial</h2>

          <div class="space-y-6 sm:space-y-8">
            {#each commercialVideos as video}
              <div class="flex flex-col">
                <h3 class="text-white text-base sm:text-lg font-semibold mb-2">{video.title}</h3>

                <div class="relative mb-2 sm:mb-3">
                  <div class="text-gray-400 text-xs sm:text-sm overflow-hidden transition-all duration-300" style="max-height: {expandedDescriptions[video.title] ? '24rem' : '5rem'}">
                    <p class="whitespace-pre-line">{video.description}</p>
                  </div>
                  {#if video.description.length > 150}
                    <button class="text-gray-500 text-xs hover:text-gray-300 mt-1 focus:outline-none" on:click={() => toggleDescription(video.title)}>
                      {expandedDescriptions[video.title] ? "Show less ▲" : "Read more ▼"}
                    </button>
                  {/if}
                </div>

                <a href={video.link} target="_blank" rel="noreferrer" class="text-gray-500 text-xs sm:text-sm hover:text-gray-300 mb-2 sm:mb-3 inline-block">Watch on Vimeo →</a>

                <div class="w-full rounded-lg overflow-hidden relative" style="padding-bottom: 56.25%;">
                  <iframe title={video.title} src={video.src} class="absolute inset-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer — pinned at the bottom, does not scroll -->
  <div class="flex-shrink-0 py-3 sm:py-4 px-4">
    <div class="max-w-screen-2xl px-2 sm:px-4 md:px-8 mx-auto">
      <div class="flex flex-wrap w-full text-white relative">
        <div class="text-center relative z-10 w-full text-xs sm:text-sm md:text-base">
          In 2022, KSS has delivered more than 40 hours of high quality audio. Including an eight hour long
          <a
            href="https://soundcloud.com/nisham-olakara/3d-ambisonic-audiobook-the-rise-of-the-drake-ch-7-chase-gets-made-sc?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
            rel="noreferrer">audio book with ambisonic sound effects and music</a
          >.
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  a {
    color: gray;
  }

  /* Subtle scrollbar for the projects list */
  #projects::-webkit-scrollbar {
    width: 4px;
  }

  #projects::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  #projects::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.25);
    border-radius: 2px;
  }

  #projects::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.45);
  }
</style>
