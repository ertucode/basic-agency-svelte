<script lang="ts">
	import Study1 from './CaseStudies/Study1.svelte';
	import Study2 from './CaseStudies/Study2.svelte';
	import Study3 from './CaseStudies/Study3.svelte';

	const studies = [
		{
			media: Study1,
			header: 'PATAGONIA',
			text: 'An eCommerce experience driven by Patagonia’s brand mission'
		},
		{
			media: Study2,
			header: 'WILSON',
			text: 'A century-old sports brand finding its place in culture'
		},
		{
			media: Study3,
			header: 'GOOGLE STORE',
			text: 'An eCommerce experience helping Google bring its hardware to people across the globe'
		}
	];
</script>

<div class="overflow-x-scroll scrollbar-hide pb-40">
	<ul class="list-none flex gap-6 items-stretch cursor-pointer">
		{#each studies as study}
			<li class="flex-[0_0_var(--grid-size)] xl:flex-1 flex flex-col gap-5">
				<div class="thing">
					<svelte:component this={study.media} />
				</div>
				<h3 class="text-2xl uppercase font-bold">{study.header}</h3>
				<div>
					<div class="uppercase text-lg w-1/2 leading-5">{study.text}</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.thing {
		transition: transform 1s;
		overflow: hidden;
	}
	div :global([src]) {
		width: 100%;
		height: 100%;
		min-height: 1px; /** Trigger lazy load*/
		vertical-align: middle;
		transform: scale(1.1);
		transition: transform 250ms ease-in-out;
	}

	li:hover :global([src]) {
		transform: scale(1);
	}
	li:hover h3 {
		text-decoration: underline;
	}
</style>
