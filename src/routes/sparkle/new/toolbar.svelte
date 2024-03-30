<script>
    import MyTitle from '$lib/components/MyTitle.svelte';
    import MyToolbar from '$lib/components/MyToolbar.svelte';
</script>
<link rel="stylesheet" href="/global.css">
<MyToolbar>	
    <MyTitle fontSize='30px'>New Sparkle</MyTitle>
    <ul>
        <li><a href="/sparkle">Close</a></li>
        <li><a href="#save">Save</a></li>
    </ul>    
</MyToolbar>