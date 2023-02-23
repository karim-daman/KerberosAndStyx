import { ChunkGenerator } from 'svelte-spa-chunk'
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte'
const Chunk = ChunkGenerator(ChunkComponent)

/**
 * @description Client Side Render Index
 */
export default {
    '/':        Chunk(()=> import('./routes/Home.svelte')),
    // '/a':       Chunk(()=> import('./a.svelte')),
    // '/b':       Chunk(()=> import('./b.svelte')),
    // '/async':   Chunk(()=> import('./async.svelte')),

    '*':        Chunk(()=> import('./routes/NotFound.svelte')),
}