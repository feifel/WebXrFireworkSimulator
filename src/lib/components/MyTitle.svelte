<script>
    export let fontSize = '36px';
</script>
<style>
    b {
        background-image: linear-gradient(90deg, var(--pico-primary) 0.00%,var(--pico-color) 50.00%,var(--pico-primary) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
<b style="font-size: {fontSize}"><slot></slot></b><br/>