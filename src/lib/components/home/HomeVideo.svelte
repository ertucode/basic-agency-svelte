<script lang="ts">
	import MouseFollower from '$lib/components/MouseFollower.svelte';
	import VideoController from '$lib/components/VideoController.svelte';
	import { fade } from 'svelte/transition';

	let initial = true;

	let currentTime: number;
	let duration: number;

	let initialVideo: HTMLVideoElement;
	let secondVideo: HTMLVideoElement;
	let videoController: VideoController;

	const onClick = () => {
		if (videoController.getMoving()) return;
		initial = !initial;

		if (initial) {
			initialVideo.play();
			secondVideo.pause();
		} else {
			initialVideo.pause();
			secondVideo.play();
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onClick} class="w-screen h-screen relative">
	<video
		transition:fade={{ duration: 30 }}
		class="object-cover object-center h-full w-full"
		style="display: {initial ? 'block' : 'none'}"
		preload="metadata"
		bind:this={initialVideo}
		loop
		playsinline
		src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4"
		autoplay
		muted
	/>
	<div style="display: {initial ? 'block' : 'none'}">
		<MouseFollower
			mainText="WATCH REEL"
			subText="BASIC/DEPT® 2010-∞"
			desiredPos={{ x: 50, y: 50 }}
		/>
	</div>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		transition:fade={{ duration: 30 }}
		bind:currentTime
		bind:duration
		bind:this={secondVideo}
		style="display: {initial ? 'none' : 'block'}"
		playsinline
		class="object-cover object-center h-full w-full"
		><source
			src="https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4"
			type="video/mp4"
		/></video
	>
	<div style="opacity: {initial ? '0' : '1'}">
		<VideoController bind:this={videoController} {duration} bind:currentTime />
	</div>
</div>
