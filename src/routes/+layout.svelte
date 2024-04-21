<style>
    layout {
        margin: 0;
        padding: 0;
        height: 100%;
        display: grid;
        grid-template-areas: "header" "content" "footer";
        grid-template-rows: 0fr 1fr 0fr;
        overflow: hidden;
    }
    #content {
        grid-area: content;
        display: grid;
        grid-template-areas: "navbar page";
        grid-template-columns: max-content auto;
        overflow: hidden;
        position: relative;
        /*border: 5px solid red;*/
    }
</style>

<script lang="ts">
    import '../app.css';
    import MyHeader from '$lib/components/MyHeader.svelte'
    import MyNavbar from '$lib/components/MyNavbar.svelte'
    import MyFooter from '$lib/components/MyFooter.svelte'
</script>
<layout>
    <MyHeader/>
    <div id="content">
        <MyNavbar/>        
        <slot/>
    </div>
    <MyFooter/>
</layout>
