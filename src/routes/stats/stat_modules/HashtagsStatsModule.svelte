<script>
	let hashtags_stats = [
		{
			id: 0,
			tag: '#молочка',
			sum: 20.8
		},
		{
			id: 1,
			tag: '#сладкое',
			sum: 34.6
		},
		{
			id: 2,
			tag: '#мучное',
			sum: 8.9
		}
	];
</script>

<div id="hashtags_stats_container">
	<ul id="hashtags_items">
		{#each hashtags_stats as item}
			<li class="hashtags_stats_item">
				<span class="hashtag_name">{item.tag}</span>
				<span class="hashtag_sum">{item.sum}</span>
			</li>
		{/each}
	</ul>
</div>

<!-- markup (zero or more items) goes here -->

<style lang="scss">
	#hashtags_stats_container {
		min-width: 18rem;
        max-width: fit-content;
		height: fit-content;
		background: var(--stats_card_bg_color);
		border-radius: 10px;

		padding: 1rem 2rem;

		#hashtags_items {
			li {
				width: 90%;
				margin: 1rem auto;
                display: flex;
                justify-content: space-between;
                column-gap: 1rem;

				&:first-child {
					span {
						font-size: 24px;
					}
				}

				span {
					font-size: 20px;
				}
			}
		}
	}
</style>
