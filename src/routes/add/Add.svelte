<script>
	import MainInput from "./MainInput.svelte";
	import Workspace from "./Workspace.svelte";


	

</script>

<div id="add_container">

<MainInput/>
<Workspace/>

</div>

<style>

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
    
        
        }

#add_container{
	width: 100%;
	height: 100vh;
}


</style>