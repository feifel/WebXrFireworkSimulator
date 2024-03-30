<script>
	import MyNavbarButton from './MyNavbarButton.svelte'
	import MyHeaderTitle from './MyHeaderTitle.svelte'
	import MyToolbarButton from './MyToolbarButton.svelte'
	import { showToolbarButton } from './MyStore'; // Import the store
</script>
<style>
	header {
        grid-area: header;
        display: flex;
		border-bottom: solid 2px var(--pico-muted-border-color);
        /*border: 5px solid yellow;*/
	}
	center {
		flex: 1;
	}
</style>

<header>
    <a href="#1"><MyNavbarButton/></a>
    <center><MyHeaderTitle/></center>
	{#if showToolbarButton}
		<a href="#2"><MyToolbarButton/></a>
	{/if}
</header>