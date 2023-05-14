<script lang="ts">
	import { minuteSecond } from '$lib/utils/minute-second';

	export let currentTime: number;
	export let duration: number;

	let percentage = 0;
	let wrapper: HTMLDivElement;

	$: {
		if (!currentTime || !duration) {
			percentage = 0;
		}
		percentage = (currentTime / duration) * 100;
	}
	let mouseUpTimeoutId: number | undefined;

	let moving = false;

	export function getMoving() {
		return moving;
	}
	function onMouseDown(e: MouseEvent) {
		if (mouseUpTimeoutId) window.clearTimeout(mouseUpTimeoutId);
		moving = true;
	}

	function onMouseMove(e: MouseEvent) {
		if (moving) {
			const rect = wrapper.offsetParent!.getBoundingClientRect();
			const ratio = (e.clientX - rect.left) / rect.width;
			currentTime = ratio * duration;
			percentage = ratio * 100;
		}
	}

	function onMouseUp() {
		mouseUpTimeoutId = window.setTimeout(() => {
			moving = false;
		}, 0);
	}
</script>

<div
	on:mousedown={onMouseDown}
	bind:this={wrapper}
	class="absolute bottom-5 text-white text-3xl cursor-grab mix-blend-difference select-none"
	style:left="{percentage}%"
	style="will-change: left; transform: translateX(-50%);"
>
	<div>{minuteSecond(currentTime)}/{minuteSecond(duration)}</div>
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
