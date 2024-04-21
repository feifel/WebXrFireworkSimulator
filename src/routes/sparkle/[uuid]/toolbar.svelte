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
        <a href="{base}/sparkle">Close</a>
    </form>
</MyToolbar>

<style>
form {
  background-clip: border-box;
  background-origin: padding-box;
}

/* Style for the labels */
label {
  display: block; /* Display labels as blocks to stack them vertically */
  margin-bottom: 10px; /* Add some spacing between labels */  
  margin-right: 10px;
  color: var(--color-primary);
}

/* Style for the input fields */
input {
  width: 100%;
  padding: 5px;
  border: 2px solid var(--color-input-border);
  border-radius: .25rem;
  background-color: var(--color-input-bg);
  color: var(--color-neutral);
}

input:focus {
    outline: none;
    border-color: var(--color-primary);
}

/* Style for the submit button */
button {
    padding:15px;
    margin:2px;
    line-height:0;
    background-color: var(--color-primary);
    border-radius: 0.25rem;
    border-color: var(--color-primary-tint1);
}
a, button {
    font-family: serif; /* Set your desired font family */
    font-size: 16px;
}
a {   
    text-decoration: none;
    padding-top:6px;
    padding-bottom:6px;
    padding-left:12px;
    padding-right:12px;
    background-color: var(--color-primary);
    border-style: outset;
    border-width: 2px;
    border-radius: 0.25rem;
    border-color: var(--color-primary-tint1);
    color: black;
}

button:hover, a:hover {
    box-shadow: inset 0 0px 1px var(--color-primary-shade1), 0 0px 15px var(--color-primary-shade1);
    text-shadow: none;
}
</style>