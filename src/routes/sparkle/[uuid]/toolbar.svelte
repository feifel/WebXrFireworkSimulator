<script lang="ts">
    import MyTitle from '$lib/components/MyTitle.svelte';
    import MyToolbar from '$lib/components/MyToolbar.svelte';
    import { liveQuery } from "dexie";
    import { MyDb } from "$lib/db";
    import { base } from '$app/paths';
    import type { Sparkle } from '$lib/types/sparkle';

    export let myUuid = "";
    let sparkle : Sparkle = {id:myUuid, name:"", description:"", json:""};
    let isNew : boolean = true;
    // Create an instance of MyDb
    const db = new MyDb();

    async function fillForm() {
        const res = await db.sparkle.get(myUuid);
        if (res) {
            sparkle = res;
            isNew = false;
        }
    }
    fillForm();

    // Handle form submission
    async function handleSubmit(event: Event) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;

        // Perform login logic (e.g., send data to the server)
        console.log('Name:', name);
        console.log('Description:', description);
        let sparkle: Sparkle = {
            id: myUuid,
            name: name,
            description: description,
            json: 'some string'
        }
        if(isNew) {
            db.sparkle.add(sparkle);
        } else {
            db.sparkle.put(sparkle);
        }        
    }
</script>
<link rel="stylesheet" href="/global.css">
<MyToolbar>	
    <MyTitle fontSize='30px'>New Sparkle</MyTitle>
    <form on:submit={handleSubmit}>
        <label>
            Name:
            <input type="name" name="name" required bind:value={sparkle.name}/>
        </label>
        <label>
            Description:
            <input type="description" name="description" required bind:value={sparkle.description}/>
        </label>
        <button type="submit">Save</button>
    </form>
    <ul>
        <li><a href="{base}/sparkle">Close</a></li>
    </ul>    
</MyToolbar>