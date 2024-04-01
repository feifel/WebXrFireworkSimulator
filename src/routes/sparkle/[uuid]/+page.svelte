<script>
    import MyPage from '$lib/components/MyPage.svelte';
    import Main from './main.svelte';
    import Toolbar from './toolbar.svelte';
    import { page } from '$app/stores';
</script>
<MyPage>
    <Main/>
    <Toolbar myUuid={$page.params.uuid}/>
</MyPage>