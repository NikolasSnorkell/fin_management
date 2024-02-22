<script>
import l_panel__profile from '$lib/img/user-solid.svg';
import l_panel__add from '$lib/img/add-solid.svg';
import l_panel__stats from '$lib/img/stats-solid.svg';
import l_panel__archive from '$lib/img/archive-solid.svg';

function lPanelMouseEnter(elem){
    90
}

</script>


<div id="l_panel" class="color_theme">

        <div class="l_panel__item l_panel__profile">
           <a href="/profile" data-name='profile' on:mouseenter = {lPanelMouseEnter} style="background-image: url({l_panel__profile});"> 
            <!-- <img src={l_panel__profile} alt=""> -->
        </a>
        </div>
        <div class="l_panel__item l_panel__profile">
           <a href="/add" on:mouseenter = {lPanelMouseEnter} style="background-image: url({l_panel__add});">
             <!-- <img src={l_panel__add} alt=""> -->
        </a>
        </div>
        <div class="l_panel__item l_panel__profile">
           <a href="/stats" on:mouseenter = {lPanelMouseEnter} style="background-image: url({l_panel__stats});">
             <!-- <img src={l_panel__stats} alt=""> -->
            </a>
        </div>
        <div class="l_panel__item l_panel__profile">
            <a href="/archive" on:mouseenter = {lPanelMouseEnter} style="background-image: url({l_panel__archive});">
                <!-- <img src={l_panel__archive} alt=""> -->
            </a>
        </div>

</div>

<style>

    :global(:root) {
        /* Color scheme 1 */
    --l_panel_bg_color: #021b49;
    --l_panel_item_hover: #00000027;
    --l_panel_width:5.6rem;
    
    }

    #l_panel{
        width:var(--l_panel_width);
        height: 100vh;
        background: var(--l_panel_bg_color);
    }
  
  

    #l_panel .l_panel__item{
        width:var(--l_panel_width);
        height:var(--l_panel_width);
        
        transition: .2s ease-in;
    }

    #l_panel .l_panel__item a{
        width:  100%;
        height: 100%;
        display: block;
        background-position: center;
        background-size: 30%;
        background-repeat: no-repeat;
    }

    /* #l_panel .l_panel__item a img{
        width:  70%;
      
    } */

    .l_panel__item:hover{
        background:var(--l_panel_item_hover);
    }



</style>