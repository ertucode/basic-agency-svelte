<script lang="ts">
	export let src: string;
	export let header: string;
	export let text: string;
	export let href: string | undefined;
</script>

<div>
	<h2 class="relative pb-6">
		<picture>
			<img class="h-12" {src} alt="" loading="lazy" />
		</picture>
	</h2>
	<div>
		<h3 class="mt-32 mb-6 text-3xl font-bold uppercase">{header}</h3>
		<p class="text-xl">
			{text}
			{#if href}
				<a class="underline" {href}>here</a>.
			{/if}
		</p>
	</div>
</div>

<style>
	h2::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 1.7rem;
		height: 0.15rem;
		background-color: currentColor;
	}
</style>
