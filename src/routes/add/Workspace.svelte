
<script>
    import trash_white from '$lib/img/trash-solid.png';
</script>

<div id="add__workspace" >
        <div id="add__category">
            <input type="checkbox" name="option1" id="cat_option1">
            <label for="cat_option1">Food</label>

            <input type="checkbox" name="option1" id="cat_option1">
            <label for="cat_option1">Food</label>
        </div>

        <div id="add__items">
            <div class="item">
                <div class="face">
                    <p class="item_title">Молоко</p>
                    <p class="item_price">1.77</p>
                </div>
                <div class="hovered">
                    <input type="text" class="item_hashtags" value='Молоко'>
                    <!-- <p class="item_hashtags"></p> -->
                    <p class="item_delete" style="background-image: url({trash_white});"></p>
                </div>
            </div>


        </div>

        <div id="add__others">
            <div id="date"></div>
            <div id="market"></div>

            <button id="add_button">Add purchase</button>

        </div>



</div>


<style>

    :global(:root) {
            /* Color scheme 1 */
        --searchbar_button_bg_color: #3b3b3b;
       
    
        font-family: 'Gilroy';
        }


   

</style>