<script>
    
    let display = false;
    export function toggle(){
        display = display ? false : true;
    }

</script>

<div class="spinner" style:display={display?'flex':'none'}></div>


<style lang="scss">
   .spinner{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;left:0;
    background: #bcbcbc;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 150;
    
    &::before{
        content: '';
        width: 50px;
        height: 50px;
        aspect-ratio: 1;
        --c:no-repeat linear-gradient(#046D8B 0 0);
        background:
            var(--c) 0 0,
            var(--c) 100% 0,
            var(--c) 100% 100%,
            var(--c) 0 100%;
        animation: 
            l2-1 3s infinite,
            l2-2 3s infinite;
    }
}

@keyframes l2-1 {
  0%   {background-size: 0    4px,4px 0   ,0    4px,4px 0   }
  12.5%{background-size: 100% 4px,4px 0   ,0    4px,4px 0   }
  25%  {background-size: 100% 4px,4px 100%,0    4px,4px 0   }
  37.5%{background-size: 100% 4px,4px 100%,100% 4px,4px 0   }
  45%,
  55%  {background-size: 100% 4px,4px 100%,100% 4px,4px 100%}
  62.5%{background-size: 0    4px,4px 100%,100% 4px,4px 100%}
  75%  {background-size: 0    4px,4px 0   ,100% 4px,4px 100%}
  87.5%{background-size: 0    4px,4px 0   ,0    4px,4px 100%}
  100% {background-size: 0    4px,4px 0   ,0    4px,4px 0   }
}
@keyframes l2-2 {
  0%,49.9%{background-position: 0 0   ,100% 0   ,100% 100%,0 100%}
  50%,100%{background-position: 100% 0,100% 100%,0    100%,0 0   }
}
</style>

<!-- markup (zero or more items) goes here -->