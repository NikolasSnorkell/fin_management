<script>
	import { onMount } from 'svelte';
	import App from '../../App.svelte';
	import Spinner from '../Spinner.svelte';
	import SaveBtn from './SaveBtn.svelte';
	let spinnerElem;

	
	var incomes = null;
	
	// onMount(getIncomes);

	onMount(async function () {
    	const response = await fetch('https://127.0.0.1/fin_man/profile.php?type=income');
    	const data = await response.json();
		console.log(data);
		incomes = data;
  });

	// async function getIncomes() {
		
	// 	const res = await fetch('https://127.0.0.1/fin_man/profile.php?type=income');
	// 	const result =await res.json();
	// 	// result.then((value)=>result = value);
	// 	console.log('result');
	// 	// console.log(result);
	// 	incomes = result;
	// 	if (res.ok) {
	// 		return result;
	// 	} else {
	// 		throw new Error(result);
	// 	}
	// }

	

	function incomeAdd(e) {
		let income_type = e.target.attributes[1].value;

		if (income_type == 'regular') {
			incomes.regular = [
				...incomes.regular,
				{
					id: incomes.regular.length,
					income_name: 'noname',
					income_sum: 0
				}
			];
		} else {
			incomes.one_time = [
				...incomes.one_time,
				{
					id: incomes.one_time.length,
					income_name: 'noname',
					income_sum: 0
				}
			];
		}

		incomes = incomes;
	}

	function incomeDel(e) {
		let income_index = e.target.attributes[0].value;
		let income_type = e.target.attributes[1].value;
		if (income_type == 'regular') incomes.regular.splice(income_index, 1);
		else incomes.one_time.splice(income_index, 1);
		incomes = incomes;
	}

</script>



<div id="income_settings_block">
	<Spinner bind:this={spinnerElem} />
	<h2 id="income_title">Incomes</h2>
	<h3 class="income_subtitle">Regular</h3>
	<ul id="regular_income_list">
		
	{#if incomes}
		
	
			{#each incomes.regular as income, index (income.id)}
				<li>
					<input class="income_title" type="text" name="" id="" value={income.income_name} />
					<input class="income_value" type="number" name="" id="" value={income.income_sum} />
					<button data-income-index={index} data-income-type="regular" class="income_del" on:click={incomeDel}
					></button>
				</li>
			{/each}
		{/if}
		

		<li id="regular_income_add" class="income_item">
			<button class="income_add" data-income-type="regular" on:click={incomeAdd}><i></i></button>
		</li>
	</ul>
	<h3 class="income_subtitle">One-Time</h3>
	<ul id="one_time_income_list">
		
	{#if incomes}
		{#each incomes.one_time as income, index (income.id)}
			<li>
				<input class="income_title" type="text" name="" id="" value={income.income_name} />
				<input class="income_value" type="number" name="" id="" value={income.income_sum} />
				<button data-income-index={index} data-income-type="one_time" class="income_del" on:click={incomeDel}
				></button>
			</li>
		{/each}
		{/if}
		
		<li id="one_time_income_add" class="income_item">
			<button class="income_add" data-income-type="one_time" on:click={incomeAdd}><i></i></button>
		</li>
	</ul>
	<!-- <input
		id="income_settings_save"
		type="button"
		style:background="var(--save_btn_bg_{save_btn_back})"
		value="Save"
		on:click={incomesSave}
	/> -->

	<SaveBtn
	bind:fetchData={incomes}
	bind:spinnerElem={spinnerElem}
	id='income_settings_save'
	type='income2'
	/>
</div>

<!-- markup (zero or more items) goes here -->

<style lang="scss">
	#income_settings_block {
		width: 24rem;
		// width: fit-content;
		height: fit-content;
		background: white;
		border-radius: 10px;
		padding: 2rem;
		// margin-left: 3rem;
		position: relative;
		overflow: hidden;
	

		h2#income_title {
			font-size: 30px;
			font-weight: bold;
			margin-bottom: 1rem;
			
		}
		h3.income_subtitle {
			font-size: 24px;
			font-weight: bold;
			margin-top: 1rem;
		}

		ul {
			li {
				display: flex;
				width: 100%;
				margin-bottom: 0.5rem;

				input {
					font-size: 20px;
					border: none;
				}
				input.income_title {
					width: 70%;
				}
				input.income_value {
					text-align: end;
					width: 30%;
				}

				button.income_add {
					width: 100%;
					height: 1.5rem;
					background-color: var(--add_btn_back);
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 5px;
					border: none;
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
				button.income_del {
					width: 2rem;
					height: 2rem;
					background-color: rgba(255, 0, 0, 0);
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
			}
		}

		// #income_settings_save {
		// 	width: 5rem;
		// 	height: 2.5rem;
		// 	color: white;
		// 	// background: var(--save_btn_bg_default);
		// 	border-radius: 5px;
		// 	font-size: 16px;
		// 	float: right;
		// 	transition: background 0.2s ease-in-out;

		// 	&:hover {
		// 		cursor: pointer;
		// 		background: var(--save_btn_bg_hover) !important;
		// 	}
		// }
	}
</style>
