<script lang="ts">
	import { onMount } from 'svelte';
	import { spring, tweened } from 'svelte/motion';
	import {
		elasticOut,
		expoOut,
		quartIn,
		quartInOut,
		quartOut,
		quintOut,
		sineOut
	} from 'svelte/easing';

	export let desiredPos: { x: number; y: number };
	export let variant: 'normal' | 'pink' = 'normal';
	export let mainText: string;
	export let subText: string | undefined = undefined;

	// Dragging stuff
	export let forDrag = false;

	let dragCleanup: { el: HTMLElement; cb: () => void } | undefined;
	let isDown = false;
	const scrollLeftStore = tweened(0, { easing: quartOut || quintOut, duration: 2100, delay: 0 });

	let scrollParent: HTMLElement | null | undefined;

	$: X: {
		if (dragCleanup && dragCleanup.el !== el) dragCleanup.cb();
		if (!forDrag || !el) {
			break X;
		}
		// console.log('rerender');

		if (!dragCleanup) {
			let startX: number;
			let scrollLeft: number;

			scrollParent = el.closest('[data-scroll-parent]') as HTMLElement | null;

			if (!scrollParent) break X;

			const minLeft = 0;
			const maxLeft = scrollParent.scrollWidth - scrollParent.clientWidth;

			const onMousedown = (e: MouseEvent) => {
				isDown = true;
				startX = e.pageX - scrollParent!.offsetLeft;
				scrollLeft = $scrollLeftStore;
				// console.log('setting');
				// console.log('startX', startX, 'scrollLeft', scrollLeft);
			};

			const onDone = () => (isDown = false);

			const onMove = (e: MouseEvent) => {
				if (!isDown) return;
				e.preventDefault();
				const x = e.pageX - scrollParent!.offsetLeft;

				//TODO: Need some formula for making small ones equal but large ones jump?

				const walk = (x - startX) * 2.6;
				// console.log('x', x, 'walk', walk, 'startX', startX, 'srollLeft', scrollLeft);

				scrollLeftStore.set(Math.max(Math.min(scrollLeft - walk, maxLeft), minLeft));
			};

			el.addEventListener('mousedown', onMousedown);
			el.addEventListener('mouseleave', onDone);
			el.addEventListener('mouseup', onDone);
			el.addEventListener('mousemove', onMove);

			dragCleanup = {
				el,
				cb: () => {
					console.log('cleanup');
					el.removeEventListener('mousedown', onMousedown);
					el.removeEventListener('mouseleave', onDone);
					el.removeEventListener('mouseup', onDone);
					el.removeEventListener('mousemove', onMove);
				}
			};
		}
	}

	let el: HTMLDivElement;
	let coords = spring(desiredPos);
	let size = spring(150);

	$: {
		if (scrollParent) {
			const left = $scrollLeftStore;
			// console.log(left);
			scrollParent.scrollLeft = left;
			if (el) {
				el.scrollLeft = left;
			}
		}
	}

	const reset = () => {
		coords.set(desiredPos);
	};
	onMount(reset);

	const setCoords = (e: MouseEvent) => {
		const rect = el.getBoundingClientRect();
		coords.set({
			x: ((e.clientX - rect.left) / rect.width) * 100,
			y: ((e.clientY - rect.y) / rect.height) * 100
		});
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
