<!-- <script context="module">
    export async function load({ fetch }) {
    //   const res = await fetch('https://127.0.0.1/test.php');
    //   const data = await res.json();
    data = await fetch('https://127.0.0.1/test.php');
    data = await data.json();
    data.then((val)=>{data = val});
        
      return {
        props: { data }
        // data 
      };
    }
  </script> -->

<script >
	import Income from './Income.svelte';
	import CategoriesSettings from "./Categories_Settings.svelte";
	import Expenses from './Expenses.svelte';
	// import Form from './Form.svelte';
// 	import { onMount } from 'svelte';
	
// let data;
//     onMount(async () => {
// 		const res = await fetch(`https://127.0.0.1/test.php`);
// 		data = await res.json();
//         return data;
// 	});
    
   
  //  export let data;
	
</script>

<div id="profile_container">
    
    <Income/>
    <Expenses/>
    <CategoriesSettings/> 
    <!-- <Form/> -->
    
    

</div>

<style lang="scss">

:global(:root){
        --save_btn_bg_default:#585858;
        --save_btn_bg_success:#3a8c12;
        --save_btn_bg_fail:#8c1a12;
        --save_btn_bg_hover:#404040;

        --add_btn_back:rgb(165, 165, 165);
        --add_btn_back_hover:rgb(121, 121, 121);
    }

#profile_container{
	width: 100%;
	height: 100vh;
 
    // margin-left: 6rem;
    padding: 3rem;
    padding-left: 5.6rem;
    display: flex;
    column-gap: 3rem;
    flex-wrap: wrap;

}
.spinner{
    
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #bcbcbc3d;
    }
}


</style>