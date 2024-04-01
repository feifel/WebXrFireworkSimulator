<script>    
	import { showNavbar } from './MyStore'; // Import the store
</script>
<style>
    #navbar {
        padding-right: 15px; /* reserved space for scrollbar*/
        overflow-y: auto;
        overflow-x: hidden;
        grid-area: navbar;
        z-index: 2;
        width: 220px;
        background-color: var(--pico-muted-border-color);
        transition-property: width, border;
        transition-duration: 0.5s, 0.5s;
        transition-timing-function: ease-in-out, ease-in-out;
        /*border: 5px solid lightgreen;*/
    }
    #navbar.hideNavbar {
        padding-right: 0px;
        width: 0px;
        border: 0px solid lightgreen;
    }
    ul {
        width:195px;
        padding: 0; /* Remove padding */
        margin: 10px; /* Remove margins */
    }
    li {
        list-style-type: none; /* Remove bullets */
    }
    a {
        text-decoration: none;
    }
    a:hover {
        color: var(--pico-primary-hover-background);
    }
    @media only screen and (max-width: 600px) {
        #navbar {
          position: absolute;
          height: 100%;
        }
    }
</style>
<div id="navbar" class:hideNavbar={!$showNavbar}>
    <ul>
        <li><a href="/">About</a></li>
        <li><a href="/sparkle">Sparkle</a></li>
        <li><a href="#sparkleMix">Sparkle Mix</a></li>
        <li><a href="#fireworkComponent">Firework Component</a></li>
        <li><a href="#Firework">Firework</a></li>
        <li><a href="#scene">Scene</a></li>
        <li><a href="#playlist">Playlist</a></li>
    </ul>
</div>