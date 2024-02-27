<script>
	import MyHamburger from './MyHamburger.svelte'
	import MyTitle from './MyTitle.svelte'
	import MyExpander from './MyExpander.svelte'
	
	export let showLeftSideBar = false
</script>

<header>
    <nav>
        <ul><li><a href="#1"><MyHamburger bind:showLeftSideBar={showLeftSideBar}/></a></li></ul>
        <ul><li><MyTitle/></li></ul>
        <ul><li><a href="#2"><MyExpander/></a></li></ul>
    </nav>
</header>

<style>
	nav {
		margin-left:25px; 
		margin-right:25px
	}
</style>
