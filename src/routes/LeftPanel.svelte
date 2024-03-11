<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';
import { page } from '$app/stores';

	
        onMount(()=>{
            let current_item = $page.route.id;   
            document.querySelector('.l_panel__'+current_item.slice(1)).classList.add('l_panel__checked');
        });

        $: if(browser){
            let current_item = $page.route.id;              
            console.log(current_item);
            
            let elems = document.getElementsByClassName('l_panel__item');
            
            for (let element of elems) {
                element.classList.remove('l_panel__checked');
            };
            document.querySelector('.l_panel__'+current_item.slice(1)).classList.add('l_panel__checked');
        }
	
    

</script>


<div id="l_panel" class="color_theme">

        <div class="l_panel__item l_panel__profile">
           <a href="/profile" data-name='profile' style="background-image: url('src/lib/img/user-solid-white.png');"> 
            <span style="background-image: url('src/lib/img/user-solid-hover.png');"></span>
        </a>
        </div>
        <div class="l_panel__item l_panel__add">
           <a href="/add" data-name='add' style="background-image: url('src/lib/img/add-solid-white.png');">
             <span style="background-image: url('src/lib/img/add-solid-hover.png');"></span>
        </a>
        </div>
        <div class="l_panel__item l_panel__stats">
           <a href="/stats"  data-name='stats' style="background-image: url('src/lib/img/stats-solid-white.png');">
             <span style="background-image: url('src/lib/img/stats-solid-hover.png');"></span>
            </a>
        </div>
        <div class="l_panel__item l_panel__archive">
            <a href="/archive" data-name='archive' style="background-image: url('src/lib/img/archive-solid-white.png');">
                <span class="hover_span" style="background-image: url('src/lib/img/archive-solid-hover.png');"></span>
            </a>
        </div>

</div>

<style>

    :global(:root) {
        /* Color scheme 1 */
    --l_panel_bg_color: #000f2a;
    --l_panel_item_hover: #2127319d;
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

    .l_panel__item a{
        width:  100%;
        height: 100%;
        position: relative;
        display: block;
        background-position: center;
        background-size: 30%;
        background-repeat: no-repeat;
    }

    .l_panel__item a span{
        width:  100%;
        height: 100%;
        position: absolute;
        top: 0;left: 0;
        background-position: center;
        background-size: 30%;
        background-repeat: no-repeat;
        opacity: 0;
        transition: opacity .3s ease-in-out;
    }
    .l_panel__item a span:hover, .l_panel__checked a span{
        opacity: 1;
    }

    .l_panel__item:hover{
        background:var(--l_panel_item_hover);
    }



</style>