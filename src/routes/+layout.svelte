<script lang="ts">
	import '@picocss/pico'
    import Hamburger from '$lib/components/Hamburger.svelte'
    import Expander from '$lib/components/Expander.svelte'
    import MyTitle from '$lib/components/MyTitle.svelte'
</script>
<style lang="scss">
    /* supported theme-colors: red, pink, fuchsia, purple, violet, indigo, blue, azure, 
    cyan, jade, green, lime, yellow, amber, pumpkin, orange, sand, grey, zinc, slate */
    @use "@picocss/pico/scss/pico" with (
        $theme-color: "cyan"
    );
</style>
<header>
    <nav style="margin-left:25px; margin-right:25px">
        <ul><li><a href="#"><Hamburger/></a></li></ul>
        <ul><li><MyTitle/></li></ul>
        <ul><li><a href="#"><Expander/></a></li></ul>
    </nav>
</header>
<main>
    <slot />
</main>