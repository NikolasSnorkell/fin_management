
<script>
    
    import {purchase_items} from './stores.js';


    let purchase_name = '';
    let purchase_price = null;


    function addPurchase(){
        if(!purchase_name || !purchase_price)return

        purchase_items.addItem({title:purchase_name,price:+purchase_price,hashtags:'#test'});
        console.log($purchase_items);
        purchase_name = '';
        purchase_price = null;
    }
</script>


<div class="main_input">

    <input type="text" name="purchase" id="input_purchase" placeholder="Add your purchases" bind:value = {purchase_name}>
    <input type="text" name="purchase_price" id="input_price" placeholder="Price" bind:value = {purchase_price}>
    <button on:click={addPurchase}></button>

</div>

<style>

    :global(:root) {
        
        
       
    
        font-family: 'Gilroy';
        }

    .main_input{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }

    input{
        
        height: 3.5rem;
        font-size: 24px;
        filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.1));
        padding-left: 1.5rem;
    }

    input#input_purchase{
        border-radius: 10px 0 0 10px;
        width: 30%;
    }

    input#input_price{
        border-radius: 0 10px 10px 0;
        width: 7rem;
    }


    button{
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
    button:hover{
        background-color: var(--add_button_hover_bg_color);
    }

</style>