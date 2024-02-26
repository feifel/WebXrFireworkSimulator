<script>
	export let showLeftSideBar = false
</script>

<aside class:showLeftSideBar>
    <nav>
        <ul>
            <li><a href="#ParticleSource">Particle Source</a></li>
            <li><a href="#ParticleMix">Particle Mix</a></li>
            <li><a href="#ChildFirework">Child Firework</a></li>
            <li><a href="#StandaloneFirework">Standalone Firework</a></li>
            <li><a href="#Scene">Scene</a></li>
            <li><a href="#Playlist">Playlist</a></li>
            <li><a href="#about">About</a></li>
        </ul>		
    </nav>
</aside>

<style>
	aside {
        position: relative;
		transition: left 0.5s ease-in-out;
        background-color: var(--pico-blockquote-border-color);
		left: -250px;
        width: 250px;
        height: 100%;    
	}
	a {
        text-shadow: 1px 1px 6px var(--pico-primary-hover-background);
        margin-left: 20px;
    }
	.showLeftSideBar {
		left: 0
	}
</style>