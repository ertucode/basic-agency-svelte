<script lang="ts">
	import Award1 from './Awards/Award1.svelte';
	import Award2 from './Awards/Award2.svelte';
	import Award3 from './Awards/Award3.svelte';

	const awards = [
		{
			figure: Award1,
			text: 'Design and Branding Agency of the Year'
		},
		{
			figure: Award2,
			text: 'Agency of the Year'
		},
		{
			figure: Award3,
			text: 'Digital Innovation Agency of the Year Finalist'
		}
	];
</script>

<ul class="flex list-none gap-16 my-72">
	{#each awards as award}
		<li
			class="flex-1 gap-12 text-center m-10 lg:m-28 grid place-content-center uppercase cursor-pointer"
			style="grid-template-rows: 1fr 1rem"
		>
			<div class="transition-transform ease-in-out">
				<svelte:component this={award.figure} />
			</div>
			<span>{award.text}</span>
		</li>
	{/each}
</ul>

<style>
	li:hover span {
		text-decoration: underline;
		text-decoration-thickness: 0.2rem;
	}
	li:hover div {
		transform: scale(1.1);
	}
</style>
