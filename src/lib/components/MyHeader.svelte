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
		border-bottom-style: solid;
		border-bottom-width: 2px;
		border-image: linear-gradient(90deg, var(--color-primary-shade1),var(--color-primary-tint1),var(--color-primary-shade1)) 1;
		background-color: var(--color-bg-neutral-shade1);
	}
	center {
		flex: 1;
	}
</style>

<header>
    <MyNavbarButton/>
    <center><MyHeaderTitle/></center>
	{#if showToolbarButton}
		<MyToolbarButton/>
	{/if}
</header>