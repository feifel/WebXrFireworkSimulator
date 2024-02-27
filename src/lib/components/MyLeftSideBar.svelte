<script>
	export let showLeftSideBar = false
</script>

<div class="scroller" class:showLeftSideBar>
    <aside>
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
</div>

<style>
    .scroller {
        position: relative;
		transition: left 0.5s ease-in-out;
        overflow-y: auto; 
        overflow-x: hidden; 
        height: 100%;
        width: 250px;
		left: -250px;
        background-color: var(--pico-blockquote-border-color);
    }
	aside {
        width: 250px; 
	}
	a {
        text-shadow: 1px 1px 6px var(--pico-primary-hover-background);
        margin-left: 20px;
    }
	.showLeftSideBar {
		left: 0
	}
</style>
