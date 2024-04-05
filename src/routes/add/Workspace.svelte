
<script>
import {purchase_items} from './stores.js';

$: total_sum = ($purchase_items.reduce((total, item) => total + item.price, 0)).toFixed(2);

function delPurchase(id){
        
        purchase_items.delItem(id);
        
    }


</script>

<div id="add__workspace" >
        <ul id="add__category">
            <li>
                  <input type="radio" name="car_options" id="cat_option1" >
                  <label for="cat_option1">Продукты</label>
            </li>
            <li>
                 <input type="radio" name="car_options" id="cat_option2" >
                 <label for="cat_option2">Другое</label>
            </li>
        </ul>

       
            <div id="add__items">
                {#each $purchase_items as item}
                <div class="item">
                    <div class="face">
                        <p class="item_title">{item.title}</p>
                        <p class="item_price">{item.price}</p>
                    </div>
                    <div class="hovered">
                        <input type="text" class="item_hashtags" value='{item.hashtags}' placeholder="(none)">
                        <!-- <p class="item_hashtags"></p> -->
                        <button class="item_delete" id={'item_del_btn-'+item.id} on:click={()=>delPurchase(item.id)}></button>
                    </div>
                </div>
                {/each}
            </div>
       


        <div id="add__others">
            <div id="date">
                <input type="date"  name="date" id="purchase_date" value="2024-03-04" >
            </div>
            <div id="market">
                <input type="text" id="purchase_market" placeholder="Market">
            </div>
            <div id="commentary">
                <textarea id="commentary_area" placeholder="Comments here"></textarea>
            </div>
                <p id="final_sum">Total: <input type="number" id="total_input" value="{total_sum}"></p>
                <button type="button" id="add_button" >Add purchase</button>
            
        </div>



</div>


<style lang="scss">

    :global(:root) {
            /* Color scheme 1 */
        --searchbar_button_bg_color: #3b3b3b;
        --card_bg_color:#f8f8f8;
        --add_button_bg_color:#3b3b3b;
        --add_button_hover_bg_color:#272727;
        --card_border_radius:10px;
        --main_font_size:24px;
        --item_hovered_bg_color:#023949;
        --item_hovered_del_bg_color:#49020e;
    
        font-family: 'Gilroy';
        }



        #add__workspace{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-between;
            padding:0 8%;
            /* column-gap: 10vw; */

            font-size: var(--main_font_size);

            
        }
        #add__workspace input{
            font-size: var(--main_font_size);
        }

        #add__workspace #add__category{
            height: fit-content;
            width: 20%;
            padding: 3rem 2rem;
            background: var(--card_bg_color);
            
            border-radius: var(--card_border_radius);
            margin: 0 2vw;
        }

        #add__category li{
          margin-top: .5rem;
          display: flex;
          column-gap: .5rem;
        }

        #add__category li input{
          opacity: 0;
          
        }
        #add__category li label{
          position: relative;
        }
        #add__category li label::before, #add__category li label::after{
            content: '';
            position: absolute;
            top: 0;
            left: -2.5rem;
            width: 2rem;
            height: 24px;
          background-size: 20px;
          background-position: center;
          background-repeat: no-repeat;
          transition: opacity .2s ease-in-out;
        } 
        #add__category li label::before{
            background-image: url('/src/lib/img/square-check-regular.png');
        }
        #add__category li label::after{
            background-image: url('/src/lib/img/square-check-solid-hover.png');
            opacity: 0;
            
        }
        #add__category li input:checked + label::after{
            opacity: 1;
        }
        #add__category li input:checked + label::before{
            opacity: 0;
        }


        #add__workspace #add__items{
            width: 50%;
            height: fit-content;
            /* margin: 0 2vw; */
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            align-items: start;
            column-gap: 3rem;
            row-gap: 1rem;
            
        }

        #add__items .item{
            width: min-content;
            height: auto;
            min-width: 15rem;
            max-width: 20rem;
            padding:2rem;
            background: var(--card_bg_color);
            
            border-radius: var(--card_border_radius);
            position: relative;
            overflow: hidden;
        }
        .item:hover .hovered{
          top: 0;
        }

        .item .face{
            display: flex;
            column-gap: 2rem;
        }

        .item .hovered{
            display: flex;
            align-items: center;
            height: 100%;
            /* column-gap: 2rem; */
            position: absolute;
            top: -100%;left: 0;
            transition: top .3s ease-in-out;
            background: var(--item_hovered_bg_color);
        }
        .hovered input{
            background: #00000000;
            width: 70%;
            height: min-content;
            color: white;
            font-weight: bold;
            margin-left: 1rem;
            border-bottom: 1px solid white;
        }
        .hovered input::placeholder{
                
            color: white;
            
        }

        .item_delete{
            width: 30%;
            height: 100%;
            background-color: #00000000;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url('/src/lib/img/trash-solid.png');
        } 
        .hovered>.item_delete:hover{
            cursor: pointer;
        }
      



        #add__workspace #add__others{
            margin: 0 2vw;
            width: 15%;
            
        }


        #add__others #date, #add__others #market, #add__others #commentary{
            background: var(--card_bg_color);
            border-radius: var(--card_border_radius);
            padding: 1.5rem .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
        }

        #add__others #date input, #add__others #market input,  #add__others #commentary textarea{
            background: var(--card_bg_color);
            width: 90%;
            text-align: center;
        }

        #add__others #commentary textarea{
            min-width: 90%;
            min-height: 50px;
            max-height: 150px;
            font-size: var(--main_font_size);
        }



        #add__others #add_button{
            color: white;
            background: var(--add_button_bg_color);
            border-radius: var(--card_border_radius);
            padding: 1.5rem .5rem;
            font-size: var(--main_font_size);
            width: 100%;
            margin-top: 3rem;
            transition: background .3s ease-in-out;
        }
        #add__others #add_button:hover{
            
            background: var(--add_button_hover_bg_color);
            
        }
        #add__others #final_sum{
            text-align: center;
            font-size: 30px;
            font-weight: bold;
            margin-top:4rem;
            display: flex;
            column-gap: 1rem;
        }

        #final_sum input{
            width: 10rem;
            background: #00000000;
            font-weight: bold;
        }

   

</style>