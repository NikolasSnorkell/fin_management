<script>
    
    let hashtags_stats = [
    {
        'id':0,
        'tag':'#молочка',
        'sum':20.8
    },
    {
        'id':1,
        'tag':'#сладкое',
        'sum':34.6
    },
    {
        'id':2,
        'tag':'#мучное',
        'sum':8.9
    },
    ];


</script>



<div id="hashtags_stats_container">

    

    <ul id="hashtags_items">
      {#each hashtags_stats as item }
     
        <li class="hashtags_stats_item">
            <span class="hashtag_name">{item.tag}</span>
            <span class="hashtag_sum">{item.sum}</span>
        </li>
        
        {/each}
    </ul>

</div>



<style lang="scss">
    

    #hashtags_stats_container{
        
        width: 18rem;
        height: fit-content;
        background: var(--stats_card_bg_color);
        border-radius: 10px;

        padding: 1rem 2rem;

        #hashtags_items{

            li{
                width: 90%;
                margin: 0 auto;
                

                span{
                    font-size: 20px;

                    &.hashtag_sum{
                        float: right;
                    }
                }
            }
        }

    }

</style>

<!-- markup (zero or more items) goes here -->