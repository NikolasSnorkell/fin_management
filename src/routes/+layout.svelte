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

		@font-face {
				font-family: "Gilroy"; 
				src: url("$lib/font/Gilroy/Gilroy-Light.otf") format("truetype"); 
				font-style: normal; 
				font-weight: normal; 
        } 
        @font-face {
                font-family: "Gilroy"; 
                src: url("$lib/font/Gilroy/Gilroy-ExtraBold.otf") format("truetype"); 
                font-style: normal; 
                font-weight: bold; 
        } 


	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow-x: hidden;
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
