
<script>
    import trash_white from '$lib/img/trash-solid.png';
    import check_regular from '$lib/img/square-check-regular.png';
    import check_solid from '$lib/img/square-check-solid-hover.png';
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
            <div class="item">
                <div class="face">
                    <p class="item_title">Молоко</p>
                    <p class="item_price">1.77</p>
                </div>
                <div class="hovered">
                    <input type="text" class="item_hashtags" value='#молочка'>
                    <!-- <p class="item_hashtags"></p> -->
                    <p class="item_delete" style="background-image: url({trash_white});"></p>
                </div>
            </div>


        </div>

        <div id="add__others">
            <div id="date">
                <input type="date"  name="date" id="purchase_date" value="2024-03-04" >
            </div>
            <div id="market">
                <input type="text" id="purchase_market" placeholder="Market">
            </div>
            
                <button type="button" id="add_button" >Add purchase</button>
            
        </div>



</div>


<style>

    :global(:root) {
            /* Color scheme 1 */
        --searchbar_button_bg_color: #3b3b3b;
        --card_bg_color:#f8f8f8;
        --add_button_bg_color:#3b3b3b;
        --card_border_radius:10px;
        --main_font_size:24px;
    
        font-family: 'Gilroy';
        }



        #add__workspace{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            padding-right: 10%;
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
          opacity: 1;
        }
        #add__category li label::before{
          background-image: url('$lib/img/square-check-solid-hover.png');
          background-size: 20px;
        }


        #add__workspace #add__items{
            width: 50%;
            margin: 0 2vw;
            
        }



        #add__workspace #add__others{
            margin: 0 2vw;
            width: 15%;
        }


        #add__others #date, #add__others #market{
            background: var(--card_bg_color);
            border-radius: var(--card_border_radius);
            padding: 1.5rem .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
        }

        #add__others #date input, #add__others #market input{
            background: var(--card_bg_color);
            width: 70%;
            text-align: center;
        }



        #add__others #add_button{
            color: white;
            background: var(--add_button_bg_color);
            padding: 1.5rem .5rem;
            font-size: var(--main_font_size);
            width: 100%;
            margin-top: 5rem;
        }

   

</style>