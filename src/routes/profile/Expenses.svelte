<script>    
  import Spinner from "../Spinner.svelte";
    let spinnerElem;

	$: expenses = {
	regular:[	
        {
			id: 0,
			expense_name: 'Отложка',
			expense_sum:5000
		},
        {
			id: 1,
			expense_name: 'Родителям',
			expense_sum:7000
		}
    ],
	one_time:[	
      
    ],
    };

    let save_btn_back = 'default';

    function expensesAdd(e) {
        let expense_type = e.target.attributes.expense_type.value

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
        
        let expense_index = e.target.attributes.expense_index.value
        let expense_type = e.target.attributes.expense_type.value
        if(expense_type=='regular') expenses.regular.splice(expense_index,1);
        else expenses.one_time.splice(expense_index,1);
        expenses = expenses;
        
    }
</script>
<Spinner bind:this={spinnerElem}/>

<div id="expenses_settings_block" >
	<h2 id="expenses_title">Expenses</h2>
	<h3 class="expenses_subtitle">Regular</h3>
	<ul id="regular_expenses_list">
        {#each expenses.regular as expenses,index (expenses.id)}
        <li>
			<input class="expenses_title" type="text" name="" id="" value={expenses.expense_name} />
			<input class="expenses_value" type="number" name="" id="" value={expenses.expense_sum} />
			<span expense_index={index} expense_type="regular" class="expenses_del" on:click={expensesDel}></span>
		</li>        
        {/each}
	
		<li id="regular_expenses_add" class="expenses_item">
			<span class="expenses_add" expense_type="regular" on:click={expensesAdd}><i></i></span>
		</li>
	</ul>
	<h3 class="expenses_subtitle">One-Time</h3>
	<ul id="one_time_expenses_list">
        {#each expenses.one_time as expenses,index (expenses.id)}
        <li>
			<input class="expenses_title" type="text" name="" id="" value={expenses.expense_name} />
			<input class="expenses_value" type="number" name="" id="" value={expenses.expense_sum} />
			<span expense_index={index} expense_type="one_time" class="expenses_del" on:click={expensesDel}></span>
		</li>        
        {/each}

		<li id="one_time_expenses_add" class="expenses_item">
			<span class="expenses_add" expense_type="one_time" on:click={expensesAdd}><i></i></span>
		</li>
	</ul>
	<input
		id="expenses_settings_save"
		type="button"
		style:background="var(--save_btn_bg_{save_btn_back})"
		value="Save"
		on:click={() => spinnerElem.toggle()}
	/>
</div>

<!-- markup (zero or more items) goes here -->

<style lang="scss">


	#expenses_settings_block {
		min-width: 18rem;
		width: fit-content;
		height: fit-content;
		background: white;
		border-radius: 10px;
		padding: 2rem;

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
				min-width: 18rem;
				margin-bottom: 0.5rem;

				input {
					font-size: 20px;
				}
				input.expenses_title {
					width: 12rem;
				}
				input.expenses_value {
					text-align: end;
					width: 8rem;
				}

				span.expenses_add {
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
				span.expenses_del {
					width: 2rem;
					height: 2rem;
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
