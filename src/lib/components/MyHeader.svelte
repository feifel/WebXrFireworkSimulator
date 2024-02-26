<script>
	import MyHamburger from './MyHamburger.svelte'
	import MyTitle from './MyTitle.svelte'
	import MyExpander from './MyExpander.svelte'
	
	export let showLeftSideBar = false
</script>

<header>
    <nav style="margin-left:25px; margin-right:25px">
        <ul><li><a href="#"><MyHamburger bind:showLeftSideBar={showLeftSideBar}/></a></li></ul>
        <ul><li><MyTitle/></li></ul>
        <ul><li><a href="#"><MyExpander/></a></li></ul>
    </nav>
</header>