<script>
	import LeftPanel from './routes/LeftPanel.svelte';
import Spinner from './routes/Spinner.svelte';
import Profile from './routes/profile/Profile.svelte';
  let spinnerElem;
  
  import Router, {location, link} from 'svelte-spa-router';
</script>
<div id="app">



  <Spinner bind:this={spinnerElem}/>
  <LeftPanel/>
 <!-- <a  href="/">Home</a>
	<a href="/#/about">About</a>
	<a href="/#/blog/colors">Colors</a> -->
<!-- <Router routes={{
    '/': Profile
}} />  -->
</div>
<style>

</style>
