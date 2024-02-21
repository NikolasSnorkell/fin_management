<script>
import l_panel__profile from '$lib/img/stats_icon-icons.com_69449.png';



</script>


<div id="l_panel" class="color_theme">

        <div class="l_panel__item l_panel__profile">
           <a href="/profile"> <img src={l_panel__profile} alt=""></a>
        </div>
        <div class="l_panel__item l_panel__profile">
           <a href="/add"> <img src={l_panel__profile} alt=""></a>
        </div>
        <div class="l_panel__item l_panel__profile">
           <a href="/stats"> <img src={l_panel__profile} alt=""></a>
        </div>
        <div class="l_panel__item l_panel__profile">
            <a href="/archive">
                <img src={l_panel__profile} alt="">
            </a>
        </div>

</div>

<style>

    :root {
        /* Color scheme 1 */
    --l_panel_bg_color: #1771bb;
    --l_panel_item_hover: #00000027;
    
    }

    #l_panel{
        width: 8rem;
        height: 100vh;
        background: var(--l_panel_bg_color);
    }
  
  

    #l_panel .l_panel__item{
        width:  8rem;
        height:  8rem;
        transition: .2s ease-in;
    }

    #l_panel .l_panel__item a{
        width:  100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    #l_panel .l_panel__item a img{
        width:  70%;
        
    }

    .l_panel__item:hover{
        background:var(--l_panel_item_hover);
    }

</style>