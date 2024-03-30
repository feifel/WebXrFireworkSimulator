<script>
	import MyTitle from '$lib/components/MyTitle.svelte';
    import MyToolbar from '$lib/components/MyToolbar.svelte';
</script>
<link rel="stylesheet" href="/global.css">
<MyToolbar>
    <MyTitle fontSize='30px'>Sparkle</MyTitle>
    Actions:
    <ul>
        <li><a href="/sparkle/new">New Sparkle</a></li>
        <li><a href="#import">Import Sparkle</a></li>
    </ul>
    Selected:    
    <ul>
        <li><a href="#export">Export Sparkle</a></li>
        <li><a href="#delete">Delete Sparkle</a></li>
    </ul>
</MyToolbar>