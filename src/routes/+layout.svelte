<style lang="scss">
    /* supported theme-colors: red, pink, fuchsia, purple, violet, indigo, blue, azure, 
    cyan, jade, green, lime, yellow, amber, pumpkin, orange, sand, grey, zinc, slate */
    @use "@picocss/pico/scss/pico" with (
        $theme-color: "azure"
    );
    #layout {
        height: 100%;
        display: flex;
        flex-direction: column;
    };
    #content {
        flex:1;
        position: relative;
        overflow: auto;
    }
</style>

<script lang="ts">
	import '@picocss/pico'
    import MyHeader from '$lib/components/MyHeader.svelte'
    import MyLeftSidebar from '$lib/components/MyLeftSideBar.svelte'

	let showLeftSideBar = false
</script>
<div id="layout">
    <MyHeader bind:showLeftSideBar/>
    <div id="content">
        <MyLeftSidebar bind:showLeftSideBar/>
        <main>
            <slot />
       </main>  
    </div>
    <footer/>
</div>
