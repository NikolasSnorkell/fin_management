
<script>
	import BudgetStatsModule from "./stat_modules/BudgetStatsModule.svelte";
	import HashtagsStatsModule from "./stat_modules/HashtagsStatsModule.svelte";

   
    
</script>
    
    <div id="stats__block" >
        <BudgetStatsModule/>
        <HashtagsStatsModule/>
    </div>
    
    
    <style lang="scss">
    
        :global(:root) {
         
            }
    
    #stats__block{
        display:flex ;
        height: fit-content;
        padding: 4rem 0rem;
        width: 80vw;
        margin: 0 auto;
        column-gap: 4rem;
    }
    
    
    </style>