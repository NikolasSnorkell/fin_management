
<script>
    
    import {purchase_items} from './stores.js';


    let purchase_name = '';
    let purchase_price = null;

    let suggest = ['Молоко - 1.77','Молоко - 1.77','Молоко - 1.77','Молоко - 1.77'];


    function addPurchase(){
        // if(!purchase_name || !purchase_price)return

        // purchase_items.addItem({title:purchase_name,price:+purchase_price,hashtags:'#test'});
        // console.log($purchase_items);
        // purchase_name = '';
        // purchase_price = null;
    }

    function suggestClick(e){
        
        // let value = e.target.innerHTML;
        // if(value.includes(' - ')){
        //     let new_params = value.split(' - ');
        //     purchase_name = new_params[0];
        //     purchase_price = new_params[1];
        //     suggest = [];
        // }
    }

    // $: if(purchase_name.length>2){
    //     //TODO добавить запрос на бэк на получение предложки
    //         suggest = ['Молоко - 1.77','Творог - 1.77'];
    //     }else if(purchase_name.length<2){
    //         suggest = [];
    //     }
    
</script>


<div class="main_input">

    <input type="text" name="purchase" id="input_purchase" placeholder="Add your purchases" bind:value = {purchase_name}>
    <input type="text" name="purchase_price" id="input_price" placeholder="Price" bind:value = {purchase_price}>
    <button id="add_purchase_btn" on:click={addPurchase}></button>

    <ul id="maininput__suggest">
        {#each suggest as item}
            <li><button on:click={suggestClick}>{item}</button></li>
        {/each}
    </ul>
</div>

<style lang="scss">

    :global(:root) {
        
        
        --maininput__suggest_bg:#ffffff;
        --maininput__suggest_bg_hover:#e7faff;
    
        font-family: 'Gilroy';
        }

    .main_input{
        width: fit-content;
        height: 10vh;
        display: flex;
        justify-content: center;
        margin: auto;
        margin-top: 2rem;
        position: relative;
    }

    input{
        
        height: 3.5rem;
        font-size: 24px;
        filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.1));
        padding-left: 1.5rem;
    }

    input#input_purchase{
        border-radius: 10px 0 0 10px;
        width: 30vw;
    }

    input#input_price{
        border-radius: 0 10px 10px 0;
        width: 7rem;
    }


    button#add_purchase_btn{
        width: 4rem;
        height: 3.5rem;
        background-color: var(--add_button_bg_color);
        background-size: 30%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('src/lib/img/add-solid-white.png');
        border-radius: 10px;
        filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.14));
        margin-left: 1rem;
        transition: background .3s ease-in-out;
    }
    button#add_purchase_btn:hover{
        background-color: var(--add_button_hover_bg_color);
        cursor: pointer;
    }

    ul#maininput__suggest{
        position: absolute;
        top: 3.5rem;left: 2rem;
        width: auto;
        max-width: 30vw;
        height: fit-content;
        max-height: 22vh;
        overflow-y: scroll;
        /* padding: 1.5rem; */
        z-index: 100;

        font-size: var(--main_font_size);
        border-radius:0 0 10px 10px;
        
       
    }

    ul#maininput__suggest li button{
      padding:1rem 4rem;
      transition: background .2s ease-in-out;
      background: var(--maininput__suggest_bg);
    }

    ul#maininput__suggest li button:hover{
      cursor: pointer;
      background: var(--maininput__suggest_bg_hover);
    }


</style>