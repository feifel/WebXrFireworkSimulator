<script>
    import MyTitle from '$lib/components/MyTitle.svelte';
    import MyToolbar from '$lib/components/MyToolbar.svelte';
    import { v4 as uuidv4 } from 'uuid';
    import { base } from '$app/paths';

    const newUuid = uuidv4();
</script>
<style>    
    a:hover {        
        text-shadow: 0px 0px 10px var(--color-primary); /* Add a shadow on hover */
    }
</style>
<MyToolbar>
    <MyTitle fontSize='30px'>Sparkle</MyTitle>
    Actions:
    <ul>
        <li><a href="{base}/sparkle/{newUuid}">New Sparkle</a></li>
        <li><a href="#import">Import Sparkle</a></li>
    </ul>
    Selected:    
    <ul>
        <li><a href="#export">Export Sparkle</a></li>
        <li><a href="#delete">Delete Sparkle</a></li>
    </ul>
</MyToolbar>