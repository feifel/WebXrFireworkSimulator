<script lang="ts">
	import { showNavbar } from './MyStore'; // Import the store
  
	function toggleNavbar() {
	  showNavbar.update(showNavbar => !showNavbar); // Update the store value
	}
</script>

<button type="button" class="btn btn-primary" aria-label="Hamburger" class:showNavbar={$showNavbar} on:click={toggleNavbar}>
	<svg width=32 height=28>
		<line id="top" x1=0 y1=5  x2=32 y2=5/>
		<line id="middle" x1=0 y1=14 x2=32 y2=14/>
		<line id="bottom" x1=0 y1=23 x2=32 y2=23/>
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

	.showNavbar #top {
		transform: translate(8px, -1px) rotate(45deg)
	}
	
	.showNavbar #middle {
		opacity: 0;
	}
	
    
    .showNavbar #bottom {
		transform: translate(-12px, 9px) rotate(-45deg)
	}
    
</style>