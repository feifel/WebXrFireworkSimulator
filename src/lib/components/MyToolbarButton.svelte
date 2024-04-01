<script>
	import { showToolbar } from './MyStore'; // Import the store
	let toolbarClass = ''
    function toggleToolbar() {
		showToolbar.update(showToolbar => !showToolbar); // Update the store value
    }
</script>

<button aria-label="Toolbar Button" class:showToolbar={$showToolbar} on:click={toggleToolbar}>
	<svg width=32 height=27>
		<line id="top" x1=8 y1=2  x2=26 y2=11/>
		<line id="bottom" x1=8 y1=22 x2=26 y2=11/>
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out
	}
	
	button {
		z-index: 20;
	}

    button:hover {
        box-shadow: inset 0 1px 1px var(--pico-background-color), 0 0px 15px var(--pico-primary-hover-background);
    }
    
    .showToolbar #top {
		transform: translate(32px, -2px) rotate(100deg)
	}
		
    .showToolbar #bottom {
		transform: translate(23px, -6px) rotate(80deg)
	}
</style>