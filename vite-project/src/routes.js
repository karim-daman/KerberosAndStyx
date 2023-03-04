import { ChunkGenerator } from 'svelte-spa-chunk'
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte'
const Chunk = ChunkGenerator(ChunkComponent)

/**
 * @description Client Side Render Index
 */
export default {
    '/':        Chunk(()=> import('./routes/Home.svelte')),
    '/About':  Chunk(()=> import('./routes/About.svelte')),
    '/Contact':  Chunk(()=> import('./routes/Contact.svelte')),
    '/Music':  Chunk(()=> import('./routes/Music.svelte')),
    '/Film':  Chunk(()=> import('./routes/Film.svelte')),
    '/Commercial':  Chunk(()=> import('./routes/Commercial.svelte')),
    '/ThankYou':  Chunk(()=> import('./routes/ThankYou.svelte')),

    '*':        Chunk(()=> import('./routes/NotFound.svelte')),
}