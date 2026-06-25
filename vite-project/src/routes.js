import { ChunkGenerator } from "svelte-spa-chunk";
import ChunkComponent from "svelte-spa-chunk/Chunk.svelte";
const Chunk = ChunkGenerator(ChunkComponent);

/**
 * @description Client Side Render Index
 */
export default {
  "/": Chunk(() => import("./routes/Home.svelte")),
  "/About": Chunk(() => import("./routes/About.svelte")),
  "/Music": Chunk(() => import("./routes/Music.svelte")),
  "/Projects": Chunk(() => import("./routes/Projects.svelte")),
  "/ThankYou": Chunk(() => import("./routes/ThankYou.svelte")),

  "*": Chunk(() => import("./routes/NotFound.svelte")),
};
