<script>
	import Stats from "./Stats.svelte";
	import PurchaseList from "./PurchaseList.svelte";
	

</script>

<div id="stats_container">

<Stats/>
<PurchaseList/>

</div>

<style lang="scss">
 :global(:root) {
            /* Color scheme 1 */
        --total_plan_sum: #5c5c5c;
        --stats_card_bg_color:#f5f2f2;
        --total_budget_bar:rgb(0, 255, 21)
        }
#stats_container{
	width: 100%;
    min-height: 100vh;
    max-height: fit-content;
}


</style>