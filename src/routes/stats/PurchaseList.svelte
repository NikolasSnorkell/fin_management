<script>

    let purchase_list = [
        {
            'id':0,
            'date':'10/11/23',
            'category':'Food',
            'category_color':'#f88181',
            'marketplace':'Евроопт',
            'items':'Кефир 1,77; Творог 2*1,65; Молоко 1,89; Филе 2,49;',
            'cost':350,
            'commentary':'9.45 byn'
            
        },
        {
            'id':1,
            'date':'10/11/23',
            'category':'Food',
            'category_color':'#f88181',
            'marketplace':'Евроопт',
            'items':'Кефир 1,77; Творог 2*1,65; Молоко 1,89; Филе 2,49;',
            'cost':350,
            'commentary':'9.45 byn'
            
        },
        {
            'id':2,
            'date':'15/11/23',
            'category':'Others',
            'category_color':'#608bdb',
            'marketplace':'Wildberiies',
            'items':'Кольцо 7,15; Масло для бороды 22.56;',
            'cost':835,
            'commentary':'29,71 byn'
            
        }
    ];
   
    
</script>
    
    <div id="purchase_list__block" >
        {#each purchase_list as purchase (purchase.id)}
            <div class="one_purchase" id="purchase_{purchase.id}">
                <p class="category_indicator" style:background-color={purchase.category_color}></p>
                <span class="purchase_date">{purchase.date}</span>
                <span class="purchase_category">{purchase.category}</span>
                <span class="purchase_marketplace">{purchase.marketplace}</span>
                <span class="purchase_items">{purchase.items}</span>
                <span class="purchase_cost">{purchase.cost}</span>
                <span class="purchase_commentary">{purchase.commentary}</span>
                <p class="del_purchase" ></p>
            </div>    
        {/each}
        
    </div>
    
    
    <style lang="scss">
    
        :global(:root) {
            --one_purchase_width:80vw;
            }
    
    #purchase_list__block{
       
        overflow-x: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 2rem;
        

        .one_purchase{
            width: var(--one_purchase_width);
            background: white;
            padding: 1rem 3rem;
            margin-top: .5rem;
            font-size: 20px;
            display: flex;
            justify-content:space-between;
            align-items: center;
            position: relative;

            .category_indicator{
                width: .5rem;
                height: 100%;
                position: absolute;
                left: 0;
                
            }

            .del_purchase{
                width: 3rem;
                height: 100%;
                position: absolute;
                right: 0;
                background-image: url('/src/lib/img/trash-solid-hover.png');
                background-size: 50%;
                background-position: center;
                background-repeat: no-repeat;
                opacity: .3;
                transition: opacity .3s ease-in-out;

                &:hover{
                    cursor: pointer;
                    opacity: 1;
             
                }
            }
            
            span{
                text-align: center;
                width: calc(var(--one_purchase_width)/7 *1);
            
                &.purchase_items{
                    width: calc(var(--one_purchase_width)/7 *2);
                        align-self: stretch; 
                }
        }
    }
}
    
    
    </style>