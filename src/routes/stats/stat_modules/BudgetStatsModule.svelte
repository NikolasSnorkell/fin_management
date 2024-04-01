<script>
    // your script goes here
    let total_budget_percentage = 85;
</script>


    <div id="budget_stats_container">

        <div id="main_stat_block">


            <span id="total_current_sum">25000</span>
            <span id="total_plan_sum">30000</span>
            
            <div id="total_progress" style="--total_value: {total_budget_percentage};">
                    
            </div>

        </div>

        <div id="others_stat_block"></div>




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
        min-height: 25rem;
        border-radius: 10px;
        background: var(--stats_card_bg_color);
    }

    #main_stat_block{
        width:100%;
        height: 15rem;
        border-bottom: 1px solid black;
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
 




    @property --eb-progress-value {
  syntax: "<integer>";
  inherits: false;
  initial-value: 0;
}

@keyframes eb-progress {
  to {
    --eb-progress-value: var(--value);
  }
}

body {
  font-family: -apple-system, system-ui, Helvetica, Arial, sans-serif;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f2f2f2;
  max-width: 800px;
  height: 100vh;
}

.eb-progress-bar {
  --size: 4.5rem;
  --inner-bg: #f2f2f2;
  --primary-color: var(--col);
  --secondary-color: #dfe0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0px 2px rgb(0 0 0 / 40%), inset 0 0px 1px rgb(0 0 0 / 30%),
    0 1px 2px rgb(0 0 0 / 60%), 0 4px 2px rgb(0 0 0 / 20%),
    0 9px 4px rgb(0 0 0 / 10%), inset 0 2px 1px #ffffff8c;
  width: var(--size);
  height: var(--size);
  font-size: calc(var(--size) / 5);
  color: var(--primary-color);
  background: 
    conic-gradient(
       var(--primary-color) calc(var(--eb-progress-value) * 1%),
      var(--secondary-color) 0
    );
//   border-radius: 50%;

  &-wrapper {
    display: grid;
    place-items: center;
    gap: 0.5rem;
    padding: 1rem;
    transform: scale(1.5);
  }

  &,
  &::before {
    animation: eb-progress 2s 1 forwards;
  }

//   &::before {
//     counter-reset: percentage var(--eb-progress-value);
//     content: counter(percentage) "%";
//     font-weight: 400;
//     font-family: Roboto;
//     font-size: 15px;
//     color: #9e9e9e;

//     background: #f5f6f7;
//     background-image: -webkit-gradient(
//       linear,
//       right top,
//       right bottom,
//       color-stop(0%, #ffffff),
//       color-stop(100%, #d3d1cb)
//     );

//     box-shadow: 1px 1px 3px rgb(0 0 0 / 15%);
//     padding: 20px 15px;
//     border-radius: 50%;
//     z-index: 1;
//     position: relative;
//     border: 1px solid #d0d0d0;
//   }

  &-title {
    text-align: center;
    color: inherit;
    letter-spacing: 2px;
    line-height: 1.2;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 400;
    font-family: Roboto;
  }

  progress {
    visibility: hidden;
    width: 0;
    height: 0;
  }
}

h2 {
  font-family: "integralcfmedium" !important;
  margin-top: 6px;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 64px;
  }
}

</style>

<!-- markup (zero or more items) goes here -->