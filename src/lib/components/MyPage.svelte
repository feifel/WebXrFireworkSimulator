<style>
    page {
        grid-area: page;
        display: grid;
        grid-template-areas: "main toolbar";
        grid-template-columns: auto max-content;
        overflow: hidden;
        /*border: 5px solid blue;*/
    }
    main {
        overflow: auto;
        position: relative;
        z-index: 0;
        /*border: 5px solid cyan;*/
    }    
    @media only screen and (max-width: 600px) {
        page { /* place main and toolbar over each other on narrow screens (mobile in portrait) */
            grid-template-areas: "main" "toolbar";
            grid-template-rows: auto auto;
            overflow: hidden;
        }
    }
</style>
<page>
    <slot></slot>
</page>