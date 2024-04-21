<script>
    import MyTitle from '$lib/components/MyTitle.svelte';
    import { liveQuery } from "dexie";
    import { MyDb } from "$lib/db";
    import { base } from '$app/paths';

    // Create an instance of MyDb
    const db = new MyDb();

    // Insert a sample
    /*
    db.sparkle.add({
        id: 'first',
        name: 'First Sparkle',
        description: 'Just a test',
        json: 'some string'
    })s
    */

    let sparkles = liveQuery(
        () => db.sparkle.toArray()
    );
</script>
<style>    
    main {
        overflow: auto;
        position: relative;
        z-index: 0;
        padding: 10px;
        /*border: 5px solid cyan;*/
    }
    a:hover {        
        text-shadow: 0px 0px 10px var(--color-primary); /* Add a shadow on hover */
    }
</style>
<main>
    <MyTitle fontSize='30px'>Sparkle</MyTitle>
    List of available Sparkle:
    <ul>
        {#if $sparkles}
            {#each $sparkles as sparkle (sparkle.id)}
                <li><a href="{base}/sparkle/{sparkle.id}">{sparkle.name}</a></li>
            {/each}
        {/if}
      </ul>
</main>