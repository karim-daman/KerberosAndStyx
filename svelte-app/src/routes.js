import { ChunkGenerator } from 'svelte-spa-chunk'
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte'
const Chunk = ChunkGenerator(ChunkComponent)

/**
 * @description Client Side Render Index
 */
export default {
    '/':        Chunk(()=> import('./routes/Home.svelte')),
    '/About':        Chunk(()=> import('./routes/About.svelte')),
    '/Contact':        Chunk(()=> import('./routes/Contact.svelte')),
    '/Projects':        Chunk(()=> import('./routes/Projects.svelte')),
    '/Music':        Chunk(()=> import('./routes/Music.svelte')),
    '/Portofolio':        Chunk(()=> import('./routes/Portofolio.svelte')),
    '/lorem/:repeat':       Chunk(()=> import('./routes/Lorem.svelte')),
    // '/b':       Chunk(()=> import('./b.svelte')),
    // '/async':   Chunk(()=> import('./async.svelte')),

    '*':        Chunk(()=> import('./routes/NotFound.svelte')),
}