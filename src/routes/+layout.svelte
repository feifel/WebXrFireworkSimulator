<style lang="scss">
    /* supported theme-colors: red, pink, fuchsia, purple, violet, indigo, blue, azure, 
    cyan, jade, green, lime, yellow, amber, pumpkin, orange, sand, grey, zinc, slate */
    @use "@picocss/pico/scss/pico" with (
        $theme-color: "azure"
    );
</style>

<script lang="ts">
	import '@picocss/pico'
    import MyHeader from '$lib/components/MyHeader.svelte'
    import MyLeftSidebar from '$lib/components/MyLeftSideBar.svelte'

	let showLeftSideBar = false
</script>

<MyHeader bind:showLeftSideBar/>
<main>
    <MyLeftSidebar bind:showLeftSideBar/>
    <slot />
</main>
<footer/>