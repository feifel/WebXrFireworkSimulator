<script>
	import MyTitle from '$lib/components/MyTitle.svelte';
</script>
<style>    
    main {
        overflow: auto;
        position: relative;
        z-index: 0;
        padding: 10px;
        /*border: 5px solid cyan;*/
        background-color: var(--color-bg-neutral);
        color: var(--color-neutral);
    }
</style>
<main>
    <MyTitle fontSize='30px'>Welcome to WebXR Firework Simulator</MyTitle>
    With WebXR Firework Simulator you can build and watch Fireworks in 3D.
    Its a free Web-Application and runs in nearly every browser. 
    The most immersive experience you will have when you are using a VR-Headset.
    It supports any Headset from Apple Vision Pro, all Meta Quest headsets, but also Google-Card-Boards and a lot more. 
    It can also be installed as a native application (Progressive WebApplication) for offline usage.
    It uses the Babylon.js engine to render the Firework in 3D.
    You can import and export your Fireworks to share them with other users.
    The whole project is open source and hosted on GitHub-Pages.
</main>