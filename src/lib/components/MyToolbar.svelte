<script>
	import { showToolbar } from './MyStore'; // Import the store
</script>
<style>
    #toolbar {
        padding: 10px;
        padding-right: 15px; /* reserved space for scrollbar*/
        overflow-y: auto;
        grid-area: toolbar;
        z-index: 1;
        width: 200px;
        background-color: var(--pico-muted-border-color);
        /*border: 5px solid green;*/
    }
    #toolbar.hideToolbar {
        /*transition: width 1.5s ease-in-out;*/
        padding: 0px;
        width: 0px;
        height: 0px;
        border: 0px;
    }
    
</style>
<div id="toolbar" class:hideToolbar={!$showToolbar}>
    <slot></slot>
</div>

