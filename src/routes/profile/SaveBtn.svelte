<script>
    let save_btn_back = 'default';
    export let spinnerElem;
    export let fetchData;
    export let id;
    export let type;
    let data = [];
 	function incomesSave(){
		console.log(fetchData);
		// console.log(data);
		spinnerElem.toggle();
		let fetchData2 = (async () => {
		const response = await fetch('https://127.0.0.1/fin_man/profile.php?type='+type);
		setTimeout(()=>{
			spinnerElem.toggle();
			setSaveBtnStat('success');
		},1000);
		return fetchData;
	})();
		
	}

    function setSaveBtnStat(stat){
		
		save_btn_back = stat;
		

		setTimeout(()=>{
			setSaveBtnStat('default');
		},2000);
	}
</script>


<input
		id=id
        class="profile_save_btns"
		type="button"
		style:background="var(--save_btn_bg_{save_btn_back})"
		value="Save"
		on:click={incomesSave}
	/>

<style lang="scss">
    :global(:root){
        --save_btn_bg_default:#585858;
        --save_btn_bg_success:#3a8c12;
        --save_btn_bg_fail:#8c1a12;
        --save_btn_bg_hover:#404040;
    }
    .profile_save_btns {
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
</style>

