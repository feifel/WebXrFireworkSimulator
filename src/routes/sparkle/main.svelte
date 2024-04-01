<script>
    import MyTitle from '$lib/components/MyTitle.svelte';
    import { liveQuery } from "dexie";
    import { MyDb } from "$lib/db";

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
</style>
<main>
    <MyTitle fontSize='30px'>Sparkle</MyTitle>
    List of available Sparkle:
    <ul>
        {#if $sparkles}
            {#each $sparkles as sparkle (sparkle.id)}
                <li><a href="/sparkle/{sparkle.id}">{sparkle.name}</a></li>
            {/each}
        {/if}
      </ul>
</main>