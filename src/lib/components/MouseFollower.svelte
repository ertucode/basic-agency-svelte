<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	export let desiredPos: { x: number; y: number };
	export let variant: 'normal' | 'pink' = 'normal';
	export let mainText: string;
	export let subText: string | undefined;

	let el: HTMLDivElement;
	let coords = spring(desiredPos);
	let size = spring(150);

	const reset = () => {
		coords.set(desiredPos);
	};
	onMount(reset);

	const setCoords = (e: MouseEvent) => {
		const rect = el.getBoundingClientRect();
		coords.set({ x: (e.clientX / rect.width) * 100, y: (e.clientY / rect.height) * 100 });
	};

	let bottomSize = $size * 0.75;
</script>

<div
	bind:this={el}
	class="inset-0 absolute z-10 cursor-none font-bold text-center text-lg select-none"
	on:mousemove={(e) => setCoords(e)}
	on:mouseleave={reset}
>
	<div
		class="rounded-full {variant === 'pink'
			? 'bg-rose-300'
			: 'bg-white'}  absolute flex items-center justify-center p-9 leading-6 sized"
		style:left="{$coords.x}%"
		style:top="{$coords.y}%"
		style:--size="{$size}px"
	>
		{mainText}
	</div>
	{#if subText}
		<div
			style:left="{$coords.x}%"
			style:top="calc({$coords.y}% + {$size}px)"
			style:--size="{bottomSize}px"
			class="absolute text-white sized"
		>
			{subText}
		</div>
	{/if}
</div>

<style>
	.sized {
		width: var(--size);
		height: var(--size);
		transform: translate(calc(-0.5 * var(--size)), calc(-0.5 * var(--size)));
	}
</style>
