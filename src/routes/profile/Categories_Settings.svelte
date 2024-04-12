<script>
	import { browser } from '$app/environment';
    // import Picker from 'vanilla-picker';
    import { onMount } from 'svelte';
    import ColorPicker from 'svelte-awesome-color-picker';
    
    $: categories = [
      {
        "id":0,
        'category_name':"Food",
        'category_color':'#f88181'
      },
      {
        "id":1,
        'category_name':"Others",
        'category_color':'#608bdb'
      }
    ];
 

//   onMount(async() => {

//     const picker = (await  import('vanilla-picker')).default;

//     categories = [
//       {
//         "id":0,
//         'category_name':"Food",
//         'category_color':'#f88181'
//       },
//       {
//         "id":1,
//         'category_name':"Others",
//         'category_color':'#608bdb'
//       }
//     ]

//     categories.forEach(element => {
//         new picker({
//             parent: document.querySelector('#categories_settings__cats_list'),
//             popup: "right",
//             cancelButton: true,
//             color:element.category_color
//         });
//     });

//     new picker({
//             parent: document.querySelector('#category_color_2'),
//             popup: "right",
//             cancelButton: true,
//             color:'#608bdb'
//         });
      


    
  
//   })

</script>

<div id="categories_settings__block">
    <p id="categories_settings__title">Categories</p>
    <ul id="categories_settings__cats_list">
    
        {#each categories as cat}
            <li class="category_item">
                <span data-id={cat.id} hidden></span>
                <span class="category_title" data-id={cat.category_name}>{cat.category_name}</span>
                <!-- <span id="category_color_{cat.id}" class="category_color" data-id={cat.category_color} style="background-color: {cat.category_color};"></span> -->
                <ColorPicker
                label=""
                bind:hex={cat.category_color}
                isAlpha
                --slider-width="1rem"
                --input-size='1rem'
                />
                <span class="category_del"></span>
            </li>
        {/each}
            <li class="category_item">
                <span class="category_add"><i></i></span>
            </li>
    </ul>
    <input id="category_settings_save" type="button" value="Save" on:click={()=>console.log(categories)}>
</div>



<style lang="scss">
    
    #categories_settings__block{
        min-width: 18rem;
        width: fit-content;
        height: fit-content;
        background: white;
        border-radius: 10px;
        padding: 2rem;

        #categories_settings__title{
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 1rem;
        }

        #categories_settings__cats_list{


            li.category_item{
                
                margin-bottom: .5rem;
                width: 100%;
                display: flex;
                column-gap: .5rem;
                align-items: center;

                span.category_title{
                    font-size: 20px;
                    width: 70%;
                }
                span.category_color{
                    border-radius: 50%;
                    width: 1rem;
                    height: 1rem;
                    &:hover{
                        cursor: pointer;
             
                    }
                    
                }
                span.category_del{
                    
                    width: 2rem;
                    height: 2rem;
                    background-image: url('/src/lib/img/trash-solid-hover.png');
                    background-size: 50%;
                    background-position: center;
                    background-repeat: no-repeat;
                    opacity: .5;
                    transition: opacity .3s ease-in-out;

                    &:hover{
                        cursor: pointer;
                        opacity: 1;
             
                    }
                }
                span.category_add{
                    width: 100%;
                    height: 1.5rem;
                    background-color: rgb(165, 165, 165);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    transition: background .2s ease-in-out;

                    &:hover{
                        background-color: rgb(121, 121, 121);
                        cursor: pointer;
                    }

                    i{
                        display: block;
                        width: 1rem;
                        height: 1rem;
                        background-image: url('/src/lib/img/add-solid-white.png');
                        background-size:contain;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                }
            }
        }


        #category_settings_save{
            width: 5rem;
            height: 2.5rem;
            color: white;
            background: #585858;
            border-radius: 5px;
            font-size: 16px;
            float: right;
            transition: background .2s ease-in-out;

            &:hover{
                cursor: pointer;
                background: #404040;
            }
        }
    }


</style>

<!-- markup (zero or more items) goes here -->