<script lang="ts">
	import '@picocss/pico'
    import Hamburger from '$lib/components/Hamburger.svelte'
    import Expander from '$lib/components/Expander.svelte'
</script>
<style lang="scss">
    @use "@picocss/pico/scss/pico" with (
        $theme-color: "cyan"
    );
</style>
<nav style="margin-left:25px; margin-right:25px">
    <ul><li><a href="#">Menu</a></li></ul>
    <ul><li style="font-Size:36px; color:aqua;"><b>WebXR Firework Simulator</b></li></ul>
    <ul><li><a href="#">Edit</a></li></ul>
</nav>
<slot />