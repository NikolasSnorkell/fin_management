<script>    
	import { onMount } from "svelte";
  	import Spinner from "../Spinner.svelte";
    let spinnerElem;
	import SaveBtn from "./SaveBtn.svelte";
	let expenses = null;

	onMount(async function () {
    	const response = await fetch('https://127.0.0.1/fin_man/profile.php?type=expenses');
    	const data = await response.json();
		console.log(data);
		expenses = data;
  });

    

    function expensesAdd(e) {
        let expense_type = e.target.attributes[1].value

        if(expense_type=='regular') {
            expenses.regular = [...expenses.regular,{
            id: expenses.regular.length,
			expense_name: 'noname',
            expense_sum:0
        }]
        }
        else {
            expenses.one_time = [...expenses.one_time,{
            id: expenses.one_time.length,
			expense_name: 'noname',
            expense_sum:0
        }]
        }

        expenses = expenses;
    }

    function expensesDel(e){
        
        let expense_index = e.target.attributes[0].value
        let expense_type = e.target.attributes[1].value
        if(expense_type=='regular') expenses.regular.splice(expense_index,1);
        else expenses.one_time.splice(expense_index,1);
        expenses = expenses;
        
    }


	

</script>


<div id="expenses_settings_block" >
	<Spinner bind:this={spinnerElem}/>
	<h2 id="expenses_title">Expenses</h2>
	<h3 class="expenses_subtitle">Regular</h3>
	<ul id="regular_expenses_list">
		{#if expenses}
			{#each expenses.regular as expense, index (expense.id)}
				<li>
					<input class="expenses_title" type="text" name="" id="" value={expense.expense_name} />
					<input class="expenses_value" type="number" name="" id="" value={expense.expense_sum} />
					<button data-expense-index={index} data-expense-type="regular" class="expenses_del" on:click={expensesDel}></button>
				</li>  
			{/each}
		{/if}

	
		<li id="regular_expenses_add" class="expenses_item">
			<button class="expenses_add" data-expense-type="regular" on:click={expensesAdd}><i></i></button>
		</li>
	</ul>
	<h3 class="expenses_subtitle">One-Time</h3>
	<ul id="one_time_expenses_list">
		{#if expenses}
			{#each expenses.one_time as expense, index (expense.id)}
				<li>
					<input class="expenses_title" type="text" name="" id="" value={expense.expense_name} />
					<input class="expenses_value" type="number" name="" id="" value={expense.expense_sum} />
					<button data-expense-index={index} data-expense-type="one_time" class="expenses_del" on:click={expensesDel}></button>
				</li>  
			{/each}
		{/if}

		<li id="one_time_expenses_add" class="expenses_item">
			<button class="expenses_add" data-expense-type="one_time" on:click={expensesAdd}><i></i></button>
		</li>
	</ul>
	<SaveBtn
	bind:fetchData={expenses}
	bind:spinnerElem={spinnerElem}
	id='expenses_settings_save'
	type="expenses2"
	/>
</div>

<!-- markup (zero or more items) goes here -->

<style lang="scss">


	#expenses_settings_block {
		width: 24rem;
		// width: fit-content;
		height: fit-content;
		background: white;
		border-radius: 10px;
		padding: 2rem;
		position: relative;

		h2#expenses_title {
			font-size: 30px;
			font-weight: bold;
			margin-bottom: 1rem;
		}
		h3.expenses_subtitle {
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
				}
				input.expenses_title {
					width: 70%;
				}
				input.expenses_value {
					text-align: end;
					width: 30%;
				}

				button.expenses_add {
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
				button.expenses_del {
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

		#expenses_settings_save {
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
