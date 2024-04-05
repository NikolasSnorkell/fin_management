<script>
    // your script goes here
    let total_budget_current = 3000;
    let total_budget_plan = 30000;
    let total_budget_percentage = Math.floor(total_budget_current / (total_budget_plan/100));
    let other_stats = [
      {
        "id":0,
        'category_name':"Food",
        'category_color':'#f88181',
        'sum_plan':9000,
        'sum_current':4500,
        'percentage':-100+Math.floor(4500 / (9000/100)),
        'bg_color':'red',
        'tween':-100
      },
      {
        "id":1,
        'category_name':"Others",
        'category_color':'#608bdb',
        'sum_plan':12000,
        'sum_current':5000,
        'percentage':-100+Math.floor(5000 / (12000/100)),
        'bg_color':'blue',
        'tween':-100
      }
    ]

    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
  
 
      

  
</script>


    <div id="budget_stats_container">

        <div id="main_stat_block">


            <span id="total_current_sum">{total_budget_current}</span>
            <span id="total_plan_sum">{total_budget_plan}</span>
            
            <div id="total_progress" style="--total_value: {total_budget_percentage};">
                    
            </div>

        </div>

        <div id="others_stat_block">
          {#each other_stats as item,i }
         
              <div class="other_stat">
                <span class="other_stat_title">{item.category_name}</span>
                <span class="other_stat_sum">{item.sum_current}/{item.sum_plan}</span>
                <div class="other_progress" ><span class="other_progress_bar" style="left:{item.percentage}%;background: {item.category_color};"></span></div>
              </div>
            
            {/each}
        </div>

    </div>

    <!-- <div class="eb-progress-bar-wrapper">

        <div class="eb-progress-bar html" style="--value: 85; --col: #FF5089">
          <progress id="html" min="0" max="100" value="85"></progress>
        </div>
      
        <!-- <label for="html" class="eb-progress-bar-title">
          <h2>Html</h2>
        </label> -->
      <!-- </div> --> 
    


<style lang="scss">
    /* your styles go here */
    @property --total_progress_value {
  syntax: "<integer>";
  inherits: false;
  initial-value: 0;
}
    @keyframes total_progress {
          to {
              --total_progress_value: var(--total_value);
          }
        }

  

    #budget_stats_container{
        width: 20rem;
        height: fit-content;
        padding-bottom: 2rem;
        min-height: 20rem;
        border-radius: 10px;
        background: var(--stats_card_bg_color);
        
    }

    #main_stat_block{
        width:100%;
        height: 14rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-top: 6rem;

        #total_progress{
            width: 17rem;
            height: 17rem;
            margin: 0rem auto;
            
            background-image: conic-gradient(from -90deg, var(--total_budget_bar) calc(var(--total_progress_value)*0.5%),#ffff0000 0);
            // background-image: conic-gradient(at 60% 45%, red, yellow, green);
            border-radius: 50% 50% 0 0;
            position: absolute;
            top: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: total_progress 2s 1 forwards;
            
            &::before {
              content:"";
            width: 15rem;
            height: 15rem;
            
            
            display: block;
            margin:0 auto;
            z-index:10;
            background: var(--stats_card_bg_color);
            border-radius: 50%;
            // background: #000;
            
           }
        }


         span{
            width:100%;
            text-align: center;
            margin-top: .5rem;
            font-size: var(--main_font_size);
            font-weight: bold;
            z-index: 15;
        }

      #total_plan_sum{
          color: var(--total_plan_sum_color);
          font-size: 20px;
          font-weight: 400;
      }
    }
 

    #others_stat_block{
      z-index: 20;
      position: relative;
      
      
      
      .other_stat{
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin-top: 1rem;
          padding: 0 1rem;
          span{
            width: 50%;
            font-size: 16px;

            &.other_stat_sum{
              text-align: end;
            }
          }

          .other_progress{
            height: 5px;
            width: 100%;
            margin-top: .5rem;
            background: #b6b6b6;
            position: relative;
            overflow: hidden;
            .other_progress_bar{
                position: absolute;
                top: 0;
                width: 100%;
                height: 10px;
                transition: all 2s ease-in-out;
                
            }
          }
      }
    }

  

  

</style>

<!-- markup (zero or more items) goes here -->