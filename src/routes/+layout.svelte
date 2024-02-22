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
	main{
		width: 100vw;
		display: flex;
		background: linear-gradient(-45deg,#e1e1e1,#f0f3f3,#eff1f1,#d5d7d6);
		/* background: linear-gradient(to right,#1955D4,#E8297A) */
	}

	@media (min-width: 480px) {
	
	}
</style>
