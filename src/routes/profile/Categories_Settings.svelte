<script>

	// @ts-ignore
	import ColorPicker from 'svelte-awesome-color-picker';
	import Spinner from "../Spinner.svelte";
    let spinnerElem;
	import SaveBtn from './SaveBtn.svelte';
	import { onMount } from 'svelte';

	
	let categories = null;

	onMount(async function () {
    	const response = await fetch('https://127.0.0.1/fin_man/profile.php?type=categories');
    	const data = await response.json();
		console.log(data);
		categories = data;
  });
	

	function categoryAdd() {
        categories.items = [...categories.items,{
            id: categories.items.length,
			category_name: 'noname',
            category_sum:0,
			category_color: '#111111'
        }]
    }

    function categoryDel(e){
        console.log(e.target.attributes[0].value);
        let cat_index = e.target.attributes[0].value
        categories.items.splice(cat_index,1);
        categories = categories;
        
    }   


</script>


<div id="categories_settings__block">
	<Spinner bind:this={spinnerElem}/>
	{#if categories}
		<p id="categories_settings__title">Categories ({categories.sum})</p>
	{:else}
		<p id="categories_settings__title">Categories (Loadings...)</p>
	{/if}
	<ul id="categories_settings__cats_list">

		{#if categories}
			{#each categories.items as cat,index (cat.id)}
				<li class="category_item">
					<span data-id={cat.id} hidden></span>
					<!-- <span class="category_title" data-name={cat.category_name}>{cat.category_name}</span> -->
					<input class="category_title" type="text" name="" id="" value="{cat.category_name}" />
					<input class="category_sum" type="number" name="" id="" value="{cat.category_sum}" />
					<!-- <span id="category_color_{cat.id}" class="category_color" data-id={cat.category_color} style="background-color: {cat.category_color};"></span> -->
					<ColorPicker
						label=""
						bind:hex={cat.category_color}
						isAlpha
						--slider-width="1rem"
						--input-size="1rem"
					/>
					<button data-cat-index={index} class="category_del" on:click={categoryDel}></button>
				</li>
			{/each}
		{/if}

		
		<li class="category_item">
			<button class="category_add" on:click={categoryAdd}><i></i></button>
		</li>
	</ul>
	<SaveBtn
	bind:fetchData={categories}
	bind:spinnerElem={spinnerElem}
	id='categories_settings_save'
	type='categories2'
	/>
</div>

<!-- markup (zero or more items) goes here -->

<style lang="scss">
	#categories_settings__block {
		width: 24rem;
		// width: fit-content;
		height: fit-content;
		background: white;
		border-radius: 10px;
		padding: 2rem;
		position: relative;

		#categories_settings__title {
			font-size: 30px;
			font-weight: bold;
			margin-bottom: 1rem;
		}

		#categories_settings__cats_list {
			li.category_item {
				margin-bottom: 0.5rem;
				width: 100%;
				display: flex;
				column-gap: 0.5rem;
				align-items: center;

				input.category_title {
					font-size: 20px;
					width: 60%;
				}
                input.category_sum {
					font-size: 20px;
					width: 30%;
                    text-align: center;
				}
				span.category_color {
					border-radius: 50%;
					width: 1rem;
					height: 1rem;
					&:hover {
						cursor: pointer;
					}
				}
				button.category_del {
					width: 2rem;
					height: 2rem;
					background-color: #00000000;
					background-image: url('/src/lib/img/trash-solid-hover.png');
					background-size: 50%;
					background-position: center;
					background-repeat: no-repeat;
					opacity: 0.5;
					transition: opacity 0.3s ease-in-out;

					&:hover {
						cursor: pointer;
						opacity: 1;
					}
				}
				button.category_add {
					width: 100%;
					height: 1.5rem;
					background-color: var(--add_btn_back);
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 5px;
					transition: background 0.2s ease-in-out;

					&:hover {
						background-color: var(--add_btn_back_hover);
						cursor: pointer;
					}

					i {
						display: block;
						width: 1rem;
						height: 1rem;
						background-image: url('/src/lib/img/add-solid-white.png');
						background-size: contain;
						background-position: center;
						background-repeat: no-repeat;
					}
				}
			}
		}

		#category_settings_save {
			width: 5rem;
			height: 2.5rem;
			color: white;
			// background: var(--save_btn_bg_default);
			border-radius: 5px;
			font-size: 16px;
			float: right;
			transition: background 0.2s ease-in-out;

			&:hover {
				cursor: pointer;
				background: var(--save_btn_bg_hover) !important;
			}
		}
	}
</style>
