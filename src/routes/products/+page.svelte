<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { PageData } from './$types';
	// maybe unneccessary as no errors occur and type is automatically assigned to data

	export let data: PageData;

	const noScroll = false;
	$: products = data.products.products;
</script>

<h2>{data.title}</h2>
<button
	on:click={() => {
		// invalidate('https://dummyjson.com/products');
		// invalidate('app:products');
		// invalidate((url) => {
		// 	return url.hostname === 'dummyjson.com';
		// });
		invalidate('app:productServerLoad');
	}}>Re-run load function</button
>

{#if products && products.length > 0}
	<ul data-sveltekit-preload-data="hover">
		{#each products as product}
			<li>
				<img src={product.thumbnail} alt={product.title} />
				<h3>
					<a data-sveltekit-noscroll={noScroll ? '' : 'off'} href="/product/{product.id}"
						>{product.title}</a
					>
				</h3>
				<p>{product.description}</p>
			</li>
		{/each}
	</ul>
{/if}

<!-- L12 -->

<style>
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 30px;
	}

	img {
		width: 100%;
	}
</style>
