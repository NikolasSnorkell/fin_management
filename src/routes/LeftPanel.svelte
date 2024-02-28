<script>
import l_panel__profile from '$lib/img/user-solid-white.png';
import l_panel__profile_hover from '$lib/img/user-solid-hover.png';
import l_panel__add from '$lib/img/add-solid-white.png';
import l_panel__add_hover from '$lib/img/add-solid-hover.png';
import l_panel__stats from '$lib/img/stats-solid-white.png';
import l_panel__stats_hover from '$lib/img/stats-solid-hover.png';
import l_panel__archive from '$lib/img/archive-solid-white.png';
import l_panel__archive_hover from '$lib/img/archive-solid-hover.png';

let img_paths = {
    'leftPanProfile':l_panel__profile,
    'leftPanProfileHover':l_panel__profile_hover,
}

let hoveredElem = null;
let sources_list = {
    'profile':l_panel__profile,
    'add':l_panel__add,
    'stats':l_panel__stats,
    'archive':l_panel__archive,
    'profile_hover':l_panel__profile_hover,
    'add_hover':l_panel__add_hover,
    'stats_hover':l_panel__stats_hover,
    'archive_hover':l_panel__archive_hover,
}
function lPanelMouseEnter(e){
    let data_name = e.target.getAttribute('data-name');
    e.target.setAttribute('style',"background-image: url("+sources_list[data_name+'_hover']+");");
}

function lPanelMouseLeave(e){
    let data_name = e.target.getAttribute('data-name');
    
    e.target.setAttribute('style',"background-image: url("+sources_list[data_name]+");");
}

</script>


<div id="l_panel" class="color_theme">

        <div class="l_panel__item l_panel__profile">
           <a href="/profile" data-name='profile' on:mouseenter = {lPanelMouseEnter} on:mouseleave = {lPanelMouseLeave} style="background-image: url({l_panel__profile});"> 
            <!-- <img src={l_panel__profile} alt=""> -->
        </a>
        </div>
        <div class="l_panel__item l_panel__add">
           <a href="/add" data-name='add' on:mouseenter = {lPanelMouseEnter} on:mouseleave = {lPanelMouseLeave} style="background-image: url({l_panel__add});">
             <!-- <img src={l_panel__add} alt=""> -->
        </a>
        </div>
        <div class="l_panel__item l_panel__stats">
           <a href="/stats"  data-name='stats' on:mouseenter = {lPanelMouseEnter} on:mouseleave = {lPanelMouseLeave} style="background-image: url({l_panel__stats});">
             <!-- <img src={l_panel__stats} alt=""> -->
            </a>
        </div>
        <div class="l_panel__item l_panel__archive">
            <a href="/archive" data-name='archive' on:mouseenter = {lPanelMouseEnter} on:mouseleave = {lPanelMouseLeave} style="background-image: url({l_panel__archive});">
                <!-- <img src={l_panel__archive} alt=""> -->
            </a>
        </div>

</div>

<style>

    :global(:root) {
        /* Color scheme 1 */
    --l_panel_bg_color: #000f2a;
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
        
        transition:all .2s ease-in;
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