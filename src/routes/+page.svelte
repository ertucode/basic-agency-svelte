<script lang="ts">
	import Awards from '$lib/components/home/Awards.svelte';
	import CaseStudy from '$lib/components/home/CaseStudy.svelte';
	import Engagements from '$lib/components/home/Engagements.svelte';
	import HomeVideo from '$lib/components/home/HomeVideo.svelte';
	import Overview from '$lib/components/home/Overview.svelte';
	import { onMount } from 'svelte';

	let innerWidth: number;

	const getGridSize = (width: number) => {
		// Dont know why 2.5
		return width < 1280 ? '520px' : `calc((${width}px - 2.5rem * 2 - 14rem) / 3)`;
	};

	$: {
		if (typeof document !== 'undefined') {
			document.body.style.setProperty('--grid-size', getGridSize(innerWidth));
		}
	}
	onMount(() => {
		document.body.style.setProperty('--grid-size', getGridSize(window.innerWidth));
	});
</script>

<section>
	<HomeVideo />
</section>
<div>
	<section>
		<Awards />
	</section>
	<section><Overview /><CaseStudy /></section>
	<section><Engagements /></section>
</div>

<svelte:window bind:innerWidth />

<style>
	section + section {
		border-top: 1px solid rgb(37, 36, 34);
	}

	div {
		--grid-padding: 7rem;
		padding-inline: var(--grid-padding);
	}
</style>
