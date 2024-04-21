<script>
	import { showToolbar } from './MyStore'; // Import the store
	let toolbarClass = ''
    function toggleToolbar() {
		showToolbar.update(showToolbar => !showToolbar); // Update the store value
    }
</script>

<button type="button" class="btn btn-primary" aria-label="Toolbar Button" class:showToolbar={$showToolbar} on:click={toggleToolbar}>
	<svg width=32 height=28>
		<line id="top" x1=8 y1=3  x2=26 y2=15/>
		<line id="bottom" x1=8 y1=26 x2=26 y2=14/>
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
		padding:5px;
		margin:2px;
		line-height:0;
		background-color: var(--color-primary);
		border-radius: 0.25rem;
		border-color: var(--color-primary-tint1);
	}

    button:hover {
        box-shadow: inset 0 0px 1px var(--color-primary-shade1), 0 0px 15px var(--color-primary-shade1);
    }
    
    .showToolbar #top {
		transform: translate(34px, 0px) rotate(99deg)
	}
		
    .showToolbar #bottom {
		transform: translate(26px, -5px) rotate(80deg)
	}
</style>