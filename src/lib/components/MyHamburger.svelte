<script>
	export let showLeftSideBar = false
</script>

<button aria-label="Hamburger" class:showLeftSideBar on:click={() => showLeftSideBar = !showLeftSideBar}>
	<svg width=32 height=27>
		<line id="top" x1=0 y1=2  x2=32 y2=2/>
		<line id="middle" x1=0 y1=12 x2=32 y2=12/>
		<line id="bottom" x1=0 y1=22 x2=32 y2=22/>
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
		z-index: 0;
	}

    button:hover {
        box-shadow: inset 0 1px 1px var(--pico-background-color), 0 0px 15px var(--pico-primary-hover-background);
    }

/*
    .open svg {
		transform: scale(0.7)
	}
*/	
	.showLeftSideBar #top {
		transform: translate(6px, 0px) rotate(45deg)
	}
	
	.showLeftSideBar #middle {
		opacity: 0;
	}
	
    
    .showLeftSideBar #bottom {
		transform: translate(-12px, 9px) rotate(-45deg)
	}
    
</style>