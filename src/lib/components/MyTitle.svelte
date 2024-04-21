<script>
    export let fontSize = '36px';
</script>
<style>
    b {
        background-image: linear-gradient(90deg, var(--color-primary-tint1),var(--color-neutral-tint1),var(--color-primary-tint1));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
<b style="font-size: {fontSize}"><slot></slot></b><br/>