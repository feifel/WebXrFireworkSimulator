<script lang="ts">
    import { onMount } from 'svelte';
    import Render from "./Render";
    let canvas: HTMLCanvasElement;
    let render: Render;
    onMount(async () => {
        render = new Render(canvas);
        render.setup();
        render.run();
        // make sure that xy ratio is correct when canvas is resized        
        const resizeObserver = new ResizeObserver(() => render.engine.resize());
        resizeObserver.observe(canvas);
    });

</script>
<style>    
    canvas, main {
        width: 100%;
        height: 100%;
        overflow: auto;
        position: relative;
        z-index: 0;
    }
</style>
<main>
    <canvas id="SparkleRender" bind:this={canvas}></canvas>
</main>