<script>
	import LeftPanel from './LeftPanel.svelte';
	// import './styles.css';
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
        <LeftPanel/>
		<slot />
	</main>


</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}


	@media (min-width: 480px) {
	
	}
</style>
